"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ProblemSolutionItem {
    icon: LucideIcon;
    title: string;
    desc: string;
}

interface IndustryProblemSolutionProps {
    problemsTitle: string;
    problemsSubtitle: string;
    solutionsTitle: string;
    solutionsSubtitle: string;
    problems: ProblemSolutionItem[];
    solutions: ProblemSolutionItem[];
}

export function IndustryProblemSolution({
    problemsTitle,
    problemsSubtitle,
    solutionsTitle,
    solutionsSubtitle,
    problems,
    solutions,
}: IndustryProblemSolutionProps) {
    return (
        <section className="py-16 md:py-24 bg-white px-4 md:px-6">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid md:grid-cols-2 gap-0 md:gap-0 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-black/8">
                    <div className="bg-[#FF6105] text-white p-8 md:p-14">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-8 md:mb-12"
                        >
                            <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tighter leading-[1.1] mb-3">
                                {problemsTitle}
                            </h2>
                            <p className="text-white/80 text-sm md:text-base font-medium leading-relaxed">
                                {problemsSubtitle}
                            </p>
                        </motion.div>

                        <div className="flex flex-col gap-5 md:gap-7">
                            {problems.map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.08 }}
                                        className="flex gap-4 items-start group"
                                    >
                                        <div className="mt-1 flex-shrink-0 w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                                            <Icon size={14} className="text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm md:text-base font-bold uppercase tracking-tight mb-1 text-white group-hover:text-white/90 transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-white/80 text-xs md:text-sm leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="bg-[#FFF8F5] text-black p-8 md:p-14 border-t border-black/10 md:border-t-0 md:border-l border-[#FF6105]/10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="mb-8 md:mb-12"
                        >
                            <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tighter leading-[1.1] mb-3 text-black">
                                {solutionsTitle}
                            </h2>
                            <p className="text-black/40 text-sm md:text-base font-medium leading-relaxed">
                                {solutionsSubtitle}
                            </p>
                        </motion.div>

                        <div className="flex flex-col gap-5 md:gap-7">
                            {solutions.map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.08 }}
                                        className="flex gap-4 items-start group"
                                    >
                                        <div className="mt-1 flex-shrink-0 w-7 h-7 rounded-full bg-[#FF6105]/15 flex items-center justify-center">
                                            <Icon size={14} className="text-[#FF6105]" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm md:text-base font-bold uppercase tracking-tight mb-1 text-black group-hover:text-[#FF6105] transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-black/50 text-xs md:text-sm leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
