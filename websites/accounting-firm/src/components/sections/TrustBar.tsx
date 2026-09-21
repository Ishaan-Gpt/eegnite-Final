import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

const CREDENTIALS = ["AICPA Member Firm", "BBB Accredited A+", "QuickBooks Certified ProAdvisor", "Xero Platinum Partner", "State Board Licensed"];

export default function TrustBar() {
    return (
        <section className="border-y border-navy/[0.06] bg-white py-8">
            <RevealGroup className="mh-container flex flex-wrap items-center justify-center gap-x-10 gap-y-4" stagger={0.06}>
                {CREDENTIALS.map((c) => (
                    <RevealItem key={c} className="text-xs md:text-sm font-medium tracking-wide text-slate-400 uppercase">
                        {c}
                    </RevealItem>
                ))}
            </RevealGroup>
        </section>
    );
}
