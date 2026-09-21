import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { ARTICLES } from "@/data/blog.data";

export default function InsightsPreview() {
    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="mh-container">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <Reveal>
                        <SectionHeading eyebrow="From The Firm" title="Insights worth your time" />
                    </Reveal>
                    <Reveal delay={0.1} className="mb-16 hidden md:block">
                        <Link href="/resources" className="inline-flex items-center gap-1.5 text-navy font-medium text-sm hover:gap-2.5 transition-all">
                            All resources <ArrowRight size={15} />
                        </Link>
                    </Reveal>
                </div>

                <RevealGroup className="grid md:grid-cols-3 gap-6" stagger={0.1} amount={0.2}>
                    {ARTICLES.map((a) => (
                        <RevealItem key={a.slug}>
                            <Link href={`/resources/${a.slug}`} className="group block">
                                <div className="relative aspect-[4/3] rounded-xl2 overflow-hidden mb-5">
                                    <img
                                        src={a.image}
                                        alt=""
                                        loading="lazy"
                                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <span className="absolute top-4 left-4 bg-cream/95 text-navy text-xs font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full">
                                        {a.category}
                                    </span>
                                </div>
                                <h3 className="font-display text-lg text-navy mb-2 leading-snug group-hover:text-emerald transition-colors">
                                    {a.title}
                                </h3>
                                <span className="inline-flex items-center gap-1.5 text-sm text-slate-500 group-hover:text-navy group-hover:gap-2.5 transition-all">
                                    Read article <ArrowUpRight size={14} />
                                </span>
                            </Link>
                        </RevealItem>
                    ))}
                </RevealGroup>
            </div>
        </section>
    );
}
