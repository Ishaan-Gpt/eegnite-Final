"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "What services does EEGNITE offer?",
        answer: "We offer comprehensive digital marketing services including SEO, PPC advertising (Google & Meta), email marketing, web development, UI/UX design, data analysis, and strategic marketing consulting. Each service is tailored to your specific business goals.",
        category: "Services"
    },
    {
        question: "How do you measure campaign success?",
        answer: "We use data-driven metrics including organic traffic growth, conversion rates, ROI, lead generation numbers, and custom KPI dashboards. You'll receive detailed performance reports with actionable insights for continuous improvement.",
        category: "Analytics"
    },
    {
        question: "What industries do you specialize in?",
        answer: "We serve diverse industries including Automobile, Healthcare, Pets, Furniture, Exports, Fashion, and Education. Our strategies are customized based on industry-specific trends, audience behavior, and competitive landscapes.",
        category: "Industries"
    },
    {
        question: "How long does it take to see results?",
        answer: "SEO typically shows results in 3-6 months, while PPC campaigns can generate leads within days. We set realistic expectations and provide regular updates so you can track progress throughout your campaign.",
        category: "Timeline"
    },
    {
        question: "Do you work with international clients?",
        answer: "Yes! We partner with clients across India, Europe, Middle East, and USA. Our strategies are adapted for different markets, languages, and cultural contexts to maximize your global reach.",
        category: "Global"
    },
    {
        question: "What makes EEGNITE different?",
        answer: "We combine creativity with analytics, focusing on complete transformation rather than quick fixes. Our dedicated team provides personalized attention, transparent communication, and strategies that deliver measurable, lasting impact.",
        category: "About Us"
    }
];

export default function FAQ() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-10%" });
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section
            ref={sectionRef}
            className="relative py-24 px-6 md:px-12 bg-white overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#FF6105]/5 to-transparent blur-[100px]" />

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1 }}
                    className="text-center mb-16"
                >
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF6105] mb-4 inline-flex items-center gap-3">
                        <span className="w-8 h-[2px] bg-[#FF6105]" />
                        FAQ
                        <span className="w-8 h-[2px] bg-[#FF6105]" />
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-black uppercase tracking-tight mt-4">
                        Frequently Asked <span className="text-[#FF6105]">Questions</span>
                    </h2>
                    <p className="mt-6 text-lg text-black/60 max-w-xl mx-auto">
                        Everything you need to know about working with EEGNITE
                    </p>
                </motion.div>

                {/* FAQ Items */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="space-y-4"
                >
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 ${isOpen
                                        ? 'border-[#FF6105]/30 bg-gradient-to-br from-white to-[#FF6105]/5 shadow-xl'
                                        : 'border-black/10 bg-white hover:border-[#FF6105]/20 hover:shadow-lg'
                                    }`}
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex items-start gap-6 p-6 text-left transition-colors"
                                >
                                    {/* Icon */}
                                    <div className={`flex-shrink-0 w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-500 ${isOpen
                                            ? 'bg-[#FF6105] border-[#FF6105] text-white'
                                            : 'bg-white border-black/10 text-black/50 group-hover:border-[#FF6105]/30 group-hover:text-[#FF6105]'
                                        }`}>
                                        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                                            <h3 className={`text-lg font-bold transition-colors ${isOpen ? 'text-[#FF6105]' : 'text-black group-hover:text-[#FF6105]'
                                                }`}>
                                                {faq.question}
                                            </h3>
                                            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40 border border-black/10 px-3 py-1 rounded-full w-fit">
                                                {faq.category}
                                            </span>
                                        </div>

                                        {/* Answer */}
                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="text-black/60 leading-relaxed pt-2">
                                                        {faq.answer}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </button>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="text-center mt-12"
                >
                    <p className="text-black/50 mb-4">Still have questions?</p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 bg-[#FF6105] text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-[#e55800] transition-colors shadow-lg shadow-[#FF6105]/20"
                    >
                        Contact Us
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
