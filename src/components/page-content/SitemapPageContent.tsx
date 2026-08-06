"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, ChevronDown, ChevronUp, Layers, FileText, Briefcase, Globe, ArrowUpRight, Sparkles, MapPin } from "lucide-react";

// Page Data Structures
const mainPages = [
    { title: "Home", href: "/", description: "Performance-first digital marketing agency homepage." },
    { title: "Services Overview", href: "/services/", description: "Explore all ROI-focused digital marketing and growth services." },
    { title: "Industries Overview", href: "/industries/", description: "Tailored digital strategies across specialized industry verticals." },
    { title: "Testimonials & Reviews", href: "/testimonials/", description: "Client success stories and partner reviews." },
    { title: "Contact Us", href: "/contact/", description: "Get in touch with the EEGNITE team for custom growth strategies." },
    { title: "Privacy Policy", href: "/privacy/", description: "Data privacy practices and confidentiality commitments." },
    { title: "Terms of Service", href: "/terms/", description: "Terms and conditions for EEGNITE services." },
    { title: "HTML Sitemap", href: "/sitemap/", description: "Visual index of all live pages, services, industries, and blog posts." },
];

const servicePages = [
    { title: "Search Engine Optimization (SEO)", href: "/services/seo/", category: "Services", description: "AI-ready technical & content SEO strategies for top rankings." },
    { title: "Pay-Per-Click Advertising (PPC)", href: "/services/ppc/", category: "Services", description: "High-ROI Google Ads & paid campaign management." },
    { title: "Social Media Marketing", href: "/services/social-media-marketing/", category: "Services", description: "Brand awareness & demand generation across social platforms." },
    { title: "Web Design & Development", href: "/services/web-development/", category: "Services", description: "High-converting, ultra-fast website development." },
    { title: "Email Marketing & Automation", href: "/services/email-marketing/", category: "Services", description: "Targeted lifecycle marketing and lead nurturing." },
];

const industryPages = [
    { title: "E-Commerce", href: "/industries/e-commerce/", category: "Industries", description: "Scale online store revenue and organic search visibility." },
    { title: "B2B & Lead Generation", href: "/industries/b2b-lead-generation/", category: "Industries", description: "Enterprise pipeline expansion and qualified B2B leads." },
    { title: "Medical & Healthcare", href: "/industries/medical-healthcare/", category: "Industries", description: "Compliant digital marketing for healthcare providers." },
    { title: "Retail Business", href: "/industries/retail-business/", category: "Industries", description: "Omnichannel retail strategies and foot traffic growth." },
    { title: "Manufacturing & Logistics", href: "/industries/manufacturing-logistics/", category: "Industries", description: "Digital acquisition for industrial & manufacturing brands." },
    { title: "Professional Services", href: "/industries/professional-services/", category: "Industries", description: "Authority building for firms, agencies, and consultants." },
];

const kolkataClusterPages = [
    {
        title: "Digital Marketing Agency Kolkata (Hub)",
        href: "/digital-marketing-agency-kolkata/",
        category: "Kolkata Hub",
        description: "Full-service digital marketing agency in Kolkata driving organic search, branding, and performance ads."
    },
    {
        title: "SEO Services in Kolkata",
        href: "/digital-marketing-agency-kolkata/seo-services/",
        category: "Local SEO",
        description: "Search engine optimization, Google Maps ranking, and content strategy for Kolkata businesses."
    },
    {
        title: "PPC Management in Kolkata",
        href: "/digital-marketing-agency-kolkata/ppc-management/",
        category: "Paid Search",
        description: "High-ROI Google Ads, Meta Ads, and pay-per-click campaign management in Kolkata."
    },
    {
        title: "Social Media Marketing Kolkata",
        href: "/digital-marketing-agency-kolkata/social-media-marketing/",
        category: "Social Media",
        description: "Brand building, engagement, and paid social campaigns across platforms for Kolkata brands."
    },
    {
        title: "Web Design & Development Kolkata",
        href: "/digital-marketing-agency-kolkata/web-design-development/",
        category: "Web Development",
        description: "Fast, responsive, high-converting website design and custom web development in Kolkata."
    },
    {
        title: "Email Marketing Kolkata",
        href: "/digital-marketing-agency-kolkata/email-marketing/",
        category: "Email Marketing",
        description: "Automated email workflows, newsletters, and conversion-focused lifecycle marketing in Kolkata."
    },
];

