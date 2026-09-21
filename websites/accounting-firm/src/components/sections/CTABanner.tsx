import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import MagneticLink from "@/components/motion/MagneticLink";

export default function CTABanner() {
    return (
        <section className="py-20 md:py-28 bg-emerald text-cream overflow-hidden">
            <Reveal className="mh-container text-center max-w-2xl mx-auto">
                <h2 className="font-display text-3xl md:text-5xl leading-[1.15] mb-6">
                    Let&apos;s talk about where your business stands financially.
                </h2>
                <p className="text-cream/70 text-lg mb-10">
                    A free 30-minute consultation — no sales pitch, just a clear read on your numbers and next steps.
                </p>
                <MagneticLink
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-cream text-emerald px-8 py-4 rounded-full font-medium hover:bg-white transition-colors shadow-soft"
                >
                    Book Your Free Consultation <ArrowUpRight size={17} />
                </MagneticLink>
            </Reveal>
        </section>
    );
}
