"use client";
import { useEffect, useState, useRef, useCallback, Suspense, lazy } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

// Lazy load components
const Hero = lazy(() => import("@/components/Hero"));
const About = lazy(() => import("@/components/About"));
const VelocityScroll = lazy(() => import("@/components/VelocityScroll"));
const Services = lazy(() => import("@/components/Services"));
const ROISection = lazy(() => import("@/components/ROISection"));
const GlobalReach = lazy(() => import("@/components/GlobalReach"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Results = lazy(() => import("@/components/Results"));
const FAQ = lazy(() => import("@/components/FAQ"));
const Founder = lazy(() => import("@/components/Founder"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));
const Chatbot = lazy(() => import("@/components/Chatbot"));

// JSON-LD for SEO
import { OrganizationJsonLd, WebsiteJsonLd, LocalBusinessJsonLd } from "@/components/JsonLd";

gsap.registerPlugin(ScrollTrigger);

// Loading skeleton - Minimal
function LoadingSkeleton() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-3xl font-bold text-[#FF6105]"
            >
                EEGNITE
            </motion.div>
        </div>
    );
}



// Traveling Line
function TravelingLine() {
    const { scrollYProgress } = useScroll();
    const smoothY = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });
    const y = useTransform(smoothY, [0, 1], ['5vh', '95vh']);

    return (
        <>
            <div className="traveling-line" />
            <motion.div style={{ top: y }} className="traveling-dot" />
        </>
    );
}

// Loader
function Loader({ onComplete }: { onComplete: () => void }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(p => {
                if (p >= 100) {
                    clearInterval(timer);
                    setTimeout(onComplete, 500);
                    return 100;
                }
                return p + Math.random() * 15 + 5;
            });
        }, 50);
        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <motion.div
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#FF6105]"
        >
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-6xl md:text-8xl font-bold text-white tracking-tight mb-12"
            >
                EEGNITE
            </motion.h1>

            <div className="w-40 h-[2px] bg-white/30 rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-white"
                    style={{ width: `${Math.min(progress, 100)}%` }}
                />
            </div>
        </motion.div>
    );
}

import Navbar from "@/components/Navbar";


export default function Home() {
    const [loading, setLoading] = useState(true);
    const [mounted, setMounted] = useState(false);

    const onLoadComplete = useCallback(() => setLoading(false), []);

    useEffect(() => {
        setMounted(true);

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);

        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((t) => lenis.raf(t * 1000));
        gsap.ticker.lagSmoothing(0);

        return () => lenis.destroy();
    }, []);

    if (!mounted) return null;

    return (
        <main className="min-h-screen bg-white">
            <AnimatePresence mode="wait">
                {loading && <Loader key="loader" onComplete={onLoadComplete} />}
            </AnimatePresence>

            {!loading && (
                <>
                    {/* JSON-LD Structured Data for SEO */}
                    <OrganizationJsonLd />
                    <WebsiteJsonLd />
                    <LocalBusinessJsonLd />

                    <TravelingLine />
                    <Navbar />

                    <Suspense fallback={<LoadingSkeleton />}>
                        <Hero />
                    </Suspense>
                    <Suspense fallback={<LoadingSkeleton />}>
                        <About />
                    </Suspense>
                    <Suspense fallback={<LoadingSkeleton />}>
                        <VelocityScroll />
                    </Suspense>
                    <Suspense fallback={<LoadingSkeleton />}>
                        <Services />
                    </Suspense>
                    <Suspense fallback={<LoadingSkeleton />}>
                        <ROISection />
                    </Suspense>
                    <Suspense fallback={<LoadingSkeleton />}>
                        <GlobalReach />
                    </Suspense>
                    <Suspense fallback={<LoadingSkeleton />}>
                        <Testimonials />
                    </Suspense>
                    <Suspense fallback={<LoadingSkeleton />}>
                        <Results />
                    </Suspense>
                    <Suspense fallback={<LoadingSkeleton />}>
                        <Founder />
                    </Suspense>
                    <Suspense fallback={<LoadingSkeleton />}>
                        <FAQ />
                    </Suspense>
                    <Suspense fallback={<LoadingSkeleton />}>
                        <Contact />
                    </Suspense>
                    <Suspense fallback={<LoadingSkeleton />}>
                        <Footer />
                    </Suspense>
                    <Suspense fallback={null}>
                        <Chatbot />
                    </Suspense>
                </>
            )}
        </main>
    );
}
