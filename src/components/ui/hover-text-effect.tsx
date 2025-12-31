"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export const TextHoverEffect = ({
    text,
    duration = 0.15,
}: {
    text: string;
    duration?: number;
    automatic?: boolean;
}) => {
    const svgRef = useRef<SVGSVGElement>(null);
    const [cursor, setCursor] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);
    const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

    useEffect(() => {
        if (svgRef.current && cursor.x !== null && cursor.y !== null) {
            const svgRect = svgRef.current.getBoundingClientRect();
            const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
            const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
            setMaskPosition({
                cx: `${cxPercentage}%`,
                cy: `${cyPercentage}%`,
            });
        }
    }, [cursor]);

    return (
        <svg
            ref={svgRef}
            width="100%"
            height="100%"
            viewBox="0 0 300 80"
            xmlns="http://www.w3.org/2000/svg"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
            className="select-none cursor-pointer"
            style={{ maxWidth: '100%' }}
        >
            <defs>
                <linearGradient
                    id="eegniteGradient"
                    gradientUnits="userSpaceOnUse"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                >
                    <stop offset="0%" stopColor="#FF6105" />
                    <stop offset="25%" stopColor="#FF8040" />
                    <stop offset="50%" stopColor="#FFB080" />
                    <stop offset="75%" stopColor="#FF8040" />
                    <stop offset="100%" stopColor="#FF6105" />
                </linearGradient>

                <motion.radialGradient
                    id="eegniteRevealMask"
                    gradientUnits="userSpaceOnUse"
                    r="25%"
                    animate={maskPosition}
                    transition={{ duration: duration, ease: "easeOut" }}
                >
                    <stop offset="0%" stopColor="white" />
                    <stop offset="100%" stopColor="black" />
                </motion.radialGradient>
                <mask id="eegniteTextMask">
                    <rect
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        fill="url(#eegniteRevealMask)"
                    />
                </mask>
            </defs>

            {/* Base outline text - always visible */}
            <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                strokeWidth="0.5"
                className="fill-transparent stroke-black/20"
                style={{
                    fontSize: '60px',
                    fontWeight: 900,
                    fontFamily: 'Inter, system-ui, sans-serif',
                    letterSpacing: '-0.02em'
                }}
            >
                {text}
            </text>

            {/* Glow text on hover - revealed by mask */}
            {hovered && (
                <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    stroke="url(#eegniteGradient)"
                    strokeWidth="1"
                    mask="url(#eegniteTextMask)"
                    className="fill-transparent"
                    style={{
                        fontSize: '60px',
                        fontWeight: 900,
                        fontFamily: 'Inter, system-ui, sans-serif',
                        letterSpacing: '-0.02em'
                    }}
                >
                    {text}
                </text>
            )}

            {/* Background shadow text */}
            <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                strokeWidth="0.3"
                className="fill-transparent stroke-black/5"
                style={{
                    fontSize: '60px',
                    fontWeight: 900,
                    fontFamily: 'Inter, system-ui, sans-serif',
                    letterSpacing: '-0.02em',
                    opacity: hovered ? 0.5 : 0
                }}
            >
                {text}
            </text>
        </svg>
    );
};
