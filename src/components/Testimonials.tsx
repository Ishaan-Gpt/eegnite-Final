"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import TrustRatingsBanner from "@/components/TrustRatingsBanner";

// EEGNITE's actual testimonials
const testimonials = [
    {
        quote: "Anish is a highly reliable project manager with a strong analytical mindset. He consistently brings structure to complex projects, ensuring timelines, data, and stakeholders stay aligned. His ability to translate data into actionable insights makes a real impact on decision-making. Beyond his technical skills, Anish is proactive, detail-oriented, and easy to collaborate with someone you can trust to drive projects forward efficiently",
        name: "Andre P.",
        designation: "Director of Digital Operations & Systems, Petstore.direct",
        location: "USA",
        src: "/andre.jpg"
    },
    {
        quote: "Always on time, very efficient, customer oriented and with lots of creativity. Working together has been my pleasure!",
        name: "Dario Vettese",
        designation: "Managing Director, PetYu.de",
        location: "Germany",
        src: "/assets/Dario.jpg.jpeg"
    },
    {
        quote: "Partnering on projects with Anish is a truly positive experience. He is not only knowledgeable, trustworthy, and reliable, but he also has a genuine commitment to exceeding expectations. He consistently goes the extra mile to ensure all project goals are met on time, even when faced with unexpected roadblocks. His dedication and problem-solving skills were major factors in successful multiple project completions.",
        name: "Rokas Bartasius",
        designation: "Founder & CEO, Varolab",
        location: "Lithuania",
        src: "/rokas.jpg"
    },
    {
        quote: "The team provides strong support across SEO, Meta Ads, Email Marketing, and Social Media Management. Their structured approach and consistent communication ensure steady progress and measurable results. We’ve seen clear improvements in visibility, engagement, and overall performance.",
        name: "Rebeka Jasilionytė",
        designation: "Marketing Product Manager, Varolab",
        location: "Lithuania",
        src: "/rebeka.jpg"
    },
    {
        quote: "I got my website redeveloped with them, the concern was that we ourselves were not sure what should the content be, how should the website be but thanks to their extremely supportive team that they did everything from giving us perspective how should it be to development, seo etc etc and also they were very cost effective.",
        name: "Rajeev Ranjan",
        designation: "Founder, Wildwoodexport.com",
        location: "India",
        src: "/rajeev.png"
    }
];

export default function Testimonials() {
    const sectionRef = useRef<any>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-15%" });

    return (
        <section
            ref={sectionRef}
            className="min-h-screen flex flex-col justify-center py-24 bg-white relative"
            id="testimonials"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full">
                {/* Header */}
                <div className="mb-12 lg:mb-16 text-left lg:text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        className="text-[clamp(1.8rem,5vw,3.5rem)] font-bold text-black leading-[1.1] uppercase tracking-tight"
                    >
                        They Trusted Us. <br />
                        <span className="text-[#FF6105]">What Followed Speaks.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3 }}
                        className="mt-6 max-w-2xl lg:mx-auto text-sm md:text-lg text-black/50 font-medium tracking-wide leading-relaxed"
                    >
                        From startups to established enterprises, the businesses that partnered with EEGNITE saw real results - not just better reports. Here's what they have to say about working with a digital marketing agency that actually delivers.
                    </motion.p>
                </div>

                {/* Trust & Ratings Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.35 }}
                    className="mb-16"
                >
                    <TrustRatingsBanner />
                </motion.div>

                {/* Animated Testimonials */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 }}
                >
                    <AnimatedTestimonials testimonials={testimonials} autoplay />
                </motion.div>

                {/* See All Testimonials Link */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.45 }}
                    className="flex justify-center -mt-8 mb-4"
                >
                    <Link
                        href="/testimonials"
                        className="inline-flex items-center gap-2 bg-[#FF6105] text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-xs hover:bg-[#e55800] transition-colors shadow-lg shadow-[#FF6105]/20 hover:shadow-[#FF6105]/35 duration-300"
                    >
                        See All Testimonials
                        <ArrowRight size={14} />
                    </Link>
                </motion.div>

                {/* Search Engine Optimization (SEO) Crawler Fallback */}
                <div className="sr-only" aria-hidden="false">
                    {testimonials.map((testimonial, idx) => (
                        <article key={idx}>
                            <h3>{testimonial.name} - {testimonial.designation}</h3>
                            <blockquote>{testimonial.quote}</blockquote>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
