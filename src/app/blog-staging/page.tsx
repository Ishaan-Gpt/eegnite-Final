"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, User, Calendar, Clock, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// --- CORPORATE DATA ---
const featuredPost = {
    id: 1,
    title: "Top 10 SEO Agencies in Kolkata You Can Trust in 2026",
    excerpt: "In the ever-evolving world of digital marketing, choosing the right SEO agency is crucial. We've compiled a list of the top Kolkata-based agencies known for proven expertise.",
    category: "Industry Intelligence",
    readTime: "10 min read",
    date: "Jan 17, 2026",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600",
    slug: "top-10-seo-agencies-kolkata-2026",
};

const latestPosts = [
    {
        id: 2,
        title: "7 Proven Local SEO Strategies to Rank Higher in 2026",
        excerpt: "Google Maps has taken over the front page of local businesses. If your business isn't in the top 3, it might as well not exist. Learn the 7 proven strategies to rank higher.",
        category: "Local Growth",
        readTime: "8 min read",
        date: "Jan 16, 2026",
        image: "https://images.unsplash.com/photo-1548345680-f5475ea5df84?auto=format&fit=crop&q=80&w=800",
        slug: "local-seo-strategies-2026-google-maps",
    },
    {
        id: 3,
        title: "SEO in 2026: The SGE Paradigm Shift",
        excerpt: "Search Generative Experience (SGE) has fundamentally altered the SEO landscape. We break down the shift from keyword density to experience-based content optimization.",
        category: "Search Strategy",
        readTime: "8 min read",
        date: "Oct 24, 2025",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
        slug: "future-of-seo-sge",
    },
    {
        id: 4,
        title: "Precision PPC: Maximizing Ad Spend",
        excerpt: "Broad targeting is a budget leak. We advocate for hyper-segmented campaigns based on user intent and lifecycle stage. Learn how to implement SKAGs effectively.",
        category: "Performance Marketing",
        readTime: "5 min read",
        date: "Oct 18, 2025",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        slug: "maximizing-roi-ppc",
    }
];

const designPosts = [
    {
        id: 5,
        title: "Minimalism 2.0: Beyond White Space",
        excerpt: "Modern minimalism uses bold typography and rich micro-interactions to guide user attention without clutter.",
        category: "Design",
        readTime: "6 min read",
        date: "Oct 01, 2025",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
        slug: "minimalism-2026",
    },
    {
        id: 6,
        title: "Dark Mode UI: Accessibility First",
        excerpt: "Designing for dark environments is an accessibility necessity. A guide to contrast ratios and visual hierarchy.",
        category: "Design",
        readTime: "5 min read",
        date: "Sep 28, 2025",
        image: "https://images.unsplash.com/photo-1550063873-ab792950096b?auto=format&fit=crop&q=80&w=800",
        slug: "dark-mode-ui",
    }
];

const techPosts = [
    {
        id: 7,
        title: "Next.js 15: Server Actions & Performance",
        excerpt: "Next.js 15 blurs the line between API and UI with Server Actions. Learn how to ship less JavaScript for faster load times.",
        category: "Deep Tech",
        readTime: "10 min read",
        date: "Sep 25, 2025",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
        slug: "nextjs-15-features",
    },
    {
        id: 8,
        title: "Headless Architectures & Content Scaling",
        excerpt: "Monolithic CMSs are a bottleneck. Headless architectures decouple content to enable rapid omnichannel delivery.",
        category: "Deep Tech",
        readTime: "7 min read",
        date: "Sep 20, 2025",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
        slug: "headless-cms-future",
    }
];

// --- COMPONENTS ---

