import { Metadata } from "next";
import ProfessionalServicesPageContent from "@/components/page-content/professional-services-page-content";
import { UnifiedSchemaJsonLd } from "@/components/JsonLd";
import { PROFESSIONAL_FAQS } from "@/data/professional-services.data";

export const metadata: Metadata = {
    title: "Authority-Driven Digital Marketing for Professional Services | EEGNITE",
    description: "Build trust, attract high-value clients, and grow your professional service firm with EEGNITE. SEO, PPC, LinkedIn marketing, thought leadership, and conversion strategies for law firms, consultants, advisors, and accounting firms.",
    alternates: {
        canonical: "https://www.eegnite.com/industries/professional-services/",
    },
    openGraph: {
        title: "Authority-Driven Digital Marketing for Professional Services | EEGNITE",
        description: "Build trust, attract high-value clients, and grow your professional service firm with EEGNITE. SEO, PPC, LinkedIn marketing, thought leadership, and conversion strategies for law firms, consultants, advisors, and accounting firms.",
        url: "https://www.eegnite.com/industries/professional-services/",
        type: "website",
        images: [
            {
                url: "/eegnite-logo.png",
                width: 1200,
                height: 630,
                alt: "EEGNITE - Professional Services Marketing"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Authority-Driven Digital Marketing for Professional Services | EEGNITE",
        description: "Build trust, attract high-value clients, and grow your professional service firm with EEGNITE. SEO, PPC, LinkedIn marketing, thought leadership, and conversion strategies for law firms, consultants, advisors, and accounting firms.",
        images: ["/eegnite-logo.png"]
    }
};

export default function ProfessionalServicesPage() {
    return (
        <>
            <UnifiedSchemaJsonLd
                pageUrl="https://www.eegnite.com/industries/professional-services/"
                pageTitle="Authority-Driven Digital Marketing for Professional Services | EEGNITE"
                pageDescription="Build trust, attract high-value clients, and grow your professional service firm with EEGNITE. SEO, PPC, LinkedIn marketing, thought leadership, and conversion strategies for law firms, consultants, advisors, and accounting firms."
                pageType="industry"
                breadcrumbs={[
                    { position: 1, name: "Home", url: "https://www.eegnite.com/" },
                    { position: 2, name: "Industries", url: "https://www.eegnite.com/industries/" },
                    { position: 3, name: "Professional Services", url: "https://www.eegnite.com/industries/professional-services/" }
                ]}
                faqs={PROFESSIONAL_FAQS.map(f => ({ question: f.q, answer: f.a }))}
            />
            <ProfessionalServicesPageContent />
        </>
    );
}
