"use client";

import { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { RevealText, Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import MagneticLink from "@/components/motion/MagneticLink";

const SNAPSHOTS = {
    quarterly: [
        { label: "Net Revenue", value: "$482,900", trend: "+12.4%" },
        { label: "Operating Margin", value: "34.2%", trend: "+2.1%" },
        { label: "Tax Liability (Est.)", value: "$61,200", trend: "-8.3%" },
        { label: "Cash Runway", value: "19 months", trend: "+3 mo" },
    ],
    annual: [
        { label: "Net Revenue", value: "$1.94M", trend: "+18.6%" },
        { label: "Operating Margin", value: "31.8%", trend: "+4.4%" },
        { label: "Tax Liability (Est.)", value: "$244,000", trend: "-6.1%" },
        { label: "Cash Runway", value: "22 months", trend: "+5 mo" },
    ],
};

export default function Hero() {
    const [tab, setTab] = useState<"quarterly" | "annual">("quarterly");

    const mvX = useMotionValue(0);
    const mvY = useMotionValue(0);
    const blobX = useSpring(mvX, { stiffness: 40, damping: 20 });
    const blobY = useSpring(mvY, { stiffness: 40, damping: 20 });
    const rotate = useTransform(blobX, [-60, 60], [-4, 4]);

    function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
        const rect = e.currentTarget.getBoundingClientRect();
        mvX.set(((e.clientX - rect.left) / rect.width - 0.5) * 120);
        mvY.set(((e.clientY - rect.top) / rect.height - 0.5) * 80);
    }

    return (
        <section
            className="relative overflow-hidden bg-cream pt-16 pb-20 md:pt-24 md:pb-28"
            onPointerMove={handlePointerMove}
        >
            <motion.div
                aria-hidden
                className="pointer-events-none absolute -top-24 right-[-10%] w-[540px] h-[540px] rounded-full opacity-[0.14] blur-3xl"
                style={{
                    x: blobX,
                    y: blobY,
                    rotate,
                    background: "radial-gradient(circle at 30% 30%, #C9A34E, #1F5B4B 55%, transparent 75%)",
                }}
            />

            <div className="mh-container relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
                <div>
                    <Reveal as="span" className="inline-flex items-center gap-2 text-emerald text-sm font-semibold tracking-[0.2em] uppercase mb-6">
                        Certified Public Accountants
                    </Reveal>

                    <RevealText
                        as="h1"
                        text="Financial clarity for businesses that refuse to guess."
                        className="font-display text-4xl sm:text-5xl md:text-6xl text-navy leading-[1.08] mb-6"
                    />

                    <Reveal delay={0.15}>
                        <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-xl mb-9">
                            Meridian &amp; Hale pairs big-firm expertise with boutique attention — tax, bookkeeping,
                            payroll, and advisory built around your business, not a template.
                        </p>
                    </Reveal>

                    <Reveal delay={0.25} className="flex flex-wrap items-center gap-4 mb-10">
                        <MagneticLink
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-navy text-cream px-7 py-4 rounded-full font-medium hover:bg-navy-700 transition-colors shadow-soft"
                        >
                            Book a Free Consultation <ArrowUpRight size={17} />
                        </MagneticLink>
                        <MagneticLink
                            href="/services"
                            className="inline-flex items-center gap-2 border border-navy/20 text-navy px-7 py-4 rounded-full font-medium hover:border-navy/50 transition-colors"
                        >
                            Explore Our Services
                        </MagneticLink>
                    </Reveal>

                    <RevealGroup className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-600" stagger={0.08}>
                        {["25+ years combined experience", "500+ businesses served", "Licensed CPAs on every engagement"].map((item) => (
                            <RevealItem key={item} className="flex items-center gap-2">
                                <CheckCircle2 size={16} className="text-emerald" /> {item}
                            </RevealItem>
                        ))}
                    </RevealGroup>
                </div>

                <Reveal delay={0.2} className="relative">
                    <div className="rounded-xl2 bg-white border border-navy/[0.06] shadow-soft p-8 md:p-10">
                        <div className="flex items-center justify-between mb-8">
                            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400">
                                Snapshot
                            </span>
                            <div className="flex items-center gap-1 bg-cream-200 rounded-full p-1">
                                {(["quarterly", "annual"] as const).map((key) => (
                                    <button
                                        key={key}
                                        onClick={() => setTab(key)}
                                        className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-colors ${
                                            tab === key ? "text-cream" : "text-navy/60 hover:text-navy"
                                        }`}
                                    >
                                        {tab === key && (
                                            <motion.span
                                                layoutId="hero-tab-pill"
                                                className="absolute inset-0 bg-navy rounded-full"
                                                transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                            />
                                        )}
                                        <span className="relative z-10 capitalize">{key}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={tab}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-6"
                            >
                                {SNAPSHOTS[tab].map((row) => (
                                    <SnapshotRow key={row.label} {...row} positive={!row.trend.startsWith("-")} />
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    <div className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-3 bg-navy text-cream px-6 py-4 rounded-xl2 shadow-soft">
                        <span className="w-10 h-10 rounded-full bg-gold text-navy flex items-center justify-center font-display text-sm">A+</span>
                        <div className="text-xs leading-tight">
                            <p className="font-semibold">BBB Accredited</p>
                            <p className="text-cream/60">Since 2011</p>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

function SnapshotRow({ label, value, trend, positive = true }: { label: string; value: string; trend: string; positive?: boolean }) {
    return (
        <div className="flex items-center justify-between pb-5 border-b border-navy/[0.06] last:border-0 last:pb-0">
            <span className="text-sm text-slate-600">{label}</span>
            <div className="text-right">
                <p className="font-display text-lg text-navy">{value}</p>
                <p className={`text-xs font-medium ${positive ? "text-emerald" : "text-red-500"}`}>{trend}</p>
            </div>
        </div>
    );
}
