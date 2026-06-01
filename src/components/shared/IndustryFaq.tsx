"use client";

import { ArrowRight } from "lucide-react";

interface FaqItem {
    q: string;
    a: string;
}

interface IndustryFaqProps {
    faqs: FaqItem[];
}

export function IndustryFaq({ faqs }: IndustryFaqProps) {
    return (
        <section className="py-16 md:py-32 bg-white px-4 md:px-6 border-t border-black/5">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-left md:text-center mb-8 md:mb-16 text-black">
                    YOUR QUESTIONS. <span className="text-[#FF6105]">STRAIGHT ANSWERS.</span>
                </h2>
                <div className="space-y-3 md:space-y-4">
                    {faqs.map((faq, idx) => (
                        <details key={idx} className="group bg-[#F9F9F9] p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] hover:bg-white border border-transparent hover:border-black/5 hover:shadow-xl transition-all cursor-pointer">
                            <summary className="font-bold text-base md:text-lg lg:text-xl uppercase tracking-tight flex justify-between items-center list-none text-black">
                                <span className="max-w-[90%]">{faq.q}</span>
                                <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#FF6105] group-open:bg-[#FF6105] group-open:text-white transition-all flex-shrink-0 ml-3">
                                    <ArrowRight className="group-open:rotate-90 transition-transform" size={20} />
                                </span>
                            </summary>
                            <p className="mt-4 md:mt-6 text-black/60 leading-relaxed font-medium text-sm md:text-lg max-w-2xl">
                                {faq.a}
                            </p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
