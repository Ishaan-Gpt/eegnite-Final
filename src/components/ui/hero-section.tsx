"use client"

import { ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface HeroProps {
    eyebrow?: string
    title: string
    subtitle: string
    ctaLabel?: string
    ctaHref?: string
}

export function HeroSection({
    eyebrow = "Digital Marketing Agency",
    title,
    subtitle,
    ctaLabel = "Talk to Our Experts",
    ctaHref = "#contact",
}: HeroProps) {
    return (
        <section
            id="hero"
            className="relative mx-auto w-full pt-32 md:pt-40 px-6 text-center md:px-8 
      min-h-screen overflow-hidden 
      bg-[linear-gradient(to_bottom,#fff,#ffffff_50%,#fff4ed_88%)]
      rounded-b-xl"
        >
            {/* Grid BG with Orange tint */}
            <div
                className="absolute -z-10 inset-0 opacity-60 h-[600px] w-full 
        bg-[linear-gradient(to_right,#FF610510_1px,transparent_1px),linear-gradient(to_bottom,#FF610510_1px,transparent_1px)]
        bg-[size:6rem_5rem] 
        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
            />

            {/* Radial Accent - Orange themed */}
            <div
                className="absolute left-1/2 top-[calc(100%-90px)] lg:top-[calc(100%-150px)] 
        h-[500px] w-[700px] md:h-[500px] md:w-[1100px] lg:h-[750px] lg:w-[140%] 
        -translate-x-1/2 rounded-[100%] bg-white
        bg-[radial-gradient(closest-side,#fff_82%,#FF6105)]"
                style={{ animationDelay: '0.5s' }}
            />

            {/* Eyebrow */}
            {eyebrow && (
                <motion.a
                    href="#about"
                    className="group inline-block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                >
                    <span
                        className="text-sm text-black/60 font-medium mx-auto px-5 py-2 
            bg-gradient-to-tr from-[#FF6105]/5 via-[#FF6105]/10 to-transparent  
            border-[2px] border-[#FF6105]/20
            rounded-full w-fit tracking-wide uppercase flex items-center justify-center"
                    >
                        {eyebrow}
                        <ChevronRight className="inline w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1 text-[#FF6105]" />
                    </span>
                </motion.a>
            )}

            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="text-balance py-6 text-5xl font-bold leading-none tracking-tight 
        sm:text-6xl md:text-7xl lg:text-8xl"
            >
                <span className="text-black">{title.split('.')[0]}.</span>
                <br />
                <span className="text-black">{title.split('.')[1]}.</span>
                <br />
                <span className="text-[#FF6105]">{title.split('.')[2]}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="mb-10 text-balance 
        text-lg tracking-tight text-black/50
        md:text-xl max-w-2xl mx-auto leading-relaxed"
            >
                {subtitle}
            </motion.p>

            {/* CTA */}
            {ctaLabel && (
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.8 }}
                >
                    <Button
                        asChild
                        size="lg"
                        className="z-20 font-semibold tracking-tight text-center rounded-full shadow-xl shadow-[#FF6105]/30 group"
                    >
                        <a href={ctaHref} className="flex items-center gap-3">
                            {ctaLabel}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </Button>
                </motion.div>
            )}

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
            >
                <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-7 h-12 rounded-full border-2 border-black/15 flex justify-center pt-2"
                >
                    <motion.div
                        animate={{ opacity: [1, 0.2, 1], y: [0, 6, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1.5 h-3 bg-[#FF6105] rounded-full"
                    />
                </motion.div>
            </motion.div>
        </section>
    )
}
