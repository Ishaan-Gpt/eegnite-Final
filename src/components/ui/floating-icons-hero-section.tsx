'use client';
import * as React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

// Interface for the props of each individual icon.
interface IconProps {
    id: number;
    src: string;
    alt: string;
    className: string;
}

// Interface for the main hero component's props.
export interface FloatingIconsHeroProps {
    title: string;
    subtitle: string;
    ctaText: string;
    ctaHref: string;
    icons: IconProps[];
}

// A single icon component with its own motion logic
const Icon = ({
    mouseX,
    mouseY,
    iconData,
    index,
}: {
    mouseX: React.MutableRefObject<number>;
    mouseY: React.MutableRefObject<number>;
    iconData: IconProps;
    index: number;
}) => {
    const ref = React.useRef<HTMLDivElement>(null);

    // Motion values for the icon's position, with spring physics for smooth movement
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 300, damping: 20 });
    const springY = useSpring(y, { stiffness: 300, damping: 20 });

    React.useEffect(() => {
        const handleMouseMove = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                const distance = Math.sqrt(
                    Math.pow(mouseX.current - (rect.left + rect.width / 2), 2) +
                    Math.pow(mouseY.current - (rect.top + rect.height / 2), 2)
                );

                // If the cursor is close enough, repel the icon
                if (distance < 150) {
                    const angle = Math.atan2(
                        mouseY.current - (rect.top + rect.height / 2),
                        mouseX.current - (rect.left + rect.width / 2)
                    );
                    // The closer the cursor, the stronger the repulsion
                    const force = (1 - distance / 150) * 50;
                    x.set(-Math.cos(angle) * force);
                    y.set(-Math.sin(angle) * force);
                } else {
                    // Return to original position when cursor is away
                    x.set(0);
                    y.set(0);
                }
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [x, y, mouseX, mouseY]);

    return (
        <motion.div
            ref={ref}
            key={iconData.id}
            style={{
                x: springX,
                y: springY,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                delay: index * 0.08,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            }}
            className={cn('absolute', iconData.className)}
        >
            {/* Inner wrapper for the continuous floating animation */}
            <motion.div
                className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 p-3 rounded-3xl shadow-xl bg-white/90 backdrop-blur-md border border-[#FF6105]/10 hover:shadow-[0_0_30px_rgba(255,97,5,0.25)] hover:scale-110 hover:border-[#FF6105]/30 transition-all duration-300 cursor-pointer"
                animate={{
                    y: [0, -8, 0, 8, 0],
                    x: [0, 6, 0, -6, 0],
                    rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                    duration: 5 + Math.random() * 5,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: 'easeInOut',
                }}
                whileHover={{ scale: 1.15 }}
            >
                <Image
                    src={iconData.src}
                    alt={iconData.alt}
                    width={40}
                    height={40}
                    className="w-8 h-8 md:w-10 md:h-10 object-contain"
                />
            </motion.div>
        </motion.div>
    );
};

const FloatingIconsHero = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & FloatingIconsHeroProps
>(({ className, title, subtitle, ctaText, ctaHref, icons, ...props }, ref) => {
    // Refs to track the raw mouse position
    const mouseX = React.useRef(0);
    const mouseY = React.useRef(0);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        mouseX.current = event.clientX;
        mouseY.current = event.clientY;
    };

    return (
        <section
            ref={ref}
            onMouseMove={handleMouseMove}
            className={cn(
                'relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#FFFEF8]',
                className
            )}
            {...props}
        >
            {/* Subtle grain texture overlay */}
            <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
            }} />

            {/* Soft orange glow orbs */}
            <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-br from-[#FF6105]/5 to-transparent blur-[120px]" />
            <div className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-gradient-to-br from-[#FF6105]/5 to-transparent blur-[100px]" />

            {/* Container for the background floating icons */}
            <div className="absolute inset-0 w-full h-full">
                {icons.map((iconData, index) => (
                    <Icon
                        key={iconData.id}
                        mouseX={mouseX}
                        mouseY={mouseY}
                        iconData={iconData}
                        index={index}
                    />
                ))}
            </div>

            {/* Container for the foreground content */}
            <div className="relative z-10 text-center px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#2A1810] uppercase">
                    {title.split('.').map((word, i) => {
                        const trimmed = word.trim();
                        if (!trimmed) return null;
                        // Middle word is orange (Design)
                        if (i === 1) {
                            return <span key={i} className="text-[#FF6105]">{trimmed}. </span>;
                        }
                        return <span key={i}>{trimmed}. </span>;
                    })}
                </h1>
                <p className="mt-6 max-w-xl mx-auto text-lg text-[#6B5545] leading-relaxed">
                    {subtitle}
                </p>
                <div className="mt-10 flex items-center justify-center gap-4">
                    <Button asChild size="lg" className="px-10 py-6 text-sm font-semibold tracking-wider uppercase bg-[#FF6105] text-white hover:bg-[#e55800] shadow-xl shadow-[#FF6105]/20 rounded-full">
                        <a href={ctaHref}>{ctaText}</a>
                    </Button>
                </div>
            </div>
        </section>
    );
});

FloatingIconsHero.displayName = 'FloatingIconsHero';

export { FloatingIconsHero };
