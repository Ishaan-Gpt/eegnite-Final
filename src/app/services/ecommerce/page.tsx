"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Globe, Zap, BarChart, Smartphone, CreditCard, ArrowRight, Layers } from "lucide-react";
import Navbar from "@/components/Navbar";
import SmoothScrolling from "@/components/SmoothScrolling";
import Footer from "@/components/Footer";

const EcommercePage = () => {
    return (
        <SmoothScrolling>
            <div className="bg-white text-black font-sans selection:bg-[#FF6105] selection:text-white">
                <Navbar />

                {/* HERO */}
                <section className="relative pt-32 lg:pt-48 pb-16 lg:pb-32 px-6 overflow-hidden">
                    <div className="absolute top-0 right-0 w-[40vw] h-full bg-[#FF6105]/5 skew-x-[-20deg]" />
                    <div className="max-w-7xl mx-auto relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-block px-4 py-2 bg-black text-white text-xs font-bold uppercase tracking-widest rounded-full mb-8"
                        >
                            E-Commerce Solutions
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl lg:text-[8rem] font-black uppercase tracking-tighter leading-[0.85] mb-8"
                        >
                            Build. Scale. <br /><span className="text-transparent [-webkit-text-stroke:2px_#000]">Dominate.</span>
                        </motion.h1>
                        <p className="max-w-xl text-xl text-black/60 font-medium mb-12">
                            We build high-performance e-commerce experiences that merge brand storytelling with frictionless buying journeys. From Shopify Plus to custom headless builds.
                        </p>
                        <div className="flex gap-6">
                            <a href="#contact" className="bg-[#FF6105] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-black transition-colors">Start Building</a>
                            <a href="#work" className="border border-black px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors">View Work</a>
                        </div>
                    </div>
                </section>

                {/* PLATFORMS */}
                <section className="py-16 border-b border-black/5">
                    <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-12 lg:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                        {["Shopify Plus", "WooCommerce", "Magento", "BigCommerce", "Salesforce"].map((p, i) => (
                            <span key={i} className="text-2xl lg:text-3xl font-black uppercase">{p}</span>
                        ))}
                    </div>
                </section>

                {/* SERVICES GRID */}
                <section className="py-20 lg:py-32 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-20 items-end mb-20">
                            <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter leading-none">Complete <br />Commerce <span className="text-[#FF6105]">Stack</span></h2>
                            <p className="text-lg text-black/60 font-medium pb-4">There is no one-size-fits-all. We architect solutions based on your SKU count, traffic volume, and international requirements.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { t: "Store Development", d: "Pixel-perfect implementation of designs into robust, scalable themes.", i: Globe },
                                { t: "Migration services", d: "Safe transfer of data, customers, and SEO equity from legacy platforms.", i: Layers },
                                { t: "Conversion Rate Opt", d: "Scientific testing of checkout flows and product pages to lift revenue.", i: BarChart },
                                { t: "Headless Commerce", d: "Decoupled front-end experiences for ultimate speed and flexibility.", i: Zap },
                                { t: "Mobile Experience", d: "Mobile-first architectures that capture the 70% of traffic on phones.", i: Smartphone },
                                { t: "Payment & Checkout", d: "Optimized payment gateways and one-click checkout integrations.", i: CreditCard },
                            ].map((s, i) => (
                                <motion.div key={i} whileHover={{ y: -5 }} className="bg-[#FAFAFA] p-10 rounded-[2rem] hover:bg-black hover:text-white transition-all duration-300 group">
                                    <s.i className="mb-8 w-10 h-10 text-[#FF6105]" />
                                    <h3 className="text-2xl font-black uppercase tracking-tight mb-4">{s.t}</h3>
                                    <p className="opacity-60 font-medium leading-relaxed group-hover:opacity-80">{s.d}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SPEED SECTION */}
                <section className="py-20 lg:py-32 bg-[#FF6105] text-white px-6 overflow-hidden relative">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
                        <div>
                            <h2 className="text-4xl lg:text-8xl font-black uppercase tracking-tighter mb-8">Speed <br />Kills <span className="text-black italic">Churn.</span></h2>
                            <p className="text-xl font-medium opacity-90 mb-8">
                                A 1-second delay reduces conversions by 7%. We obsess over Core Web Vitals, image optimization, and code splitting to ensure your store flies.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <div className="text-5xl font-black mb-2">99%</div>
                                    <div className="text-sm font-bold uppercase tracking-widest opacity-70">Performance Score</div>
                                </div>
                                <div>
                                    <div className="text-5xl font-black mb-2">&lt;1s</div>
                                    <div className="text-sm font-bold uppercase tracking-widest opacity-70">Load Time</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-3xl p-8 text-black shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                            {/* Mock Speed Graph */}
                            <div className="flex justify-between items-end h-64 gap-4">
                                {[40, 65, 45, 80, 55, 95].map((h, i) => (
                                    <div key={i} className="w-full bg-gray-100 rounded-t-xl relative overflow-hidden group">
                                        <div className="absolute bottom-0 w-full bg-[#FF6105]" style={{ height: `${h}%` }} />
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 flex justify-between font-bold uppercase text-xs opacity-40">
                                <span>Mon</span>
                                <span>Tue</span>
                                <span>Wed</span>
                                <span>Thu</span>
                                <span>Fri</span>
                                <span>Sat</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-32 text-center px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tight mb-12">Is your store ready for <br />the next level?</h2>
                        <a href="#contact" className="inline-flex items-center gap-4 bg-black text-white px-12 py-6 rounded-full font-bold uppercase tracking-widest hover:bg-[#FF6105] transition-colors">
                            Build My Store <ArrowRight />
                        </a>
                    </div>
                </section>

                <Footer />
            </div>
        </SmoothScrolling>
    );
};

export default EcommercePage;
