"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

// EEGNITE's actual testimonials
const testimonials = [
    {
        quote: "I would like to express my sincere appreciation for your outstanding work on developing a go-to-market strategy, and product marketing for our email marketing campaigns. Your dedication and expertise have been vital in achieving excellent sales results.",
        name: "Tomas Sabaliauskas",
        designation: "Business Owner",
        src: "/tomas.jpg"
    },
    {
        quote: "I've had the opportunity to work closely with Anish for almost four years, and during that time I've seen firsthand how consistently he brings clarity, structure, and long-term thinking to every challenge. He is driven, focused, and genuinely committed to solving complex problems in a way that only fixes the issue in front of him but strengthens the entire system around it.",
        name: "Andre Ponti",
        designation: "Strategic Partner",
        src: "/andre.jpg"
    },
    {
        quote: "The team provides strong support across SEO, Meta Ads, Email Marketing, and Social Media Management. Their structured approach and consistent communication ensure steady progress and measurable results. We've seen clear improvements in visibility, engagement, and overall performance.",
        name: "Rebeka Jasilionytė",
        designation: "Business Partner",
        src: "/rebeka.jpg"
    },
    {
        quote: "I recently worked with Eegnite for designing my logo and brochures, and I am extremely impressed with their work. The team understood my requirements perfectly and delivered designs that were clean, modern, and highly professional. They were very responsive, patient with my edits, and made sure every detail was exactly how I wanted. The final output truly helped elevate my brand identity. I highly recommend Eegnite to anyone looking for quality design services. Their creativity, punctuality, and professionalism are outstanding!",
        name: "Ashwani Gupta",
        designation: "Business Owner",
        src: "/ashwani.png"
    },
    {
        quote: "I got my website redeveloped with them, the concern was that we ourselves were not sure what should the content be, how should the website be but thanks to their extremely supportive team that they did everything from giving us perspective how should it be to development, SEO etc etc and also they were very cost effective.",
        name: "Rajeev Ranjan",
        designation: "Business Owner",
        src: "/rajeev.png"
    }
];

export default function Testimonials() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-15%" });

    return (
        <section
            ref={sectionRef}
            className="min-h-screen flex flex-col justify-center py-24 bg-white relative"
            id="testimonials"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full">
                {/* Header */}
                <div className="mb-8 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        className="text-[clamp(2.5rem,7vw,5rem)] font-bold text-black leading-[1] uppercase tracking-tight"
                    >
                        VOICE OF{" "}
                        <span className="text-[#FF6105]">EXCELLENCE</span>
                    </motion.h2>
                </div>

                {/* Animated Testimonials */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 }}
                >
                    <AnimatedTestimonials testimonials={testimonials} autoplay />
                </motion.div>
            </div>
        </section>
    );
}
