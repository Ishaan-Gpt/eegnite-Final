"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Quote } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import MagneticLink from "@/components/motion/MagneticLink";

const IMAGE = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80";

export default function FeaturedStory() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.08]);

    return (
        <section ref={ref} className="relative py-20 md:py-28 bg-navy overflow-hidden">
            <div className="mh-container relative z-10 grid lg:grid-cols-[1fr_0.85fr] gap-0 items-stretch rounded-xl2 overflow-hidden shadow-soft">
                <div className="relative min-h-[340px] lg:min-h-[480px] overflow-hidden">
                    <motion.img
                        src={IMAGE}
                        alt="Meridian & Hale advisory session"
                        loading="lazy"
                        style={{ y, scale }}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-navy/20" />
                </div>

                <div className="bg-navy p-10 md:p-14 flex flex-col justify-center">
                    <Reveal>
                        <Quote className="text-gold mb-6" size={36} />
                        <p className="font-display text-2xl md:text-3xl text-cream leading-snug mb-8">
                            &ldquo;We went from spreadsheet chaos to a monthly close we can actually trust — in under 60 days.&rdquo;
                        </p>
                        <div className="mb-8">
                            <p className="text-cream font-medium">Renata Silva</p>
                            <p className="text-cream/50 text-sm">Owner, Silva &amp; Sons Construction</p>
                        </div>
                        <MagneticLink
                            href="/testimonials"
                            className="inline-flex items-center gap-2 border border-cream/25 text-cream px-6 py-3 rounded-full text-sm font-medium hover:border-cream/60 transition-colors w-fit"
                        >
                            Read More Client Stories
                        </MagneticLink>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
