"use client";

import * as React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import { ServiceHero } from "@/components/shared/ServiceHero";
import { ServiceProcess } from "@/components/shared/ServiceProcess";
import { WhyChooseUs } from "@/components/shared/WhyChooseUs";
import { ClientLogoSlider } from "@/components/shared/ClientLogoSlider";
import { GROWTH_CTA, GROWTH_CTA_LINK } from "@/lib/cta";
import { BAHRAIN_SEO_FAQS } from "@/data/bahrain-seo.data";

// Copy is verbatim from the "EEGNITE_New Content_Bahrain_SEO" Google Doc; layouts follow its developer notes
// and the Kolkata SEO sister page. Icons are inline SVGs (AGENTS.md: no new lucide-react imports).

const Svg = ({ children, ...props }: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" className={props.className}>
        {children}
    </svg>
);
const CpuIcon = (p: any) => <Svg {...p}><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" /></Svg>;
const PageIcon = (p: any) => <Svg {...p}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M8 13h8M8 17h5" /></Svg>;
const PinIcon = (p: any) => <Svg {...p}><path d="M12 22s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z" /><circle cx="12" cy="10" r="2.5" /></Svg>;
const BagIcon = (p: any) => <Svg {...p}><path d="M6 7h12l1 14H5L6 7z" /><path d="M9 7a3 3 0 0 1 6 0" /></Svg>;
const MegaphoneIcon = (p: any) => <Svg {...p}><path d="M3 11v2a1 1 0 0 0 1 1h3l6 4V6L7 10H4a1 1 0 0 0-1 1z" /><path d="M17 8a5 5 0 0 1 0 8M20 5a9 9 0 0 1 0 14" /></Svg>;
const SparkIcon = (p: any) => <Svg {...p}><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" /><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z" /></Svg>;
const ClipboardIcon = (p: any) => <Svg {...p}><rect x="6" y="4" width="12" height="18" rx="2" /><path d="M9 4V2h6v2M9 11h6M9 15h4" /></Svg>;
const SearchIcon = (p: any) => <Svg {...p}><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.6-4.6" /></Svg>;
const FlagIcon = (p: any) => <Svg {...p}><path d="M5 22V4M5 4h11l-2 4 2 4H5" /></Svg>;
const CheckIcon = (p: any) => <Svg {...p}><circle cx="12" cy="12" r="9" /><path d="M8 12l3 3 5-6" /></Svg>;
const LoopIcon = (p: any) => <Svg {...p}><path d="M20 12a8 8 0 0 1-14 5.3M4 12a8 8 0 0 1 14-5.3" /><path d="M18 3v4h-4M6 21v-4h4" /></Svg>;
const ArrowRightIcon = (p: any) => <Svg {...p}><path d="M5 12h14M12 5l7 7-7 7" /></Svg>;
const ChevronIcon = (p: any) => <Svg {...p}><path d="M9 18l6-6-6-6" /></Svg>;

const Eyebrow = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <p className={`text-xs md:text-sm font-bold uppercase tracking-wider text-[#FF6105] mb-3 block leading-normal ${className}`}>{children}</p>
);

const painPoints = [
    { title: "People Find Advice But Miss Your Services", desc: "A useful blog can attract readers without explaining what you sell. We check whether informational pages lead to a relevant service, clear qualification details, and an easy next step." },
    { title: "Your Most Important Pages Are Difficult To Find", desc: "A service may be hidden behind weak navigation, duplicate URLs, or content search engines cannot reliably access. We investigate the page itself before adding more articles around it." },
    { title: "Bahrain Buyers Reach A Generic Regional Page", desc: "A page that says GCC may leave practical questions unanswered. Can you deliver to Bahrain? Which services are available? What happens after an inquiry? We help make those answers explicit without inventing an office or local track record." },
    { title: "The Report Shows Rankings Without Explaining Business Value", desc: "We separate branded discovery, broader research traffic, and visits to commercial pages. Where your systems allow, we connect inquiries to their landing pages and review which ones sales accepts." },
];

