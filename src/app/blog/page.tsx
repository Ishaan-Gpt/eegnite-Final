import type { Metadata } from "next";
import BlogPageContent from "@/components/page-content/BlogPageContent";

export const metadata: Metadata = {
    title: "Digital Marketing Insights & Trends 2026 | EEGNITE Blog",
    description: "Stay ahead with the latest digital marketing insights, SEO strategies, and growth hacks from EEGNITE's expert team.",
    alternates: {
        canonical: 'https://eegnite.com/blog',
    },
};

export default function BlogPage() {
    return <BlogPageContent />;
}
