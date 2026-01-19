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
];

// --- COMPONENTS ---

const BentoGridItem = ({ className, post, large = false }: { className?: string, post: any, large?: boolean }) => {
    return (
        <Link
            href={`/blog/${post.slug}`}
            className={cn(
                "group relative overflow-hidden rounded-3xl bg-white border border-black/5 hover:border-[#FF6105]/30 hover:shadow-2xl transition-all duration-500 flex flex-col h-full",
                className
            )}
        >
            {/* Image Container - Flexible height on mobile, fixed percentage on desktop if needed, or better use flex ratio */}
            <div className={cn(
                "relative w-full overflow-hidden shrink-0",
                large ? "h-[250px] md:h-[60%]" : "h-[200px] md:h-[50%]"
            )}>
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>

            {/* Content - Flex grow to fill remaining space */}
            <div className="p-6 md:p-8 flex flex-col justify-between bg-white relative flex-grow">
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
                        large ? "text-2xl md:text-4xl" : "text-lg md:text-2xl"
                    )}>
                        {post.title}
                    </h3>

                    <p className="text-[#6B5545] text-sm leading-relaxed font-normal line-clamp-3 md:line-clamp-2 hidden md:block">
                        {post.excerpt}
                    </p>
                </div>

                <div className="mt-6 flex items-center gap-2 text-[#FF6105] text-xs font-bold uppercase tracking-widest opacity-80 md:opacity-60 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
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
            <section className="min-h-[80vh] md:min-h-screen w-full relative flex items-center justify-center overflow-hidden py-24 md:py-0">
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

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-10 md:pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-6 md:gap-8 max-w-4xl"
                    >
                        <div className="flex items-center gap-3">
                            <span className="w-8 md:w-12 h-[2px] bg-[#FF6105]" />
                            <span className="text-[#FF6105] font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
                                Featured Insight
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-[0.95] text-[#2A1810]">
                            {featuredPost.title}
                        </h1>

                        <p className="text-base md:text-xl text-[#6B5545] max-w-2xl font-normal leading-relaxed">
                            {featuredPost.excerpt}
                        </p>

                        <div className="flex flex-wrap items-center gap-4 md:gap-6 pt-2 md:pt-4">
                            <Button asChild className="rounded-full bg-[#FF6105] hover:bg-black text-white px-6 py-5 md:px-10 md:py-7 text-xs md:text-sm font-bold uppercase tracking-widest shadow-[0_20px_40px_rgba(255,97,5,0.3)] hover:shadow-xl transition-all hover:-translate-y-1">
                                <Link href={`/blog/${featuredPost.slug}`}>
                                    Read Article
                                </Link>
                            </Button>
                            {/* Added 'SEO' Tag here as requested */}
                            <span className="px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-[#FFF5F0] text-[#FF6105] text-[10px] md:text-xs font-bold uppercase tracking-widest border border-[#FF6105]/20">
                                SEO
                            </span>
                            <span className="text-xs md:text-sm font-bold text-[#6B5545] uppercase tracking-wider">
                                {featuredPost.readTime}
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- LATEST UPDATES (BENTO GRID) - Simplified for 1 item --- */}
            <section className="py-16 md:py-32 px-4 md:px-12 bg-white relative">
                <div className="max-w-7xl mx-auto mb-10 md:mb-16 flex items-end justify-between">
                    <div>
                        <span className="text-[#6B5545] font-bold uppercase tracking-widest text-xs mb-2 block">New & Noteworthy</span>
                        <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tighter leading-none text-[#2A1810]">
                            Latest <span className="text-[#FF6105]">Updates</span>
                        </h2>
                    </div>
                </div>

                {/* Grid simplified to just show what we have */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-[450px] md:auto-rows-[600px]">
                    <BentoGridItem post={latestPosts[0]} className="md:col-span-2 lg:col-span-2 shadow-xl" large />
                </div>
            </section>

            <Footer />
        </main>
    );
}