const bringItems = [
    { title: "Prioritise Existing Opportunities", desc: "We assess your current website against buyer search intent to identify pages that need improvement before recommending new content.", img: "/images/services/bahrain-seo-prioritise.webp", alt: "Reviewing an existing website for SEO opportunities" },
    { title: "Get a Clear Action Plan", desc: "Receive a prioritised plan covering affected URLs, required changes, and their purpose, from technical fixes and service-page updates to internal linking and missing content.", img: "/images/services/bahrain-seo-action-plan.webp", alt: "A prioritised SEO action plan mapped out on a board" },
    { title: "Target Bahrain Search Intent", desc: "We analyse country-specific search results and inquiry data, assessing English and Arabic opportunities separately. Arabic content includes a qualified language review before publication.", img: "/images/services/bahrain-seo-search-intent.webp", alt: "Bahrain World Trade Center in Manama at sunrise" },
];

const breakdown = [
    { icon: CpuIcon, title: "Technical Seo That Gives Important Pages A Fair Chance", desc: "We check crawling, indexing, canonical URLs, redirects, mobile rendering, and loading issues. The fix list identifies which problems affect a buying journey and which can wait." },
    { icon: PageIcon, title: "Service Pages and Content Built Around Decisions", desc: "We map searches about the problem, available solutions, provider comparisons, cost factors, and next steps to the right page. Your team supplies the service facts and subject expertise; we turn them into clear content and internal links." },
    { icon: PinIcon, title: "Local Search For Your Real Business Locations", desc: "For eligible client businesses, we improve Business Profile details, location pages, and relevant citations. An actual Bahrain outlet can support local search work. A made-up address cannot." },
    { icon: BagIcon, title: "Product and Category Seo", desc: "For stores, we review product information, categories, filters, availability details, and the path to checkout. Priorities follow your commercial needs and the demand we can verify." },
    { icon: MegaphoneIcon, title: "Digital PR Outreach That Builds Online Visibility", desc: "We pitch relevant business stories, industry insights, and original research to suitable publishers, focusing on audience relevance and editorial opportunities." },
    { icon: SparkIcon, title: "AI-assisted SEO and answer engine optimization", desc: "AI tools can help cluster queries and organize research. People check the sources, interpret the findings, and approve the work. We also make service answers easy to find and support claims with evidence your business can stand behind." },
];

const industries = [
    { title: "E-commerce", href: "/industries/e-commerce/", desc: "Make category and product pages answer questions about availability, specifications, delivery coverage, and purchase options. Prioritize pages that can support profitable orders." },
    { title: "B2B and Lead Generation", href: "/industries/b2b-lead-generation/", desc: "Build service and comparison pages around buyer requirements, then carry the inquiry source into your sales follow-up where tracking allows." },
    { title: "Medical and healthcare", href: "/industries/medical-healthcare/", desc: "Help patients find clearly described services and practitioner information. Your clinical team reviews treatment claims before publication." },
    { title: "Retail Businesses", href: "/industries/retail-business/", desc: "Improve store and product discovery using accurate location information for your actual outlets and useful pages for the areas you serve." },
    { title: "Manufacturing and Logistics", href: "/industries/manufacturing-logistics/", desc: "Give procurement teams searchable specifications, applications, and service coverage. Connect those pages to a practical request-for-quote form." },
    { title: "Professional Services", href: "/industries/professional-services/", desc: "Explain who each service helps, what the engagement involves, and which questions a prospect should resolve before booking a consultation." },
];

