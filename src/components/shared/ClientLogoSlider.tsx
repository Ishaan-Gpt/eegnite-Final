"use client";

import { motion } from "framer-motion";

interface ClientLogoSliderProps {
    className?: string;
    innerOnly?: boolean;
}

export function ClientLogoSlider({ className = "", innerOnly = false }: ClientLogoSliderProps) {
    const clientLogos = [
        { name: "Al Jiwan Jewelry", src: "/logos/al-jiwan-jewelry-logo.png" },
        { name: "Aquagear Australia", src: "/logos/aquagear-australia-logo.png" },
        { name: "bluefrog pharma", src: "/logos/bluefrog-pharma-logo.png" },
        { name: "Cajun Legacy", src: "/logos/cajun-legacy-logo.png" },
        { name: "Cary Implant & General Dentistry", src: "/logos/cary-implant-and-general-dentistry-logo.png" },
        { name: "Deepmark Branding Agency", src: "/logos/deepmark-logo.png" },
        { name: "Eshaarya", src: "/logos/eshaarya-logo.png" },
        { name: "House of Aluna", src: "/logos/house-of-aluna-logo.png" },
        { name: "Interio Lounge", src: "/logos/interio-lounge-logo.png" },
        { name: "PetStore.Direct", src: "/logos/petstore-direct_logo.png" },
        { name: "Pine Branding", src: "/logos/pine-branding-logo.png" },
        { name: "SRC Farms", src: "/logos/src-farms-logo.png" },
        { name: "Varolab", src: "/logos/varolab-logo.png" },
        { name: "Wild Wood Exports", src: "/logos/wild-wood-exports-logo.png" },
        { name: "Xendit", src: "/logos/xendit-logo.png" }
    ];

    const content = (
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-12 w-full">
            {/* Left 50% - H3 Heading */}
            <div className="w-full lg:w-1/2 flex items-center">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[1.75rem] font-extrabold uppercase tracking-tight text-black leading-[1.15] text-left">
                    Driving Digital Growth <br />
                    for Brands <span className="text-[#FF6105]">Across the Globe</span>
                </h3>
            </div>

            {/* Right 50% - Logo Slider */}
            <div className="w-full lg:w-1/2 flex items-center relative overflow-hidden group select-none py-6 min-h-[140px]">
                {/* Gradient Overlays using the custom theme white color #FFFEF8 */}
                <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

                {/* Infinite scroll marquee */}
                <div className="flex w-full overflow-hidden">
                    {[0, 1].map((copy) => (
                        <div
                            key={copy}
                            className="flex animate-loop-scroll gap-4 md:gap-6 pr-4 md:pr-6"
                            aria-hidden={copy === 1}
                        >
                            {clientLogos.map((logo, index) => (
                                <div
                                    key={`${copy}-${index}`}
                                    className="flex items-center justify-center flex-shrink-0 w-48 h-20 sm:w-64 sm:h-26 md:w-80 md:h-32"
                                    title={logo.name}
                                >
                                    <img
                                        src={logo.src}
                                        alt={logo.name}
                                        className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-105"
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    if (innerOnly) {
        return <div className={`w-full ${className}`}>{content}</div>;
    }

    return (
        <section className={`w-full py-16 md:py-24 bg-white overflow-hidden border-b border-black/5 ${className}`}>
            <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
                {content}
            </div>
        </section>
    );
}
