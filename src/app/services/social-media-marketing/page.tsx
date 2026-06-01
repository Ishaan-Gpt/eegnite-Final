import type { Metadata } from "next";
import SocialMediaMarketingPageContent from "@/components/page-content/social-media-marketing-page-content";
import { UnifiedSchemaJsonLd } from "@/components/JsonLd";
import { SOCIAL_MEDIA_FAQS } from "@/data/social-media-marketing.data";

export const metadata: Metadata = {
    title: "Results-Driven Social Media Marketing Agency | EEGNITE",
    description: "Drive real growth with EEGNITE’s social media marketing services. From content strategy and paid social ads to community management and analytics, we turn social media into a revenue-driving channel for your business.",
    alternates: {
        canonical: "https://www.eegnite.com/services/social-media-marketing/",
    },
    openGraph: {
        title: "Results-Driven Social Media Marketing Agency | EEGNITE",
        description: "Drive real growth with EEGNITE’s social media marketing services. From content strategy and paid social ads to community management and analytics, we turn social media into a revenue-driving channel for your business.",
        url: "https://www.eegnite.com/services/social-media-marketing/",
        type: "website",
        images: [
            {
                url: "/eegnite-logo.png",
                width: 1200,
                height: 630,
                alt: "EEGNITE - Social Media Marketing"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Results-Driven Social Media Marketing Agency | EEGNITE",
        description: "Drive real growth with EEGNITE’s social media marketing services. From content strategy and paid social ads to community management and analytics, we turn social media into a revenue-driving channel for your business.",
        images: ["/eegnite-logo.png"]
    }
};

export default function SocialMediaPage() {
    return (
        <>
            <UnifiedSchemaJsonLd
                pageUrl="https://www.eegnite.com/services/social-media-marketing/"
                pageTitle="Results-Driven Social Media Marketing Agency | EEGNITE"
                pageDescription="Drive real growth with EEGNITE’s social media marketing services. From content strategy and paid social ads to community management and analytics, we turn social media into a revenue-driving channel for your business."
                pageType="service"
                serviceName="Social Media Marketing & Brand Strategy Services"
                serviceDescription="Enhance brand awareness, build community trust, and scale customer acquisitions using professional organic and paid content strategies on Instagram, LinkedIn, Facebook, and YouTube."
                serviceCategory="Social Media Marketing"
                breadcrumbs={[
                    { position: 1, name: "Home", url: "https://www.eegnite.com/" },
                    { position: 2, name: "Services", url: "https://www.eegnite.com/services/" },
                    { position: 3, name: "Social Media Marketing", url: "https://www.eegnite.com/services/social-media-marketing/" }
                ]}
                faqs={SOCIAL_MEDIA_FAQS.map(f => ({ question: f.q, answer: f.a }))}
            />
            <SocialMediaMarketingPageContent />
        </>
    );
}
