"use client";

import { motion } from "framer-motion";

interface ClientLogoSliderProps {
    className?: string;
    innerOnly?: boolean;
    heading?: React.ReactNode;
}

export function ClientLogoSlider({ className = "", innerOnly = false, heading }: ClientLogoSliderProps) {
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
        <div className="flex flex-col items-start lg:items-center gap-8 lg:gap-10 w-full overflow-hidden text-left lg:text-center">
            {/* Heading */}
            <div className="w-full">
                <h3 className="text-3xl md:text-[clamp(2.5rem,5vw,3.5rem)] font-bold tracking-tight text-black leading-[1.1] uppercase text-left lg:text-center">
                    {heading ? (
                        heading
                    ) : (
                        <>
                            Driving Digital Growth <br />
                            for Brands <br className="block md:hidden" />
                            <span className="text-[#FF6105]">Across the Globe</span>
                        </>
                    )}
                </h3>
            </div>
 
            {/* Logo Slider */}
            <div className="w-full flex items-center relative overflow-hidden group select-none py-6 min-h-[180px] lg:min-h-[260px] min-w-0 max-w-full">
                {/* Gradient Overlays using the custom theme white color #FFFEF8 */}
                <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
 
                {/* Infinite scroll marquee wrapper */}
                <div className="flex w-full overflow-hidden min-w-0 max-w-full">
                    {[0, 1].map((copy) => (
                        <div
                            key={copy}
                            className="flex animate-loop-scroll gap-1 md:gap-1.5 pr-1 md:pr-1.5 flex-shrink-0"
                            aria-hidden={copy === 1}
                        >
                            {clientLogos.map((logo, index) => (
                                <div
                                    key={`${copy}-${index}`}
                                    className="flex items-center justify-center flex-shrink-0 w-44 h-40 sm:w-[176px] sm:h-[160px] md:w-[220px] md:h-[200px] lg:w-[280px] lg:h-[240px]"
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
        return <div className={`w-full overflow-hidden max-w-full ${className}`}>{content}</div>;
    }
 
    return (
        <section className={`w-full py-8 md:py-12 bg-white overflow-hidden border-b border-black/5 ${className}`}>
            <div className="max-w-[1400px] mx-auto px-6 sm:px-12 w-full overflow-hidden max-w-full">
                {content}
            </div>
        </section>
    );
}
