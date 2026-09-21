import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { ARTICLES } from "@/data/blog.data";
import { Reveal, RevealText, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import CTABanner from "@/components/sections/CTABanner";

export function generateStaticParams() {
    return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = ARTICLES.find((a) => a.slug === slug);
    if (!article) return buildMetadata({ title: "Article", description: "" });
    return buildMetadata({ title: article.title, description: article.excerpt, path: `/resources/${article.slug}` });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = ARTICLES.find((a) => a.slug === slug);
    if (!article) notFound();

    return (
        <main>
            <section className="bg-white pt-16 pb-16 md:pt-24 md:pb-20 border-b border-navy/[0.06]">
                <div className="mh-container max-w-3xl">
                    <Reveal>
                        <Link href="/resources" className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-navy transition-colors mb-8">
                            <ArrowLeft size={15} /> All Resources
                        </Link>
                    </Reveal>
                    <Reveal as="span" className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-emerald mb-4">
                        {article.category} &middot; {article.readTime}
                    </Reveal>
                    <RevealText as="h1" text={article.title} className="font-display text-3xl md:text-5xl text-navy leading-[1.15] mb-6" />
                </div>
            </section>

            <Reveal className="mh-container max-w-3xl -mt-8 md:-mt-10 relative z-10">
                <div className="rounded-xl2 overflow-hidden shadow-soft h-56 md:h-80">
                    <img src={article.image} alt="" loading="lazy" className="w-full h-full object-cover" />
                </div>
            </Reveal>

            <section className="py-16 md:py-24 bg-cream">
                <RevealGroup className="mh-container max-w-2xl space-y-6" stagger={0.1} amount={0.1}>
                    {article.content.map((para, i) => (
                        <RevealItem key={i} className="text-slate-700 text-lg leading-relaxed">
                            {para}
                        </RevealItem>
                    ))}
                </RevealGroup>
            </section>

            <CTABanner />
        </main>
    );
}
