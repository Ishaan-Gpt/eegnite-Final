import { Metadata } from "next";
import TestimonialsPageContent from "@/components/page-content/TestimonialsPageContent";
import { UnifiedSchemaJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Client Success Stories & Reviews | EEGNITE",
    description: "See what our clients say about EEGNITE. Read real testimonials and reviews from B2B, e-commerce, and service-based brands scaling their businesses globally.",
    alternates: {
        canonical: "https://www.eegnite.com/testimonials/",
    },
    openGraph: {
        title: "Client Success Stories & Reviews | EEGNITE",
        description: "See what our clients say about EEGNITE. Read real testimonials and reviews from B2B, e-commerce, and service-based brands scaling their businesses globally.",
        url: "https://www.eegnite.com/testimonials/",
        type: "website",
        images: [
            {
                url: "/eegnite-logo.png",
                width: 1200,
                height: 630,
                alt: "EEGNITE - Client Reviews & Testimonials"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Client Success Stories & Reviews | EEGNITE",
        description: "See what our clients say about EEGNITE. Read real testimonials and reviews from B2B, e-commerce, and service-based brands scaling their businesses globally.",
        images: ["/eegnite-logo.png"]
    }
};

export default function TestimonialsPage() {
    return (
        <>
            <UnifiedSchemaJsonLd
                pageUrl="https://www.eegnite.com/testimonials/"
                pageTitle="Client Success Stories & Reviews | EEGNITE"
                pageDescription="See what our clients say about EEGNITE. Read real testimonials and reviews from B2B, e-commerce, and service-based brands scaling their businesses globally."
                pageType="generic"
                breadcrumbs={[
                    { position: 1, name: "Home", url: "https://www.eegnite.com/" },
                    { position: 2, name: "Testimonials", url: "https://www.eegnite.com/testimonials/" }
                ]}
            />
            <TestimonialsPageContent />
        </>
    );
}
