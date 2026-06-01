import { Metadata } from "next";
import ServicesPageContent from "@/components/page-content/ServicesPageContent";
import { UnifiedSchemaJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Premium Digital Marketing & Web Development Services | EEGNITE",
    description: "Scale your business with EEGNITE's professional growth services: results-driven SEO, conversion-focused PPC, automated email campaigns, high-performance web development, and social media branding.",
    alternates: {
        canonical: "https://www.eegnite.com/services/",
    },
    openGraph: {
        title: "Premium Digital Marketing & Web Development Services | EEGNITE",
        description: "Scale your business with EEGNITE's professional growth services: results-driven SEO, conversion-focused PPC, automated email campaigns, high-performance web development, and social media branding.",
        url: "https://www.eegnite.com/services/",
        type: "website",
        images: [
            {
                url: "/eegnite-logo.png",
                width: 1200,
                height: 630,
                alt: "EEGNITE - Digital Marketing Services"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Premium Digital Marketing & Web Development Services | EEGNITE",
        description: "Scale your business with EEGNITE's professional growth services: results-driven SEO, conversion-focused PPC, automated email campaigns, high-performance web development, and social media branding.",
        images: ["/eegnite-logo.png"]
    }
};

export default function ServicesPage() {
    return (
        <>
            <UnifiedSchemaJsonLd
                pageUrl="https://www.eegnite.com/services/"
                pageTitle="Premium Digital Marketing & Web Development Services | EEGNITE"
                pageDescription="Scale your business with EEGNITE's professional growth services: results-driven SEO, conversion-focused PPC, automated email campaigns, high-performance web development, and social media branding."
                pageType="generic"
                breadcrumbs={[
                    { position: 1, name: "Home", url: "https://www.eegnite.com/" },
                    { position: 2, name: "Services", url: "https://www.eegnite.com/services/" }
                ]}
            />
            <ServicesPageContent />
        </>
    );
}
