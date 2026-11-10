"use client";

import * as React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import { ServiceHero } from "@/components/shared/ServiceHero";
import { ServiceProcess } from "@/components/shared/ServiceProcess";
import { ClientLogoSlider } from "@/components/shared/ClientLogoSlider";
import { GROWTH_CTA, GROWTH_CTA_LINK } from "@/lib/cta";
import type { BahrainServiceData, BahrainIcon } from "@/data/bahrain-service.types";

// One template for the five Bahrain service pages (SEO, PPC, Email, Web, Social). Each page's copy lives in
// src/data/bahrain-<service>.data.tsx, verbatim from its "EEGNITE_New Content_Bahrain_<Service>" Google Doc.
// The 13 sections and their layouts follow the docs' developer notes and the Kolkata sister pages.
// Icons are inline SVGs (AGENTS.md: no new lucide-react imports).

const Svg = ({ children, ...props }: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" className={props.className}>
        {children}
    </svg>
);
const ICONS: Record<BahrainIcon, (p: any) => React.ReactElement> = {
    cpu: (p) => <Svg {...p}><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" /></Svg>,
    page: (p) => <Svg {...p}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M8 13h8M8 17h5" /></Svg>,
    pin: (p) => <Svg {...p}><path d="M12 22s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z" /><circle cx="12" cy="10" r="2.5" /></Svg>,
    bag: (p) => <Svg {...p}><path d="M6 7h12l1 14H5L6 7z" /><path d="M9 7a3 3 0 0 1 6 0" /></Svg>,
    megaphone: (p) => <Svg {...p}><path d="M3 11v2a1 1 0 0 0 1 1h3l6 4V6L7 10H4a1 1 0 0 0-1 1z" /><path d="M17 8a5 5 0 0 1 0 8M20 5a9 9 0 0 1 0 14" /></Svg>,
    spark: (p) => <Svg {...p}><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" /><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z" /></Svg>,
    clipboard: (p) => <Svg {...p}><rect x="6" y="4" width="12" height="18" rx="2" /><path d="M9 4V2h6v2M9 11h6M9 15h4" /></Svg>,
    search: (p) => <Svg {...p}><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.6-4.6" /></Svg>,
    flag: (p) => <Svg {...p}><path d="M5 22V4M5 4h11l-2 4 2 4H5" /></Svg>,
    check: (p) => <Svg {...p}><circle cx="12" cy="12" r="9" /><path d="M8 12l3 3 5-6" /></Svg>,
    loop: (p) => <Svg {...p}><path d="M20 12a8 8 0 0 1-14 5.3M4 12a8 8 0 0 1 14-5.3" /><path d="M18 3v4h-4M6 21v-4h4" /></Svg>,
    target: (p) => <Svg {...p}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" /></Svg>,
    users: (p) => <Svg {...p}><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0" /><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6 6 0 0 1 3.5 6" /></Svg>,
    layout: (p) => <Svg {...p}><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 9v12" /></Svg>,
    funnel: (p) => <Svg {...p}><path d="M3 4h18l-7 9v6l-4 2v-8z" /></Svg>,
    chart: (p) => <Svg {...p}><path d="M3 3v18h18" /><path d="M7 15l4-4 3 3 5-6" /></Svg>,
    cart: (p) => <Svg {...p}><circle cx="9" cy="20" r="1.5" /><circle cx="18" cy="20" r="1.5" /><path d="M2 3h3l2.7 12.3a2 2 0 0 0 2 1.7h8.6a2 2 0 0 0 2-1.6L22 8H6" /></Svg>,
    coins: (p) => <Svg {...p}><ellipse cx="9" cy="7" rx="6" ry="3" /><path d="M3 7v5c0 1.7 2.7 3 6 3s6-1.3 6-3V7" /><path d="M9 15v2c0 1.7 2.7 3 6 3s6-1.3 6-3v-5c0-1.6-2.4-2.9-5.5-3" /></Svg>,
    mail: (p) => <Svg {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></Svg>,
    code: (p) => <Svg {...p}><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" /></Svg>,
    phone: (p) => <Svg {...p}><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" /></Svg>,
    gauge: (p) => <Svg {...p}><path d="M4 18a8 8 0 1 1 16 0" /><path d="M12 18l4-6" /></Svg>,
    shield: (p) => <Svg {...p}><path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z" /><path d="M9 12l2 2 4-4" /></Svg>,
    chat: (p) => <Svg {...p}><path d="M21 12a8 8 0 0 1-11.6 7.1L3 21l1.9-6.4A8 8 0 1 1 21 12z" /></Svg>,
    camera: (p) => <Svg {...p}><path d="M3 8a2 2 0 0 1 2-2h2.5l1.5-2h6l1.5 2H19a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><circle cx="12" cy="13" r="3.5" /></Svg>,
    calendar: (p) => <Svg {...p}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></Svg>,
    rocket: (p) => <Svg {...p}><path d="M14 4c3-1 6-1 6-1s0 3-1 6l-6 6-5-5z" /><path d="M8 10l-4 1 3 3M14 16l-1 4-3-3" /><circle cx="15.5" cy="8.5" r="1.5" /></Svg>,
    refresh: (p) => <Svg {...p}><path d="M20 11a8 8 0 0 0-14.5-4.5L3 9M4 13a8 8 0 0 0 14.5 4.5L21 15" /><path d="M3 4v5h5M21 20v-5h-5" /></Svg>,
};
// Icons beside the five "Why EEGNITE" reasons, in order.
const WHY_ICONS: BahrainIcon[] = ["layout", "check", "chart", "shield", "users"];
const ArrowRightIcon = (p: any) => <Svg {...p}><path d="M5 12h14M12 5l7 7-7 7" /></Svg>;
const ChevronIcon = (p: any) => <Svg {...p}><path d="M9 18l6-6-6-6" /></Svg>;

const Eyebrow = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <p className={`text-xs md:text-sm font-bold uppercase tracking-wider text-[#FF6105] mb-3 block leading-normal ${className}`}>{children}</p>
);
const Heading = ({ h }: { h: { title: string; accent: string } }) => <>{h.title} <span className="text-[#FF6105]">{h.accent}</span></>;

