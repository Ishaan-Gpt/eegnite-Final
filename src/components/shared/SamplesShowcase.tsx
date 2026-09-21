"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Layers, ExternalLink } from "lucide-react";
import { WEB_SAMPLES, type WebSample } from "@/data/web-samples.data";

const fadeUp = {
    offscreen: { opacity: 0, y: 32 },
    onscreen: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
    }),
};

export function SamplesShowcase() {
    return (
        <section className="py-16 md:py-28 bg-[#F9F9F9] border-y border-black/5">
            <div className="max-w-[1400px] mx-auto px-6">
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={fadeUp}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20"
                >
                    <div className="max-w-2xl">
                        <span className="inline-flex items-center gap-2 text-[#FF6105] text-xs font-bold uppercase tracking-widest mb-4">
                            <Layers size={14} /> Real Websites, Real Code
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-black mb-4 leading-tight">
                            BUILT BY EEGNITE. <span className="text-[#FF6105]">NOT A TEMPLATE.</span>
                        </h2>
                        <p className="text-black/50 text-base md:text-xl leading-relaxed">
                            Full, working example websites — each its own independent project with a completely
                            different design system. This is the level of craft every client site gets.
                        </p>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {WEB_SAMPLES.map((sample, i) => (
                        <SampleCard key={sample.slug} sample={sample} index={i} />
                    ))}

                    <motion.div
                        custom={WEB_SAMPLES.length}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeUp}
                        className="flex flex-col items-center justify-center text-center border-2 border-dashed border-black/10 rounded-[1.5rem] p-8 min-h-[220px] md:min-h-0"
                    >
                        <span className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center mb-4">
                            <Layers size={20} className="text-black/30" />
                        </span>
                        <span className="text-black/40 text-sm font-bold uppercase tracking-widest">More Industries</span>
                        <span className="text-black/25 text-xs mt-2">New sample sites added regularly</span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function SampleCard({ sample, index }: { sample: WebSample; index: number }) {
    const { palette } = sample;

    return (
        <motion.a
            custom={index}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            href={sample.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="group block bg-white rounded-[1.5rem] border border-black/5 overflow-hidden hover:shadow-2xl hover:border-black/10 transition-shadow duration-500"
        >
            {/* Browser-chrome frame around a crafted mockup of the sample's real design system */}
            <div className="relative bg-[#EDEDED] p-3">
                <div className="flex items-center gap-1.5 px-2 pb-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-black/15" />
                    <span className="w-2.5 h-2.5 rounded-full bg-black/15" />
                    <span className="w-2.5 h-2.5 rounded-full bg-black/15" />
                    <span className="ml-3 flex-1 h-6 rounded-full bg-white/80 text-[10px] flex items-center gap-1.5 px-3 text-black/40 truncate">
                        <ExternalLink size={9} className="shrink-0" />
                        eegnite.com{sample.href}
                    </span>
                </div>

                <div
                    className="relative w-full rounded-xl overflow-hidden border border-black/5"
                    style={{ aspectRatio: "16 / 10", background: palette.bg }}
                >
                    <SiteMockup palette={palette} />

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/25 backdrop-blur-[1px]">
                        <span className="inline-flex items-center gap-2 bg-white text-black text-sm font-bold px-5 py-3 rounded-full shadow-xl">
                            View Live Site <ArrowUpRight size={16} />
                        </span>
                    </div>
                </div>
            </div>

            <div className="p-7 md:p-8">
                <div className="flex items-center justify-between mb-3">
                    <span className="inline-block text-[#FF6105] text-xs font-bold uppercase tracking-widest">
                        {sample.industry}
                    </span>
                    <span className="text-black/30 text-xs font-medium uppercase tracking-wide">
                        {sample.pageCount} pages
                    </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold uppercase text-black mb-2 inline-flex items-center gap-2">
                    {sample.name}
                    <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-[#FF6105]" />
                </h3>
                <p className="text-black/50 text-sm md:text-base leading-relaxed mb-5">{sample.tagline}</p>
                <div className="flex flex-wrap gap-2">
                    {sample.stack.map((tech) => (
                        <span key={tech} className="text-xs font-medium uppercase tracking-wide text-black/60 bg-black/5 px-3 py-1.5 rounded-full">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.a>
    );
}

/** A crafted, static recreation of the sample's real hero layout — fast, reliable,
 *  and immune to iframe cross-load/embedding issues, unlike a live embed. */
function SiteMockup({ palette }: { palette: WebSample["palette"] }) {
    return (
        <div className="absolute inset-0 flex flex-col" style={{ background: palette.bg }}>
            <div
                className="h-[14%] flex items-center justify-between px-[6%] border-b"
                style={{ borderColor: `${palette.primary}14` }}
            >
                <div className="flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 rounded-full" style={{ background: palette.primary }} />
                    <span className="w-10 h-1.5 rounded-full" style={{ background: `${palette.primary}30` }} />
                </div>
                <div className="hidden sm:flex items-center gap-2">
                    <span className="w-6 h-1.5 rounded-full" style={{ background: `${palette.primary}20` }} />
                    <span className="w-6 h-1.5 rounded-full" style={{ background: `${palette.primary}20` }} />
                    <span className="w-6 h-1.5 rounded-full" style={{ background: `${palette.primary}20` }} />
                </div>
                <span className="w-12 h-4 rounded-full" style={{ background: palette.primary }} />
            </div>

            <div className="flex-1 grid grid-cols-2 gap-[5%] px-[6%] py-[8%]">
                <div className="flex flex-col justify-center gap-[10%]">
                    <span className="w-[70%] h-2 rounded-full" style={{ background: `${palette.primary}25` }} />
                    <div className="flex flex-col gap-[8%]">
                        <span className="w-full h-3 rounded-sm" style={{ background: palette.primary }} />
                        <span className="w-[85%] h-3 rounded-sm" style={{ background: palette.primary }} />
                    </div>
                    <span className="w-[90%] h-1.5 rounded-full" style={{ background: `${palette.text}20` }} />
                    <span className="w-[65%] h-1.5 rounded-full" style={{ background: `${palette.text}20` }} />
                    <div className="flex gap-2 mt-[4%]">
                        <span className="w-[45%] h-5 rounded-full" style={{ background: palette.primary }} />
                        <span
                            className="w-[35%] h-5 rounded-full border"
                            style={{ borderColor: `${palette.primary}40` }}
                        />
                    </div>
                </div>

                <div className="flex items-center">
                    <div
                        className="w-full rounded-lg p-[8%] flex flex-col gap-[10%] shadow-sm"
                        style={{ background: palette.surface, border: `1px solid ${palette.primary}10` }}
                    >
                        {[0.9, 0.7, 1, 0.5].map((w, i) => (
                            <div key={i} className="flex items-center justify-between">
                                <span className="h-1.5 rounded-full" style={{ width: `${w * 40}%`, background: `${palette.text}18` }} />
                                <span
                                    className="h-2 rounded-full"
                                    style={{ width: `${w * 30}%`, background: i === 2 ? palette.accent : `${palette.primary}30` }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
