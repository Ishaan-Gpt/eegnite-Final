"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CompareProps {
    firstImage?: string;
    secondImage?: string;
    firstContent?: React.ReactNode;
    secondContent?: React.ReactNode;
    className?: string;
    slideMode?: "hover" | "drag";
    autoplay?: boolean;
}

export const Compare = ({
    firstImage = "",
    secondImage = "",
    firstContent,
    secondContent,
    className,
    slideMode = "drag",
    autoplay = false,
}: CompareProps) => {
    const [sliderXPercent, setSliderXPercent] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const sliderRef = useRef<HTMLDivElement>(null);

    const [isMouseOver, setIsMouseOver] = useState(false);

    const autocomplete = useCallback(() => {
        if (!autoplay || isMouseOver || isDragging) return;
        // Simple oscillation for demo if needed, but user wants interaction
    }, [autoplay, isMouseOver, isDragging]);

    useEffect(() => {
        autocomplete();
    }, [autocomplete]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!sliderRef.current || slideMode === "drag") return;
        const rect = sliderRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percent = (x / rect.width) * 100;
        requestAnimationFrame(() => {
            setSliderXPercent(Math.max(0, Math.min(100, percent)));
        });
    };

    const handleMouseDown = useCallback((e: React.MouseEvent | React.TouchEvent) => {
        if (slideMode === "hover") return;
        setIsDragging(true);
    }, [slideMode]);

    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
    }, []);

    const handleDrag = useCallback((e: MouseEvent | TouchEvent) => {
        if (!isDragging || !sliderRef.current) return;
        const rect = sliderRef.current.getBoundingClientRect();
        let clientX: number;
        if ('touches' in e) {
            clientX = e.touches[0].clientX;
        } else {
            clientX = e.clientX;
        }
        const x = clientX - rect.left;
        const percent = (x / rect.width) * 100;
        setSliderXPercent(Math.max(0, Math.min(100, percent)));
    }, [isDragging]);

    useEffect(() => {
        window.addEventListener("mousemove", handleDrag);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("touchmove", handleDrag);
        window.addEventListener("touchend", handleMouseUp);
        return () => {
            window.removeEventListener("mousemove", handleDrag);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("touchmove", handleDrag);
            window.removeEventListener("touchend", handleMouseUp);
        }
    }, [handleDrag, handleMouseUp]);


    return (
        <div
            ref={sliderRef}
            className={cn("w-full h-[600px] overflow-hidden relative rounded-[3rem] cursor-ew-resize select-none", className)}
            style={{
                position: "relative",
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsMouseOver(true)}
            onMouseLeave={() => setIsMouseOver(false)}
        >
            <AnimatePresence>
                <div
                    className="h-full w-full absolute top-0 left-0 z-20 pointer-events-none"
                    style={{
                        clipPath: `inset(0 ${100 - sliderXPercent}% 0 0)`,
                    }}
                >
                    {/* LEFT SIDE CONTENT (Visible initially on left) */}
                    <div className="relative w-full h-full bg-[#111] text-white">
                        {/* Provide default placeholder or use passed content */}
                        {firstContent || (
                            <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-900 border-[1px] border-zinc-800">
                                {firstImage && <img alt="first" src={firstImage} className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale" />}
                                <div className="relative z-10 text-center">
                                    <h2 className="text-4xl font-bold text-zinc-500">The Old Way</h2>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="h-full w-full absolute top-0 left-0 z-10">
                    {/* RIGHT SIDE CONTENT (Visible underneath on right) */}
                    <div className="relative w-full h-full bg-white text-black">
                        {secondContent || (
                            <div className="w-full h-full flex flex-col items-center justify-center bg-white">
                                {secondImage && <img alt="second" src={secondImage} className="absolute inset-0 w-full h-full object-cover" />}
                                <div className="relative z-10 text-center">
                                    <h2 className="text-4xl font-bold text-[#FF6105]">The EEGNITE Way</h2>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </AnimatePresence>

            {/* SLIDER HANDLE */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white z-40 transition-transform h-full pointer-events-none shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                style={{
                    left: `${sliderXPercent}%`,
                }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl pointer-events-auto cursor-col-resize hover:scale-110 transition-transform"
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleMouseDown}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black rotate-90"><path d="m8 9 4-4 4 4" /><path d="m8 15 4 4 4-4" /></svg>
                </div>
            </div>

        </div>
    );
};
