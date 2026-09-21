import dynamic from "next/dynamic";
import { buildMetadata } from "@/lib/seo";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import StatsBand from "@/components/sections/StatsBand";
import CTABanner from "@/components/sections/CTABanner";

const TeamGrid = dynamic(() => import("@/components/sections/TeamGrid"), {
    loading: () => <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">{Array.from({ length: 6 }).map((_, i) => <div key={i} className="h-72 rounded-xl2 bg-white border border-navy/[0.06] animate-pulse" />)}</div>,
});

const VALUES = [
    { title: "Precision", desc: "Every reconciliation, every filing, checked twice. Numbers you can build decisions on." },
    { title: "Transparency", desc: "No jargon, no black boxes. You always know exactly where your business stands." },
    { title: "Partnership", desc: "We measure success by your outcomes, not billable hours." },
];

export const metadata = buildMetadata({
    title: "About Us",
    description: "Meet the team behind Meridian & Hale — licensed CPAs and advisors dedicated to giving growing businesses financial clarity.",
    path: "/about",
});

export default function AboutPage() {
    return (
        <main>
            <PageHero
                eyebrow="About Us"
                title="Built by accountants who got tired of the status quo."
                description="Meridian & Hale was founded in 2011 on a simple idea: businesses deserve a firm that picks up the phone, plans ahead, and explains the numbers in plain English."
            />

            <section className="py-20 md:py-28 bg-white">
                <div className="mh-container grid lg:grid-cols-2 gap-16 items-center">
                    <Reveal>
                        <span className="block text-emerald text-sm font-semibold tracking-[0.2em] uppercase mb-5">Our Story</span>
                        <h2 className="font-display text-3xl md:text-4xl text-navy leading-tight mb-6">
                            From a two-person practice to a firm trusted by 500+ businesses.
                        </h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            Eleanor Hale and James Meridian started this firm out of a shared frustration: too many small businesses were
                            treated like an afterthought by the big firms that filed their taxes once a year and disappeared.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            Today, our team of licensed CPAs and advisors serves businesses across six industries — still with the same
                            promise: a dedicated team that actually knows your business.
                        </p>
                    </Reveal>
                    <RevealGroup className="grid gap-6" stagger={0.1}>
                        {VALUES.map((v) => (
                            <RevealItem key={v.title} className="bg-cream rounded-xl2 border border-navy/[0.06] p-7">
                                <h3 className="font-display text-xl text-navy mb-2">{v.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
                            </RevealItem>
                        ))}
                    </RevealGroup>
                </div>
            </section>

            <StatsBand />

            <section className="py-20 md:py-28 bg-cream">
                <div className="mh-container">
                    <Reveal>
                        <SectionHeading eyebrow="Leadership & Team" title="The people behind your numbers" align="center" />
                    </Reveal>
                    <TeamGrid />
                </div>
            </section>

            <CTABanner />
        </main>
    );
}
