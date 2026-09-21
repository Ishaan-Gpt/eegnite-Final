"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";

const IMG = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=80`;

const PANELS = [
    {
        kicker: "01 — Listen First",
        title: "We start by understanding the business, not the balance sheet.",
        body: "Before we touch a single number, we sit down and learn how your business actually runs — where the cash gets tight, what keeps you up at night, where you want to be in three years.",
        image: IMG("1521791136064-7986c2920216"),
    },
    {
        kicker: "02 — Build The System",
        title: "Then we build the financial system your business should have had from day one.",
        body: "Clean chart of accounts, a monthly close that actually closes, and reporting that answers the questions you're actually asking — not a generic template dropped onto your business.",
        image: IMG("1497366216548-37526070297c"),
    },
    {
        kicker: "03 — Stay Ahead",
        title: "Quarterly, we sit down again — before problems become emergencies.",
        body: "Tax law changes. Your business changes. We meet every quarter to make sure your structure, your estimates, and your plan still fit the business you're running today.",
        image: IMG("1556761175-b413da4baf72"),
    },
    {
        kicker: "04 — Grow Together",
        title: "As you scale, we scale with you — from bookkeeping to boardroom.",
        body: "Many of our longest clients started with basic bookkeeping and now lean on us for fractional CFO work. The relationship grows the way your business does.",
        image: IMG("1554224155-6726b3ff858f"),
    },
];

export default function PhilosophyScroll() {
    const [active, setActive] = useState(0);

    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="mh-container">
                <div className="mb-16 max-w-2xl">
                    <span className="block text-emerald text-sm font-semibold tracking-[0.2em] uppercase mb-5">Our Philosophy</span>
                    <h2 className="font-display text-3xl md:text-5xl text-navy leading-[1.1]">How we actually work with clients.</h2>
                </div>

                <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-20">
                    <div className="lg:sticky lg:top-28 h-fit order-2 lg:order-1">
                        <div className="relative rounded-xl2 overflow-hidden shadow-soft aspect-[4/3]">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={active}
                                    src={PANELS[active].image}
                                    alt=""
                                    loading="lazy"
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </AnimatePresence>
                            <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
                            <div className="absolute bottom-6 left-6 flex gap-1.5">
                                {PANELS.map((_, i) => (
                                    <span
                                        key={i}
                                        className={`h-1 rounded-full transition-all duration-500 ${
                                            i === active ? "w-8 bg-gold" : "w-1.5 bg-white/50"
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 space-y-24 md:space-y-40 lg:py-10">
                        {PANELS.map((panel, i) => (
                            <PhilosophyPanel key={panel.title} index={i} panel={panel} onActivate={() => setActive(i)} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function PhilosophyPanel({
    panel,
    index,
    onActivate,
}: {
    panel: (typeof PANELS)[number];
    index: number;
    onActivate: () => void;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { margin: "-40% 0px -40% 0px" });

    useEffect(() => {
        if (inView) onActivate();
    }, [inView, onActivate]);

    return (
        <div ref={ref} className="min-h-[30vh] flex flex-col justify-center">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
                <span className="block text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-4">{panel.kicker}</span>
                <h3 className="font-display text-2xl md:text-3xl text-navy leading-snug mb-5">{panel.title}</h3>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-md">{panel.body}</p>
            </motion.div>
        </div>
    );
}
