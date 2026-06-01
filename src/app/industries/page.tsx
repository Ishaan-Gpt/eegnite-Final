import { Metadata } from "next";
import IndustriesPageContent from "@/components/page-content/IndustriesPageContent";
import { UnifiedSchemaJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Scale Your Business with Expert Industry Marketing | EEGNITE",
    description: "Dominate your sector with EEGNITE's customized B2B, eCommerce, Retail, Medical, Manufacturing, and Professional Services digital marketing systems built to scale pipeline and margin.",
    alternates: {
        canonical: "https://www.eegnite.com/industries/",
    },
    openGraph: {
        title: "Scale Your Business with Expert Industry Marketing | EEGNITE",
        description: "Dominate your sector with EEGNITE's customized B2B, eCommerce, Retail, Medical, Manufacturing, and Professional Services digital marketing systems built to scale pipeline and margin.",
        url: "https://www.eegnite.com/industries/",
        type: "website",
        images: [
            {
                url: "/eegnite-logo.png",
                width: 1200,
                height: 630,
                alt: "EEGNITE - Industry Marketing Services"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Scale Your Business with Expert Industry Marketing | EEGNITE",
        description: "Dominate your sector with EEGNITE's customized B2B, eCommerce, Retail, Medical, Manufacturing, and Professional Services digital marketing systems built to scale pipeline and margin.",
        images: ["/eegnite-logo.png"]
    }
};

export default function IndustriesPage() {
    return (
        <>
            <UnifiedSchemaJsonLd
                pageUrl="https://www.eegnite.com/industries/"
                pageTitle="Scale Your Business with Expert Industry Marketing | EEGNITE"
                pageDescription="Dominate your sector with EEGNITE's customized B2B, eCommerce, Retail, Medical, Manufacturing, and Professional Services digital marketing systems built to scale pipeline and margin."
                pageType="industry"
                breadcrumbs={[
                    { position: 1, name: "Home", url: "https://www.eegnite.com/" },
                    { position: 2, name: "Industries", url: "https://www.eegnite.com/industries/" }
                ]}
            />
            <IndustriesPageContent />
        </>
    );
}
