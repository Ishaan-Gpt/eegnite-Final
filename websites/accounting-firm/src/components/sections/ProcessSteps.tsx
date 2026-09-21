"use client";

import { motion } from "motion/react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

const STEPS = [
    { n: "01", title: "Discovery Call", desc: "We learn about your business, current setup, and where the pain points are — no obligation." },
    { n: "02", title: "Custom Proposal", desc: "You get a clear scope and flat-fee pricing tailored to your business, not a one-size package." },
    { n: "03", title: "Onboarding", desc: "We connect your accounts, review historical records, and get you set up on our client portal." },
    { n: "04", title: "Ongoing Partnership", desc: "Monthly reporting, quarterly strategy calls, and a team that's always a call away." },
];

export default function ProcessSteps() {
    return (
        <section className="py-20 md:py-28 bg-navy text-cream">
            <div className="mh-container">
                <Reveal>
                    <SectionHeading
                        eyebrow="How It Works"
                        title="Getting started takes four steps"
                        description="A straightforward onboarding process designed to get you real financial clarity within your first 30 days."
                    />
                </Reveal>

                <div className="relative">
                    <motion.div
                        aria-hidden
                        className="hidden lg:block absolute top-[52px] left-0 right-0 h-px bg-cream/10 origin-left"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
                    />
                    <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 relative" stagger={0.15} amount={0.2}>
                        {STEPS.map((s, i) => (
                            <RevealItem key={s.n} className={`relative pt-8 ${i > 0 ? "lg:pl-8" : ""}`}>
                                <span className="font-display text-gold text-3xl block mb-4 relative z-10">
                                    <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-navy border border-gold/40">
                                        {s.n}
                                    </span>
                                </span>
                                <h3 className="font-display text-xl mb-2">{s.title}</h3>
                                <p className="text-cream/60 text-sm leading-relaxed">{s.desc}</p>
                            </RevealItem>
                        ))}
                    </RevealGroup>
                </div>
            </div>
        </section>
    );
}
