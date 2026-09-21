import dynamic from "next/dynamic";
import SectionHeading from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { TESTIMONIALS } from "@/data/testimonials.data";

const TestimonialCarousel = dynamic(() => import("./TestimonialCarousel"), {
    loading: () => <div className="max-w-3xl mx-auto min-h-[280px] rounded-xl2 bg-white border border-navy/[0.06] animate-pulse" />,
});

export default function TestimonialPreview() {
    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="mh-container">
                <Reveal>
                    <SectionHeading eyebrow="Client Stories" title="Trusted by business owners who need it done right" align="center" />
                </Reveal>
                <Reveal delay={0.1}>
                    <TestimonialCarousel items={TESTIMONIALS} />
                </Reveal>
            </div>
        </section>
    );
}
