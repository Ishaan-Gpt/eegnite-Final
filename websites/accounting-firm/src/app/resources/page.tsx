import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import PageHero from "@/components/sections/PageHero";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { ARTICLES } from "@/data/blog.data";
import CTABanner from "@/components/sections/CTABanner";

export const metadata = buildMetadata({
    title: "Resources & Insights",
    description: "Practical guides on tax planning, bookkeeping, and payroll compliance for growing businesses.",
    path: "/resources",
});

export default function ResourcesPage() {
    return (
        <main>
            <PageHero
                eyebrow="Resources"
                title="Insights to help you run a financially healthy business."
                description="Plain-English guides on the tax, bookkeeping, and compliance topics that come up most with our clients."
            />
            <section className="py-16 md:py-24 bg-cream">
                <RevealGroup className="mh-container grid md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.08} amount={0.15}>
                    {ARTICLES.map((a) => (
                        <RevealItem key={a.slug}>
                            <Link
                                href={`/resources/${a.slug}`}
                                className="group flex flex-col h-full bg-white rounded-xl2 border border-navy/[0.06] overflow-hidden hover:shadow-soft hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="relative h-44 overflow-hidden">
                                    <img
                                        src={a.image}
                                        alt=""
                                        loading="lazy"
                                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-8 flex flex-col flex-1">
                                    <span className="text-xs font-semibold tracking-[0.15em] uppercase text-emerald mb-4">{a.category}</span>
                                    <h3 className="font-display text-xl text-navy mb-3 leading-snug">{a.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">{a.excerpt}</p>
                                    <div className="flex items-center justify-between text-xs text-slate-400">
                                        <span>{a.readTime}</span>
                                        <span className="inline-flex items-center gap-1.5 text-navy font-medium group-hover:gap-2.5 transition-all">
                                            Read <ArrowRight size={14} />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </RevealItem>
                    ))}
                </RevealGroup>
            </section>
            <CTABanner />
        </main>
    );
}
