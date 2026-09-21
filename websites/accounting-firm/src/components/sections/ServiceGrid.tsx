"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Calculator, BookOpen, Wallet, ShieldCheck, TrendingUp, Briefcase, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { SERVICES } from "@/data/services.data";

const ICONS = {
    calculator: Calculator,
    book: BookOpen,
    wallet: Wallet,
    "shield-check": ShieldCheck,
    "trending-up": TrendingUp,
    briefcase: Briefcase,
};

export default function ServiceGrid({ limit }: { limit?: number }) {
    const services = limit ? SERVICES.slice(0, limit) : SERVICES;

    return (
        <section className="py-20 md:py-28 bg-cream">
            <div className="mh-container">
                <Reveal>
                    <SectionHeading
                        eyebrow="What We Do"
                        title="Full-service accounting, built around your business"
                        description="From day-to-day bookkeeping to boardroom-level strategy, our team covers the full financial lifecycle of your business."
                    />
                </Reveal>
                <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.08} amount={0.15}>
                    {services.map((s) => {
                        const Icon = ICONS[s.icon];
                        return (
                            <RevealItem key={s.slug}>
                                <motion.div whileHover="hover" initial="rest" animate="rest" className="h-full">
                                    <Link
                                        href={`/services/${s.slug}`}
                                        className="group flex flex-col h-full bg-white rounded-xl2 border border-navy/[0.06] p-8 overflow-hidden relative"
                                    >
                                        <motion.span
                                            aria-hidden
                                            className="absolute inset-0 bg-gradient-to-br from-navy to-emerald"
                                            variants={{ rest: { y: "101%" }, hover: { y: "0%" } }}
                                            transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
                                        />
                                        <div className="relative z-10 flex flex-col h-full">
                                            <motion.div
                                                variants={{ rest: { scale: 1, rotate: 0 }, hover: { scale: 1.08, rotate: -6 } }}
                                                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                                                className="w-12 h-12 rounded-full bg-emerald/10 flex items-center justify-center mb-6 text-emerald group-hover:bg-white/15 group-hover:text-cream transition-colors duration-300"
                                            >
                                                <Icon size={22} />
                                            </motion.div>
                                            <h3 className="font-display text-xl text-navy mb-2 group-hover:text-cream transition-colors duration-300">
                                                {s.name}
                                            </h3>
                                            <p className="text-slate-600 text-sm leading-relaxed mb-5 group-hover:text-cream/80 transition-colors duration-300">
                                                {s.shortDesc}
                                            </p>
                                            <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-navy group-hover:text-gold group-hover:gap-2.5 transition-all duration-300">
                                                Learn more <ArrowRight size={15} />
                                            </span>
                                        </div>
                                    </Link>
                                </motion.div>
                            </RevealItem>
                        );
                    })}
                </RevealGroup>
            </div>
        </section>
    );
}
