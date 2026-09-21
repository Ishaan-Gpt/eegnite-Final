"use client";

import { motion } from "motion/react";
import { Users, Clock, LineChart, LockKeyhole } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

const REASONS = [
    { icon: Users, title: "One Dedicated Team", desc: "The same partner and staff on your account every year — no re-explaining your business to someone new." },
    { icon: Clock, title: "Responsive by Default", desc: "24-hour response time on every inquiry. Your questions don't sit in a queue for a week." },
    { icon: LineChart, title: "Proactive, Not Reactive", desc: "Quarterly check-ins and planning sessions so decisions get made before deadlines force them." },
    { icon: LockKeyhole, title: "Bank-Grade Security", desc: "Encrypted client portal, SOC 2-aligned processes, and strict data-handling protocols." },
];

export default function WhyUs() {
    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="mh-container">
                <Reveal>
                    <SectionHeading eyebrow="Why Meridian & Hale" title="The firm that treats your business like it's ours" align="center" />
                </Reveal>
                <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6" stagger={0.1} amount={0.2}>
                    {REASONS.map((r) => (
                        <RevealItem key={r.title} className="text-center px-4">
                            <motion.div
                                whileHover={{ scale: 1.08, backgroundColor: "rgba(15,42,61,0.9)", color: "#FAF7F1" }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="w-14 h-14 rounded-full bg-navy/[0.05] flex items-center justify-center mx-auto mb-5 text-navy"
                            >
                                <r.icon size={24} />
                            </motion.div>
                            <h3 className="font-display text-lg text-navy mb-2">{r.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{r.desc}</p>
                        </RevealItem>
                    ))}
                </RevealGroup>
            </div>
        </section>
    );
}
