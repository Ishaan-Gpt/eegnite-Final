import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // 3-Color Palette
                'white': '#FFFEF8',
                'white-muted': '#F5F3EE',
                'white-deep': '#EAE7E0',

                'orange': '#E86A00',
                'orange-glow': '#FF8A30',

                'deep-orange': '#C44800',
                'deep-orange-dark': '#9A3800',

                'text-dark': '#2A1810',
                'text-muted': '#6B5545',
            },
            fontFamily: {
                sans: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
                display: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
            },
            animation: {
                'marquee': 'marquee 50s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            },
            transitionTimingFunction: {
                'spring': 'cubic-bezier(0.23, 1, 0.32, 1)',
                'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
            },
        },
    },
    plugins: [],
};

export default config;
