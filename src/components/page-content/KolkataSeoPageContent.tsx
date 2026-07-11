"use client";

import * as React from "react";
import Navbar from "@/components/Navbar";
import { FloatingIconsHero } from "@/components/ui/floating-icons-hero-section";
import { ClientLogoSlider } from "@/components/shared/ClientLogoSlider";
import { IndustryProblemSolution } from "@/components/shared/IndustryProblemSolution";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionDiv = motion.div as any;

// Custom inline SVGs to avoid importing lucide-react (keeping bundle lightweight)
const CustomXIcon = (props: any) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        {...props}
    >
        <circle cx="12" cy="12" r="10" />
        <line x1="15" y1="9" x2="9" y2="15" />
        <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
);

const CustomCheckIcon = (props: any) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        {...props}
    >
        <circle cx="12" cy="12" r="10" />
        <polyline points="22 4 12 14 9 11" />
    </svg>
);

const absoluteIcons = [
    { id: 1, src: '/images/icons/meta.png', alt: 'Meta Ads', className: 'top-[8%] right-[5%]' },
    { id: 2, src: '/images/icons/google.png', alt: 'Google', className: 'top-[12%] left-[8%]' },
    { id: 3, src: '/images/icons/google-analytics.png', alt: 'Google Analytics', className: 'top-[45%] left-[3%]' },
    { id: 4, src: '/images/icons/hubspot.png', alt: 'HubSpot', className: 'top-[50%] right-[5%]' },
    { id: 5, src: '/images/icons/gtm.png', alt: 'Google Tag Manager', className: 'bottom-[15%] left-[10%]' },
    { id: 6, src: '/images/icons/semrush.png', alt: 'SEMrush', className: 'bottom-[12%] right-[8%]' },
    { id: 7, src: '/images/icons/klaviyo.png', alt: 'Klaviyo', className: 'top-[5%] left-[35%] hidden md:block' },
    { id: 8, src: '/images/icons/google-ads.png', alt: 'Google Ads', className: 'top-[20%] right-[20%] hidden md:block' },
    { id: 9, src: '/images/icons/figma.png', alt: 'Figma', className: 'top-[25%] left-[15%] hidden md:block' },
    { id: 10, src: '/images/icons/excel.png', alt: 'Excel', className: 'top-[40%] right-[15%] hidden md:block' },
    { id: 11, src: '/images/icons/wordpress.png', alt: 'WordPress', className: 'top-[70%] left-[20%] hidden md:block' },
    { id: 12, src: '/images/icons/powerbi.png', alt: 'Power BI', className: 'top-[65%] right-[25%] hidden md:block' },
    { id: 13, src: '/images/icons/woocommerce.png', alt: 'WooCommerce', className: 'bottom-[10%] left-[35%] hidden md:block' },
    { id: 14, src: '/images/icons/linkedin.png', alt: 'LinkedIn', className: 'top-[35%] left-[5%] hidden md:block' },
    { id: 15, src: '/images/icons/windy.png', alt: 'Windy', className: 'top-[30%] right-[8%] hidden md:block' },
];

const kolkataSeoProblems = [
    {
        icon: CustomXIcon as any,
        title: "Technical Issues Search Engines and AI Cannot Get Past",
        desc: "Slow servers, broken internal links, and poor mobile performance mean Google cannot properly crawl your site. Without clean schema markup, LLMs also fail to interpret and trust your data."
    },
    {
        icon: CustomXIcon as any,
        title: "Content That Misses Search Intent and LLM Context",
        desc: "Pages are written about your business, not what customers actually type into Google or ask ChatGPT. If your content lacks depth and entity-clear structures, AI systems will bypass you entirely."
    },
    {
        icon: CustomXIcon as any,
        title: "Zero Local SEO and AI Visibility Foundation",
        desc: "No optimised Google Business Profile, no local citations, and no location pages. Without these, you remain invisible to 'near me' mobile searches, Google Maps, and location-aware AI Overviews."
    },
    {
        icon: CustomXIcon as any,
        title: "No Authority or AI Trust Signals",
        desc: "Search engines and LLMs only recommend brands they trust. Without quality backlinks, digital citations, and consistent topical authority, your site lacks the credibility needed to be cited as a top source."
    }
];

