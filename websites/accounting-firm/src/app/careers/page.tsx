import { buildMetadata } from "@/lib/seo";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import MagneticLink from "@/components/motion/MagneticLink";
import { CONTACT } from "@/lib/constants";

export const metadata = buildMetadata({
    title: "Careers",
    description: "Join the Meridian & Hale team — CPAs, bookkeepers, and advisors building a better client experience.",
    path: "/careers",
});

const BENEFITS = [
    { title: "Flexible Hybrid Schedule", desc: "Three days in our San Francisco office, two remote — every week." },
    { title: "CPE & Licensing Support", desc: "Fully covered continuing education and exam fees for CPA candidates." },
    { title: "Real Client Ownership", desc: "You'll own client relationships early, not sit behind senior staff for years." },
    { title: "Health & 401(k) Match", desc: "Full medical/dental/vision plus a 4% 401(k) match from day one." },
];

const OPENINGS = [
    { title: "Senior Tax Associate", type: "Full-time · San Francisco / Hybrid" },
    { title: "Bookkeeping Specialist", type: "Full-time · Remote (US)" },
    { title: "Payroll Coordinator", type: "Part-time · San Francisco / Hybrid" },
];

export default function CareersPage() {
    return (
        <main>
            <PageHero
                eyebrow="Careers"
                title="Build your career somewhere your work actually matters."
                description="We're a growing team of CPAs, bookkeepers, and advisors who believe small businesses deserve better than they usually get."
            />

            <section className="py-20 md:py-28 bg-white">
                <div className="mh-container">
                    <Reveal>
                        <SectionHeading eyebrow="Why Work Here" title="Benefits that support real careers" align="center" />
                    </Reveal>
                    <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.08} amount={0.2}>
                        {BENEFITS.map((b) => (
                            <RevealItem key={b.title} className="bg-cream rounded-xl2 border border-navy/[0.06] p-7">
                                <h3 className="font-display text-lg text-navy mb-2">{b.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{b.desc}</p>
                            </RevealItem>
                        ))}
                    </RevealGroup>
                </div>
            </section>

            <section className="py-20 md:py-28 bg-cream">
                <div className="mh-container max-w-3xl">
                    <Reveal>
                        <SectionHeading eyebrow="Open Roles" title="Current openings" />
                    </Reveal>
                    <RevealGroup className="space-y-4" stagger={0.08}>
                        {OPENINGS.map((o) => (
                            <RevealItem
                                key={o.title}
                                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-white rounded-xl2 border border-navy/[0.06] p-6"
                            >
                                <div>
                                    <h3 className="font-display text-lg text-navy">{o.title}</h3>
                                    <p className="text-slate-500 text-sm">{o.type}</p>
                                </div>
                                <MagneticLink
                                    href={`mailto:${CONTACT.email}?subject=Application: ${o.title}`}
                                    external
                                    className="inline-flex items-center justify-center gap-2 border border-navy/20 text-navy px-5 py-2.5 rounded-full text-sm font-medium hover:border-navy/50 transition-colors"
                                >
                                    Apply
                                </MagneticLink>
                            </RevealItem>
                        ))}
                    </RevealGroup>
                </div>
            </section>
        </main>
    );
}
