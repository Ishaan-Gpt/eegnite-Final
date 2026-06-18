"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Check, ArrowRight, Star, ExternalLink, Calendar } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustRatingsBanner from "@/components/TrustRatingsBanner";

// --- PRECISE PREMIUM TEXTURE ---
function PremiumGridTexture({ opacity = "0.03" }: { opacity?: string }) {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="absolute inset-0 overflow-hidden"
        >
            <div 
                className="absolute inset-0" 
                style={{ 
                    backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`, 
                    backgroundSize: '50px 50px',
                    opacity: opacity 
                }} 
            />
            <motion.div
                className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
                animate={{ x: mousePos.x - 200, y: mousePos.y - 200, opacity: isHovering ? 1 : 0 }}
                transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
                style={{ background: 'radial-gradient(circle, rgba(255,97,5,0.08) 0%, transparent 70%)' }}
            />
        </div>
    );
}

// --- TESTIMONIALS HERO SECTION ---
function TestimonialsHero() {
    return (
        <section className="relative pt-36 pb-20 px-6 sm:px-12 overflow-hidden bg-white">
            <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)' }}>
                <div 
                    className="absolute inset-0 opacity-[0.08]" 
                    style={{ 
                        backgroundImage: `linear-gradient(to right, #FF6105 1px, transparent 1px), linear-gradient(to bottom, #FF6105 1px, transparent 1px)`, 
                        backgroundSize: '60px 60px' 
                    }} 
                />
                <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[350px] h-[350px] md:w-[900px] md:h-[900px] bg-gradient-to-t from-[#FF6105]/10 to-transparent rounded-full blur-[90px] md:blur-[140px]" />
            </div>

            <div className="max-w-6xl mx-auto w-full text-center relative z-10 flex flex-col items-center">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8 }} 
                    className="w-full"
                >
                    <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[#FF6105] mb-4 inline-flex items-center gap-3">
                        <span className="w-8 h-[2px] bg-[#FF6105]" />
                        Client Testimonials
                        <span className="w-8 h-[2px] bg-[#FF6105]" />
                    </span>
                    <h1 className="text-[7vw] xs:text-4xl md:text-5xl lg:text-7xl font-bold uppercase tracking-tighter leading-[1.05] mb-6 text-black max-w-[1300px] mx-auto">
                        See What Our <br />
                        <span className="text-[#FF6105]">Clients Say About Us</span>
                    </h1>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8, delay: 0.2 }} 
                    className="max-w-3xl mx-auto mb-10"
                >
                    <p className="text-sm md:text-xl text-black/60 font-medium leading-relaxed px-4">
                        We've worked with startups, scaling brands, and established businesses across India, the US, Europe, and the Middle East. Different industries. Different goals. One consistent outcome - growth that's measurable, not just visible. This page is where our clients do the talking. We just did the work.
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center gap-4 justify-center"
                >
                    <Link
                        href="https://calendar.app.google/m3Vy2iasTrY6eNAA6"
                        target="_blank"
                        rel="noopener"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FF6105] text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-xs hover:bg-[#e55800] transition-colors shadow-lg shadow-[#FF6105]/20 hover:shadow-[#FF6105]/35 duration-300"
                    >
                        <Calendar size={14} />
                        Book a Strategy Call
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

// --- DATA: TESTIMONIALS ---
const testimonials = [
    {
        name: "Hafedh Bucheery",
        designation: "Founder",
        company: "Deepmark",
        location: "Bahrain",
        tags: ["SEO"],
        text: "Working with Anish and his team has been a great experience. They are highly professional and knowledgeable in SEO. They understood Deepmark’s positioning and delivered a clear, effective strategy. Our online presence has improved significantly, and our rankings are now much stronger. Highly recommended for any business looking for real SEO results.",
        src: "/assets/Hafedh.jpg.jpeg"
    },
    {
        name: "Himanshu Singh",
        designation: "Founder",
        company: "Eshaarya",
        location: "USA",
        tags: ["Web Design", "Web Development", "SEO"],
        text: "Working with Anish on one of my projects has genuinely been one of the better vendor decisions I’ve made for our project. They handled SEO and content creation for us, covering everything from keyword-optimized product listings to broader content strategy. The quality of output is consistently high and clearly written with the end customer in mind. If you're building an online store and need someone who takes content seriously, Eegnite team is worth your time.",
        src: "/assets/Himanshu.jpg.jpeg"
    },
    {
        name: "Andre P.",
        designation: "Director of Digital Operations & Systems",
        company: "Petstore.direct",
        location: "USA",
        tags: ["SEO"],
        text: "Anish is a highly reliable project manager with a strong analytical mindset. He consistently brings structure to complex projects, ensuring timelines, data, and stakeholders stay aligned. His ability to translate data into actionable insights makes a real impact on decision-making. Beyond his technical skills, Anish is proactive, detail-oriented, and easy to collaborate with someone you can trust to drive projects forward efficiently",
        src: "/andre.jpg"
    },
    {
        name: "Dario Vettese",
        designation: "Managing Director",
        company: "PetYu.de",
        location: "Germany",
        tags: ["Web Development", "Web Design", "SEO"],
        text: "Always on time, very efficient, customer oriented and with lots of creativity. Working together has been my pleasure!",
        src: "/assets/Dario.jpg.jpeg"
    },
    {
        name: "Rokas Bartasius",
        designation: "Founder & CEO",
        company: "Varolab",
        location: "Lithuania",
        tags: ["SEO", "Web Design", "Digital Marketing"],
        text: "Partnering on projects with Anish is a truly positive experience. He is not only knowledgeable, trustworthy, and reliable, but he also has a genuine commitment to exceeding expectations. He consistently goes the extra mile to ensure all project goals are met on time, even when faced with unexpected roadblocks. His dedication and problem-solving skills were major factors in successful multiple project completions.",
        src: "/rokas.jpg"
    },
    {
        name: "Shankar Rathi",
        designation: "CEO",
        company: "SRC Farms",
        location: "India",
        tags: ["SEO"],
        text: "Anish and his team go out of their way to ensure the project is on track, they flag issues early, and are eager to solve issues or provide help that doesn't come under their scope of work. SEO expertise is at par with the best, and would definitely recommend their SEO services.",
        src: "/assets/shankar-rathi.png"
    },
    {
        name: "Rebeka Jasilionytė",
        designation: "Marketing Product Manager",
        company: "Varolab",
        location: "Lithuania",
        tags: ["SEO", "Web Design", "Digital Marketing"],
        text: "The team provides strong support across SEO, Meta Ads, Email Marketing, and Social Media Management. Their structured approach and consistent communication ensure steady progress and measurable results. We’ve seen clear improvements in visibility, engagement, and overall performance.",
        src: "/rebeka.jpg"
    },
    {
        name: "Rajeev Ranjan",
        designation: "Founder",
        company: "Wildwoodexport.com",
        location: "India",
        tags: ["Web Development"],
        text: "I got my website redeveloped with them, the concern was that we ourselves were not sure what should the content be, how should the website be but thanks to their extremely supportive team that they did everything from giving us perspective how should it be to development, seo etc etc and also they were very cost effective.",
        src: "/rajeev.png"
    },
    {
        name: "Sankalp Kedia",
        designation: "Director",
        company: "Supreme Infratech",
        location: "India",
        tags: ["Web Design", "Web Development"],
        text: "Anish and his team go out of their way to ensure the project is on track, they flag issues early, and are eager to solve issues or provide help that doesn't come under their scope of work. SEO expertise is at par with the best, and would definitely recommend their SEO services.",
        src: ""
    },
    {
        name: "Nudrat Khan",
        designation: "Director",
        company: "Supreme Infratech",
        location: "India",
        tags: ["Web Design", "Web Development"],
        text: "Hey Eegnite Team and Anish. Just wanted to say huge thanks for the amazing website design! It's sleek, user-friendly, and exactly what we needed. Your team's professionalism and attention to detail really shine through. Highly recommend!",
        src: "/assets/Nudrat (1).jpeg"
    }
];

// --- TESTIMONIAL CARD COMPONENT ---
interface TestimonialCardProps {
    name: string;
    designation: string;
    company: string;
    location?: string;
    tags: string[];
    text: string;
    src: string;
    index: number;
}

function TestimonialShowcaseCard({
    name,
    designation,
    company,
    location,
    tags,
    text,
    src,
    index
}: TestimonialCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(cardRef, { once: true, margin: "-5%" });

    const cleanDesignation = designation && designation.trim() !== "";
    const cleanCompany = company && company.trim() !== "";

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
            className="flex flex-col h-full mt-10 group"
        >
            {/* Main Card Body */}
            <div className="relative bg-white border border-black/5 border-b-0 rounded-t-[2rem] p-8 pt-16 shadow-sm group-hover:shadow-xl group-hover:border-[#FF6105]/20 transition-all duration-500 flex flex-col justify-between flex-grow min-h-[300px] overflow-visible bg-gradient-to-b from-white to-[#FFFEF8]">
                {/* Top overlap profile picture */}
                <div className="absolute -top-10 left-8 w-20 h-20 rounded-full border-4 border-white object-cover shadow-md bg-[#FFF5F0] overflow-hidden flex items-center justify-center">
                    {src ? (
                        <img 
                            src={src} 
                            alt={name} 
                            className="w-full h-full object-cover" 
                            loading="lazy"
                        />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-tr from-[#FF6105] to-[#ff8c4a] flex items-center justify-center text-white text-2xl font-black">
                            {name.charAt(0)}
                        </div>
                    )}
                </div>

                {/* Content Container */}
                <div className="flex-1 flex flex-col justify-between">
                    <div>
                        {/* Stars */}
                        <div className="flex gap-0.5 text-[#FF6105] mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={16} fill="currentColor" stroke="none" />
                            ))}
                        </div>

                        {/* Review Quote */}
                        <p className="text-black/75 text-sm md:text-base leading-relaxed mb-6 font-medium font-sans">
                            “{text}”
                        </p>
                    </div>

                    {/* Client Profile Details */}
                    <div className="border-t border-black/5 pt-4">
                        <div className="flex justify-between items-start">
                            <div>
                                <h4 className="text-base font-extrabold text-black uppercase tracking-tight leading-tight">
                                    {name}
                                </h4>
                                {(cleanDesignation || cleanCompany) && (
                                    <p className="text-black/55 text-xs font-semibold uppercase tracking-wider mt-0.5">
                                        {cleanDesignation && designation}
                                        {cleanDesignation && cleanCompany && " , "}
                                        {cleanCompany && company}
                                    </p>
                                )}
                            </div>
                            {location && (
                                <span className="text-black/40 text-[10px] font-bold uppercase tracking-wider bg-black/5 px-2.5 py-1 rounded-md mt-0.5">
                                    {location}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Attachment Panel */}
            <div className="bg-[#FFF5F0]/80 group-hover:bg-[#FFF5F0] border border-black/5 border-t-0 rounded-b-[2rem] px-8 py-4 flex flex-wrap items-center gap-2 group-hover:border-[#FF6105]/20 transition-all duration-500">
                <span className="text-[10px] font-bold uppercase tracking-wider text-black/45 mr-1">Services Taken:</span>
                {tags.map((t) => (
                    <span 
                        key={t} 
                        className="px-2.5 py-0.5 bg-white text-[#FF6105] rounded-full text-[9px] font-black uppercase tracking-wider border border-[#FF6105]/10 shadow-sm"
                    >
                        {t}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}

// --- TESTIMONIALS CONTENT SECTION ---
function TestimonialsSection() {
    const [activeFilter, setActiveFilter] = useState("All");
    const filters = ["All", "SEO", "Web Design", "Digital Marketing"];

    const filteredTestimonials = activeFilter === "All"
        ? testimonials
        : testimonials.filter(t => t.tags.includes(activeFilter));

    return (
        <section className="py-16 px-6 sm:px-12 bg-white relative overflow-hidden">
            <PremiumGridTexture opacity="0.02" />
            <div className="max-w-[1400px] mx-auto relative z-10">
                
                {/* Section Header */}
                <div className="max-w-3xl mb-12">
                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF6105] mb-3 inline-block">
                        What Our Clients Say
                    </span>
                    <h2 
                        className="text-3xl md:text-5xl font-extrabold uppercase text-black mb-6 tracking-tight leading-[1.1] text-balance"
                        style={{ textWrap: 'balance' }}
                    >
                        They Didn't Take Our Word For It. <br className="hidden md:block" />
                        <span className="text-[#FF6105]">They Let Their Results Speak.</span>
                    </h2>
                    <p className="text-black/60 text-sm md:text-base leading-relaxed font-medium">
                        These aren't cherry-picked quotes. They're real businesses; e-commerce brands, B2B companies, service providers, who came to EEGNITE with a problem and left with a result. Read what they have to say. Then decide.
                    </p>
                </div>

                {/* Filter Menu Bar */}
                <div className="flex flex-wrap gap-2.5 mb-16 border-b border-black/5 pb-6">
                    {filters.map((filter) => {
                        const isActive = activeFilter === filter;
                        return (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`relative px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 overflow-hidden ${
                                    isActive
                                        ? "text-white bg-[#FF6105] shadow-md shadow-[#FF6105]/20"
                                        : "text-black/60 bg-black/5 hover:bg-black/10 hover:text-black"
                                }`}
                            >
                                {isActive && (
                                    <motion.span
                                        layoutId="activeFilterBg"
                                        className="absolute inset-0 bg-[#FF6105] z-0"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{filter}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Testimonials Grid */}
                <motion.div 
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredTestimonials.map((t, idx) => (
                            <motion.div
                                key={t.name}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                            >
                                <TestimonialShowcaseCard
                                    index={idx}
                                    name={t.name}
                                    designation={t.designation}
                                    company={t.company}
                                    location={t.location}
                                    tags={t.tags}
                                    text={t.text}
                                    src={t.src}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
}

// --- TRUST BANNER INTEGRATION SECTION ---
function TrustBannerSection() {
    return (
        <section className="py-8 bg-white relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
                <TrustRatingsBanner />
            </div>
        </section>
    );
}

// --- Bottom CTA SECTION ---
function BottomCTASection() {
    return (
        <section className="relative py-24 px-6 md:px-12 bg-white overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-[#FF6105]/5 to-transparent blur-[120px] pointer-events-none select-none" />

            <div className="max-w-4xl mx-auto relative z-10 text-center">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF6105] mb-6 inline-flex items-center gap-3">
                    <span className="w-8 h-[2px] bg-[#FF6105]" />
                    Your Next Stage of Growth Starts Here
                    <span className="w-8 h-[2px] bg-[#FF6105]" />
                </span>

                <h2 
                    className="text-3xl md:text-[clamp(2.5rem,5vw,3.5rem)] font-bold tracking-tight text-black leading-[1.1] uppercase mb-8 text-balance"
                    style={{ textWrap: 'balance' }}
                >
                    Ready to Accelerate Growth <br className="hidden md:block" />
                    Like Them? Let's Create Your <br className="hidden md:block" />
                    <span className="text-[#FF6105]">Winning Digital Strategy.</span>
                </h2>

                <p className="max-w-2xl mx-auto text-sm md:text-lg text-black/60 font-medium tracking-wide leading-relaxed mb-10">
                    No decks. No guesswork. No generic advice. Book a free 30-minute strategy call with EEGNITE and walk away knowing exactly what your brand needs to grow — and how we'll make it happen.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <motion.a
                        href="https://calendar.app.google/m3Vy2iasTrY6eNAA6"
                        target="_blank"
                        rel="noopener"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FF6105] text-white px-4 xs:px-6 sm:px-8 py-4 rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm hover:bg-[#e55800] transition-colors shadow-lg shadow-[#FF6105]/20 hover:shadow-[#FF6105]/35 duration-300 whitespace-nowrap"
                    >
                        <Calendar size={16} />
                        Book Your Free Strategy Call
                        <ArrowRight size={16} />
                    </motion.a>
                </div>
            </div>
        </section>
    );
}

// --- MAIN WRAPPER PAGE COMPONENT ---
export default function TestimonialsPageContent() {
    return (
        <main className="bg-white min-h-screen text-black font-sans selection:bg-[#FF6105] selection:text-white">
            <div className="relative z-10">
                <Navbar />
                <TestimonialsHero />
                <TrustBannerSection />
                <TestimonialsSection />
                <BottomCTASection />
            </div>
            <Footer />
        </main>
    );
}
