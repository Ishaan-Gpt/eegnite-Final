"use client";

import { motion } from "framer-motion";
import { PieChart, TrendingUp, Database, Activity, Eye, Share2, ArrowRight, Server } from "lucide-react";
import Navbar from "@/components/Navbar";
import SmoothScrolling from "@/components/SmoothScrolling";
import Footer from "@/components/Footer";

const DataAnalysisPage = () => {
    return (
        <SmoothScrolling>
            <div className="bg-white text-black font-sans selection:bg-[#FF6105] selection:text-white">
                <Navbar />

                {/* HERO */}
                <section className="relative pt-32 lg:pt-48 pb-16 lg:pb-32 px-6 overflow-hidden bg-[#111] text-white">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF6105] opacity-20 blur-[150px] rounded-full" />
                    <div className="max-w-7xl mx-auto relative z-10 text-center">
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-6xl lg:text-[9rem] font-black uppercase tracking-tighter mb-4"
                        >
                            Data <span className="text-[#FF6105]">Wisdom</span>
                        </motion.h1>
                        <p className="text-2xl text-white/60 mb-12 max-w-3xl mx-auto">
                            We transform raw numbers into actionable business intelligence. Stop guessing what works and start knowing.
                        </p>
                        <div className="cursor-pointer inline-flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
                            <div className="w-px h-16 bg-gradient-to-b from-transparent to-white" />
                            <span className="text-xs uppercase tracking-[0.3em]">Explore</span>
                        </div>
                    </div>
                </section>

                {/* VISUALIZATION SHOWCASE */}
                <section className="py-20 lg:py-32 px-6">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-[#FAFAFA] aspect-square rounded-3xl p-6 flex flex-col justify-between border border-black/5 hover:scale-95 transition-transform duration-500">
                                    <PieChart className="text-[#FF6105]" size={32} />
                                    <div>
                                        <div className="text-4xl font-black mb-1">68%</div>
                                        <div className="text-xs uppercase font-bold text-black/40">Conversion Rate</div>
                                    </div>
                                </div>
                                <div className="bg-[#111] text-white aspect-square rounded-3xl p-6 flex flex-col justify-between hover:scale-95 transition-transform duration-500">
                                    <TrendingUp className="text-[#FF6105]" size={32} />
                                    <div>
                                        <div className="text-4xl font-black mb-1">+2.4k</div>
                                        <div className="text-xs uppercase font-bold text-gray-500">New Users</div>
                                    </div>
                                </div>
                                <div className="col-span-2 bg-[#FF6105] text-white rounded-3xl p-8 flex items-center justify-between hover:scale-95 transition-transform duration-500">
                                    <div>
                                        <div className="text-xs uppercase font-bold opacity-80 mb-2">Total Revenue</div>
                                        <div className="text-5xl font-black">$1.2M</div>
                                    </div>
                                    <Activity size={48} />
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tight mb-8">Clarity in <span className="text-[#FF6105]">Chaos</span></h2>
                            <p className="text-lg text-black/60 leading-relaxed mb-6">
                                Modern businesses are drowning in data but starving for insights. We build custom dashboards that cut through the noise and show you exactly where your money is going and growing.
                            </p>
                            <ul className="space-y-4">
                                {["Single Source of Truth", "Real-time Reporting", "Predictive Analytics"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-xl font-bold">
                                        <div className="w-2 h-2 bg-[#FF6105] rounded-full" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* SERVICES LIST */}
                <section className="py-20 bg-[#FAFAFA] px-6">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tight mb-16 text-center">Intelligence <span className="text-[#FF6105]">Suite</span></h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { t: "GA4 Implementation", d: "Advanced setup of Google Analytics 4 with custom event tracking and audiences.", i: Activity },
                                { t: "Custom Dashboards", d: "Looker Studio or Tableau dashboards tailored to your KPIs.", i: Eye },
                                { t: "Attribution Modeling", d: "Understanding which channels actually drive first and last click conversions.", i: Share2 },
                                { t: "Data Warehousing", d: "Centralizing data from ads, CRM, and shop into BigQuery or Snowflake.", i: Database },
                                { t: "Server-Side Tracking", d: "Bypassing ad blockers and cookie restrictions for accurate data.", i: Server },
                                { t: "CRO Analysis", d: "Using heatmaps and session recordings to optimize user journeys.", i: PieChart },
                            ].map((s, i) => (
                                <motion.div key={i} whileHover={{ y: -5 }} className="bg-white p-8 rounded-2xl border border-black/5 hover:border-[#FF6105] transition-all group">
                                    <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-black group-hover:bg-[#FF6105] group-hover:text-white transition-colors mb-6">
                                        <s.i size={24} />
                                    </div>
                                    <h3 className="text-lg font-black uppercase tracking-tight mb-3">{s.t}</h3>
                                    <p className="text-sm text-black/60 font-medium">{s.d}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-32 px-6">
                    <div className="max-w-5xl mx-auto bg-black rounded-[3rem] p-12 lg:p-24 text-center text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-[#FF6105] opacity-20 blur-[100px] rounded-full scale-0 hover:scale-150 transition-transform duration-1000" />
                        <div className="relative z-10">
                            <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tight mb-8">Uncover Your <br />Hidden Growth</h2>
                            <a href="#contact" className="inline-flex bg-white text-black px-12 py-6 rounded-full font-black uppercase tracking-widest hover:bg-[#FF6105] hover:text-white transition-all">
                                Start Analyst Audit
                            </a>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </SmoothScrolling>
    );
};

export default DataAnalysisPage;
