import { Metadata } from "next";
import MedicalHealthcarePageContent from "@/components/page-content/medical-healthcare-page-content";
import { UnifiedSchemaJsonLd } from "@/components/JsonLd";
import { HEALTHCARE_FAQS } from "@/data/medical-healthcare.data";

export const metadata: Metadata = {
    title: "Growth-Focused Healthcare Marketing Agency | EEGNITE",
    description: "Attract more patients, increase appointment bookings, and grow your healthcare practice with EEGNITE. SEO, paid ads, reputation management, and conversion-driven healthcare marketing strategies.",
    alternates: {
        canonical: "https://www.eegnite.com/industries/medical-healthcare/",
    },
    openGraph: {
        title: "Growth-Focused Healthcare Marketing Agency | EEGNITE",
        description: "Attract more patients, increase appointment bookings, and grow your healthcare practice with EEGNITE. SEO, paid ads, reputation management, and conversion-driven healthcare marketing strategies.",
        url: "https://www.eegnite.com/industries/medical-healthcare/",
        type: "website",
        images: [
            {
                url: "/eegnite-logo.png",
                width: 1200,
                height: 630,
                alt: "EEGNITE - Healthcare Practice Marketing"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Growth-Focused Healthcare Marketing Agency | EEGNITE",
        description: "Attract more patients, increase appointment bookings, and grow your healthcare practice with EEGNITE. SEO, paid ads, reputation management, and conversion-driven healthcare marketing strategies.",
        images: ["/eegnite-logo.png"]
    }
};

export default function MedicalHealthcarePage() {
    return (
        <>
            <UnifiedSchemaJsonLd
                pageUrl="https://www.eegnite.com/industries/medical-healthcare/"
                pageTitle="Growth-Focused Healthcare Marketing Agency | EEGNITE"
                pageDescription="Attract more patients, increase appointment bookings, and grow your healthcare practice with EEGNITE. SEO, paid ads, reputation management, and conversion-driven healthcare marketing strategies."
                pageType="industry"
                breadcrumbs={[
                    { position: 1, name: "Home", url: "https://www.eegnite.com/" },
                    { position: 2, name: "Industries", url: "https://www.eegnite.com/industries/" },
                    { position: 3, name: "Medical & Healthcare", url: "https://www.eegnite.com/industries/medical-healthcare/" }
                ]}
                faqs={HEALTHCARE_FAQS.map(f => ({ question: f.q, answer: f.a }))}
            />
            <MedicalHealthcarePageContent />
        </>
    );
}