const BentoGridItem = ({ className, post, large = false }: { className?: string, post: any, large?: boolean }) => {
    return (
        <Link
            href={`/blog-staging/${post.slug}`}
            className={cn(
                "group relative overflow-hidden rounded-3xl bg-white border border-black/5 hover:border-[#FF6105]/30 hover:shadow-2xl transition-all duration-500",
                className
            )}
        >
            {/* Image Container */}
            <div className={cn(
                "relative overflow-hidden",
                large ? "h-[60%] w-full" : "h-[50%] w-full"
            )}>
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 flex flex-col justify-between h-[50%] md:h-[40%] bg-white relative">
                {/* Orange Shader Effect */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-[#FF6105]/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                    <div className="flex items-center gap-3 text-xs font-bold text-[#6B5545] uppercase tracking-wider mb-3">
                        <span className="text-[#FF6105]">{post.category}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                    </div>

                    <h3 className={cn(
                        "font-bold uppercase leading-[0.9] tracking-tight mb-3 text-[#2A1810] group-hover:text-[#FF6105] transition-colors",
                        large ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
                    )}>
                        {post.title}
                    </h3>

                    <p className="text-[#6B5545] line-clamp-2 text-sm leading-relaxed font-normal">
                        {post.excerpt}
                    </p>
                </div>

                <div className="mt-4 flex items-center gap-2 text-[#FF6105] text-xs font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                    Read Story <ArrowRight size={14} />
                </div>
            </div>
        </Link>
    );
};

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-white text-black font-sans selection:bg-[#FF6105] selection:text-white overflow-x-hidden">
            <Navbar />

            {/* --- HERO SECTION (100vh) --- */}
            <section className="h-screen w-full relative flex items-center justify-center overflow-hidden">
                {/* Background Image with White/Orange overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000"
                        alt="Office"
                        fill
                        className="object-cover opacity-[0.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />
                </div>

                {/* Orange Blob Effects */}
                <div className="absolute top-[20%] right-[10%] w-[30vw] h-[30vw] bg-[#FF6105] rounded-full blur-[120px] opacity-10 animate-pulse" />
                <div className="absolute bottom-[10%] left-[5%] w-[20vw] h-[20vw] bg-[#FF6105] rounded-full blur-[100px] opacity-5" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-8 max-w-4xl"
                    >
                        <div className="flex items-center gap-3">
                            <span className="w-12 h-[2px] bg-[#FF6105]" />
                            <span className="text-[#FF6105] font-bold tracking-[0.2em] uppercase text-sm">
                                Featured Insight
                            </span>
                        </div>

                        {/* REDUCED FONT SIZE HERE: from 5xl/7xl/6rem to 4xl/6xl/9xl (no, user said smaller) */}
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-[0.9] text-[#2A1810]">
                            {featuredPost.title}
                        </h1>

                        <p className="text-xl text-[#6B5545] max-w-2xl font-normal leading-relaxed">
                            {featuredPost.excerpt}
                        </p>

                        <div className="flex flex-wrap items-center gap-6 pt-4">
                            <Button asChild className="rounded-full bg-[#FF6105] hover:bg-black text-white px-10 py-7 text-sm font-bold uppercase tracking-widest shadow-[0_20px_40px_rgba(255,97,5,0.3)] hover:shadow-xl transition-all hover:-translate-y-1">
                                <Link href={`/blog-staging/${featuredPost.slug}`}>
                                    Read Article
                                </Link>
                            </Button>
                            {/* Added 'SEO' Tag here as requested */}
                            <span className="px-4 py-1.5 rounded-full bg-[#FFF5F0] text-[#FF6105] text-xs font-bold uppercase tracking-widest border border-[#FF6105]/20">
                                SEO
                            </span>
                            <span className="text-sm font-bold text-[#6B5545] uppercase tracking-wider">
                                {featuredPost.readTime}
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- LATEST UPDATES (BENTO GRID) --- */}
            <section className="py-32 px-6 lg:px-12 bg-white relative">
                <div className="max-w-7xl mx-auto mb-16 flex items-end justify-between">
                    <div>
                        <span className="text-[#6B5545] font-bold uppercase tracking-widest text-xs mb-2 block">New & Noteworthy</span>
                        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-none text-[#2A1810]">
                            Latest <span className="text-[#FF6105]">Updates</span>
                        </h2>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[500px]">
                    {/* Large Item spanning 2 cols */}
                    <BentoGridItem post={latestPosts[0]} className="md:col-span-2 shadow-xl" large />
                    <BentoGridItem post={latestPosts[1]} />
                    <BentoGridItem post={latestPosts[2]} />
                    <BentoGridItem post={designPosts[0]} />
                    <BentoGridItem post={designPosts[1]} />
                </div>
            </section>

            {/* --- CURATED SECTIONS --- */}

            {/* TECH SECTION */}
            <section className="py-32 bg-gray-50 px-6 lg:px-12 relative overflow-hidden">
                {/* Decorative background number */}
                <div className="absolute top-0 right-[-5%] text-[20rem] font-bold text-black/[0.03] leading-none pointer-events-none select-none">
                    01
                </div>

                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-12 items-start justify-between mb-20">
                        <div className="max-w-2xl">
                            <span className="text-[#FF6105] font-bold uppercase tracking-widest text-sm mb-4 block">Engineering</span>
                            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-none mb-6 text-[#2A1810]">
                                Tech & Dev
                            </h2>
                            <p className="text-[#6B5545] text-lg leading-relaxed">
                                Deep dives into modern web architecture. We explore how headless CMSs, Edge Computing, and React Server Components are changing the web.
                            </p>
                        </div>
                        <Button variant="outline" className="rounded-full border-black hover:bg-black hover:text-white px-8">
                            Explore Engineering
                        </Button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                        {techPosts.map(post => (
                            <Link key={post.id} href={`/blog-staging/${post.slug}`} className="group block bg-white p-2 rounded-3xl hover:shadow-xl transition-all duration-500 border border-black/5">
                                <div className="aspect-[16/9] relative overflow-hidden rounded-2xl bg-gray-100 mb-6">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#FF6105]">
                                        {post.category}
                                    </div>
                                </div>
                                <div className="px-4 pb-4">
                                    <h3 className="text-2xl md:text-3xl font-bold uppercase leading-tight mb-3 text-[#2A1810] group-hover:text-[#FF6105] transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-[#6B5545] line-clamp-2 text-sm font-normal">
                                        {post.excerpt}
                                    </p>
                                    <div className="mt-4 flex items-center gap-2 text-black/40 text-xs font-bold uppercase tracking-widest group-hover:text-black transition-colors">
                                        Read Now <ArrowUpRight size={14} />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* DESIGN SECTION */}
            <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                    <div className="lg:col-span-5 relative">
                        <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#FF6105]/10 rounded-full blur-2xl" />
                        <span className="text-[#FF6105] font-bold uppercase tracking-widest text-sm mb-4 block relative">Aesthetics</span>
                        <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9] mb-8 relative text-[#2A1810]">
                            Design <br />Culture
                        </h2>
                        <p className="text-[#6B5545] mb-8 font-medium text-lg leading-relaxed relative">
                            Exploring trends in digital product design. From dark mode constraints to micro-interaction psychology.
                        </p>
                        <Button className="rounded-full px-10 py-6 bg-black text-white hover:bg-[#FF6105] transition-colors font-bold uppercase tracking-widest">
                            View Design Archive
                        </Button>
                    </div>

                    <div className="lg:col-span-7 flex flex-col gap-6">
                        {designPosts.map(post => (
                            <Link key={post.id} href={`/blog-staging/${post.slug}`} className="group relative flex flex-col md:flex-row gap-6 md:items-center bg-gray-50 hover:bg-white p-6 rounded-3xl border border-transparent hover:border-black/5 hover:shadow-lg transition-all duration-300">
                                <div className="w-full md:w-40 aspect-square relative rounded-2xl overflow-hidden bg-white shrink-0">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 text-xs font-bold text-black/30 uppercase tracking-wider mb-2">
                                        <span>{post.date}</span>
                                        <span className="w-1 h-1 bg-black/20 rounded-full" />
                                        <span>{post.readTime}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold uppercase leading-tight mb-2 text-[#2A1810] group-hover:text-[#FF6105] transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-[#6B5545] line-clamp-2 text-sm font-normal">
                                        {post.excerpt}
                                    </p>
                                </div>
                                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity -rotate-45">
                                    <ArrowRight className="text-[#FF6105]" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