const globalHubPages = [
    {
        title: "Digital Marketing Agency Bahrain",
        href: "/bahrain/",
        category: "Global Hub",
        description: "ROI-focused digital marketing and growth strategies for businesses in Bahrain."
    },
    {
        title: "Digital Marketing Agency Qatar",
        href: "/qatar/",
        category: "Global Hub",
        description: "Data-driven marketing and search visibility solutions for Qatar enterprise growth."
    },
];

const blogPosts = [
    {
        title: "The Most Common Mistakes Businesses Make When Outsourcing Marketing",
        href: "/blog/most-common-mistakes-outsourcing-marketing/",
        category: "Agency Selection",
        date: "Jul 12, 2026",
    },
    {
        title: "Why Paid Advertising Costs Are Rising Across Digital Channels in 2026",
        href: "/blog/why-paid-advertising-costs-are-rising-2026/",
        category: "PPC Advertising",
        date: "Jul 14, 2026",
    },
    {
        title: "What Google's Local Search Updates Mean for Small Businesses in 2026",
        href: "/blog/googles-local-search-updates-small-businesses-2026/",
        category: "Local Growth",
        date: "Jul 18, 2026",
    },
    {
        title: "Content Marketing vs. Social Media Marketing - Understanding the Real Difference",
        href: "/blog/content-marketing-vs-social-media-marketing/",
        category: "Content Strategy",
        date: "Jul 25, 2026",
    },
    {
        title: "E-Commerce SEO in 2026 - Why Most Online Stores Fail to Rank (and What to Do Instead)",
        href: "/blog/ecommerce-seo-2026-why-most-online-stores-fail-to-rank/",
        category: "E-Commerce",
        date: "Jul 8, 2026",
    },
    {
        title: "Why Traditional Marketing Metrics No Longer Predict Business Growth",
        href: "/blog/why-traditional-marketing-metrics-no-longer-predict-business-growth/",
        category: "Digital Strategy",
        date: "Jul 6, 2026",
    },
    {
        title: "AI in Digital Marketing: What Business Leaders Need to Know Right Now",
        href: "/blog/ai-in-digital-marketing-what-business-leaders-need-to-know/",
        category: "AI Marketing",
        date: "Jun 30, 2026",
    },
    {
        title: "The Hidden Cost of Bad SEO - What Outdated Practices Are Costing Your Business",
        href: "/blog/the-hidden-cost-of-bad-seo-for-your-business/",
        category: "SEO",
        date: "Jun 25, 2026",
    },
    {
        title: "How Social Media Marketing Has Changed for B2B Companies in 2026",
        href: "/blog/how-social-media-marketing-changed-in-2026/",
        category: "Social Media",
        date: "Jun 20, 2026",
    },
    {
        title: "What Google AI Overview Data Actually Reveals About Your Website",
        href: "/blog/what-google-ai-overview-data-actually-reveals-about-your-website/",
        category: "AI Search",
        date: "Jun 15, 2026",
    },
    {
        title: "Why Businesses Struggle to Generate Consistent Online Visibility Across Channels",
        href: "/blog/why-your-business-struggles-with-online-visibility/",
        category: "Digital Strategy",
        date: "Jun 8, 2026",
    },
    {
        title: "8 Hidden Reasons Your Website Gets Traffic But No Enquiries",
        href: "/blog/8-reasons-why-your-website-traffic-isnt-generating-leads/",
        category: "Conversion Optimization",
        date: "Jun 9, 2026",
    },
    {
        title: "How a Results-Driven PPC Agency in India Maximizes Your ROI",
        href: "/blog/ppc-agency-india-maximize-roi/",
        category: "PPC Advertising",
        date: "May 1, 2026",
    },
    {
        title: "How to Choose the Right SEO Agency for Your Business in India",
        href: "/blog/how-to-choose-the-right-seo-agency-in-india-2026/",
        category: "Agency Selection",
        date: "Feb 20, 2026",
    },
    {
        title: "How to Get Your Content Cited in AI Search Results in 2026",
        href: "/blog/how-to-get-content-cited-in-ai-search-results-2026/",
        category: "AI Search",
        date: "Feb 13, 2026",
    },
    {
        title: "7 Proven Local SEO Strategies to Rank Higher in 2026",
        href: "/blog/local-seo-strategies-2026-google-maps/",
        category: "Local Growth",
        date: "Jan 16, 2026",
    },
];

