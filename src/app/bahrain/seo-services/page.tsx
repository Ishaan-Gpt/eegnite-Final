import type { Metadata } from "next";
import BahrainSeoPageContent from "@/components/page-content/BahrainSeoPageContent";
import { BAHRAIN_SEO_FAQS } from "@/data/bahrain-seo.data";
import { UnifiedSchemaJsonLd } from "@/components/JsonLd";

const PAGE_URL = "https://www.eegnite.com/bahrain/seo-services/";
const TITLE = "SEO Agency for Bahrain Businesses | EEGNITE";
const DESCRIPTION = "SEO for Bahrain businesses that need more qualified inquiries. EEGNITE improves the pages, technical foundations, and content that support buying decisions.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: PAGE_URL,
        type: "website",
        images: [
            {
                url: "/images/logos/eegnite-logo.png",
                width: 1200,
                height: 630,
                alt: "EEGNITE - SEO Agency for Bahrain Businesses"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: TITLE,
        description: DESCRIPTION,
        images: ["/images/logos/eegnite-logo.png"]
    }
};

export default function BahrainSeoPage() {
    return (
        <>
            <UnifiedSchemaJsonLd
                pageUrl={PAGE_URL}
                pageTitle={TITLE}
                pageDescription={DESCRIPTION}
                pageType="service"
                serviceName="SEO Services for Bahrain Businesses"
                serviceDescription="Technical SEO, service-page content, local search, product and category SEO, digital PR, and AI-assisted answer engine optimization for Bahrain businesses."
                serviceCategory="SEO Services"
                breadcrumbs={[
                    { position: 1, name: "Home", url: "https://www.eegnite.com/" },
                    { position: 2, name: "Bahrain", url: "https://www.eegnite.com/bahrain/" },
                    { position: 3, name: "SEO Services", url: PAGE_URL }
                ]}
                faqs={BAHRAIN_SEO_FAQS.map((f) => ({ question: f.q, answer: f.text }))}
            />
            <BahrainSeoPageContent />
        </>
    );
}
