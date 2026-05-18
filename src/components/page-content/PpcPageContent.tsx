import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Share2, Globe, MonitorPlay, Settings, BarChart3, Search, Activity } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import {
    PpcHero,
    IntroSection,
    PpcComparisonSection,
    PartnerSection,
    FullServicePPC,
    PpcProcessFloating,
    ProtocolTimeline,
    WhyChooseSection,
} from "@/components/page-content/PpcInteractive";

// --- STATIC SECTIONS ---

function IndustriesSection() {
    const industries = [
        { title: "E-commerce", desc: "Conversion-focused ads that increase sales fast." },
        { title: "B2B and Lead Gen", desc: "Targeted campaigns that fill your pipeline." },
        { title: "Medical and Healthcare", desc: "Trust-first ads that drive patient bookings." },
        { title: "Retail Business", desc: "Local campaigns that increase store visits." },
        { title: "Manufacturing and Logistics", desc: "B2B ads that generate qualified enquiries." },
        { title: "Professional Services", desc: "High-converting ads for premium clients." },
    ];

    return (
        <section className="py-16 md:py-24 bg-white border-y border-black/5">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tighter text-black mb-4">
                            MARKETS WE LEAD. <br /><span className="text-[#FF6105]">INDUSTRIES WE SCALE</span>
                        </h2>
                        <p className="text-black/50 text-base md:text-xl leading-relaxed">
                            EEGNITE designs PPC advertising strategies that strengthen visibility and authority across these core sectors.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8 w-full border-l md:border-l-0 md:pl-0 pl-6 border-black/5">
                        {industries.map((item, idx) => (
                            <div key={idx} className="group cursor-default">
                                <h3 className="text-lg md:text-xl font-bold uppercase text-black mb-1 transition-colors group-hover:text-[#FF6105]">
                                    {item.title}
                                </h3>
                                <p className="text-black/50 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function ToolsSection() {
    const tools = [
        { name: "Google Ads", src: "/icons/google-ads.png", Icon: Search },
        { name: "Google Analytics", src: "/icons/google-analytics.png", Icon: BarChart3 },
        { name: "Meta Ads", src: null, Icon: Share2 },
        { name: "Google Tag Manager", src: "/icons/gtm.png", Icon: Settings },
        { name: "Bing Ads", src: null, Icon: Globe },
        { name: "SemRush", src: "/icons/semrush.png", Icon: Activity },
        { name: "YouTube Studio", src: null, Icon: MonitorPlay },
    ];

    return (
        <section className="py-20 md:py-32 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 mb-12 md:mb-16">
                <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-black mb-4">
                    Tools & Platforms <br /><span className="text-[#FF6105]">Powering Our PPC Campaigns</span>
                </h2>
            </div>

            <div className="relative flex overflow-hidden group py-10 select-none">
                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 lg:w-60 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 lg:w-60 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

                {[0, 1].map((copy) => (
                    <div key={copy} className="flex animate-loop-scroll gap-12 md:gap-20 pr-12 md:pr-20" aria-hidden={copy === 1}>
                        {[...tools, ...tools].map((tool, index) => (
                            <div key={index} className="flex flex-col items-center justify-center flex-shrink-0">
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#F9F9F9] rounded-2xl flex items-center justify-center p-3 border border-black/5 hover:border-[#FF6105]/20 hover:shadow-lg transition-all">
                                    {tool.src ? (
                                        <img src={tool.src} alt={tool.name} className="w-full h-full object-contain" />
                                    ) : (
                                        <tool.Icon className="w-8 h-8 text-[#FF6105]" />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}

function ValuesSection() {
    const values = [
        { title: "Integrity", desc: "We believe in brutal honesty. If a strategy isn't working, we tell you. You'll always receive candid recommendations for your ad spend." },
        { title: "Teamwork", desc: "EEGNITE is a dedicated engineering team. Senior strategists, technical leads, and creative thinkers work in unison on your account." },
        { title: "Excellence", desc: "Good enough is not enough. We aim for uncompromised quality in every ad copy, every landing page, and every bid adjustment. We set the standard." },
    ];

    return (
        <section className="bg-white text-black py-20 md:py-32 px-4 md:px-6 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-12 md:mb-24">
                    <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tighter leading-none mb-8 md:mb-12">
                        Powered By <span className="text-[#FF6105]">Values</span>
                    </h2>
                </div>
                <div className="space-y-16 md:space-y-32">
                    {values.map((v, i) => (
                        <div key={i} className="group flex flex-col md:flex-row md:items-start gap-4 md:gap-24 border-t border-black/10 pt-8 md:pt-12 transition-all hover:border-[#FF6105] duration-500">
                            <span className="text-xl md:text-2xl font-mono text-[#FF6105]">0{i + 1}</span>
                            <div className="flex-1">
                                <h3 className="text-3xl md:text-6xl font-medium uppercase tracking-tight mb-4 md:mb-6 group-hover:text-[#FF6105] transition-colors duration-300">{v.title}</h3>
                            </div>
                            <div className="flex-1">
                                <p className="text-base md:text-xl text-black/60 leading-relaxed group-hover:text-black transition-colors duration-300">{v.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function PpcCTA() {
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
                        <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.9] mb-6">
                            Start Growing<br />With EEGNITE<br />Today
                        </h2>
                        <div className="h-2 w-24 bg-white rounded-full mt-8" />
                    </div>
                    <div className="flex flex-col justify-center h-full">
                        <h3 className="text-xl md:text-3xl font-medium mb-8 opacity-95 leading-tight">
                            A Result-focused PPC Services Agency
                        </h3>
                        <p className="text-white/90 text-base md:text-xl leading-relaxed mb-10 max-w-xl">
                            "A successful PPC campaign depends on a landing page that is designed to convert. At EEGNITE, we design and optimize PPC landing pages that align perfectly with your ads, messaging, and audience intent."
                        </p>
                        <div className="flex flex-wrap gap-6 items-center">
                            <a href="tel:+916289753474" className="px-10 py-5 bg-white text-black text-lg font-bold rounded-full hover:bg-black hover:text-white transition-colors duration-300 flex items-center gap-3 shadow-xl uppercase tracking-widest text-sm">
                                Schedule the Call Now <ArrowRight />
                            </a>
                            <Link href="/#contact" className="px-10 py-5 bg-transparent border-2 border-white text-white text-lg font-bold rounded-full hover:bg-white hover:text-[#FF6105] transition-colors duration-300 flex items-center gap-3 shadow-xl uppercase tracking-widest text-sm">
                                Request a Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-6 right-6 md:right-10 text-white/40 text-xs md:text-sm uppercase tracking-widest">
                From Kolkata to the World
            </div>
        </section>
    );
}

const ppcFaqs = [
    { q: "What can I expect from EEGNITE's PPC advertising services?", a: "When you choose EEGNITE's PPC services, you can expect a strategic, performance-focused approach built around your business goals. Our PPC experts plan and manage full-funnel campaigns that balance visibility, traffic quality, and conversions. From keyword research and ad creation to bidding, tracking, and optimization, every decision is backed by data. We always focus on turning ad spend into measurable growth, not just clicks, while keeping reporting transparent and easy to understand." },
    { q: "How much does it cost to run a PPC campaign with EEGNITE?", a: "The cost of PPC management at EEGNITE depends on factors such as your business goals, industry competition, target platforms, and monthly ad spend. We don't follow one-size-fits-all pricing. Instead, we create a tailored PPC plan that aligns with your budget and growth objectives. After understanding your requirements, our team recommends a transparent pricing structure designed to deliver the best possible returns." },
    { q: "How long does it take to see results from a PPC Ad campaign?", a: "PPC is one of the fastest digital marketing channels to generate visibility and traffic. With EEGNITE, you may start seeing early performance signals within the first few weeks of ad launch. However, meaningful and consistent results typically develop over 6 to 12 weeks as we analyze data, refine targeting, test ad variations, and optimize bids. This optimization phase ensures long-term efficiency, stronger conversions, and sustainable campaign performance." },
    { q: "Do people really click on PPC ads?", a: "Yes, PPC ads attract genuine clicks when they are well-targeted and relevant. Search ads appear precisely when users are actively looking for a product or service, which means the intent to act is already high. With strong ad copy, clear messaging, and proper targeting, PPC helps you reach ready-to-convert users and drive immediate, measurable business results." },
    { q: "Which is better: SEO or PPC?", a: "SEO and PPC serve different purposes and work best when used together. SEO is ideal for building long-term visibility, trust, and consistent organic traffic over time. PPC, on the other hand, delivers faster results by placing your business in front of high-intent users immediately. The right choice depends on your goals, timeline, and budget. At EEGNITE, we help businesses balance both strategies to drive short-term wins while building sustainable growth." },
    { q: "Where do PPC ads appear?", a: "PPC ads can appear across a wide range of digital platforms based on campaign goals and audience targeting. Common placements include search engine results pages, display networks, video platforms, and social media channels such as Facebook, Instagram, and LinkedIn. Ads may also appear on relevant third-party websites and mobile apps. The placements are selected strategically to reach the right audience, improve visibility, and drive meaningful engagement and conversions." },
];

export default function ServicePpc() {
    return (
        <main className="bg-white min-h-screen text-black font-sans selection:bg-[#FF6105] selection:text-white">
            <div className="relative z-10">
                <Navbar />
                <PpcHero />
                <IntroSection />
                <PpcComparisonSection />
                <IndustriesSection />
                <PartnerSection />
                <FullServicePPC />
                <PpcProcessFloating />
                <ProtocolTimeline />
                <ToolsSection />
                <WhyChooseSection />
                <ValuesSection />
                <Testimonials />

                <section className="py-16 md:py-32 bg-white px-4 md:px-6 border-t border-black/5">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-left mb-8 md:mb-16 text-black">
                            Common <span className="text-[#FF6105]">Questions</span>
                        </h2>
                        <div className="space-y-3 md:space-y-4">
                            {ppcFaqs.map((faq, idx) => (
                                <details key={idx} className="group bg-[#F9F9F9] p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] hover:bg-white border border-transparent hover:border-black/5 hover:shadow-xl transition-all cursor-pointer">
                                    <summary className="font-bold text-base md:text-lg lg:text-xl uppercase tracking-tight flex justify-between items-center list-none text-black">
                                        <span className="max-w-[90%]">{faq.q}</span>
                                        <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#FF6105] group-open:bg-[#FF6105] group-open:text-white transition-all">
                                            <ArrowRight className="group-open:rotate-90 transition-transform" size={20} />
                                        </span>
                                    </summary>
                                    <p className="mt-4 md:mt-6 text-black/60 leading-relaxed font-medium text-sm md:text-lg max-w-2xl">
                                        {faq.a}
                                    </p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                <PpcCTA />
            </div>
            <Footer />
        </main>
    );
}
