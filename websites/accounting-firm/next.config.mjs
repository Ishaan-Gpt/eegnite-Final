import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Set SAMPLE_BASE_PATH=/samples/accounting-firm when building for deployment
// under eegnite.com. Leave unset for standalone local dev/build.
const basePath = process.env.SAMPLE_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    basePath,
    assetPrefix: basePath || undefined,
    outputFileTracingRoot: __dirname,
    typescript: {
        ignoreBuildErrors: false,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