// Section 03: image left, accordion right (50/50), one item open at a time.
function PainPointsSection({ data }: { data: BahrainServiceData["pain"] }) {
    const [open, setOpen] = React.useState(0);
    return (
        <section className="py-20 md:py-32 bg-white border-y border-black/5">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="max-w-4xl mx-auto mb-12 md:mb-16 text-left md:text-center">
                    <Eyebrow>{data.eyebrow}</Eyebrow>
                    <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-black leading-tight">
                        <Heading h={data} />
                    </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-black/5 shadow-xl group">
                        <img src={data.image} alt={data.imageAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                    </div>
                    <div className="space-y-3 md:space-y-4">
                        {data.items.map((item, idx) => {
                            const isOpen = open === idx;
                            return (
                                <div key={idx} className={`rounded-[1.5rem] border transition-all duration-300 ${isOpen ? "bg-white border-[#FF6105]/20 shadow-[0_20px_50px_rgba(232,106,0,0.06)]" : "bg-white border-black/5 hover:border-[#FF6105]/20"}`}>
                                    <h3>
                                        <button
                                            type="button"
                                            onClick={() => setOpen(isOpen ? -1 : idx)}
                                            aria-expanded={isOpen}
                                            className="w-full flex items-center justify-between gap-4 text-left p-5 md:p-6"
                                        >
                                            <span className="flex items-start gap-4">
                                                <span className="text-sm font-mono text-[#FF6105] pt-0.5">0{idx + 1}</span>
                                                <span className={`text-base md:text-lg font-bold uppercase tracking-tight transition-colors ${isOpen ? "text-[#FF6105]" : "text-black"}`}>{item.title}</span>
                                            </span>
                                            <span className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all ${isOpen ? "bg-[#FF6105] text-white" : "bg-[#FFF5F0] text-[#FF6105]"}`}>
                                                <ChevronIcon className={`w-4 h-4 transition-transform ${isOpen ? "rotate-90" : ""}`} />
                                            </span>
                                        </button>
                                    </h3>
                                    <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                                        <div className="overflow-hidden">
                                            <p className="px-5 md:px-6 pb-6 pl-[3.25rem] md:pl-[3.75rem] text-black/60 text-sm md:text-base leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

// Section 12: closing banner in the Kolkata cluster style; the doc's secondary CTA stays a text link.
function FinalCta({ data }: { data: BahrainServiceData["final"] }) {
    return (
        <section className="py-24 md:py-32 bg-[#FF6105] text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 L100 0 L100 100 Z" fill="white" />
                </svg>
            </div>
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    <div>
                        <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-white/80 mb-4">{data.eyebrow}</p>
                        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-[1] mb-6">{data.title}</h2>
                        <div className="h-2 w-24 bg-white rounded-full mt-8" />
                    </div>
                    <div className="flex flex-col justify-center h-full">
                        <p className="text-white/90 text-base md:text-xl leading-relaxed mb-10 max-w-xl">{data.text}</p>
                        <div className="flex flex-wrap gap-x-8 gap-y-5 items-center">
                            <Link href={GROWTH_CTA_LINK} className="px-10 py-5 bg-white text-black text-lg md:text-xl font-bold rounded-full hover:bg-black hover:text-white transition-colors duration-300 flex items-center gap-3 shadow-xl">
                                {GROWTH_CTA} <ArrowRightIcon className="w-5 h-5" />
                            </Link>
                            <Link href={data.secondary.href} className="text-white font-semibold underline underline-offset-4 decoration-white/50 hover:decoration-white">
                                {data.secondary.label}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function BahrainServicePage({ data }: { data: BahrainServiceData }) {
    const { hero, pain, bring, breakdown, industries, why, process, tools, agency, faq, final } = data;
    return (
        <main className="bg-white min-h-screen text-black font-sans selection:bg-[#FF6105] selection:text-white">
            <div className="relative z-10">
                <Navbar />

                {/* 01. Hero: the doc's yellow-marked line is the highlighted statement */}
                <ServiceHero
                    badgeText={hero.eyebrow}
                    title={hero.title}
                    titleClassName={hero.titleClassName ?? "md:text-4xl lg:text-5xl xl:text-6xl"}
                    subtitleAs="p"
                    subtitleClassName="md:text-2xl lg:text-3xl normal-case tracking-normal font-semibold max-w-4xl leading-snug"
                    subtitle={hero.statement}
                    description={hero.description}
                />

                {/* 02. Client logo slider */}
                <ClientLogoSlider
                    logoSize="default"
                    eyebrow="Client References"
                    headingTag="h2"
                    headingClassName="!text-[clamp(1.8rem,5vw,3.5rem)] !leading-[1.1] !tracking-tight"
                    heading={<>Businesses That Choose Growth. <br />Businesses That Choose <span className="text-[#FF6105]">EEGNITE</span></>}
                />

                {/* 03. Pain points */}
                <PainPointsSection data={pain} />

                {/* 04. What we bring to the table */}
                <section className="py-20 md:py-32 bg-white">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="max-w-4xl mx-auto mb-12 md:mb-16 text-center">
                            <Eyebrow>{bring.eyebrow}</Eyebrow>
                            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-black mb-6 leading-tight">
                                <Heading h={bring} />
                            </h2>
                            <p className="text-black/60 text-base md:text-xl leading-relaxed">{bring.intro}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {bring.items.map((item, idx) => (
                                <div key={idx} className="group bg-white border border-black/5 rounded-[2rem] overflow-hidden hover:border-[#FF6105]/30 hover:shadow-2xl transition-all duration-300 flex flex-col">
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <img src={item.img} alt={item.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                                    </div>
                                    <div className="p-7 md:p-8">
                                        <h3 className="text-xl font-bold uppercase mb-3 text-black group-hover:text-[#FF6105] transition-colors">{item.title}</h3>
                                        <p className="text-black/60 text-sm md:text-base leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 05. Service breakdown: 3 x 2 grid */}
                <section className="py-20 md:py-32 px-4 md:px-6 bg-white border-t border-black/5">
                    <div className="mx-auto w-full max-w-[1400px]">
                        <div className="max-w-4xl mb-12 md:mb-16 md:mx-auto text-left md:text-center">
                            <Eyebrow>{breakdown.eyebrow}</Eyebrow>
                            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-black leading-[1.2]">
                                <Heading h={breakdown} />
                            </h2>
                        </div>
                        {/* 6 items: 3 x 2 grid (developer note). 7 items: a row of 4 and a centred row of 3, equal widths,
                            so no card is left alone on the last row. */}
                        <div className={breakdown.items.length === 7
                            ? "flex flex-wrap justify-center gap-6 max-w-7xl mx-auto [&>*]:w-full md:[&>*]:w-[calc(50%-0.75rem)] lg:[&>*]:w-[calc(25%-1.125rem)]"
                            : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"}>
                            {breakdown.items.map((item, idx) => {
                                const Icon = ICONS[item.icon];
                                return (
                                    <div key={idx} className="bg-white border border-black/5 p-8 rounded-[2rem] hover:border-[#FF6105] hover:shadow-2xl transition-all duration-300 group flex flex-col h-full">
                                        <div className="w-16 h-16 bg-[#FFF5F0] rounded-2xl flex items-center justify-center text-[#FF6105] mb-6 group-hover:scale-110 transition-transform">
                                            <Icon size={30} strokeWidth={1.5} />
                                        </div>
                                        <h3 className="text-xl font-bold uppercase mb-4 text-black group-hover:text-[#FF6105] transition-colors">{item.title}</h3>
                                        <p className="text-black/60 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* 06. Industries we serve: Kolkata layout (image left for image SEO, six industries right) */}
                <section className="py-16 md:py-24 bg-white border-y border-black/5">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="max-w-4xl mx-auto mb-12 md:mb-16 text-center">
                            <Eyebrow>{industries.eyebrow}</Eyebrow>
                            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-black leading-tight">
                                Industries We Serve. <span className="text-[#FF6105]">Industries We Scale in Bahrain.</span>
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
                            <div className="lg:col-span-5 w-full">
                                <div className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-black/5 shadow-xl group">
                                    <img src={industries.image} alt={industries.imageAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                                </div>
                            </div>
                            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-x-6 gap-y-5 w-full">
                                {industries.items.map((item, idx) => (
                                    <div key={idx} className="group bg-white p-6 rounded-2xl border border-black/5 hover:border-[#FF6105]/20 hover:shadow-lg transition-all duration-300">
                                        <h3 className="text-base md:text-lg font-bold uppercase text-black mb-1.5">
                                            <Link href={item.href} className="inline-flex items-center gap-1.5 hover:text-[#FF6105] transition-colors">
                                                {item.title}
                                                <ArrowRightIcon className="w-4 h-4 text-[#FF6105] opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                            </Link>
                                        </h3>
                                        <p className="text-black/55 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 07. Why EEGNITE: person with orbiting service icons (left), the five reasons as icon rows (right) */}
                <section className="py-16 md:py-24 bg-white">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                            <div className="lg:col-span-5 w-full max-w-[520px] mx-auto">
                                <div className="relative aspect-square">
                                    <div className="absolute inset-[12%] rounded-full bg-gradient-to-b from-[#FFF5F0] to-[#FFE6D6]" />
                                    <div className="absolute inset-[4%] rounded-full border-2 border-dashed border-[#FF6105]/20" />
                                    <img src={why.image} alt={why.imageAlt} className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[88%] w-auto max-w-[80%] object-contain object-bottom drop-shadow-[0_20px_30px_rgba(0,0,0,0.12)]" loading="lazy" />
                                    {why.orbit.map((icon, i) => {
                                        // Five bubbles on the upper arc of the ring, left to right.
                                        const angle = ((200 + i * 35) * Math.PI) / 180;
                                        const Icon = ICONS[icon];
                                        return (
                                            <div key={i} aria-hidden="true"
                                                className="absolute w-[17%] aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_10px_30px_rgba(0,0,0,0.10)] border border-black/5 flex items-center justify-center text-[#FF6105]"
                                                style={{ left: `${50 + 46 * Math.cos(angle)}%`, top: `${50 + 46 * Math.sin(angle)}%` }}>
                                                <Icon size={26} strokeWidth={1.6} className="w-[45%] h-[45%]" />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="lg:col-span-7">
                                <Eyebrow>{why.eyebrow}</Eyebrow>
                                <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-black leading-tight mb-4">
                                    Why <span className="text-[#FF6105]">EEGNITE</span>
                                </h2>
                                <p className="text-black/60 text-base md:text-lg leading-relaxed mb-8">{why.subtitle}</p>
                                <ol className="divide-y divide-black/10 border-y border-black/10">
                                    {why.reasons.map((r, i) => {
                                        const Icon = ICONS[WHY_ICONS[i % WHY_ICONS.length]];
                                        return (
                                            <li key={i} className="flex gap-4 md:gap-5 py-5">
                                                <span className="shrink-0 w-11 h-11 rounded-xl bg-[#FFF5F0] text-[#FF6105] flex items-center justify-center" aria-hidden="true">
                                                    <Icon size={22} strokeWidth={1.6} />
                                                </span>
                                                <div>
                                                    <h3 className="text-base md:text-lg font-bold uppercase tracking-tight text-black mb-1">{r.title}</h3>
                                                    <p className="text-black/60 text-sm md:text-base leading-relaxed">{r.desc}</p>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 08. Our process */}
                <ServiceProcess
                    eyebrow={process.eyebrow}
                    title={<Heading h={process} />}
                    steps={process.steps.map((s, i) => ({ id: String(i + 1).padStart(2, "0"), icon: ICONS[s.icon] as any, title: s.title, desc: s.desc }))}
                    ctaText={GROWTH_CTA}
                    ctaLink={GROWTH_CTA_LINK}
                />

                {/* Tools we use: logo showcase for this service, centred so any count stays balanced */}
                <section className="py-16 md:py-24 bg-white border-t border-black/5">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="max-w-4xl mx-auto mb-10 md:mb-14 text-left md:text-center">
                            <Eyebrow>Our tool stack</Eyebrow>
                            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-black leading-tight">
                                Tools We Use for <span className="text-[#FF6105]">{tools.service}</span>
                            </h2>
                        </div>
                        {/* Desktop: every list on one row. Mobile: 3 columns, or 2 when that divides the list evenly. */}
                        <ul className="flex flex-wrap lg:flex-nowrap justify-center gap-3 md:gap-4 max-w-[1352px] mx-auto">
                            {tools.items.map((tool) => (
                                <li key={tool.name} className={`group ${tools.items.length % 2 === 0 && tools.items.length % 3 !== 0 ? "w-[calc(50%-0.375rem)]" : "w-[calc(33.333%-0.5rem)]"} sm:w-40 lg:w-auto lg:flex-1 lg:max-w-44 min-w-0 bg-white border border-black/5 rounded-2xl px-2 py-5 md:p-6 flex flex-col items-center justify-center gap-3 text-center hover:border-[#FF6105]/25 hover:shadow-lg transition-all duration-300`}>
                                    <img src={tool.src} alt={`${tool.name} logo`} width={56} height={56} className="w-12 h-12 md:w-14 md:h-14 object-contain rounded-xl" loading="lazy" />
                                    <span className="text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-tight text-black/80 group-hover:text-[#FF6105] transition-colors leading-snug">{tool.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* 09. Dedicated agency: text with an in-copy link, image alongside */}
                <section className="py-16 md:py-24 bg-white border-y border-black/5">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                            <div className="lg:col-span-7">
                                <Eyebrow>{agency.eyebrow}</Eyebrow>
                                <h2 className="text-3xl md:text-4xl xl:text-[2.75rem] font-bold uppercase tracking-tight text-black mb-6 leading-tight">
                                    <Heading h={agency} />
                                </h2>
                                {agency.paragraphs.map((p, i) => (
                                    <p key={i} className={`text-black/60 text-base md:text-lg leading-relaxed ${i < agency.paragraphs.length - 1 ? "mb-4" : ""}`}>{p}</p>
                                ))}
                            </div>
                            <div className="lg:col-span-5 relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-black/5 shadow-xl group">
                                <img src={agency.image} alt={agency.imageAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 10. Testimonials (heading already matches the docs) */}
                <Testimonials lead="Hafedh Bucheery" hide={["Rajeev Ranjan"]} />

                {/* 11. Buyer questions */}
                <section className="py-16 md:py-32 bg-white px-4 md:px-6 border-t border-black/5">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-left md:text-center mb-8 md:mb-16">
                            <Eyebrow>{faq.eyebrow}</Eyebrow>
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-black text-balance">
                                <Heading h={faq} />
                            </h2>
                        </div>
                        <div className="max-w-4xl mx-auto space-y-3 md:space-y-4">
                            {faq.items.map((item, idx) => (
                                <details key={idx} className="group bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-black/5 hover:shadow-xl transition-all cursor-pointer">
                                    <summary className="flex justify-between items-center list-none text-black">
                                        <h3 className="max-w-[90%] font-bold text-base md:text-lg lg:text-xl uppercase tracking-tight">{item.q}</h3>
                                        <span className="w-10 h-10 shrink-0 rounded-full bg-[#FFF5F0] flex items-center justify-center group-open:bg-[#FF6105] transition-all">
                                            <ChevronIcon className="w-5 h-5 group-open:rotate-90 transition-transform text-[#FF6105] group-open:text-white" />
                                        </span>
                                    </summary>
                                    <p className="mt-4 md:mt-6 text-black/60 leading-relaxed font-medium text-sm md:text-lg max-w-2xl">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 12. Final call to action */}
                <FinalCta data={final} />

                {/* 13. Form */}
                <Contact defaultCountryCode="+973" />
            </div>

            <Footer />
        </main>
    );
}
