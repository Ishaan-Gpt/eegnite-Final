"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type Testimonial = {
    quote: string;
    name: string;
    designation: string;
    src: string;
};

export const AnimatedTestimonials = ({
    testimonials,
    autoplay = false,
}: {
    testimonials: Testimonial[];
    autoplay?: boolean;
}) => {
    const [active, setActive] = useState(0);

    const handleNext = () => {
        setActive((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const isActive = (index: number) => {
        return index === active;
    };

    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(handleNext, 5000);
            return () => clearInterval(interval);
        }
    }, [autoplay]);

    const randomRotateY = () => {
        return Math.floor(Math.random() * 21) - 10;
    };

    return (
        <div className="mx-auto max-w-5xl py-20 font-sans antialiased">
            <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2 items-start">
                {/* Left: Profile Card */}
                <div>
                    <div className="relative h-[450px] w-full">
                        <AnimatePresence>
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={testimonial.name}
                                    initial={{
                                        opacity: 0,
                                        scale: 0.9,
                                        z: -100,
                                        rotate: randomRotateY(),
                                    }}
                                    animate={{
                                        opacity: isActive(index) ? 1 : 0.7,
                                        scale: isActive(index) ? 1 : 0.95,
                                        z: isActive(index) ? 0 : -100,
                                        rotate: isActive(index) ? 0 : randomRotateY(),
                                        zIndex: isActive(index)
                                            ? 40
                                            : testimonials.length + 2 - index,
                                        y: isActive(index) ? [0, -80, 0] : 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.9,
                                        z: 100,
                                        rotate: randomRotateY(),
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute inset-0 origin-bottom"
                                >
                                    {/* Profile Image/Avatar */}
                                    {testimonial.src ? (
                                        <img
                                            src={testimonial.src}
                                            alt={testimonial.name}
                                            loading="lazy"
                                            className="h-full w-full rounded-3xl object-cover"
                                            style={{
                                                boxShadow: '0 20px 60px rgba(255, 97, 5, 0.3)',
                                            }}
                                        />
                                    ) : (
                                        <div
                                            className="h-full w-full rounded-3xl flex items-center justify-center"
                                            style={{
                                                background: 'linear-gradient(135deg, #FF6105 0%, #ff8c4a 100%)',
                                                boxShadow: '0 20px 60px rgba(255, 97, 5, 0.3)',
                                            }}
                                        >
                                            <span className="text-[8rem] font-bold text-white/30">
                                                {testimonial.name.charAt(0)}
                                            </span>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Navigation buttons - FIXED POSITION under the profile card */}
                    <div className="flex gap-4 mt-8 items-center">
                        <button
                            onClick={handlePrev}
                            className="group/button flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white transition-colors hover:bg-[#FF6105] hover:border-[#FF6105]"
                        >
                            <IconArrowLeft className="h-5 w-5 text-black/50 group-hover/button:text-white transition-colors" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="group/button flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white transition-colors hover:bg-[#FF6105] hover:border-[#FF6105]"
                        >
                            <IconArrowRight className="h-5 w-5 text-black/50 group-hover/button:text-white transition-colors" />
                        </button>

                        {/* Progress dots */}
                        <div className="flex items-center gap-2 ml-4">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActive(i)}
                                    className={`w-2 h-2 rounded-full transition-all ${i === active ? 'bg-[#FF6105] w-6' : 'bg-black/20 hover:bg-black/40'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: Content */}
                <div>
                    <motion.div
                        key={active}
                        initial={{
                            y: 20,
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                        }}
                        exit={{
                            y: -20,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 0.2,
                            ease: "easeInOut",
                        }}
                    >
                        <h3 className="text-2xl font-bold text-black uppercase tracking-tight">
                            {testimonials[active].name}
                        </h3>
                        <p className="text-sm text-[#FF6105] font-medium uppercase tracking-wider">
                            {testimonials[active].designation}
                        </p>
                        <motion.p className="mt-8 text-lg text-black/70 leading-relaxed">
                            {testimonials[active].quote.split(" ").map((word, index) => (
                                <motion.span
                                    key={index}
                                    initial={{
                                        filter: "blur(10px)",
                                        opacity: 0,
                                        y: 5,
                                    }}
                                    animate={{
                                        filter: "blur(0px)",
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 0.2,
                                        ease: "easeInOut",
                                        delay: 0.02 * index,
                                    }}
                                    className="inline-block"
                                >
                                    {word}&nbsp;
                                </motion.span>
                            ))}
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
