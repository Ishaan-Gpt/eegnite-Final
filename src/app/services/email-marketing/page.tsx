"use client";

import { motion } from "framer-motion";
import { Mail, Send, Users, BarChart2, Zap, ArrowRight, MessageSquare, Repeat } from "lucide-react";
import Navbar from "@/components/Navbar";
import SmoothScrolling from "@/components/SmoothScrolling";
import Footer from "@/components/Footer";

const EmailMarketingPage = () => {
    return (
        <SmoothScrolling>
            <div className="bg-white text-black font-sans selection:bg-[#FF6105] selection:text-white">
                <Navbar />

                {/* HERO */}
                <section className="relative pt-32 lg:pt-48 pb-16 lg:pb-32 px-6 overflow-hidden bg-black text-white">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
                    <div className="max-w-7xl mx-auto relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-widest mb-8 border border-white/10"
                        >
                            <span className="w-2 h-2 rounded-full bg-[#FF6105]" />
                            Direct-to-Consumer Growth
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl lg:text-9xl font-black uppercase tracking-tighter mb-8"
                        >
                            Retention <br /><span className="text-[#FF6105]">Revenue.</span>
                        </motion.h1>
                        <p className="max-w-2xl mx-auto text-xl text-white/60 mb-12">
                            Stop renting your audience. Own it. We build comprehensive email marketing ecosystems that turn one-time buyers into lifetime customers.
                        </p>
                        <a href="#contact" className="inline-flex bg-[#FF6105] text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                            Audit My Strategy
                        </a>
                    </div>
                </section>

                {/* THE PROBLEM - SCROLL SECTION */}
                <section className="py-20 lg:py-32 px-6">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tight mb-6">The Highest <span className="text-[#FF6105]">ROI Channel</span></h2>
                            <p className="text-lg text-black/60 leading-relaxed mb-8">
                                For most brands, 30-40% of revenue should come from email. If you're below that, you're leaving money on the table. We fix leaky buckets by implementing intelligent flows and campaigns that convert on autopilot.
                            </p>
                            <ul className="space-y-4 font-bold text-lg">
                                <li className="flex items-center gap-3"><CheckIcon /> 40x ROI compared to Social</li>
                                <li className="flex items-center gap-3"><CheckIcon /> Owned data, zero platform risk</li>
                                <li className="flex items-center gap-3"><CheckIcon /> Direct, personalized communication</li>
                            </ul>
                        </div>
                        <div className="relative h-[500px] bg-gray-100 rounded-3xl overflow-hidden border border-black/5 p-8 flex items-center justify-center">
                            {/* Mock Interface */}
                            <div className="w-full max-w-sm bg-white rounded-xl shadow-2xl p-6 relative z-10">
                                <div className="flex items-center gap-4 mb-6 border-b pb-4">
                                    <div className="w-10 h-10 rounded-full bg-[#FF6105]" />
                                    <div>
                                        <div className="h-2 w-24 bg-gray-200 rounded mb-1" />
                                        <div className="h-2 w-16 bg-gray-100 rounded" />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="h-32 bg-gray-100 rounded-lg" />
                                    <div className="h-4 w-3/4 bg-gray-200 rounded" />
                                    <div className="h-4 w-1/2 bg-gray-200 rounded" />
                                    <div className="h-10 bg-[#FF6105] rounded mt-4" />
                                </div>
                                {/* Floating stats */}
                                <div className="absolute -right-12 top-20 bg-black text-white p-4 rounded-xl shadow-lg">
                                    <div className="text-xs uppercase opacity-60">Open Rate</div>
                                    <div className="text-2xl font-bold">45.8%</div>
                                </div>
                                <div className="absolute -left-12 bottom-20 bg-white border border-black/10 p-4 rounded-xl shadow-lg">
                                    <div className="text-xs uppercase opacity-60">Revenue</div>
                                    <div className="text-2xl font-bold text-[#FF6105]">$124k</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SERVICES */}
                <section className="py-20 bg-[#FAFAFA] px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { t: "Core Automation Flows", d: "Welcome series, abandoned cart, browse abandonment, and thank you flows that work 24/7.", i: Repeat },
                                { t: "Campaign Management", d: "Weekly newsletters and promotional campaigns crafted to engage without burning out your list.", i: Send },
                                { t: "List Growth & Segmentation", d: "Strategies to grow your list purely and segment users based on purchase behavior.", i: Users },
                                { t: "Design & Copywriting", d: "Premium, on-brand emails that look stunning on mobile and drive clicks.", i: Zap },
                                { t: "A/B Testing", d: "Continuous testing of subject lines, send times, and content to maximize open rates.", i: BarChart2 },
                                { t: "SMS Marketing", d: "Integrated SMS campaigns for time-sensitive offers and high-touch updates.", i: MessageSquare },
                            ].map((s, i) => (
                                <motion.div key={i} whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl border border-black/5 hover:border-[#FF6105] hover:shadow-xl transition-all">
                                    <s.i className="text-[#FF6105] mb-6" size={32} />
                                    <h3 className="text-xl font-black uppercase tracking-tight mb-4">{s.t}</h3>
                                    <p className="text-sm text-black/60 leading-relaxed font-medium">{s.d}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PROCESS */}
                <section className="py-32 px-6">
                    <div className="max-w-7xl mx-auto text-center">
                        <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tight mb-16">The <span className="text-[#FF6105]">Playbook</span></h2>
                        <div className="grid lg:grid-cols-4 gap-4">
                            {[
                                { step: "01", title: "Audit", desc: "We analyze your current health, deliverability, and missed opportunities." },
                                { step: "02", title: "infrastructure", desc: "Setting up core flows, tech integration, and warm-up protocols." },
                                { step: "03", title: "Scale", desc: "Launching aggressive campaign calendars and segmented offers." },
                                { step: "04", title: "Optimize", desc: "Iterative testing and refinement based on data." }
                            ].map((p, i) => (
                                <div key={i} className="relative p-8 border border-dashed border-black/20 rounded-2xl hover:bg-[#FF6105] hover:text-white hover:border-transparent transition-all duration-300 group text-left">
                                    <span className="text-6xl font-black opacity-10 absolute top-4 right-4">{p.step}</span>
                                    <h4 className="text-xl font-bold uppercase mb-4 relative z-10">{p.title}</h4>
                                    <p className="text-sm font-medium opacity-60 group-hover:opacity-100 relative z-10">{p.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-black text-white text-center px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-5xl font-black uppercase tracking-tight mb-8">Ready for <span className="text-[#FF6105]">Revenue?</span></h2>
                        <p className="text-xl text-white/60 mb-12">Average client sees a 30% revenue lift in 90 days.</p>
                        <a href="#contact" className="inline-flex items-center gap-2 text-[#FF6105] text-2xl font-black uppercase tracking-widest hover:text-white transition-colors">
                            Book Strategy Call <ArrowRight />
                        </a>
                    </div>
                </section>

                <Footer />
            </div>
        </SmoothScrolling>
    );
};

function CheckIcon() {
    return (
        <div className="w-5 h-5 rounded-full bg-[#FF6105] flex items-center justify-center text-white shrink-0">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
    )
}

export default EmailMarketingPage;
