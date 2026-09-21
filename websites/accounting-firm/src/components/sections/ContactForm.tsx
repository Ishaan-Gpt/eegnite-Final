"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, ArrowUpRight } from "lucide-react";

const SERVICES = ["Tax Preparation", "Bookkeeping", "Payroll", "Audit & Assurance", "Business Advisory", "Fractional CFO", "Not sure yet"];

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);
    const [service, setService] = useState(SERVICES[0]);

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setSubmitted(true);
    }

    return (
        <div className="bg-white rounded-xl2 border border-navy/[0.06] shadow-soft p-8 md:p-10 relative overflow-hidden">
            <AnimatePresence mode="wait">
                {submitted ? (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col items-center text-center py-14"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.1 }}
                            className="w-16 h-16 rounded-full bg-emerald/10 text-emerald flex items-center justify-center mb-6"
                        >
                            <CheckCircle2 size={30} />
                        </motion.div>
                        <h3 className="font-display text-2xl text-navy mb-2">Message received.</h3>
                        <p className="text-slate-600 max-w-sm">
                            Thanks for reaching out — someone from our team will follow up within one business day.
                        </p>
                    </motion.div>
                ) : (
                    <motion.form
                        key="form"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-5"
                    >
                        <div className="grid sm:grid-cols-2 gap-5">
                            <Field label="Full Name" name="name" required />
                            <Field label="Email" name="email" type="email" required />
                        </div>
                        <div className="grid sm:grid-cols-2 gap-5">
                            <Field label="Company" name="company" />
                            <Field label="Phone" name="phone" type="tel" />
                        </div>

                        <label className="block">
                            <span className="text-sm font-medium text-navy mb-1.5 block">What do you need help with?</span>
                            <select
                                value={service}
                                onChange={(e) => setService(e.target.value)}
                                className="w-full rounded-lg border border-navy/15 bg-cream px-4 py-3 text-navy focus:outline-none focus:ring-2 focus:ring-emerald/40 transition-shadow"
                            >
                                {SERVICES.map((s) => (
                                    <option key={s} value={s}>{s}</option>
                                ))}
                            </select>
                        </label>

                        <label className="block">
                            <span className="text-sm font-medium text-navy mb-1.5 block">Message</span>
                            <textarea
                                name="message"
                                rows={4}
                                required
                                className="w-full rounded-lg border border-navy/15 bg-cream px-4 py-3 text-navy focus:outline-none focus:ring-2 focus:ring-emerald/40 transition-shadow resize-none"
                            />
                        </label>

                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center gap-2 bg-navy text-cream px-7 py-3.5 rounded-full font-medium hover:bg-navy-700 transition-colors w-full sm:w-auto justify-center"
                        >
                            Send Message <ArrowUpRight size={16} />
                        </motion.button>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
    return (
        <label className="block">
            <span className="text-sm font-medium text-navy mb-1.5 block">{label}</span>
            <input
                type={type}
                name={name}
                required={required}
                className="w-full rounded-lg border border-navy/15 bg-cream px-4 py-3 text-navy focus:outline-none focus:ring-2 focus:ring-emerald/40 transition-shadow"
            />
        </label>
    );
}
