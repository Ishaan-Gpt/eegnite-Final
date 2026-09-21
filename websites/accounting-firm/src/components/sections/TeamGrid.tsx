"use client";

import { motion } from "motion/react";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { TEAM } from "@/data/team.data";

export default function TeamGrid() {
    return (
        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" stagger={0.08} amount={0.15}>
            {TEAM.map((member) => (
                <RevealItem key={member.name}>
                    <div className="group [perspective:1200px] h-80">
                        <motion.div
                            className="relative w-full h-full [transform-style:preserve-3d]"
                            initial={false}
                            whileHover={{ rotateY: 180 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="absolute inset-0 [backface-visibility:hidden] rounded-xl2 overflow-hidden shadow-card">
                                <img src={member.photo} alt={member.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-cream">
                                    <h3 className="font-display text-lg">{member.name}</h3>
                                    <p className="text-cream/70 text-sm mb-1.5">{member.role}</p>
                                    <span className="text-xs font-semibold text-gold tracking-wide uppercase">{member.credential}</span>
                                </div>
                            </div>

                            <div
                                className="absolute inset-0 [backface-visibility:hidden] bg-navy text-cream rounded-xl2 p-8 flex flex-col justify-center"
                                style={{ transform: "rotateY(180deg)" }}
                            >
                                <h3 className="font-display text-lg mb-3">{member.name}</h3>
                                <p className="text-cream/70 text-sm leading-relaxed">{member.bio}</p>
                            </div>
                        </motion.div>
                    </div>
                </RevealItem>
            ))}
        </RevealGroup>
    );
}