const kolkataSeoSolutions = [
    {
        icon: CustomCheckIcon as any,
        title: "Full Technical SEO and AI-Readiness Audit",
        desc: "We resolve speed, crawlability, mobile usability, and schema markup. This builds a rock-solid foundation so both traditional search crawlers and AI models can easily read, index, and trust your website."
    },
    {
        icon: CustomCheckIcon as any,
        title: "Search-Intent and LLM Content Strategy",
        desc: "We research exactly how your Kolkata customers search; whether through keywords or conversational AI prompts - and build deep, entity-optimised content that answers those specific queries."
    },
    {
        icon: CustomCheckIcon as any,
        title: "Local SEO and Map Pack Optimisation",
        desc: "We optimise your Google Business Profile, build Kolkata-specific directory citations, and design location pages to secure your spot in local map packs and location-based AI search results."
    },
    {
        icon: CustomCheckIcon as any,
        title: "Authority Building and AI Citation Growth",
        desc: "We execute outreach-based link building from relevant, trustworthy sources. This drives up your traditional domain authority while establishing your brand as a highly credible, cited source across AI platforms."
    }
];

const kolkataSeoFaqItems = [
    {
        question: "How much do EEGNITE’s SEO services cost in Kolkata?",
        answer: "Our SEO services in Kolkata start at ₹25,000 per month. The final investment depends on your business goals, competition, website health, and growth requirements. After an initial audit, EEGNITE creates a tailored SEO roadmap and pricing structure designed around your specific needs.",
        category: "Pricing"
    },
    {
        question: "How long does SEO take to show results in Kolkata?",
        answer: "Most Kolkata businesses see meaningful movement in rankings and organic traffic within 3 to 5 months, depending on the competition level. Local SEO improvements, such as Google Business Profile optimisation, can show results faster, often within 4 to 8 weeks.",
        category: "Timeline"
    },
    {
        question: "Is local SEO different from regular SEO?",
        answer: "Yes. Local SEO focuses on visibility for location-based searches, such as 'near me' queries and Google Maps results, while regular SEO focuses on broader organic rankings. For most Kolkata businesses, both are needed together for full visibility.",
        category: "Difference"
    },
    {
        question: "Can EEGNITE fix a website that already has SEO problems?",
        answer: "Yes. A large part of our work in Kolkata involves auditing existing websites, identifying what previous SEO efforts missed or did incorrectly, and rebuilding the strategy on a stronger technical and content foundation.",
        category: "Audit & Fix"
    },
    {
        question: "Do you only work with businesses based in Kolkata?",
        answer: "No. While this page focuses on Kolkata, EEGNITE provides SEO services across India and internationally. Kolkata-based businesses benefit from our understanding of the local market alongside our broader SEO expertise.",
        category: "Availability"
    }
];

