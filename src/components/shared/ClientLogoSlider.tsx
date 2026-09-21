"use client";

import { motion } from "framer-motion";

interface ClientLogoSliderProps {
    className?: string;
    innerOnly?: boolean;
    heading?: React.ReactNode;
    logoSize?: "default" | "medium" | "small" | "half";
}

export function ClientLogoSlider({ className = "", innerOnly = false, heading, logoSize = "medium" }: ClientLogoSliderProps) {
    const clientLogos = [
        { name: "Al Jiwan Jewelry", src: "/images/logos/al-jiwan-jewelry-logo.png" },
        { name: "Aquagear Australia", src: "/images/logos/aquagear-australia-logo.png" },
        { name: "bluefrog pharma", src: "/images/logos/bluefrog-pharma-logo.png" },
        { name: "Cajun Legacy", src: "/images/logos/cajun-legacy-logo.webp" },
        { name: "Cary Implant & General Dentistry", src: "/images/logos/cary-implant-and-general-dentistry-logo.png" },
        { name: "Deepmark Branding Agency", src: "/images/logos/deepmark-logo.png" },
        { name: "Eshaarya", src: "/images/logos/eshaarya-logo.webp" },
        { name: "House of Aluna", src: "/images/logos/house-of-aluna-logo.png" },
        { name: "Interio Lounge", src: "/images/logos/interio-lounge-logo.png" },
        { name: "PetStore.Direct", src: "/images/logos/petstore-direct_logo.webp" },
        { name: "Pine Branding", src: "/images/logos/pine-branding-logo.png" },
        { name: "SRC Farms", src: "/images/logos/src-farms-logo.webp" },
        { name: "Varolab", src: "/images/logos/varolab-logo.webp" },
        { name: "Wild Wood Exports", src: "/images/logos/wild-wood-exports-logo.png" },
        { name: "Xendit", src: "/images/logos/xendit-logo.webp" }
    ];

    const content = (
        <div className="flex flex-col items-start lg:items-center gap-8 lg:gap-10 w-full overflow-hidden text-left lg:text-center">
            {/* Heading */}
            <div className="w-full py-2">
                <h3 className="text-2xl sm:text-3xl md:text-[clamp(2.5rem,5vw,3.5rem)] font-bold tracking-tight text-black leading-[1.25] lg:leading-[1.3] uppercase text-left lg:text-center py-2">
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
            <div className={`w-full flex items-center relative overflow-hidden group select-none min-w-0 max-w-full ${
                logoSize === "default" 
                    ? "py-6 min-h-[180px] lg:min-h-[260px]" 
                    : logoSize === "small" || logoSize === "half"
                    ? "py-3 min-h-[90px] lg:min-h-[130px]"
                    : "py-4 min-h-[120px] lg:min-h-[160px]"
            }`}>
                {/* Gradient Overlays using the custom theme white color #FFFEF8 */}
                <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

                {/* Infinite scroll marquee wrapper */}
                <div className="flex w-full overflow-hidden min-w-0 max-w-full">
                    {[0, 1].map((copy) => (
                        <div
                            key={copy}
                            className={`flex animate-loop-scroll flex-shrink-0 ${
                                logoSize === "default"
                                    ? "gap-2 md:gap-4 pr-2 md:pr-4"
                                    : logoSize === "small" || logoSize === "half"
                                    ? "gap-2 md:gap-4 pr-2 md:pr-4"
                                    : "gap-6 md:gap-10 pr-6 md:pr-10"
                            }`}
                            aria-hidden={copy === 1}
                        >
                            {clientLogos.map((logo, index) => (
                                <div
                                    key={`${copy}-${index}`}
                                    className={`flex items-center justify-center flex-shrink-0 ${
                                        logoSize === "default"
                                            ? "w-44 h-40 sm:w-[176px] sm:h-[160px] md:w-[220px] md:h-[200px] lg:w-[280px] lg:h-[240px] px-2"
                                            : logoSize === "small" || logoSize === "half"
                                            ? "w-28 h-20 sm:w-32 sm:h-24 md:w-36 md:h-24 lg:w-40 lg:h-28 px-2"
                                            : "w-36 h-24 sm:w-40 sm:h-28 md:w-44 md:h-32 lg:w-48 lg:h-32 px-3"
                                    }`}
                                    title={logo.name}
                                >
                                    <img
                                        src={logo.src}
                                        alt={logo.name}
                                        className={`${
                                            logoSize === "default"
                                                ? "w-full h-full object-contain opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-105"
                                                : logoSize === "small" || logoSize === "half"
                                                ? "max-h-10 sm:max-h-12 md:max-h-14 lg:max-h-16 max-w-full object-contain opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-105"
                                                : "max-h-12 sm:max-h-14 md:max-h-16 lg:max-h-20 max-w-full object-contain opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-105"
                                        }`}
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