export default function SitemapPageContent() {
    const [searchQuery, setSearchQuery] = useState("");
    const [isServicesOpen, setIsServicesOpen] = useState(true);
    const [isIndustriesOpen, setIsIndustriesOpen] = useState(true);
    const [isKolkataOpen, setIsKolkataOpen] = useState(true);
    const [isGlobalOpen, setIsGlobalOpen] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Filter Logic
    const q = searchQuery.toLowerCase().trim();

    const filteredMain = mainPages.filter(p => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
    const filteredServices = servicePages.filter(p => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
    const filteredIndustries = industryPages.filter(p => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
    const filteredKolkata = kolkataClusterPages.filter(p => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
    const filteredGlobal = globalHubPages.filter(p => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));

    const blogCategories = ["All", ...Array.from(new Set(blogPosts.map(b => b.category)))];

    const filteredBlogs = blogPosts.filter(b => {
        const matchesQuery = b.title.toLowerCase().includes(q) || b.category.toLowerCase().includes(q);
        const matchesCategory = selectedCategory === "All" || b.category === selectedCategory;
        return matchesQuery && matchesCategory;
    });

    const totalLinks = mainPages.length + servicePages.length + industryPages.length + kolkataClusterPages.length + globalHubPages.length + blogPosts.length;
    const totalFiltered = filteredMain.length + filteredServices.length + filteredIndustries.length + filteredKolkata.length + filteredGlobal.length + filteredBlogs.length;

    // JSON-LD Schema
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://www.eegnite.com/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "HTML Sitemap",
                        "item": "https://www.eegnite.com/sitemap/"
                    }
                ]
            },
            {
                "@type": "ItemList",
                "name": "EEGNITE Website Pages & Posts Index",
                "numberOfItems": totalLinks,
                "itemListElement": [
                    ...mainPages.map((p, idx) => ({
                        "@type": "ListItem",
                        "position": idx + 1,
                        "name": p.title,
                        "url": `https://www.eegnite.com${p.href}`
                    })),
                    ...servicePages.map((p, idx) => ({
                        "@type": "ListItem",
                        "position": mainPages.length + idx + 1,
                        "name": p.title,
                        "url": `https://www.eegnite.com${p.href}`
                    })),
                    ...industryPages.map((p, idx) => ({
                        "@type": "ListItem",
                        "position": mainPages.length + servicePages.length + idx + 1,
                        "name": p.title,
                        "url": `https://www.eegnite.com${p.href}`
                    })),
                    ...kolkataClusterPages.map((p, idx) => ({
                        "@type": "ListItem",
                        "position": mainPages.length + servicePages.length + industryPages.length + idx + 1,
                        "name": p.title,
                        "url": `https://www.eegnite.com${p.href}`
                    })),
                    ...globalHubPages.map((p, idx) => ({
                        "@type": "ListItem",
                        "position": mainPages.length + servicePages.length + industryPages.length + kolkataClusterPages.length + idx + 1,
                        "name": p.title,
                        "url": `https://www.eegnite.com${p.href}`
                    })),
                    ...blogPosts.map((b, idx) => ({
                        "@type": "ListItem",
                        "position": mainPages.length + servicePages.length + industryPages.length + kolkataClusterPages.length + globalHubPages.length + idx + 1,
                        "name": b.title,
                        "url": `https://www.eegnite.com${b.href}`
                    }))
                ]
            }
        ]
    };

    return (
        <main className="min-h-screen bg-white text-black font-sans selection:bg-[#FF6105] selection:text-white">
            <Navbar />

            {/* JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            {/* HERO SECTION */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-gradient-to-b from-[#FF6105]/[0.03] via-white to-white border-b border-black/5">
                <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full">
                    <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-[#FF6105]/10 blur-[100px]" />
                    <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-[#FF6105]/5 blur-[120px]" />
                </div>

                <div className="relative max-w-6xl mx-auto px-6">
                    <div className="flex flex-col gap-6 max-w-3xl">
                        <div className="flex items-center gap-3">
                            <span className="w-8 md:w-12 h-[2px] bg-[#FF6105]" />
                            <span className="text-[#FF6105] font-bold tracking-[0.2em] uppercase text-xs md:text-sm flex items-center gap-2">
                                <Sparkles size={14} /> Comprehensive Index
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-black leading-[0.95]">
                            HTML <span className="text-[#FF6105]">Sitemap</span>
                        </h1>

                        <p className="text-lg text-black/70 leading-relaxed">
                            Explore the complete structure of EEGNITE. Access all main pages, service offerings, industry solutions, local market clusters, and growth insights in one organized directory.
                        </p>

                        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-black/60 pt-2">
                            <span className="bg-[#FF6105]/10 text-[#FF6105] px-3 py-1.5 rounded-full font-bold">
                                {totalLinks} Total Live Resources
                            </span>
                            <span>•</span>
                            <span>Last Updated: August 2026</span>
                            <span>•</span>
                            <span>Auto-Indexed & Crawlable</span>
                        </div>
                    </div>

                    {/* SEARCH & JUMP NAV */}
                    <div className="mt-12 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 p-4 rounded-2xl bg-white border border-black/10 shadow-lg shadow-black/[0.03]">
                        {/* Search Bar */}
                        <div className="relative flex-1">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-black/40" size={18} />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search pages, services, location clusters, or blog posts..."
                                className="w-full pl-11 pr-4 py-3 text-sm bg-black/[0.02] border border-black/10 rounded-xl focus:outline-none focus:border-[#FF6105] focus:bg-white transition-all"
                            />
                            {searchQuery && (
                                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-[#FF6105]">
                                    {totalFiltered} results
                                </span>
                            )}
                        </div>

                        {/* Quick Anchor Jump */}
                        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
                            <a href="#core-pages" className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-black/70 hover:text-[#FF6105] bg-black/5 hover:bg-[#FF6105]/10 rounded-lg transition-colors whitespace-nowrap">
                                Main Pages
                            </a>
                            <a href="#services" className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-black/70 hover:text-[#FF6105] bg-black/5 hover:bg-[#FF6105]/10 rounded-lg transition-colors whitespace-nowrap">
                                Services ({servicePages.length})
                            </a>
                            <a href="#industries" className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-black/70 hover:text-[#FF6105] bg-black/5 hover:bg-[#FF6105]/10 rounded-lg transition-colors whitespace-nowrap">
                                Industries ({industryPages.length})
                            </a>
                            <a href="#kolkata-cluster" className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-black/70 hover:text-[#FF6105] bg-black/5 hover:bg-[#FF6105]/10 rounded-lg transition-colors whitespace-nowrap">
                                Kolkata Cluster ({kolkataClusterPages.length})
                            </a>
                            <a href="#global-hubs" className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-black/70 hover:text-[#FF6105] bg-black/5 hover:bg-[#FF6105]/10 rounded-lg transition-colors whitespace-nowrap">
                                Global Hubs ({globalHubPages.length})
                            </a>
                            <a href="#blogs" className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-black/70 hover:text-[#FF6105] bg-black/5 hover:bg-[#FF6105]/10 rounded-lg transition-colors whitespace-nowrap">
                                Blog ({blogPosts.length})
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* DIRECTORY CONTENT */}
            <section className="py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-6 space-y-16">
                    
                    {/* SECTION 1: CORE PAGES */}
                    <div id="core-pages" className="space-y-6">
                        <div className="flex items-center justify-between border-b border-black/10 pb-4">
                            <div className="flex items-center gap-3">
                                <Globe className="text-[#FF6105]" size={22} />
                                <h2 className="text-2xl font-bold uppercase tracking-tight text-black">
                                    Core Website Pages
                                </h2>
                                <span className="bg-[#FF6105]/10 text-[#FF6105] text-xs font-bold px-2.5 py-1 rounded-full">
                                    {filteredMain.length}
                                </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredMain.map((page, idx) => (
                                <Link
                                    key={idx}
                                    href={page.href}
                                    className="group p-6 rounded-2xl bg-white border border-black/5 hover:border-[#FF6105]/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-3">
                                            <h3 className="font-bold text-lg text-black group-hover:text-[#FF6105] transition-colors">
                                                {page.title}
                                            </h3>
                                            <ArrowUpRight size={18} className="text-black/30 group-hover:text-[#FF6105] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                        </div>
                                        <p className="text-sm text-black/60 leading-relaxed">
                                            {page.description}
                                        </p>
                                    </div>
                                    <span className="text-xs font-mono text-black/40 mt-4 block group-hover:text-[#FF6105] transition-colors">
                                        https://www.eegnite.com{page.href}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* SECTION 2: SERVICES ACCORDION */}
                    <div id="services" className="space-y-6">
                        <div
                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                            className="flex items-center justify-between border-b border-black/10 pb-4 cursor-pointer group"
                        >
                            <div className="flex items-center gap-3">
                                <Layers className="text-[#FF6105]" size={22} />
                                <h2 className="text-2xl font-bold uppercase tracking-tight text-black group-hover:text-[#FF6105] transition-colors">
                                    Services & Offerings
                                </h2>
                                <span className="bg-[#FF6105]/10 text-[#FF6105] text-xs font-bold px-2.5 py-1 rounded-full">
                                    {filteredServices.length}
                                </span>
                            </div>
                            <button className="p-2 rounded-lg bg-black/5 group-hover:bg-[#FF6105]/10 text-black/70 group-hover:text-[#FF6105] transition-colors">
                                {isServicesOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </button>
                        </div>

                        {isServicesOpen && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
                                {filteredServices.map((page, idx) => (
                                    <Link
                                        key={idx}
                                        href={page.href}
                                        className="group p-6 rounded-2xl bg-white border border-black/5 hover:border-[#FF6105]/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                                    >
                                        <div>
                                            <div className="flex items-center justify-between mb-3">
                                                <h3 className="font-bold text-lg text-black group-hover:text-[#FF6105] transition-colors">
                                                    {page.title}
                                                </h3>
                                                <ArrowUpRight size={18} className="text-black/30 group-hover:text-[#FF6105] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                            </div>
                                            <p className="text-sm text-black/60 leading-relaxed">
                                                {page.description}
                                            </p>
                                        </div>
                                        <div className="mt-6 flex items-center justify-between text-xs">
                                            <span className="font-bold text-[#FF6105] uppercase tracking-wider">
                                                {page.category}
                                            </span>
                                            <span className="font-mono text-black/40">
                                                {page.href}
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* SECTION 3: INDUSTRIES ACCORDION */}
                    <div id="industries" className="space-y-6">
                        <div
                            onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                            className="flex items-center justify-between border-b border-black/10 pb-4 cursor-pointer group"
                        >
                            <div className="flex items-center gap-3">
                                <Briefcase className="text-[#FF6105]" size={22} />
                                <h2 className="text-2xl font-bold uppercase tracking-tight text-black group-hover:text-[#FF6105] transition-colors">
                                    Industries Served
                                </h2>
                                <span className="bg-[#FF6105]/10 text-[#FF6105] text-xs font-bold px-2.5 py-1 rounded-full">
                                    {filteredIndustries.length}
                                </span>
                            </div>
                            <button className="p-2 rounded-lg bg-black/5 group-hover:bg-[#FF6105]/10 text-black/70 group-hover:text-[#FF6105] transition-colors">
                                {isIndustriesOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </button>
                        </div>

                        {isIndustriesOpen && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
                                {filteredIndustries.map((page, idx) => (
                                    <Link
                                        key={idx}
                                        href={page.href}
                                        className="group p-6 rounded-2xl bg-white border border-black/5 hover:border-[#FF6105]/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                                    >
                                        <div>
                                            <div className="flex items-center justify-between mb-3">
                                                <h3 className="font-bold text-lg text-black group-hover:text-[#FF6105] transition-colors">
                                                    {page.title}
                                                </h3>
                                                <ArrowUpRight size={18} className="text-black/30 group-hover:text-[#FF6105] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                            </div>
                                            <p className="text-sm text-black/60 leading-relaxed">
                                                {page.description}
                                            </p>
                                        </div>
                                        <div className="mt-6 flex items-center justify-between text-xs">
                                            <span className="font-bold text-[#FF6105] uppercase tracking-wider">
                                                {page.category}
                                            </span>
                                            <span className="font-mono text-black/40">
                                                {page.href}
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* SECTION 4: KOLKATA LOCATION CLUSTER ACCORDION */}
                    <div id="kolkata-cluster" className="space-y-6">
                        <div
                            onClick={() => setIsKolkataOpen(!isKolkataOpen)}
                            className="flex items-center justify-between border-b border-black/10 pb-4 cursor-pointer group"
                        >
                            <div className="flex items-center gap-3">
                                <MapPin className="text-[#FF6105]" size={22} />
                                <h2 className="text-2xl font-bold uppercase tracking-tight text-black group-hover:text-[#FF6105] transition-colors">
                                    Kolkata Location Cluster
                                </h2>
                                <span className="bg-[#FF6105]/10 text-[#FF6105] text-xs font-bold px-2.5 py-1 rounded-full">
                                    {filteredKolkata.length}
                                </span>
                            </div>
                            <button className="p-2 rounded-lg bg-black/5 group-hover:bg-[#FF6105]/10 text-black/70 group-hover:text-[#FF6105] transition-colors">
                                {isKolkataOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </button>
                        </div>

                        {isKolkataOpen && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
                                {filteredKolkata.map((page, idx) => (
                                    <Link
                                        key={idx}
                                        href={page.href}
                                        className="group p-6 rounded-2xl bg-white border border-black/5 hover:border-[#FF6105]/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                                    >
                                        <div>
                                            <div className="flex items-center justify-between mb-3">
                                                <h3 className="font-bold text-lg text-black group-hover:text-[#FF6105] transition-colors">
                                                    {page.title}
                                                </h3>
                                                <ArrowUpRight size={18} className="text-black/30 group-hover:text-[#FF6105] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                            </div>
                                            <p className="text-sm text-black/60 leading-relaxed">
                                                {page.description}
                                            </p>
                                        </div>
                                        <div className="mt-6 flex items-center justify-between text-xs">
                                            <span className="font-bold text-[#FF6105] uppercase tracking-wider">
                                                {page.category}
                                            </span>
                                            <span className="font-mono text-black/40">
                                                {page.href}
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* SECTION 5: GLOBAL HUBS ACCORDION */}
                    <div id="global-hubs" className="space-y-6">
                        <div
                            onClick={() => setIsGlobalOpen(!isGlobalOpen)}
                            className="flex items-center justify-between border-b border-black/10 pb-4 cursor-pointer group"
                        >
                            <div className="flex items-center gap-3">
                                <Globe className="text-[#FF6105]" size={22} />
                                <h2 className="text-2xl font-bold uppercase tracking-tight text-black group-hover:text-[#FF6105] transition-colors">
                                    Global Regional Hubs
                                </h2>
                                <span className="bg-[#FF6105]/10 text-[#FF6105] text-xs font-bold px-2.5 py-1 rounded-full">
                                    {filteredGlobal.length}
                                </span>
                            </div>
                            <button className="p-2 rounded-lg bg-black/5 group-hover:bg-[#FF6105]/10 text-black/70 group-hover:text-[#FF6105] transition-colors">
                                {isGlobalOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </button>
                        </div>

                        {isGlobalOpen && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                                {filteredGlobal.map((page, idx) => (
                                    <Link
                                        key={idx}
                                        href={page.href}
                                        className="group p-6 rounded-2xl bg-white border border-black/5 hover:border-[#FF6105]/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                                    >
                                        <div>
                                            <div className="flex items-center justify-between mb-3">
                                                <h3 className="font-bold text-lg text-black group-hover:text-[#FF6105] transition-colors">
                                                    {page.title}
                                                </h3>
                                                <ArrowUpRight size={18} className="text-black/30 group-hover:text-[#FF6105] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                            </div>
                                            <p className="text-sm text-black/60 leading-relaxed">
                                                {page.description}
                                            </p>
                                        </div>
                                        <div className="mt-6 flex items-center justify-between text-xs">
                                            <span className="font-bold text-[#FF6105] uppercase tracking-wider">
                                                {page.category}
                                            </span>
                                            <span className="font-mono text-black/40">
                                                {page.href}
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* SECTION 6: BLOG POSTS */}
                    <div id="blogs" className="space-y-6">
                        <div className="flex items-center justify-between border-b border-black/10 pb-4">
                            <div className="flex items-center gap-3">
                                <FileText className="text-[#FF6105]" size={22} />
                                <h2 className="text-2xl font-bold uppercase tracking-tight text-black">
                                    Blog & Strategic Insights
                                </h2>
                                <span className="bg-[#FF6105]/10 text-[#FF6105] text-xs font-bold px-2.5 py-1 rounded-full">
                                    {filteredBlogs.length}
                                </span>
                            </div>
                        </div>

                        {/* Category Filter Pills */}
                        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                            {blogCategories.map((cat, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                                        selectedCategory === cat
                                            ? "bg-[#FF6105] text-white shadow-md shadow-[#FF6105]/20"
                                            : "bg-black/5 text-black/70 hover:bg-black/10"
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Blog Listing Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {filteredBlogs.map((post, idx) => (
                                <Link
                                    key={idx}
                                    href={post.href}
                                    className="group p-5 rounded-xl bg-white border border-black/5 hover:border-[#FF6105]/30 hover:shadow-lg transition-all duration-300 flex items-start justify-between gap-4"
                                >
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-xs font-semibold text-black/50">
                                            <span className="text-[#FF6105] font-bold uppercase tracking-wider">{post.category}</span>
                                            <span>•</span>
                                            <span>{post.date}</span>
                                        </div>
                                        <h3 className="font-bold text-base text-black group-hover:text-[#FF6105] transition-colors leading-snug">
                                            {post.title}
                                        </h3>
                                    </div>
                                    <ArrowUpRight size={18} className="text-black/30 group-hover:text-[#FF6105] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0 mt-1" />
                                </Link>
                            ))}
                        </div>

                        {filteredBlogs.length === 0 && (
                            <div className="text-center py-12 bg-black/[0.02] rounded-2xl border border-black/5">
                                <p className="text-black/60 font-semibold">No results found matching your filter criteria.</p>
                                <button
                                    onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                                    className="mt-3 text-xs font-bold text-[#FF6105] uppercase tracking-wider hover:underline"
                                >
                                    Reset Filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
