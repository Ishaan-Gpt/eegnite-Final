"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "motion/react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import type { Testimonial } from "@/data/testimonials.data";

const SWIPE_THRESHOLD = 60;

const slideVariants: Variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir >= 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir >= 0 ? -60 : 60 }),
};

export default function TestimonialCarousel({ items }: { items: Testimonial[] }) {
    const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);

    const active = items[((index % items.length) + items.length) % items.length];

    function go(dir: number) {
        setIndex(([current]) => [current + dir, dir]);
    }

    return (
        <div className="relative max-w-3xl mx-auto">
            <div className="relative overflow-hidden rounded-xl2 bg-white border border-navy/[0.06] shadow-soft min-h-[280px] flex items-center">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={index}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.6}
                        onDragEnd={(_, info) => {
                            if (info.offset.x < -SWIPE_THRESHOLD) go(1);
                            else if (info.offset.x > SWIPE_THRESHOLD) go(-1);
                        }}
                        className="w-full p-10 md:p-14 cursor-grab active:cursor-grabbing"
                    >
                        <Quote className="text-gold mb-5" size={32} />
                        <p className="text-navy text-lg md:text-2xl font-display leading-snug mb-8">
                            &ldquo;{active.quote}&rdquo;
                        </p>
                        <div>
                            <p className="font-semibold text-navy">{active.name}</p>
                            <p className="text-slate-600 text-sm">{active.role}, {active.company}</p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="flex items-center justify-between mt-6">
                <div className="flex items-center gap-2">
                    {items.map((t, i) => (
                        <button
                            key={t.name}
                            aria-label={`Go to testimonial ${i + 1}`}
                            onClick={() => setIndex([i, i > index ? 1 : -1])}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                                i === ((index % items.length) + items.length) % items.length ? "w-7 bg-emerald" : "w-1.5 bg-navy/15"
                            }`}
                        />
                    ))}
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => go(-1)}
                        aria-label="Previous testimonial"
                        className="w-10 h-10 rounded-full border border-navy/15 flex items-center justify-center text-navy hover:bg-navy hover:text-cream transition-colors"
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <button
                        onClick={() => go(1)}
                        aria-label="Next testimonial"
                        className="w-10 h-10 rounded-full border border-navy/15 flex items-center justify-center text-navy hover:bg-navy hover:text-cream transition-colors"
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
}