const whyReasons = [
    { id: "01", title: "Connected Digital Marketing Services", desc: "SEO, paid media, email, social media, and web services can be coordinated under one strategy when required." },
    { id: "02", title: "Clear Priorities and Recommendations", desc: "Every recommendation comes with a clear explanation of why it matters and what it aims to improve." },
    { id: "03", title: "Transparent Progress Tracking", desc: "A shared plan keeps track of completed changes, affected pages, ongoing activities, and upcoming priorities." },
    { id: "04", title: "Your Business Retains Ownership", desc: "Your team maintains control of its website, analytics accounts, and key digital assets." },
    { id: "05", title: "Remote Support for Bahrain Businesses", desc: "EEGNITE works remotely with Bahrain businesses through agreed meetings, approval processes, and reporting schedules, with strategies aligned to the local market." },
];

const processSteps = [
    { id: "01", icon: ClipboardIcon as any, title: "Understand the Business and Establish the Baseline", desc: "We discuss your services, margins, best-fit customers, sales cycle, and existing inquiries. With authorized access, we review search and analytics data alongside the site's current condition." },
    { id: "02", icon: SearchIcon as any, title: "Map Questions To Pages", desc: "We identify which buying questions are already answered, which need a better page, and which do not justify new content. Bahrain search checks help set the market scope." },
    { id: "03", icon: FlagIcon as any, title: "Agree On The First Priorities", desc: "You receive a work plan with page targets, technical dependencies, content inputs, and approval responsibilities. Forecasts are assumptions to test, not promised rankings." },
    { id: "04", icon: CheckIcon as any, title: "Implement and Verify", desc: "We complete the agreed fixes and content changes, then check links, tracking, page access, and published accuracy. Your subject expert reviews specialist claims." },
    { id: "05", icon: LoopIcon as any, title: "Review Inquiries and Adjust", desc: "We discuss completed work, search movement, inquiry quality, and the next priorities. A page attracting unsuitable visitors may need a different message or target query." },
];


