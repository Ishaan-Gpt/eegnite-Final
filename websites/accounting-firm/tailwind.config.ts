import type { Config } from "tailwindcss";

// Meridian & Hale — independent design system.
// Deliberately does NOT share any token, color, or font with eegnite.com's
// Tailwind config. Do not import or reference anything from ../../src.
const config: Config = {
    content: [
        "./src/app/**/*.{ts,tsx}",
        "./src/components/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                navy: {
                    DEFAULT: "#0F2A3D",
                    50: "#EBF0F3",
                    100: "#D2DEE5",
                    300: "#7C9AAC",
                    500: "#2E5670",
                    700: "#173347",
                    900: "#0F2A3D",
                    950: "#0A1D2A",
                },
                emerald: {
                    DEFAULT: "#1F5B4B",
                    50: "#EAF3F0",
                    100: "#CDE3DB",
                    300: "#6DA491",
                    500: "#2A7561",
                    700: "#1F5B4B",
                    900: "#123328",
                },
                gold: {
                    DEFAULT: "#C9A34E",
                    100: "#F3E7CC",
                    300: "#E0C079",
                    500: "#C9A34E",
                    700: "#9C7B33",
                },
                cream: {
                    DEFAULT: "#FAF7F1",
                    50: "#FFFFFF",
                    100: "#FAF7F1",
                    200: "#F1EBDE",
                },
                slate: {
                    50: "#F5F6F7",
                    200: "#DDE1E4",
                    400: "#8B98A2",
                    600: "#4C5A64",
                    800: "#28333B",
                },
            },
            fontFamily: {
                display: ["var(--font-display)", "Georgia", "serif"],
                body: ["var(--font-body)", "-apple-system", "Segoe UI", "sans-serif"],
            },
            borderRadius: {
                xl2: "1.25rem",
            },
            boxShadow: {
                soft: "0 8px 30px -8px rgba(15, 42, 61, 0.15)",
                card: "0 2px 12px -2px rgba(15, 42, 61, 0.08)",
            },
            maxWidth: {
                content: "1280px",
            },
        },
    },
    plugins: [],
};

export default config;
