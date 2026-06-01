import { Metadata } from "next";
import ManufacturingLogisticsPageContent from "@/components/page-content/manufacturing-logistics-page-content";
import { UnifiedSchemaJsonLd } from "@/components/JsonLd";
import { MANUFACTURING_FAQS } from "@/data/manufacturing-logistics.data";

export const metadata: Metadata = {
    title: "Digital Marketing Agency for Manufacturers & Logistics | EEGNITE",
    description: "Generate qualified industrial leads and strengthen your market authority with EEGNITE. SEO, LinkedIn marketing, PPC, technical content, and B2B lead generation strategies built for manufacturing and logistics companies.",
    alternates: {
        canonical: "https://www.eegnite.com/industries/manufacturing-logistics/",
    },
    openGraph: {
        title: "Digital Marketing Agency for Manufacturers & Logistics | EEGNITE",
        description: "Generate qualified industrial leads and strengthen your market authority with EEGNITE. SEO, LinkedIn marketing, PPC, technical content, and B2B lead generation strategies built for manufacturing and logistics companies.",
        url: "https://www.eegnite.com/industries/manufacturing-logistics/",
        type: "website",
        images: [
            {
                url: "/eegnite-logo.png",
                width: 1200,
                height: 630,
                alt: "EEGNITE - Manufacturing & Logistics Marketing"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Digital Marketing Agency for Manufacturers & Logistics | EEGNITE",
        description: "Generate qualified industrial leads and strengthen your market authority with EEGNITE. SEO, LinkedIn marketing, PPC, technical content, and B2B lead generation strategies built for manufacturing and logistics companies.",
        images: ["/eegnite-logo.png"]
    }
};

export default function ManufacturingLogisticsPage() {
    return (
        <>
            <UnifiedSchemaJsonLd
                pageUrl="https://www.eegnite.com/industries/manufacturing-logistics/"
                pageTitle="Digital Marketing Agency for Manufacturers & Logistics | EEGNITE"
                pageDescription="Generate qualified industrial leads and strengthen your market authority with EEGNITE. SEO, LinkedIn marketing, PPC, technical content, and B2B lead generation strategies built for manufacturing and logistics companies."
                pageType="industry"
                breadcrumbs={[
                    { position: 1, name: "Home", url: "https://www.eegnite.com/" },
                    { position: 2, name: "Industries", url: "https://www.eegnite.com/industries/" },
                    { position: 3, name: "Manufacturing & Logistics", url: "https://www.eegnite.com/industries/manufacturing-logistics/" }
                ]}
                faqs={MANUFACTURING_FAQS.map(f => ({ question: f.q, answer: f.a }))}
            />
            <ManufacturingLogisticsPageContent />
        </>
    );
}
