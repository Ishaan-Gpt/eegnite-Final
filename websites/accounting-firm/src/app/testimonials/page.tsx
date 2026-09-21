import dynamic from "next/dynamic";
import { Quote } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import PageHero from "@/components/sections/PageHero";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { TESTIMONIALS } from "@/data/testimonials.data";
import CTABanner from "@/components/sections/CTABanner";

const TestimonialCarousel = dynamic(() => import("@/components/sections/TestimonialCarousel"), {
    loading: () => <div className="max-w-3xl mx-auto min-h-[280px] rounded-xl2 bg-white border border-navy/[0.06] animate-pulse" />,
});

export const metadata = buildMetadata({
    title: "Client Testimonials",
    description: "Hear from the business owners, founders, and executives who trust Meridian & Hale with their books.",
    path: "/testimonials",
});

export default function TestimonialsPage() {
    return (
        <main>
            <PageHero eyebrow="Client Stories" title="What our clients say." description="Real feedback from businesses across the industries we serve." />

            <section className="py-16 md:py-24 bg-white">
                <div className="mh-container">
                    <TestimonialCarousel items={TESTIMONIALS} />
                </div>
            </section>

            <section className="py-16 md:py-24 bg-cream">
                <RevealGroup className="mh-container grid sm:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.06} amount={0.1}>
                    {TESTIMONIALS.map((t) => (
                        <RevealItem key={t.name} className="bg-white rounded-xl2 border border-navy/[0.06] p-7">
                            <Quote className="text-gold mb-3" size={22} />
                            <p className="text-navy text-sm leading-relaxed mb-5">&ldquo;{t.quote}&rdquo;</p>
                            <p className="font-display text-navy text-sm">{t.name}</p>
                            <p className="text-slate-500 text-xs">{t.role}, {t.company}</p>
                        </RevealItem>
                    ))}
                </RevealGroup>
            </section>

            <CTABanner />
        </main>
    );
}
