// Builds each independent sample site under /websites and copies its static
// export into /public/samples/<slug>/, so `next build` (output: 'export') on
// the main eegnite site carries them into /out/samples/<slug>/ as plain
// static files. Runs automatically as part of the root `npm run build` (see
// package.json) so a fresh checkout or deploy never silently ships without
// the sample sites. Failures here are caught and logged, never thrown — a
// broken sample build must never block the main site's deploy.
import { execSync } from "node:child_process";
import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

// Add one entry per sample site here.
const SAMPLES = [
    { slug: "accounting-firm", dir: "websites/accounting-firm" },
];

let hadFailure = false;

for (const sample of SAMPLES) {
    try {
        const projectDir = path.join(ROOT, sample.dir);
        const publicDest = path.join(ROOT, "public", "samples", sample.slug);

        console.log(`\n=== Building sample: ${sample.slug} ===`);

        if (!existsSync(path.join(projectDir, "node_modules"))) {
            console.log(`Installing dependencies in ${sample.dir}...`);
            execSync("npm install", { cwd: projectDir, stdio: "inherit" });
        }

        execSync("npm run build", {
            cwd: projectDir,
            stdio: "inherit",
            env: { ...process.env, SAMPLE_BASE_PATH: `/samples/${sample.slug}` },
        });

        const outDir = path.join(projectDir, "out");
        if (!existsSync(outDir)) {
            throw new Error(`Expected static export at ${outDir} but it was not found.`);
        }

        rmSync(publicDest, { recursive: true, force: true });
        mkdirSync(publicDest, { recursive: true });
        cpSync(outDir, publicDest, { recursive: true });

        console.log(`Copied ${sample.slug} static export -> public/samples/${sample.slug}/`);
    } catch (err) {
        hadFailure = true;
        console.error(`\n!!! Failed to build sample "${sample.slug}" — skipping it. !!!`);
        console.error(err instanceof Error ? err.message : err);
    }
}

if (hadFailure) {
    console.warn(
        "\nOne or more sample sites failed to build and were skipped. The main site build will continue.",
    );
} else {
    console.log("\nAll sample sites built and copied into public/samples/.");
}

// Always exit 0: this script must never fail the main `npm run build`.
process.exit(0);
