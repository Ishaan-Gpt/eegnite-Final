import { buildMetadata } from "@/lib/seo";
import PageHero from "@/components/sections/PageHero";
import { Reveal } from "@/components/motion/Reveal";

export const metadata = buildMetadata({
    title: "Privacy Policy",
    description: "How Meridian & Hale collects, uses, and protects client information.",
    path: "/privacy",
});

const SECTIONS = [
    {
        title: "Information We Collect",
        body: "We collect information you provide directly — such as your name, contact details, and financial documents shared for engagement purposes — as well as limited technical data (browser type, pages visited) when you use our website.",
    },
    {
        title: "How We Use Your Information",
        body: "Client financial information is used exclusively to deliver the accounting, tax, and advisory services you've engaged us for. We never sell client data, and it is never used for marketing without explicit consent.",
    },
    {
        title: "Data Security",
        body: "All client documents are stored in an encrypted client portal. Access is limited to engagement team members on a need-to-know basis, consistent with AICPA confidentiality standards.",
    },
    {
        title: "Third-Party Sharing",
        body: "We do not share client information with third parties except where required by law, authorized by you in writing, or necessary to complete a filing (e.g., transmitting a return to the IRS).",
    },
    {
        title: "Your Rights",
        body: "You may request a copy of records we hold on your behalf, or request their deletion following the end of an engagement, subject to our regulatory record-retention obligations.",
    },
    {
        title: "Contact Us",
        body: "Questions about this policy can be directed to hello@meridianhale.example.",
    },
];

export default function PrivacyPage() {
    return (
        <main>
            <PageHero eyebrow="Legal" title="Privacy Policy" description="Last updated: January 2026." />
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
