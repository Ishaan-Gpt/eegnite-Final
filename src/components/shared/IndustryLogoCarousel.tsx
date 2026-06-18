"use client";

interface IndustryLogoCarouselProps {
    title: string;
    logos: string[];
}

export function IndustryLogoCarousel({ title, logos }: IndustryLogoCarouselProps) {
    const doubled = [...logos, ...logos];

    return (
        <section className="py-12 md:py-20 bg-[#FAFAFA] border-y border-black/5 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 mb-8 md:mb-12 text-center">
                <h3 className="text-base md:text-xl font-bold uppercase tracking-widest text-black/30">
                    {title}
                </h3>
            </div>

            <div className="relative w-full overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />

                <div className="flex gap-4 md:gap-6 w-max animate-marquee-logo">
                    {doubled.map((logo, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 px-6 py-3 bg-white border border-black/8 rounded-full text-sm md:text-base font-bold uppercase tracking-widest text-black/40 hover:text-[#FF6105] hover:border-[#FF6105]/30 transition-colors cursor-default whitespace-nowrap"
                        >
                            {logo}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
