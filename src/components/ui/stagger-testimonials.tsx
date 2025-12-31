"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

// EEGNITE's actual testimonials
const testimonials = [
    {
        tempId: 0,
        testimonial: "Partnering on projects with Anish is a truly positive experience. He is not only knowledgeable, trustworthy, and reliable, but he also has a genuine commitment to exceeding expectations. He consistently goes the extra mile to ensure all project goals are met on time.",
        by: "Rokas Bartasius, Strategic Partner · Lithuania",
        imgSrc: "https://i.pravatar.cc/150?img=33"
    },
    {
        tempId: 1,
        testimonial: "I would like to express my sincere appreciation for your outstanding work on developing a go-to-market strategy, and product marketing for our email marketing campaigns. Your dedication and expertise have been vital in achieving excellent sales results.",
        by: "Tomas Sabaliauskas, Business Owner · Germany",
        imgSrc: "https://i.pravatar.cc/150?img=12"
    },
    {
        tempId: 2,
        testimonial: "I have worked alongside Anish as an account manager and he is the developer responsible for the project communication. He is communicative and systematic. I commend his attitude towards work and to our team members. He's the guy to look for when you need a project manager and developer in one.",
        by: "Ronabeth Lampa-Dasmariñas, Account Manager · USA",
        imgSrc: "https://i.pravatar.cc/150?img=47"
    },
    {
        tempId: 3,
        testimonial: "His dedication and problem-solving skills were major factors in successful multiple project completions. He consistently goes the extra mile to ensure all project goals are met on time, even when faced with unexpected roadblocks.",
        by: "Rokas Bartasius, Strategic Partner · Lithuania",
        imgSrc: "https://i.pravatar.cc/150?img=33"
    },
    {
        tempId: 4,
        testimonial: "EEGNITE's approach to digital marketing is refreshing. They understand that it's not just about rankings, but about real business growth and meaningful connections with your audience.",
        by: "Client Review · USA",
        imgSrc: "https://i.pravatar.cc/150?img=52"
    },
    {
        tempId: 5,
        testimonial: "The team at EEGNITE truly cares about your success. Their data-driven strategies and creative approach have helped us achieve remarkable results in a competitive market.",
        by: "Client Review · Germany",
        imgSrc: "https://i.pravatar.cc/150?img=15"
    },
];

interface TestimonialCardProps {
    position: number;
    testimonial: typeof testimonials[0];
    handleMove: (steps: number) => void;
    cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
    position,
    testimonial,
    handleMove,
    cardSize
}) => {
    const isCenter = position === 0;

    return (
        <div
            onClick={() => handleMove(position)}
            className={cn(
                "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out rounded-3xl",
                isCenter
                    ? "z-10 bg-[#FF6105] text-white border-[#FF6105]"
                    : "z-0 bg-white text-black border-black/10 hover:border-[#FF6105]/50"
            )}
            style={{
                width: cardSize,
                height: cardSize,
                transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
                boxShadow: isCenter
                    ? "0px 20px 60px rgba(255, 97, 5, 0.3)"
                    : "0px 10px 40px rgba(0, 0, 0, 0.05)"
            }}
        >
            {/* Stars */}
            <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        size={14}
                        className={isCenter ? "fill-white text-white" : "fill-[#FF6105] text-[#FF6105]"}
                    />
                ))}
            </div>

            <img
                src={testimonial.imgSrc}
                alt={`${testimonial.by.split(',')[0]}`}
                className="mb-4 h-14 w-14 rounded-full object-cover object-top border-2"
                style={{
                    borderColor: isCenter ? 'rgba(255,255,255,0.3)' : '#FF6105',
                }}
            />
            <h3 className={cn(
                "text-base sm:text-lg font-medium leading-relaxed",
                isCenter ? "text-white" : "text-black"
            )}>
                "{testimonial.testimonial}"
            </h3>
            <p className={cn(
                "absolute bottom-8 left-8 right-8 mt-2 text-sm font-medium",
                isCenter ? "text-white/80" : "text-black/50"
            )}>
                — {testimonial.by}
            </p>
        </div>
    );
};

export const StaggerTestimonials: React.FC = () => {
    const [cardSize, setCardSize] = useState(365);
    const [testimonialsList, setTestimonialsList] = useState(testimonials);

    const handleMove = (steps: number) => {
        const newList = [...testimonialsList];
        if (steps > 0) {
            for (let i = steps; i > 0; i--) {
                const item = newList.shift();
                if (!item) return;
                newList.push({ ...item, tempId: Math.random() });
            }
        } else {
            for (let i = steps; i < 0; i++) {
                const item = newList.pop();
                if (!item) return;
                newList.unshift({ ...item, tempId: Math.random() });
            }
        }
        setTestimonialsList(newList);
    };

    useEffect(() => {
        const updateSize = () => {
            const { matches } = window.matchMedia("(min-width: 640px)");
            setCardSize(matches ? 365 : 290);
        };

        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    return (
        <div
            className="relative w-full overflow-hidden"
            style={{ height: 650 }}
        >
            {testimonialsList.map((testimonial, index) => {
                const position = testimonialsList.length % 2
                    ? index - (testimonialsList.length + 1) / 2
                    : index - testimonialsList.length / 2;
                return (
                    <TestimonialCard
                        key={testimonial.tempId}
                        testimonial={testimonial}
                        handleMove={handleMove}
                        position={position}
                        cardSize={cardSize}
                    />
                );
            })}
            <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3">
                <button
                    onClick={() => handleMove(-1)}
                    className={cn(
                        "flex h-14 w-14 items-center justify-center text-2xl transition-all rounded-full",
                        "bg-white border-2 border-black/10 hover:bg-[#FF6105] hover:border-[#FF6105] hover:text-white",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6105]"
                    )}
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={() => handleMove(1)}
                    className={cn(
                        "flex h-14 w-14 items-center justify-center text-2xl transition-all rounded-full",
                        "bg-white border-2 border-black/10 hover:bg-[#FF6105] hover:border-[#FF6105] hover:text-white",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6105]"
                    )}
                    aria-label="Next testimonial"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    );
};
