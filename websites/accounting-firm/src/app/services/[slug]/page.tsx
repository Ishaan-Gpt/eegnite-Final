import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { SERVICES } from "@/data/services.data";
import { Reveal, RevealText, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import MagneticLink from "@/components/motion/MagneticLink";
import CTABanner from "@/components/sections/CTABanner";

export function generateStaticParams() {
    return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = SERVICES.find((s) => s.slug === slug);
    if (!service) return buildMetadata({ title: "Service", description: "" });
    return buildMetadata({
        title: service.name,
        description: service.shortDesc,
        path: `/services/${service.slug}`,
    });
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const index = SERVICES.findIndex((s) => s.slug === slug);
    if (index === -1) notFound();
    const service = SERVICES[index];
    const related = SERVICES.filter((_, i) => i !== index).slice(0, 3);

    return (
        <main>
            <section className="bg-white pt-16 pb-16 md:pt-24 md:pb-20 border-b border-navy/[0.06]">
                <div className="mh-container max-w-4xl">
                    <Reveal>
                        <Link href="/services" className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-navy transition-colors mb-8">
                            <ArrowLeft size={15} /> All Services
                        </Link>
                    </Reveal>
                    <RevealText as="h1" text={service.name} className="font-display text-4xl md:text-6xl text-navy leading-[1.1] mb-6" />
                    <Reveal delay={0.15}>
                        <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-2xl">{service.description}</p>
                    </Reveal>
                </div>
            </section>

            <section className="py-20 md:py-28 bg-cream">
                <div className="mh-container grid lg:grid-cols-[1.2fr_0.8fr] gap-16">
                    <div>
                        <Reveal as="span" className="block text-emerald text-sm font-semibold tracking-[0.2em] uppercase mb-6">
                            What&apos;s Included
                        </Reveal>
                        <RevealGroup className="grid sm:grid-cols-2 gap-4" stagger={0.08}>
                            {service.highlights.map((h) => (
                                <RevealItem key={h} className="flex items-start gap-3 bg-white rounded-xl2 border border-navy/[0.06] p-5">
                                    <CheckCircle2 size={18} className="text-emerald shrink-0 mt-0.5" />
                                    <span className="text-navy text-sm md:text-base">{h}</span>
                                </RevealItem>
                            ))}
                        </RevealGroup>
                    </div>

                    <Reveal delay={0.1}>
                        <div className="bg-navy text-cream rounded-xl2 p-8 md:p-10 sticky top-28">
                            <span className="block text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">Ideal For</span>
                            <p className="font-display text-xl leading-snug mb-8">{service.idealFor}</p>
                            <MagneticLink
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-cream text-navy px-6 py-3.5 rounded-full font-medium hover:bg-white transition-colors w-full justify-center"
                            >
                                Get Started <ArrowUpRight size={16} />
                            </MagneticLink>
                        </div>
                    </Reveal>
                </div>
            </section>

            <section className="py-20 md:py-28 bg-white">
                <div className="mh-container">
                    <Reveal as="span" className="block text-emerald text-sm font-semibold tracking-[0.2em] uppercase mb-6 text-center">
                        Explore More
                    </Reveal>
                    <RevealGroup className="grid sm:grid-cols-3 gap-6" stagger={0.08} amount={0.2}>
                        {related.map((r) => (
                            <RevealItem key={r.slug}>
                                <Link
                                    href={`/services/${r.slug}`}
                                    className="group block bg-cream rounded-xl2 border border-navy/[0.06] p-7 h-full hover:shadow-soft hover:-translate-y-1 transition-all duration-300"
                                >
                                    <h3 className="font-display text-lg text-navy mb-2">{r.name}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">{r.shortDesc}</p>
                                </Link>
                            </RevealItem>
                        ))}
                    </RevealGroup>
                </div>
            </section>

            <CTABanner />
        </main>
    );
}
