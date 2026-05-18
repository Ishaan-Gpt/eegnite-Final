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

// --- STATIC SECTIONS (no client APIs needed) ---

function IndustriesSection() {
    const industries = [
        { title: "Healthcare & Home Services", desc: "Local clinics & home service firms." },
        { title: "Shopify & Retail", desc: "Scalable e-commerce growth strategies." },
        { title: "B2B & Logistics", desc: "Local search intent and authority." },
        { title: "AI & SaaS Firms", desc: "Technical SEO for software companies." },
        { title: "Professional Services", desc: "Authority building & expert profiling." },
        { title: "Industrial & Manufacturing", desc: "Global supply chain visibility." },
    ];

    return (
        <section className="py-16 md:py-24 bg-white border-y border-black/5">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tighter text-black mb-4">
                            Industries <br /><span className="text-[#FF6105]">We Power</span>
                        </h2>
                        <p className="text-black/50 text-base md:text-xl leading-relaxed">
                            EEGNITE designs strategies that strengthen visibility and build authority across these core sectors.
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
        { name: "Google Analytics", src: "/icons/google-analytics.png" },
        { name: "Google Search Console", src: "/icons/google.png" },
        { name: "SemRush", src: "/icons/semrush.png" },
        { name: "Ahref", src: "/icons/ahrefs.png" },
        { name: "SE Ranking", src: null },
        { name: "Keyword Planner", src: "/icons/google-ads.png" },
        { name: "Google Tag Manager", src: "/icons/gtm.png" },
    ];

    return (
        <section className="py-20 md:py-32 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 mb-12 md:mb-16">
                <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-black">
                    Tools We <span className="text-[#FF6105]">Use</span>
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
                                        <span className="text-xs font-bold text-[#FF6105] text-center leading-tight">{tool.name}</span>
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
        { title: "INTEGRITY", desc: "We tell you what works, what does not, and what your brand truly needs. Transparent communication and honest strategies are at the core of every decision we make." },
        { title: "TEAMWORK", desc: "Strategists, designers, creators, and specialists working as one dedicated team for your brand. Every campaign is built through collaboration, consistency, and shared goals." },
        { title: "EXCELLENCE", desc: "Average is never the target. Every strategy, campaign, and deliverable is crafted to create impact, drive results, and set a higher standard for your brand." },
    ];

    return (
        <section className="bg-white text-black py-20 md:py-32 px-4 md:px-6 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-12 md:mb-24 text-left md:text-center">
                    <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tighter leading-none mb-8 md:mb-12 text-left md:text-center">
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
                        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.9] mb-6">
                            START GROWING<br />YOUR ORGANIC<br />SEARCH PRESENCE<br />WITH EEGNITE
                        </h2>
                        <div className="h-2 w-24 bg-white rounded-full mt-8" />
                    </div>
                    <div className="flex flex-col justify-center h-full">
                        <p className="text-white/90 text-base md:text-xl leading-relaxed mb-10 max-w-xl">
                            Your buyers are searching for what you offer right now. The question is whether your brand appears when they do. Let EEGNITE build the SEO strategy that puts you there and keeps you there. Technical precision, content authority, and link building — all managed as one integrated programme that compounds in value over time.
                        </p>
                        <div className="flex flex-wrap gap-6 items-center">
                            <a href="/#contact" className="px-10 py-5 bg-white text-black text-lg md:text-xl font-bold rounded-full hover:bg-black hover:text-white transition-colors duration-300 flex items-center gap-3 shadow-xl">
                                Book a Free SEO Discovery Call <ArrowRight />
                            </a>
                            <a href="/#contact" className="px-10 py-5 bg-transparent border-2 border-white text-white text-lg md:text-xl font-bold rounded-full hover:bg-white hover:text-[#FF6105] transition-colors duration-300 flex items-center gap-3 shadow-xl">
                                Request a Quote
                            </a>
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

const faqs = [
    { q: "How Does SEO Work?", a: "SEO works by helping search engines understand your website and match it with what users are searching for. It involves improving site structure, content relevance, and technical performance, along with building credibility through off-page signals. When done consistently, SEO improves visibility, attracts the right audience, and increases organic traffic over time." },
    { q: "How Long Does SEO Take To Show Results?", a: "SEO is a gradual process, not an instant result. Most websites start seeing improvements within 3 to 6 months, depending on keyword competition, industry, and current website health. Highly competitive keywords or new websites may take longer, while local searches can show results sooner." },
    { q: "What Are The Different Types Of SEO Services?", a: "SEO services typically include on-page SEO, technical SEO, and off-page SEO. On-page SEO focuses on optimizing content and website elements, technical SEO improves site performance and crawlability, and off-page SEO builds authority through links and brand mentions." },
    { q: "How Much Does SEO Cost?", a: "SEO costs vary based on your business goals, competition, website size, and the scope of work required. For most businesses, our comprehensive monthly retention starts from $1,500. This covers complete campaign ownership — including strategy, technical audits, content creation, and active link acquisition." },
    { q: "What Is Local SEO And How Does It Help My Business?", a: "Local SEO helps businesses get discovered by customers searching nearby. It improves visibility on Google Map pack and local search results, attracts high-intent local traffic, and increases chances of calls, visits, and enquiries. It turns online searches into nearby customers." },
    { q: "Can You Perform An SEO Audit On My Website?", a: "Yes. We conduct detailed SEO audits that review your website's technical setup, content quality, on-page elements, and search performance. The audit highlights keywords gaps, new opportunities, and clear next steps, helping you understand what's holding your site back." },
    { q: "How Does EEGNITE Measure SEO Performance?", a: "At EEGNITE, data guides every SEO decision we make. We track keyword performance, user behavior, and conversion paths to understand what's driving real results. By connecting SEO activity with measurable business outcomes, we help you clearly see how organic traffic turns into leads, sales, and long-term growth rather than just simple metrics." },
    { q: "Do You Offer SEO Services For Businesses Outside India?", a: "Yes. While we are based in Kolkata, we service clients across India, the Middle East, and other European regions to grow faster, smarter, and stronger." },
];

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
