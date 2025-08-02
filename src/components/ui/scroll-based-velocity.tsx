"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

import { cn } from "@/lib/utils";

interface VelocityScrollProps {
  text: string;
  default_velocity?: number;
  className?: string;
}

interface ParallaxProps {
  children: string;
  baseVelocity: number;
  className?: string;
}

export const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function VelocityScroll({
  text,
  default_velocity = 5, // This will be ignored for scroll-only mode
  className,
}: VelocityScrollProps) {
  function ParallaxText({
    children,
    baseVelocity = 100, // This will be ignored for scroll-only mode
    className,
  }: ParallaxProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 400,
    });

    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
      clamp: false,
    });

    const [repetitions, setRepetitions] = useState(1);
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
      const calculateRepetitions = () => {
        if (containerRef.current && textRef.current) {
          const containerWidth = containerRef.current.offsetWidth;
          const textWidth = textRef.current.offsetWidth;
          let newRepetitions = Math.ceil(containerWidth / textWidth) + 2;
          if (!isFinite(newRepetitions) || newRepetitions < 1) newRepetitions = 1;
          setRepetitions(newRepetitions);
        }
      };

      calculateRepetitions();

      window.addEventListener("resize", calculateRepetitions);
      return () => window.removeEventListener("resize", calculateRepetitions);
    }, [children]);

    const x = useTransform(baseX, (v) => `${wrap(-100 / repetitions, 0, v)}%`);

    // Only move with scroll, no auto-movement
    useAnimationFrame((t, delta) => {
      // Reduce speed by scaling velocityFactor (ultra slow)
      const moveBy = velocityFactor.get() / 20;
      if (moveBy !== 0) {
        baseX.set(baseX.get() + moveBy);
      }
    });

    // Default EEGNITE pure white text if no className provided
    const gradientClass =
      className ||
      "text-white font-extrabold";

    return (
      <div
        className="w-full overflow-hidden whitespace-nowrap"
        ref={containerRef}
      >
        <motion.div className={cn("inline-block", gradientClass)} style={{ x }}>
          {Array.from({ length: Math.max(1, repetitions) }).map((_, i) => (
            <span key={i} ref={i === 0 ? textRef : null}>
              {children}{" "}
            </span>
          ))}
        </motion.div>
      </div>
    );
  }

  return (
    <section className="relative w-full">
      <ParallaxText baseVelocity={0} className={className}>
        {text}
      </ParallaxText>
      <ParallaxText baseVelocity={0} className={className}>
        {text}
      </ParallaxText>
    </section>
  );
} 