"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check } from "lucide-react";
import { PRICING_TIERS } from "@/data/pricing.data";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import MagneticLink from "@/components/motion/MagneticLink";

export default function PricingTiers() {
    const [annual, setAnnual] = useState(true);

    return (
        <div>
            <div className="flex items-center justify-center gap-4 mb-14">
                <span className={`text-sm font-medium transition-colors ${!annual ? "text-navy" : "text-slate-400"}`}>Monthly</span>
                <button
                    onClick={() => setAnnual((v) => !v)}
                    aria-label="Toggle annual pricing"
                    className="relative w-14 h-8 rounded-full bg-navy/10 flex items-center px-1"
                >
                    <motion.span
                        className="w-6 h-6 rounded-full bg-navy"
                        animate={{ x: annual ? 24 : 0 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                </button>
                <span className={`text-sm font-medium transition-colors ${annual ? "text-navy" : "text-slate-400"}`}>
                    Annual <span className="text-emerald">(save ~14%)</span>
                </span>
            </div>

            <RevealGroup className="grid md:grid-cols-3 gap-6 items-start" stagger={0.1} amount={0.15}>
                {PRICING_TIERS.map((tier) => (
                    <RevealItem key={tier.name}>
                        <div
                            className={`rounded-xl2 p-8 h-full flex flex-col ${
                                tier.highlight ? "bg-navy text-cream shadow-soft lg:scale-105" : "bg-white border border-navy/[0.06]"
                            }`}
                        >
                            {tier.highlight && (
                                <span className="inline-block self-start text-xs font-semibold tracking-[0.15em] uppercase bg-gold text-navy px-3 py-1 rounded-full mb-5">
                                    Most Popular
                                </span>
                            )}
                            <h3 className="font-display text-2xl mb-1">{tier.name}</h3>
                            <p className={`text-sm mb-6 ${tier.highlight ? "text-cream/60" : "text-slate-600"}`}>{tier.tagline}</p>

                            <div className="mb-8">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={annual ? "annual" : "monthly"}
                                        initial={{ opacity: 0, y: 6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -6 }}
                                        transition={{ duration: 0.25 }}
                                        className="font-display text-4xl"
                                    >
                                        ${annual ? tier.annualMonthly : tier.monthly}
                                    </motion.span>
                                </AnimatePresence>
                                <span className={`text-sm ${tier.highlight ? "text-cream/60" : "text-slate-500"}`}>/month</span>
                            </div>

                            <ul className="space-y-3 mb-10 flex-1">
                                {tier.features.map((f) => (
                                    <li key={f} className="flex items-start gap-2.5 text-sm">
                                        <Check size={16} className={`shrink-0 mt-0.5 ${tier.highlight ? "text-gold" : "text-emerald"}`} />
                                        <span className={tier.highlight ? "text-cream/85" : "text-navy/80"}>{f}</span>
                                    </li>
                                ))}
                            </ul>

                            <MagneticLink
                                href="/contact"
                                className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-medium transition-colors ${
                                    tier.highlight ? "bg-cream text-navy hover:bg-white" : "border border-navy/20 text-navy hover:border-navy/50"
                                }`}
                            >
                                Choose {tier.name}
                            </MagneticLink>
                        </div>
                    </RevealItem>
                ))}
            </RevealGroup>
        </div>
    );
}