export default function KolkataSeoPageContent() {
    return (
        <main className="w-full bg-[#FFFEF8] text-[#2A1810]">
            <Navbar />

            {/* HERO BANNER SECTION */}
            <FloatingIconsHero
                topText={
                    <span className="text-[#E86A00] font-bold text-xs uppercase tracking-widest bg-[#E86A00]/5 px-3 py-1.5 rounded-full border border-[#E86A00]/10 inline-block mb-4">
                        Be Visible To Search Engines, LLMs and Customers
                    </span>
                }
                title="AI-POWERED SEO SERVICES IN KOLKATA - BUILT TO GET YOU FOUND, CHOSEN, AND BOOKED"
                subtitle="EEGNITE delivers SEO services in Kolkata built around one outcome: more qualified traffic that turns into enquiries. We align local SEO, technical fixes, search-intent content, and link building into a single system, ensuring your business ranks where your customers are searching; whether on traditional Google search or through emerging AI and LLM assistants."
                ctaText="START YOUR PROJECT"
                ctaHref="#contact"
                icons={absoluteIcons}
            />

            {/* LOGO SLIDE OUR CLIENTS SECTION */}
            <ClientLogoSlider 
                heading={
                    <>
                        Brands That Choose Growth. <br className="hidden md:inline" />
                        Brands That Choose <span className="text-[#E86A00]">EEGNITE</span>
                    </>
                }
            />

            {/* WARNING SIGNS SECTION */}
            <section className="py-16 md:py-24 bg-[#FFFEF8] px-4 md:px-6 border-b border-[#EAE7E0]">
                <div className="max-w-[1400px] mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold uppercase tracking-tight leading-[1.1] text-[#2A1810] mb-4">
                            SIGNS YOUR KOLKATA BUSINESS <br className="hidden md:inline" />
                            NEEDS SEO <span className="text-[#E86A00]">RIGHT NOW</span>
                        </h2>
                        <p className="text-[#6B5545] text-sm md:text-base font-medium leading-relaxed">
                            If any of these sound familiar, SEO is not optional. It is overdue.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {[
                            "Your website gets traffic but zero enquiries or calls.",
                            "Leads stop completely the moment your ad budget ends.",
                            "Competitors dominate Google Maps, ChatGPT, and Gemini recommendations.",
                            "Outdated websites get ignored by Google and AI models.",
                            "You lack a permanent, compounding source of organic traffic.",
                            "New Kolkata locations remain completely invisible to local buyers."
                        ].map((sign, idx) => (
                            <MotionDiv 
                                key={idx}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.05 }}
                                className="bg-[#F5F3EE] p-6 rounded-2xl border border-[#EAE7E0] hover:border-[#E86A00]/40 transition-all duration-300 group flex items-start gap-4"
                            >
                                <span className="text-[#E86A00] font-bold text-lg bg-[#E86A00]/10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                                    {idx + 1}
                                </span>
                                <p className="text-[#2A1810] text-sm md:text-base font-medium leading-relaxed pt-0.5">
                                    {sign}
                                </p>
                            </MotionDiv>
                        ))}
                    </div>
                </div>
            </section>

            {/* PAIN POINTS AND EEGNITE SOLUTION */}
            <IndustryProblemSolution
                problemsTitle="REAL CAUSE BEHIND YOUR KOLKATA BUSINESS SEO PROBLEM"
                problemsSubtitle="Most SEO problems are not visible on the surface. They are structural, keeping you hidden from both search engines and AI engines."
                solutionsTitle="HOW EEGNITE FIXES IT"
                solutionsSubtitle="Every fix is tied to a ranking, traffic, and AI-visibility outcome, not a checklist item."
                problems={kolkataSeoProblems}
                solutions={kolkataSeoSolutions}
            />

            {/* OPPORTUNITY SECTION */}
            <section className="py-16 md:py-24 bg-[#F5F3EE] px-4 md:px-6 border-y border-[#EAE7E0]">
                <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-10 md:gap-14 items-center">
                    <div className="lg:col-span-7">
                        <h2 className="text-2xl sm:text-3xl md:text-[2.75rem] font-bold uppercase tracking-tight leading-[1.1] mb-6 text-[#2A1810]">
                            The SEO Opportunity in Kolkata <span className="text-[#E86A00]">Right Now</span>
                        </h2>
                        <p className="text-[#6B5545] text-sm md:text-base leading-relaxed mb-4">
                            Kolkata's digital search volume is growing faster than the number of businesses optimising for it. That gap is your opportunity.
                        </p>
                        <p className="text-[#6B5545] text-sm md:text-base leading-relaxed mb-4">
                            Areas like Salt Lake, New Town, Park Street, Behala, and Howrah are seeing rising search volume for local services, but most local businesses still rely on outdated directory listings or no online presence at all.
                        </p>
                        <p className="text-[#6B5545] text-sm md:text-base leading-relaxed">
                            Ranking now, while competition is still low relative to demand, gives your business a compounding advantage that gets harder to replicate every month a competitor delays.
                        </p>
                    </div>
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        <div className="bg-[#FFFEF8] p-8 rounded-2xl border border-[#EAE7E0] flex flex-col gap-2">
                            <span className="text-4xl md:text-5xl font-extrabold text-[#E86A00] tracking-tight">3.5x</span>
                            <span className="text-sm font-semibold uppercase text-[#6B5545] tracking-wider">leads growth</span>
                            <p className="text-[#2A1810] text-sm font-medium leading-normal">
                                generated by businesses with strong digital visibility versus those without.
                            </p>
                        </div>
                        <div className="bg-[#FFFEF8] p-8 rounded-2xl border border-[#EAE7E0] flex flex-col gap-2">
                            <span className="text-4xl md:text-5xl font-extrabold text-[#E86A00] tracking-tight">63%</span>
                            <span className="text-sm font-semibold uppercase text-[#6B5545] tracking-wider">online research</span>
                            <p className="text-[#2A1810] text-sm font-medium leading-normal">
                                of consumers research a business online before visiting or contacting it.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES IN DETAIL */}
            <section className="py-16 md:py-24 bg-[#FFFEF8] px-4 md:px-6">
                <div className="max-w-[1400px] mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold uppercase tracking-tight leading-[1.1] text-[#2A1810] mb-4">
                            EEGNITE SEO SERVICES FOR <span className="text-[#E86A00]">KOLKATA BUSINESSES</span>
                        </h2>
                        <p className="text-[#6B5545] text-sm md:text-base font-medium leading-relaxed">
                            Each part of our SEO service is built to solve a specific gap in your current search visibility.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
                        {[
                            {
                                num: "01",
                                title: "KEYWORD RESEARCH AND COMPETITOR ANALYSIS",
                                desc: "We identify the keywords and AI-driven search opportunities your customers use, helping you outrank competitors and stay visible across Google and AI platforms that influence buying decisions."
                            },
                            {
                                num: "02",
                                title: "LOCAL SEO & GOOGLE MAPS PACK OPTIMISATION",
                                desc: "We optimise your Google Business Profile, Kolkata-specific directories, and location pages. This drives higher visibility in local search, Google Maps, AI Overviews, and AI-powered search engines."
                            },
                            {
                                num: "03",
                                title: "TECHNICAL SEO AUDIT AND SOLUTIONS",
                                desc: "We fix site speed, mobile usability, schema, and crawlability. This solid technical foundation ensures traditional search engines and AI models easily understand, index, and trust your website."
                            },
                            {
                                num: "04",
                                title: "CONTENT OPTIMISATION & LLM STRATEGY",
                                desc: "We build demand-driven pages optimised for traditional rankings and AI answers. By strengthening entities and topical authority, we boost your visibility across Google, ChatGPT, and Gemini."
                            },
                            {
                                num: "05",
                                title: "LINK BUILDING AND CITATION GROWTH",
                                desc: "We acquire high-quality, relevant backlinks through targeted outreach. This strengthens your domain authority, drives higher search rankings, and establishes your brand as a trusted source for AI systems."
                            }
                        ].map((srv, idx) => (
                            <MotionDiv 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.05 }}
                                className="bg-[#F5F3EE] p-8 rounded-2xl border border-[#EAE7E0] hover:border-[#E86A00]/40 transition-all duration-300 flex flex-col h-full"
                            >
                                <span className="text-xs font-bold text-[#E86A00] uppercase tracking-wider mb-6 block bg-[#E86A00]/10 px-3 py-1 rounded-full self-start">
                                    Service {srv.num}
                                </span>
                                <h3 className="text-lg md:text-xl font-bold uppercase tracking-tight text-[#2A1810] mb-4">
                                    {srv.title}
                                </h3>
                                <p className="text-[#6B5545] text-sm md:text-base leading-relaxed">
                                    {srv.desc}
                                </p>
                            </MotionDiv>
                        ))}
                    </div>

                    <div className="bg-[#F5F3EE] p-6 md:p-8 rounded-2xl border border-[#EAE7E0] flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-between max-w-4xl mx-auto">
                        <p className="text-sm md:text-base text-[#2A1810] font-semibold leading-relaxed text-center md:text-left">
                            Want to see exactly how our SEO process works step by step? Explore our full services page.
                        </p>
                        <Link 
                            href="/services/seo/"
                            className="bg-[#E86A00] text-white hover:bg-[#C44800] px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-colors duration-200 whitespace-nowrap"
                        >
                            Explore Our SEO Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* INDUSTRIES WE SERVE */}
            <section className="py-16 md:py-24 bg-[#F5F3EE] px-4 md:px-6 border-y border-[#EAE7E0]">
                <div className="max-w-[1400px] mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold uppercase tracking-tight leading-[1.1] text-[#2A1810] mb-4">
                            INDUSTRIES WE HELP <span className="text-[#E86A00]">GROW IN KOLKATA</span>
                        </h2>
                        <p className="text-[#6B5545] text-sm md:text-base font-medium leading-relaxed">
                            Our SEO strategies are tailored to the buyer journey, competitive environment, and growth objectives of each industry we serve.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                        {[
                            "E-COMMERCE",
                            "B2B & LEAD GENERATION",
                            "MEDICAL & HEALTHCARE",
                            "RETAIL BUSINESSES",
                            "MANUFACTURING & LOGISTICS",
                            "PROFESSIONAL SERVICES"
                        ].map((ind, idx) => (
                            <div 
                                key={idx}
                                className="bg-[#FFFEF8] p-6 rounded-xl border border-[#EAE7E0] hover:border-[#E86A00]/40 transition-colors duration-200 flex flex-col justify-center items-center text-center shadow-sm"
                            >
                                <span className="text-[#E86A00] text-2xl mb-3">★</span>
                                <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-[#2A1810]">
                                    {ind}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHAT YOU CAN EXPECT */}
            <section className="py-16 md:py-24 bg-[#FFFEF8] px-4 md:px-6">
                <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-10 md:gap-14 items-center">
                    <div className="lg:col-span-5">
                        <h2 className="text-2xl sm:text-3xl md:text-[2.75rem] font-bold uppercase tracking-tight leading-[1.1] mb-6 text-[#2A1810]">
                            WHAT YOU CAN EXPECT <br className="hidden md:inline" />
                            FROM EEGNITE’S <br className="hidden md:inline" />
                            <span className="text-[#E86A00]">SEO SERVICES</span>
                        </h2>
                        <p className="text-[#6B5545] text-sm md:text-base leading-relaxed">
                            We don't buy search traffic or deliver simple task summaries. We focus on building a permanent client-acquisition stream that scales dynamically with your goals.
                        </p>
                    </div>
                    <div className="lg:col-span-7 flex flex-col gap-5">
                        {[
                            {
                                label: "Increased Organic & AI Visibility",
                                text: "Appear where customers are actively searching - whether they are using traditional search engines or asking AI assistants like ChatGPT and Gemini."
                            },
                            {
                                label: "More Qualified Leads",
                                text: "Attract prospects with genuine buying intent by optimising for complex, conversational long-tail queries used in AI-driven search."
                            },
                            {
                                label: "Lower Customer Acquisition Costs",
                                text: "Reduce dependence on rising ad budgets by securing permanent, organic real estate in both standard search indexes and LLM knowledge bases."
                            },
                            {
                                label: "Stronger Brand Authority",
                                text: "Build trust and credibility, ensuring your brand is recognised as a cited, trusted source by both human users and AI systems."
                            },
                            {
                                label: "Sustainable, Future-Proof Growth",
                                text: "Create a scalable acquisition channel that compounds in value and adapts as search evolves from keywords to AI-generated answers."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-[#F5F3EE] p-6 rounded-2xl border border-[#EAE7E0] flex gap-4">
                                <span className="text-[#E86A00] text-xl font-bold flex-shrink-0">✓</span>
                                <div className="flex flex-col gap-1">
                                    <h4 className="text-[#2A1810] text-sm md:text-base font-bold uppercase tracking-tight">
                                        {item.label}
                                    </h4>
                                    <p className="text-[#6B5545] text-xs md:text-sm leading-relaxed">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US STATS */}
            <section className="py-16 md:py-24 bg-[#F5F3EE] px-4 md:px-6 border-y border-[#EAE7E0]">
                <div className="max-w-[1400px] mx-auto text-center">
                    <div className="max-w-3xl mx-auto mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold uppercase tracking-tight leading-[1.1] text-[#2A1810] mb-4">
                            WHY KOLKATA BUSINESSES <span className="text-[#E86A00]">CHOOSE EEGNITE</span>
                        </h2>
                        <p className="text-[#6B5545] text-sm md:text-base font-medium leading-relaxed">
                            We'd rather show you the track record than ask you to take the pitch on faith.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-12">
                        {[
                            {
                                title: "8 Years",
                                sub: "Of Excellence",
                                desc: "For more than eight years, we've helped businesses stay visible across Google and today's AI-powered search platforms."
                            },
                            {
                                title: "95%",
                                sub: "Client Retention",
                                desc: "Clients stay because the rankings we build keep compounding long after the first contract ends, not because they're locked in."
                            },
                            {
                                title: "100%",
                                sub: "Dedicated to Success",
                                desc: "Every account is run as a long-term growth partnership, not a retainer; we're hoping you'll renew without asking questions."
                            }
                        ].map((stat, idx) => (
                            <div key={idx} className="bg-[#FFFEF8] p-8 rounded-2xl border border-[#EAE7E0] hover:border-[#E86A00]/40 transition-all duration-300 flex flex-col text-center">
                                <span className="text-4xl md:text-5xl font-extrabold text-[#E86A00] tracking-tight mb-2">
                                    {stat.title}
                                </span>
                                <span className="text-sm font-semibold uppercase text-[#2A1810] tracking-wider mb-4">
                                    {stat.sub}
                                </span>
                                <p className="text-[#6B5545] text-xs md:text-sm leading-relaxed">
                                    {stat.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    <p className="text-[#6B5545] max-w-3xl mx-auto text-sm md:text-base leading-relaxed italic">
                        Search is no longer just about Google. Customers now use both search engines and AI-powered platforms to find answers and compare businesses. Our goal is to keep your business visible across both, so you're found when it matters most.
                    </p>
                </div>
            </section>

            {/* TESTIMONIALS SECTION */}
            <Testimonials />

            {/* FAQ SECTION */}
            <FAQ faqList={kolkataSeoFaqItems} />

            {/* CONTACT & CTA SECTION */}
            <section id="contact" className="py-16 md:py-24 bg-[#FFFEF8] px-4 md:px-6 border-t border-[#EAE7E0]">
                <div className="max-w-[1400px] mx-auto text-center max-w-4xl mb-16">
                    <span className="text-[#E86A00] font-bold text-xs uppercase tracking-widest bg-[#E86A00]/5 px-3 py-1.5 rounded-full border border-[#E86A00]/10 inline-block mb-4">
                        STOP GUESSING. START GROWING.
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold uppercase tracking-tight leading-[1.1] text-[#2A1810] mb-6">
                        READY TO SCALE YOUR SEARCH <br className="hidden md:inline" />
                        VISIBILITY IN <span className="text-[#E86A00]">KOLKATA?</span>
                    </h2>
                    <p className="text-[#6B5545] text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
                        Book a free strategy call with EEGNITE and discover what is holding your search visibility back, where your greatest growth opportunities exist, and what it will take to turn SEO into a predictable source of leads, revenue, and long-term business growth.
                    </p>
                </div>

                <Contact />
            </section>

            <Footer />
        </main>
    );
}
