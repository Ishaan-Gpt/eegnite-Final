"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";

export const HOME_FAQS = [
    {
        question: "What Does A Digital Marketing Agency Do?",
        answer: "A digital marketing agency like EEGNITE handles everything your brand needs to grow online - from SEO and PPC advertising to social media, content, email marketing, and web development. We build integrated strategies that attract the right audience, convert them into customers, and help you scale sustainably over time.",
        category: "Services"
    },
    {
        question: "How Long Does Seo Take To Show Results?",
        answer: "SEO is a long-term investment. Most businesses start seeing meaningful movement in rankings and organic traffic within 3 to 6 months. The timeline depends on your industry, competition, and the current state of your website. At EEGNITE, we set realistic expectations from day one and deliver consistent, measurable progress; not vague monthly updates.",
        category: "SEO"
    },
    {
        question: "Why Choose EEGNITE Over Other Digital Marketing Firms?",
        answer: "Most digital marketing companies talk about strategy. EEGNITE delivers outcomes. We are a performance-first agency that ties every campaign to real business results - leads, revenue, and ROI. We don't believe in one-size-fits-all solutions. Every client gets a custom plan, transparent reporting, and a team that is genuinely invested in your success.",
        category: "Performance"
    },
    {
        question: "What Industries Does EEGNITE Serve?",
        answer: "We work with businesses across a wide spectrum of industries including e-commerce, healthcare, legal and attorney services, financial services, retail, B2B and lead generation, manufacturing, logistics, and professional services. Whether you're a local business or a global brand, EEGNITE has the expertise to build strategies that fit your market and your goals.",
        category: "Industries"
    },
    {
        question: "Do You Offer Global Digital Marketing Services?",
        answer: "Yes. EEGNITE is a global digital marketing agency with active operations in India, the United States, Europe, and the Middle East. We build region-specific strategies tailored to the audience, culture, and competitive landscape of each market. You get global reach without losing the local precision that actually drives results.",
        category: "Global"
    },
    {
        question: "How Do You Measure ROI On Digital Marketing Campaigns?",
        answer: "ROI measurement is baked into everything we do at EEGNITE. From the first campaign brief to the final report, we set clear KPIs - cost per lead, conversion rate, customer acquisition cost, revenue attributed to campaigns, and more. We use advanced analytics, conversion tracking, and regular performance reviews so you always know exactly what your investment is returning.",
        category: "ROI"
    }
];

interface FAQProps {
    faqList?: { question: string; answer: string; category: string }[];
}

export default function FAQ({ faqList }: FAQProps = {}) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-10%" });
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = faqList || HOME_FAQS;

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
                    className="text-left md:text-center mb-16"
                >
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF6105] mb-4 inline-flex items-center gap-3">
                        <span className="w-8 h-[2px] bg-[#FF6105] hidden md:inline-block" />
                        FAQ
                        <span className="w-8 h-[2px] bg-[#FF6105]" />
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-black uppercase tracking-tight mt-4">
                        Your Questions. <span className="text-[#FF6105]">Straight Answers.</span>
                    </h2>
                    <p className="mt-6 text-lg text-black/60 max-w-xl md:mx-auto">
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
                    <Link
                        href="/#contact"
                        className="inline-flex items-center gap-2 bg-[#FF6105] text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-[#e55800] transition-colors shadow-lg shadow-[#FF6105]/20"
                    >
                        Contact Us
                    </Link>
                </motion.div>

                {/* Search Engine Optimization (SEO) Crawler Fallback */}
                <div className="sr-only" aria-hidden="false">
                    {faqs.map((faq, idx) => (
                        <article key={idx}>
                            <h3>{faq.question}</h3>
                            <p>{faq.answer}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
