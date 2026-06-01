import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import {
    SeoHero,
    SeoComparisonSection,
    FullServiceSEO,
    SeoProcessFloating,
    ProtocolTimeline,
    WhyChooseSection,
} from "@/components/page-content/SeoInteractive";
import { ToolsSection } from "@/components/shared/ToolsSection";

// --- STATIC SECTIONS (no client APIs needed) ---

function IndustriesSection() {
    const industries = [
        { title: "E-commerce", desc: "SEO strategies that drive product visibility and sales.", href: "/industries/e-commerce" },
        { title: "B2B and Lead Gen", desc: "Search visibility that attracts qualified leads.", href: "/industries/b2b-lead-generation" },
        { title: "Medical and Healthcare", desc: "Trust-focused SEO that increases appointments.", href: "/industries/medical-healthcare" },
        { title: "Retail Business", desc: "Local SEO that boosts footfall and sales.", href: "/industries/retail-business" },
        { title: "Manufacturing and Logistics", desc: "Industry SEO that generates enquiries.", href: "/industries/manufacturing-logistics" },
        { title: "Professional Services", desc: "Authority-driven SEO that attracts ideal clients.", href: "/industries/professional-services" },
    ];

    return (
        <section className="py-16 md:py-24 bg-white border-y border-black/5">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-black mb-4 leading-tight">
                            MARKETS WE LEAD. <br /><span className="text-[#FF6105]">INDUSTRIES WE SCALE</span>
                        </h2>
                        <p className="text-black/50 text-base md:text-xl leading-relaxed">
                            EEGNITE designs SEO strategies that strengthen visibility and authority across these core sectors.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8 w-full border-l md:border-l-0 md:pl-0 pl-6 border-black/5">
                        {industries.map((item, idx) => (
                            <Link key={idx} href={item.href} className="group block">
                                <h3 className="text-lg md:text-xl font-bold uppercase text-black mb-1 transition-colors group-hover:text-[#FF6105] inline-flex items-center gap-1.5">
                                    {item.title}
                                    <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#FF6105]" />
                                </h3>
                                <p className="text-black/50 text-sm leading-relaxed">{item.desc}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}



function ValuesSection() {
    const values = [
        { title: "INTEGRITY", desc: "We tell you what works, what does not, and what your brand truly needs. Transparent communication and honest strategies are at the core of every decision we make." },
        { title: "TEAMWORK", desc: "Strategists, designers, creators, and specialists working as one dedicated team for your brand. Every campaign is built through collaboration, consistency, and shared goals." },
        { title: "EXCELLENCE", desc: "Average is never the target. Every strategy, campaign, and deliverable is crafted to create impact, drive results, and set a higher standard for your brand." },
    ];

    return (
        <section className="bg-white text-black py-20 md:py-32 px-4 md:px-6 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-12 md:mb-24 text-left md:text-center">
                    <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tighter leading-none mb-8 md:mb-12">
                        POWERED BY <span className="text-[#FF6105]">VALUES</span>
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

function GrowthCTA() {
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
                        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-[1] mb-6">
                            START GROWING YOUR <br />ORGANIC SEARCH <br />PRESENCE WITH EEGNITE
                        </h2>
                        <div className="h-2 w-24 bg-white rounded-full mt-8" />
                    </div>
                    <div className="flex flex-col justify-center h-full">
                        <p className="text-white/90 text-base md:text-xl leading-relaxed mb-10 max-w-xl">
                            Your buyers are searching for what you offer right now. The question is whether your brand appears when they do. Let EEGNITE build the SEO strategy that puts you there and keeps you there. Technical precision, content authority, and link building — all managed as one integrated programme that compounds in value over time.
                        </p>
                        <div className="flex flex-wrap gap-6 items-center">
                            <Link href="/#contact" className="px-10 py-5 bg-white text-black text-lg md:text-xl font-bold rounded-full hover:bg-black hover:text-white transition-colors duration-300 flex items-center gap-3 shadow-xl">
                                Book a Free SEO Discovery Call <ArrowRight />
                            </Link>
                            <Link href="/#contact" className="px-10 py-5 bg-transparent border-2 border-white text-white text-lg md:text-xl font-bold rounded-full hover:bg-white hover:text-[#FF6105] transition-colors duration-300 flex items-center gap-3 shadow-xl">
                                Request a Quote
                            </Link>
                            <span className="text-sm uppercase tracking-widest font-medium opacity-80">Turn rankings into revenue</span>
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

export const SEO_FAQS = [
    { q: "How Does Seo Work?", a: "SEO (Search Engine Optimisation) is the process of improving your website so it appears higher in search engine results when people search for products or services you offer. It works across three areas: technical SEO (site structure and speed), on-page SEO (content and keyword alignment), and off-page SEO (backlinks and authority). EEGNITE addresses all three as one integrated programme." },
    { q: "How Long Does Seo Take To Show Results?", a: "Most businesses start seeing meaningful movement in rankings and organic traffic within 3 to 6 months of consistent SEO work. The timeline depends on your industry, competition level, current website health, and the gap between where you are and where you want to rank. EEGNITE sets realistic milestone expectations from day one and reports on progress every month." },
    { q: "What Are The Different Types Of Seo Services?", a: "SEO covers several disciplines: technical SEO (crawlability, speed, structured data), on-page SEO (content, keywords, meta tags), off-page SEO (link building, digital PR), local SEO (Google Business Profile, local citations), e-commerce SEO (product and category page optimisation), and content SEO (topic clusters, blog strategy). EEGNITE builds programmes that address all relevant areas for your specific business goals." },
    { q: "How Much Does Seo Cost?", a: "SEO investment varies based on the scope of work, your industry's competitiveness, and your growth targets. For most small to mid-sized businesses, a results-focused SEO retainer starts from $250 per month. For competitive industries or aggressive growth targets, investment is higher. EEGNITE proposes scope and pricing after understanding your goals — not from a generic price list." },
    { q: "What Is Local Seo And How Does It Help My Business?", a: "Local SEO is the process of optimising your online presence to appear in search results when people in your area search for businesses like yours. It covers Google Business Profile optimisation, local citation building, location-specific landing pages, and geo-targeted keyword strategies. For any business that serves local customers — clinics, restaurants, retailers, service providers — local SEO is one of the highest-ROI investments available." },
    { q: "Can You Perform An Seo Audit On My Website?", a: "Yes. An SEO audit is the first step in every EEGNITE SEO engagement. We review your site's technical health, on-page optimisation, content quality, backlink profile, keyword rankings, and competitor positioning. The audit identifies what is holding your rankings back and what the fastest path to improvement looks like. We share full audit findings before proposing any ongoing work." },
    { q: "How Does EEGNITE Measure Seo Performance?", a: "We track keyword ranking movement, organic traffic growth, leads attributed to organic search, bounce rate improvements, and revenue from SEO. Using Google Search Console, GA4, and custom reporting dashboards, we report on the metrics that connect your SEO investment to your business outcomes. Monthly reports include progress against targets and clear next steps." },
    { q: "Do You Offer Seo Services For Businesses Outside India?", a: "Yes. EEGNITE provides SEO services for clients across India, the United States, Europe, and the Middle East. We build market-specific keyword strategies, content plans, and link building programmes that reflect the search behaviour and competitive landscape of each region. Whether you are targeting buyers in Kolkata, London, Dubai, or Chicago, our SEO strategies are built to rank in your specific market." },
];

const faqs = SEO_FAQS;

export default function ServiceSeo() {
    return (
        <main className="bg-white min-h-screen text-black font-sans selection:bg-[#FF6105] selection:text-white">
            <div className="relative z-10">
                <Navbar />
                <SeoHero />
                <SeoComparisonSection />
                <IndustriesSection />
                <FullServiceSEO />
                <SeoProcessFloating />
                <ProtocolTimeline />
                <ToolsSection />
                <WhyChooseSection />
                <ValuesSection />
                <Testimonials />

                <section className="py-16 md:py-32 bg-white px-4 md:px-6 border-t border-black/5">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-left md:text-center mb-8 md:mb-16 text-black">
                            YOUR QUESTIONS. <span className="text-[#FF6105]">STRAIGHT ANSWERS.</span>
                        </h2>
                        <div className="space-y-3 md:space-y-4">
                            {faqs.map((faq, idx) => (
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

                <GrowthCTA />
            </div>
            <Footer />
        </main>
    );
}
