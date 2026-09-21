export type WebSample = {
    slug: string;
    name: string;
    industry: string;
    tagline: string;
    stack: string[];
    href: string;
    palette: {
        bg: string;
        surface: string;
        primary: string;
        accent: string;
        text: string;
        textMuted: string;
    };
    pageCount: number;
};

export const WEB_SAMPLES: WebSample[] = [
    {
        slug: "accounting-firm",
        name: "Meridian & Hale",
        industry: "Accounting & Advisory",
        tagline: "A full multipage CPA firm site — its own navy/emerald/gold design system, animated throughout with Motion and Lenis smooth scroll.",
        stack: ["Next.js", "Tailwind CSS", "Motion", "Lenis"],
        href: "/samples/accounting-firm/",
        palette: {
            bg: "#FAF7F1",
            surface: "#FFFFFF",
            primary: "#0F2A3D",
            accent: "#C9A34E",
            text: "#0F2A3D",
            textMuted: "#4C5A64",
        },
        pageCount: 14,
    },
];
