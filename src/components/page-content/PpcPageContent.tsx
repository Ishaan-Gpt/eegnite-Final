import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import {
    PpcHero,
    PpcComparisonSection,
    FullServicePPC,
    PpcProcessFloating,
    ProtocolTimeline,
    WhyChooseSection,
} from "@/components/page-content/PpcInteractive";
import { ToolsSection } from "@/components/shared/ToolsSection";

// --- STATIC SECTIONS ---

function IndustriesSection() {
    const industries = [
        { title: "E-commerce", desc: "Conversion-focused ads that increase sales fast.", href: "/industries/e-commerce" },
        { title: "B2B and Lead Gen", desc: "Targeted campaigns that fill your pipeline.", href: "/industries/b2b-lead-generation" },
        { title: "Medical and Healthcare", desc: "Trust-first ads that drive patient bookings.", href: "/industries/medical-healthcare" },
        { title: "Retail Business", desc: "Local campaigns that increase store visits.", href: "/industries/retail-business" },
        { title: "Manufacturing and Logistics", desc: "B2B ads that generate qualified enquiries.", href: "/industries/manufacturing-logistics" },
        { title: "Professional Services", desc: "High-converting ads for premium clients.", href: "/industries/professional-services" },
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
                            EEGNITE designs PPC advertising strategies that strengthen visibility and authority across these core sectors.
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
                        <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tighter leading-[1.0] mb-6">
                            START GROWING YOUR<br />BUSINESS WITH PPC<br />CAMPAIGNS BY<br />EEGNITE TODAY
                        </h2>
                        <div className="h-2 w-24 bg-white rounded-full mt-8" />
                    </div>
                    <div className="flex flex-col justify-center h-full">
                        <p className="text-white/90 text-base md:text-xl leading-relaxed mb-10 max-w-xl">
                            Your competitors are spending on ads right now. The question is whether they are spending smart. At EEGNITE, every campaign is built around your revenue goal and every rupee is accounted for. From Google Ads and Meta campaigns to LinkedIn and retargeting, we build PPC systems that turn your ad spend into growth you can see.
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

export const PPC_FAQS = [
    {
        q: "What Is PPC Advertising And How Does It Work?",
        a: "PPC (Pay-Per-Click) advertising is a digital marketing model where you pay each time someone clicks your ad. You set a budget, define your audience, and your ad appears when someone searches for your product or scrolls their social feed. At EEGNITE, every PPC campaign is built around a specific business outcome - leads, sales, or bookings — not just clicks."
    },
    {
        q: "How Much Does PPC Advertising Cost?",
        a: "PPC costs depend on your industry, competition, and chosen platform. For Google Ads, most small to mid-sized businesses see results starting at 5digits INR ad spend per month in ad spend. Meta Ads can start lower. LinkedIn Ads require higher minimum spend due to platform CPCs. At EEGNITE, we recommend a budget based on your revenue goal and the realistic cost per acquisition in your market."
    },
    {
        q: "How Long Before I See Results From PPC Campaigns?",
        a: "Google Search Ads can deliver leads within 24 to 48 hours of going live. Meta campaigns typically need 7 to 14 days for the algorithm's learning phase before performance stabilises. LinkedIn Ads show consistent lead quality after 2 to 4 weeks. EEGNITE sets clear expectations for each channel before campaigns launch. No guesswork. No surprises."
    },
    {
        q: "What Is ROAS And How Does EEGNITE Optimise For It?",
        a: "ROAS stands for Return on Ad Spend. A ROAS of 4x means you generate INR 4 in revenue for every INR 1 spent on ads. EEGNITE optimises ROAS through weekly creative A/B testing, audience refinement, landing page alignment, bidding strategy adjustments, and budget reallocation from underperforming to top-performing campaigns."
    },
    {
        q: "What Platforms Does EEGNITE Manage PPC Campaigns On?",
        a: "EEGNITE manages PPC campaigns across Google Search, Google Display, YouTube, Meta (Facebook and Instagram), LinkedIn, and cross-channel retargeting. Channel selection is based on your audience, goals, and budget. We recommend the platforms where your buyers actually are, not the platforms that are easiest to manage."
    },
    {
        q: "How Does EEGNITE Track And Report Campaign Performance?",
        a: "We build full measurement infrastructure before campaigns launch: pixel setup, conversion event tracking, UTM parameters, and custom dashboards. Weekly performance updates. Monthly reports covering cost per lead, ROAS, conversions, and budget allocation. You always know exactly what your investment is delivering."
    },
    {
        q: "Can EEGNITE Run PPC Ads For Businesses Outside India?",
        a: "Yes. EEGNITE manages paid advertising campaigns for clients across India, the United States, Europe, and the Middle East. We adapt bidding strategies, ad copy, and audience targeting to each market's competitive landscape and buyer behaviour. Global campaigns get the same accountability we bring to every local campaign."
    },
    {
        q: "Does EEGNITE Handle Ad Creative As Well As Campaign Management?",
        a: "Yes. EEGNITE provides full-service PPC management including ad creative — copy, static visuals, and video ad briefs. Creative and campaign strategy are managed together, which means your messaging, visuals, and targeting are fully aligned. This consistency improves Quality Scores on Google, lowers CPCs, and improves conversion rates across every platform."
    }
];

const ppcFaqs = PPC_FAQS;

export default function ServicePpc() {
    return (
        <main className="bg-white min-h-screen text-black font-sans selection:bg-[#FF6105] selection:text-white">
            <div className="relative z-10">
                <Navbar />
                <PpcHero />
                <PpcComparisonSection />
                <IndustriesSection />
                <FullServicePPC />
                <PpcProcessFloating />
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
