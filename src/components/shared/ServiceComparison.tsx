"use client";

import { Compare } from "@/components/ui/compare";

interface ComparisonItem {
    title: string;
    desc: string;
}

interface ServiceComparisonProps {
    title: React.ReactNode;
    description: React.ReactNode;
    firstSolutionTitle: string;
    firstSolutionItems: [ComparisonItem, ComparisonItem, ComparisonItem];
    secondSolutionTitle: string;
    secondSolutionItems: [ComparisonItem, ComparisonItem, ComparisonItem];
}

export function ServiceComparison({
    title,
    description,
    firstSolutionTitle,
    firstSolutionItems,
    secondSolutionTitle,
    secondSolutionItems,
}: ServiceComparisonProps) {
    return (
        <section className="py-16 md:py-24 px-4 md:px-6 bg-white relative overflow-hidden flex items-center justify-center">
            <div className="max-w-[1400px] w-full mx-auto">
                <div className="text-left md:text-center mb-10 md:mb-16">
                    <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tighter mb-6 text-black">
                        {title}
                    </h2>
                    <p className="text-black/60 text-base md:text-xl font-normal max-w-4xl md:mx-auto leading-relaxed">
                        {description}
                    </p>
                </div>

                <div className="w-full max-w-6xl mx-auto h-[720px] md:h-[780px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-black/10">
                    <Compare
                        className="h-full"
                        slideMode="drag"
                        firstContent={
                            <div className="w-full h-full bg-white flex flex-col items-center justify-start pt-8 md:pt-16 p-4 md:p-12 text-center relative overflow-hidden">
                                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                                <h3 className="text-2xl md:text-5xl lg:text-7xl font-bold text-[#FF6105] mb-6 md:mb-10 relative z-10 uppercase tracking-tighter leading-none pb-2">
                                    {firstSolutionTitle}
                                </h3>
                                <div className="flex flex-col gap-4 md:gap-6 max-w-4xl relative z-10 w-full">
                                    <div className="p-4 md:p-6 rounded-2xl md:rounded-3xl bg-[#FFF5F0] border border-[#FF6105]/20 text-left hover:scale-[1.02] transition-transform">
                                        <h4 className="text-sm md:text-xl font-bold text-[#FF6105] mb-2 uppercase">
                                            {firstSolutionItems[0].title}
                                        </h4>
                                        <p className="text-black/70 text-xs md:text-sm leading-relaxed">
                                            {firstSolutionItems[0].desc}
                                        </p>
                                    </div>
                                    <div className="p-4 md:p-6 rounded-2xl md:rounded-3xl bg-[#FF6105] text-white text-left hover:scale-[1.02] transition-transform shadow-lg">
                                        <h4 className="text-sm md:text-xl font-bold text-white mb-2 uppercase">
                                            {firstSolutionItems[1].title}
                                        </h4>
                                        <p className="text-white/90 text-xs md:text-sm leading-relaxed">
                                            {firstSolutionItems[1].desc}
                                        </p>
                                    </div>
                                    <div className="p-4 md:p-6 rounded-2xl md:rounded-3xl bg-white border border-black/10 shadow-sm text-left hover:scale-[1.02] transition-transform">
                                        <h4 className="text-sm md:text-xl font-bold text-black mb-2 uppercase">
                                            {firstSolutionItems[2].title}
                                        </h4>
                                        <p className="text-black/60 text-xs md:text-sm leading-relaxed">
                                            {firstSolutionItems[2].desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        }
                        secondContent={
                            <div className="w-full h-full bg-[#FAFAFA] flex flex-col items-center justify-start pt-8 md:pt-16 p-4 md:p-12 text-center relative grayscale overflow-hidden">
                                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                                <h3 className="text-2xl md:text-5xl lg:text-7xl font-bold text-black/20 mb-6 md:mb-10 relative z-10 uppercase tracking-tighter leading-none pb-2">
                                    {secondSolutionTitle}
                                </h3>
                                <div className="flex flex-col gap-4 md:gap-6 max-w-4xl relative z-10 w-full opacity-60">
                                    {secondSolutionItems.map((item, idx) => (
                                        <div key={idx} className="p-4 md:p-6 rounded-2xl md:rounded-3xl bg-white border border-black/5 text-left">
                                            <h4 className="text-sm md:text-xl font-bold text-black mb-2 uppercase">
                                                {item.title}
                                            </h4>
                                            <p className="text-black/60 text-xs md:text-sm leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        }
                    />
                </div>
            </div>
        </section>
    );
}
