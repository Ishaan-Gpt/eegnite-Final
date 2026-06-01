"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface IndustryCtaProps {
    title: string;
    description: string;
    primaryCtaText?: string;
    primaryCtaLink?: string;
    secondaryCtaText?: string;
    secondaryCtaLink?: string;
    footnote?: string;
}

export function IndustryCta({
    title,
    description,
    primaryCtaText = "Get a Free Growth Audit",
    primaryCtaLink = "/#contact",
    secondaryCtaText = "Request a Quote",
    secondaryCtaLink = "/#contact",
    footnote,
}: IndustryCtaProps) {
    return (
        <section className="py-24 md:py-32 bg-[#FF6105] text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 L100 0 L100 100 Z" fill="white" />
                </svg>
            </div>
            <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-[1.1] mb-6">
                            {title}
                        </h2>
                        <div className="h-2 w-24 bg-white rounded-full mt-8" />
                    </div>
                    <div className="flex flex-col justify-center h-full">
                        <p className="text-white/90 text-base md:text-xl leading-relaxed mb-10 max-w-xl">
                            {description}
                        </p>
                        <div className="flex flex-wrap gap-4 md:gap-6 items-center">
                            <Link
                                href={primaryCtaLink}
                                className="px-8 py-4 md:px-10 md:py-5 bg-white text-black text-base md:text-xl font-bold rounded-full hover:bg-black hover:text-white transition-colors duration-300 flex items-center gap-3 shadow-xl"
                            >
                                {primaryCtaText} <ArrowRight />
                            </Link>
                            <Link
                                href={secondaryCtaLink}
                                className="px-8 py-4 md:px-10 md:py-5 bg-transparent border-2 border-white text-white text-base md:text-xl font-bold rounded-full hover:bg-white hover:text-[#FF6105] transition-colors duration-300 flex items-center gap-3 shadow-xl"
                            >
                                {secondaryCtaText}
                            </Link>
                        </div>
                        {footnote && (
                            <span className="mt-6 text-sm uppercase tracking-widest font-medium opacity-70">{footnote}</span>
                        )}
                    </div>
                </div>
            </div>
            <div className="absolute bottom-6 right-6 md:right-10 text-white/40 text-xs md:text-sm uppercase tracking-widest">
                From Kolkata to the World
            </div>
        </section>
    );
}