// Section 03: image left, accordion right (50/50), one item open at a time.
function PainPointsSection() {
    const [open, setOpen] = React.useState(0);
    return (
        <section className="py-20 md:py-32 bg-white border-y border-black/5">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="max-w-4xl mx-auto mb-12 md:mb-16 text-left md:text-center">
                    <Eyebrow>Where organic growth gets stuck</Eyebrow>
                    <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-black leading-tight">
                        Why Is Your Website Visible but <span className="text-[#FF6105]">Your Sales Pipeline Quiet</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-black/5 shadow-xl group">
                        <img
                            src="/images/services/bahrain-seo-pain-points.webp"
                            alt="Website analytics showing traffic that is not turning into sales inquiries"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            loading="lazy"
                        />
                    </div>
                    <div className="space-y-3 md:space-y-4">
                        {painPoints.map((item, idx) => {
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

// Section 12: closing banner in the Kolkata cluster style, with the doc's secondary link kept as a text link.
function FinalCta() {
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
                        <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-white/80 mb-4">Bring the page that is underperforming</p>
                        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-[1] mb-6">
                            Find the SEO Work Your Business Needs Next
                        </h2>
                        <div className="h-2 w-24 bg-white rounded-full mt-8" />
                    </div>
                    <div className="flex flex-col justify-center h-full">
                        <p className="text-white/90 text-base md:text-xl leading-relaxed mb-10 max-w-xl">
                            Share your website, your priority service, and the kind of inquiry you want more of. We will discuss the likely obstacles and what needs checking before you commit to a scope.
                        </p>
                        <div className="flex flex-wrap gap-x-8 gap-y-5 items-center">
                            <Link href={GROWTH_CTA_LINK} className="px-10 py-5 bg-white text-black text-lg md:text-xl font-bold rounded-full hover:bg-black hover:text-white transition-colors duration-300 flex items-center gap-3 shadow-xl">
                                {GROWTH_CTA} <ArrowRightIcon className="w-5 h-5" />
                            </Link>
                            <Link href="/services/seo/" className="text-white font-semibold underline underline-offset-4 decoration-white/50 hover:decoration-white">
                                See Our Complete SEO Services
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function BahrainSeoPageContent() {
    return (
        <main className="bg-white min-h-screen text-black font-sans selection:bg-[#FF6105] selection:text-white">
            <div className="relative z-10">
                <Navbar />

                {/* 01. Hero: the doc's yellow-marked line is the highlighted statement */}
                <ServiceHero
                    badgeText="Search visibility for Bahrain businesses"
                    title={<>SEO Agency for Bahrain Businesses <br className="hidden md:inline" />That Need More Qualified Inquiries</>}
                    titleClassName="md:text-4xl lg:text-5xl xl:text-6xl"
                    subtitleAs="p"
                    subtitleClassName="md:text-2xl lg:text-3xl normal-case tracking-normal font-semibold max-w-4xl leading-snug"
                    subtitle="A visitor who reads one article and leaves is different from a buyer comparing providers. Your SEO plan should account for that difference."
                    description="EEGNITE helps Bahrain businesses improve the pages, technical foundations, and content that support buying decisions. Our team works with a search strategy based on your customers, your service coverage, and the questions that hold up a sale."
                />

                {/* 02. Client logo slider */}
                <ClientLogoSlider
                    eyebrow="Client References"
                    headingTag="h2"
                    headingClassName="!text-[clamp(1.8rem,5vw,3.5rem)] !leading-[1.1] !tracking-tight"
                    heading={<>Businesses That Choose Growth. <br />Businesses That Choose <span className="text-[#FF6105]">EEGNITE</span></>}
                />

                {/* 03. Pain points */}
                <PainPointsSection />

                {/* 04. What we bring to the table */}
                <section className="py-20 md:py-32 bg-white">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="max-w-4xl mx-auto mb-12 md:mb-16 text-center">
                            <Eyebrow>Start with the next useful fix</Eyebrow>
                            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-black mb-6 leading-tight">
                                What We Bring <span className="text-[#FF6105]">to the Table</span>
                            </h2>
                            <p className="text-black/60 text-base md:text-xl leading-relaxed">
                                Every SEO strategy should start with understanding what your website needs most. EEGNITE focuses on practical improvements, clear priorities, and search opportunities aligned with your target market in Bahrain.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {bringItems.map((item, idx) => (
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
                            <Eyebrow>SEO service breakdown</Eyebrow>
                            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-black leading-[1.2]">
                                What Your SEO Engagement <span className="text-[#FF6105]">Can Include</span>
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {breakdown.map((item, idx) => (
                                <div key={idx} className="bg-white border border-black/5 p-8 rounded-[2rem] hover:border-[#FF6105] hover:shadow-2xl transition-all duration-300 group flex flex-col h-full">
                                    <div className="w-16 h-16 bg-[#FFF5F0] rounded-2xl flex items-center justify-center text-[#FF6105] mb-6 group-hover:scale-110 transition-transform">
                                        <item.icon size={30} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-xl font-bold uppercase mb-4 text-black group-hover:text-[#FF6105] transition-colors">{item.title}</h3>
                                    <p className="text-black/60 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 06. Industries we serve */}
                <section className="py-16 md:py-24 bg-white border-y border-black/5">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="max-w-4xl mx-auto mb-12 md:mb-16 text-left md:text-center">
                            <Eyebrow>Different buyers need different answers</Eyebrow>
                            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-black leading-tight">
                                Industries We Serve. <span className="text-[#FF6105]">Industries We Scale in Bahrain.</span>
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                            {industries.map((item, idx) => (
                                <div key={idx} className="group bg-white p-6 md:p-7 rounded-2xl border border-black/5 hover:border-[#FF6105]/20 hover:shadow-lg transition-all duration-300">
                                    <h3 className="text-base md:text-lg font-bold uppercase text-black mb-2">
                                        <Link href={item.href} className="inline-flex items-center gap-1.5 hover:text-[#FF6105] transition-colors">
                                            {item.title}
                                            <ArrowRightIcon className="w-4 h-4 text-[#FF6105] group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </h3>
                                    <p className="text-black/55 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 07. Why EEGNITE */}
                <WhyChooseUs
                    eyebrow="A practical working relationship"
                    title={<>Why <span className="text-[#FF6105]">EEGNITE</span></>}
                    subtitle="EEGNITE combines practical SEO expertise, transparent communication, and a structured approach to help Bahrain businesses grow online."
                    reasons={whyReasons}
                />

                {/* 08. Our process */}
                <ServiceProcess
                    eyebrow="From diagnosis to review"
                    title={<>Our SEO Process <span className="text-[#FF6105]">for Bahrain Brands</span></>}
                    steps={processSteps}
                    ctaText={GROWTH_CTA}
                    ctaLink={GROWTH_CTA_LINK}
                />

                {/* 09. Dedicated agency: text with an in-copy link, image alongside */}
                <section className="py-16 md:py-24 bg-white border-y border-black/5">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            <div>
                                <Eyebrow>A dedicated agency for your digital growth</Eyebrow>
                                <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-black mb-6 leading-tight">
                                    Your Business <span className="text-[#FF6105]">Sets the Plan</span>
                                </h2>
                                <p className="text-black/60 text-base md:text-lg leading-relaxed mb-4">
                                    A template becomes a problem when it decides your strategy. We use repeatable checks for reliable delivery, but choose the work around your commercial priorities.
                                </p>
                                <p className="text-black/60 text-base md:text-lg leading-relaxed mb-4">
                                    A distributor with a small catalog may need specification pages and quote forms. A retailer may need category visibility and better delivery information. Your scope should explain which approach fits and what evidence will change it.
                                </p>
                                <p className="text-black/60 text-base md:text-lg leading-relaxed">
                                    For coordinated, cross-channel support, explore EEGNITE as a{" "}
                                    <Link href="/bahrain/" className="text-[#FF6105] font-semibold underline hover:text-[#C44800]">results-oriented digital marketing agency for Bahrain businesses</Link>.
                                </p>
                            </div>
                            <div className="relative w-full aspect-[16/11] rounded-[2.5rem] overflow-hidden border border-black/5 shadow-xl group">
                                <img
                                    src="/images/services/bahrain-seo-dedicated-agency.webp"
                                    alt="An agency team planning work around a client's commercial priorities"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 10. Testimonials (heading already matches the doc) */}
                <Testimonials />

                {/* 11. Buyer questions */}
                <section className="py-16 md:py-32 bg-white px-4 md:px-6 border-t border-black/5">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-left md:text-center mb-8 md:mb-16">
                            <Eyebrow>Questions before you appoint an agency</Eyebrow>
                            <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-black">
                                SEO Questions From <span className="text-[#FF6105]">Bahrain Business Owners</span>
                            </h2>
                        </div>
                        <div className="space-y-3 md:space-y-4">
                            {BAHRAIN_SEO_FAQS.map((faq, idx) => (
                                <details key={idx} className="group bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-black/5 hover:shadow-xl transition-all cursor-pointer">
                                    <summary className="flex justify-between items-center list-none text-black">
                                        <h3 className="max-w-[90%] font-bold text-base md:text-lg lg:text-xl uppercase tracking-tight">{faq.q}</h3>
                                        <span className="w-10 h-10 shrink-0 rounded-full bg-[#FFF5F0] flex items-center justify-center group-open:bg-[#FF6105] transition-all">
                                            <ChevronIcon className="w-5 h-5 group-open:rotate-90 transition-transform text-[#FF6105] group-open:text-white" />
                                        </span>
                                    </summary>
                                    <p className="mt-4 md:mt-6 text-black/60 leading-relaxed font-medium text-sm md:text-lg max-w-2xl">{faq.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 12. Final call to action */}
                <FinalCta />

                {/* 13. Form */}
                <Contact defaultCountryCode="+973" />
            </div>

            <Footer />
        </main>
    );
}
