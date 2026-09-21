import { buildMetadata } from "@/lib/seo";
import PageHero from "@/components/sections/PageHero";
import { Reveal } from "@/components/motion/Reveal";

export const metadata = buildMetadata({
    title: "Terms of Service",
    description: "Terms governing use of the Meridian & Hale website and engagement with our services.",
    path: "/terms",
});

const SECTIONS = [
    {
        title: "Acceptance of Terms",
        body: "By accessing this website, you agree to these terms. Engagement in specific services is governed separately by a signed engagement letter.",
    },
    {
        title: "Scope of Services",
        body: "Services described on this website are illustrative. The actual scope, deliverables, and fees for any engagement are defined in a written engagement letter between Meridian & Hale and the client.",
    },
    {
        title: "No Guarantee of Outcome",
        body: "While we apply professional standards to every engagement, tax and financial outcomes depend on facts specific to each client and applicable law, which may change.",
    },
    {
        title: "Website Content",
        body: "Content on this site, including articles under Resources, is provided for general informational purposes and does not constitute individualized tax, legal, or financial advice.",
    },
    {
        title: "Limitation of Liability",
        body: "Meridian & Hale's liability in connection with any engagement is limited as set forth in the applicable engagement letter, to the extent permitted by law.",
    },
    {
        title: "Governing Law",
        body: "These terms are governed by the laws of the State of California.",
    },
];

export default function TermsPage() {
    return (
        <main>
            <PageHero eyebrow="Legal" title="Terms of Service" description="Last updated: January 2026." />
            <section className="py-16 md:py-24 bg-white">
                <div className="mh-container max-w-2xl space-y-10">
                    {SECTIONS.map((s) => (
                        <Reveal key={s.title}>
                            <h2 className="font-display text-xl text-navy mb-3">{s.title}</h2>
                            <p className="text-slate-600 leading-relaxed">{s.body}</p>
                        </Reveal>
                    ))}
                </div>
            </section>
        </main>
    );
}
