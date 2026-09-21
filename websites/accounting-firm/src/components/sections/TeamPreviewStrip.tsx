"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { TEAM } from "@/data/team.data";

export default function TeamPreviewStrip() {
    const trackRef = useRef<HTMLDivElement>(null);

    return (
        <section className="py-20 md:py-28 bg-cream overflow-hidden">
            <div className="mh-container">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-4">
                    <Reveal>
                        <SectionHeading eyebrow="Meet The Team" title="Licensed CPAs, not a call center." description="Drag to browse — or meet the full team on our About page." />
                    </Reveal>
                    <Reveal delay={0.1} className="hidden md:block mb-16">
                        <Link href="/about" className="inline-flex items-center gap-1.5 text-navy font-medium text-sm hover:gap-2.5 transition-all">
                            Meet everyone <ArrowRight size={15} />
                        </Link>
                    </Reveal>
                </div>
            </div>

            <div ref={trackRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
                <motion.div
                    drag="x"
                    dragConstraints={{ left: -(TEAM.length * 280 - 320), right: 0 }}
                    dragElastic={0.12}
                    className="flex gap-6 px-6 md:px-[max(1.5rem,calc((100vw-1280px)/2+2.5rem))]"
                >
                    {TEAM.map((member) => (
                        <div key={member.name} className="shrink-0 w-64 select-none">
                            <div className="relative w-full aspect-[3/4] rounded-xl2 overflow-hidden mb-4 shadow-card">
                                <img
                                    src={member.photo}
                                    alt={member.name}
                                    loading="lazy"
                                    draggable={false}
                                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                                />
                            </div>
                            <h3 className="font-display text-lg text-navy">{member.name}</h3>
                            <p className="text-slate-600 text-sm">{member.role}</p>
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="mh-container md:hidden mt-8">
                <Link href="/about" className="inline-flex items-center gap-1.5 text-navy font-medium text-sm">
                    Meet everyone <ArrowRight size={15} />
                </Link>
            </div>
        </section>
    );
}
