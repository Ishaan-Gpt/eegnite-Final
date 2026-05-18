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
        { title: "E-commerce", desc: "SEO strategies that drive product visibility and sales." },
        { title: "B2B and Lead Gen", desc: "Search visibility that attracts qualified leads." },
        { title: "Medical and Healthcare", desc: "Trust-focused SEO that increases appointments." },
        { title: "Retail Business", desc: "Local SEO that boosts footfall and sales." },
        { title: "Manufacturing and Logistics", desc: "Industry SEO that generates enquiries." },
        { title: "Professional Services", desc: "Authority-driven SEO that attracts ideal clients." },
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
        { title: "Integrity", desc: "We believe in brutal honesty. If a strategy isn't working, we tell you. If an SEO goal is unrealistic, we correct it. You'll always receive candid recommendations." },
        { title: "Teamwork", desc: "EEGNITE is not a freelancer; we are a dedicated engineering team. Senior strategists, technical leads, and content creators work in unison on your project." },
        { title: "Excellence", desc: "Good enough is not enough. We aim for uncompromised quality in every audit, every line of code, and every piece of content. We set the standard." },
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
                            Start Growing<br />With EEGNITE<br />Today
                        </h2>
                        <div className="h-2 w-24 bg-white rounded-full mt-8" />
                    </div>
                    <div className="flex flex-col justify-center h-full">
                        <h3 className="text-xl md:text-3xl font-medium mb-8 opacity-95 leading-tight">
                            A Result-focused SEO Services Agency
                        </h3>
                        <p className="text-white/90 text-base md:text-xl leading-relaxed mb-10 max-w-xl">
                            Your customers are already searching for what you offer. Let EEGNITE, a trusted India-based SEO company, ensure they find you first.
                            <br /><br />
                            From technical optimization to content strategy and local visibility, we help businesses across India, the Middle East, and other European regions to grow faster, smarter, and stronger.
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
    { q: "How does SEO work?", a: "SEO works by helping search engines understand your website and match it with what users are searching for. It involves improving site structure, content relevance, and technical performance, along with building credibility through off-page signals. When done consistently, SEO improves visibility, attracts the right audience, and increases organic traffic over time." },
    { q: "What are the different types of SEO Services?", a: "SEO services typically include on-page SEO, technical SEO, and off-page SEO. On-page SEO focuses on optimizing content and website elements, technical SEO improves site performance and crawlability, and off-page SEO builds authority through links and brand mentions." },
    { q: "How do I analyze which type of SEO I need?", a: "The right type of SEO depends on your business goals, target audience, and current website performance. Local SEO suits businesses serving specific locations, eCommerce SEO supports online product sales, and enterprise SEO works best for large websites. A professional SEO audit helps identify gaps." },
    { q: "Can you perform an SEO audit on my website?", a: "Yes. We conduct detailed SEO audits that review your website's technical setup, content quality, on-page elements, and search performance. The audit highlights keywords gaps, new opportunities, and clear next steps, helping you understand what's holding your site back." },
    { q: "How long will it take to see better rankings on Google?", a: "SEO is a gradual process, not an instant result. Most websites start seeing improvements within 3 to 6 months, depending on keyword competition, industry, and current website health. Highly competitive keywords or new websites may take longer, while local searches can show results sooner." },
    { q: "What is Ecommerce SEO?", a: "Ecommerce SEO focuses on optimizing online stores to improve product visibility in search results. It includes optimizing product pages, categories, site structure, page speed, and content so customers can easily find your products. When done right, ecommerce SEO helps attract high-intent shoppers." },
    { q: "How can local SEO services help businesses?", a: "Local SEO helps businesses get discovered by customers searching nearby. It improves visibility on Google Map pack and local search results, attracts high-intent local traffic, and increases chances of calls, visits, and enquiries. It turns online searches into nearby customers." },
    { q: "How much does an SEO Service Cost?", a: "SEO costs vary based on your business goals, competition, website size, and the scope of work required. Pricing can range from basic monthly packages to customized strategies for competitive markets. A reliable SEO service provider usually offers flexible plans focused on long-term value and measurable growth." },
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
                        <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-left mb-8 md:mb-16 text-black">
                            Common <span className="text-[#FF6105]">Questions</span>
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
