import type { Metadata } from "next";
import BlogPageContent from "@/components/page-content/BlogPageContent";
import { UnifiedSchemaJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Digital Marketing Insights & Trends 2026 | EEGNITE",
    description: "Stay ahead with the latest digital marketing insights, SEO strategies, and growth hacks from EEGNITE's expert team.",
    alternates: {
        canonical: 'https://www.eegnite.com/blog/',
    },
    openGraph: {
        title: "Digital Marketing Insights & Trends 2026 | EEGNITE",
        description: "Stay ahead with the latest digital marketing insights, SEO strategies, and growth hacks from EEGNITE's expert team.",
        url: "https://www.eegnite.com/blog/",
        type: "website",
        images: [
            {
                url: "/eegnite-logo.png",
                width: 1200,
                height: 630,
                alt: "EEGNITE Insights Blog"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Digital Marketing Insights & Trends 2026 | EEGNITE",
        description: "Stay ahead with the latest digital marketing insights, SEO strategies, and growth hacks from EEGNITE's expert team.",
        images: ["/eegnite-logo.png"]
    }
};

export default function BlogPage() {
    return (
        <>
            <UnifiedSchemaJsonLd
                pageUrl="https://www.eegnite.com/blog/"
                pageTitle="Digital Marketing Insights & Trends 2026"
                pageDescription="Stay ahead with the latest digital marketing insights, SEO strategies, and growth hacks from EEGNITE's expert team."
                pageType="blog"
                breadcrumbs={[
                    { position: 1, name: "Home", url: "https://www.eegnite.com/" },
                    { position: 2, name: "Blog", url: "https://www.eegnite.com/blog/" }
                ]}
            />
            <BlogPageContent />
        </>
    );
}
