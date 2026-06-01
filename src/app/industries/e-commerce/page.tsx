import type { Metadata } from "next";
import EcommercePageContent from "@/components/page-content/e-commerce-page-content";

export const metadata: Metadata = {
    title: "E-Commerce Digital Marketing Services | EEGNITE",
    description: "EEGNITE builds data-driven digital marketing systems for e-commerce brands. From paid acquisition and SEO to cart recovery and retention — every strategy tied to one outcome: more revenue for your store.",
    keywords: ["e-commerce digital marketing", "ecommerce marketing agency", "shopify marketing", "google shopping ads", "ecommerce seo", "cart abandonment recovery", "ecommerce growth strategy"],
    alternates: {
        canonical: "https://www.eegnite.com/industries/e-commerce/",
    },
    openGraph: {
        title: "E-Commerce Digital Marketing Services | EEGNITE",
        description: "We build digital marketing systems engineered for e-commerce growth. From product discovery to customer retention — every strategy tied to more revenue for your store.",
        url: "https://www.eegnite.com/industries/e-commerce/",
        type: "website",
    },
};

import { UnifiedSchemaJsonLd } from "@/components/JsonLd";
import { ECOMMERCE_FAQS } from "@/data/e-commerce.data";

export default function EcommercePage() {
    return (
        <>
            <UnifiedSchemaJsonLd
                pageUrl="https://www.eegnite.com/industries/e-commerce/"
                pageTitle="E-Commerce Digital Marketing Services | EEGNITE"
                pageDescription="EEGNITE builds data-driven digital marketing systems for e-commerce brands. From paid acquisition and SEO to cart recovery and retention — every strategy tied to one outcome: more revenue for your store."
                pageType="industry"
                breadcrumbs={[
                    { position: 1, name: "Home", url: "https://www.eegnite.com/" },
                    { position: 2, name: "Industries", url: "https://www.eegnite.com/industries/" },
                    { position: 3, name: "E-Commerce", url: "https://www.eegnite.com/industries/e-commerce/" }
                ]}
                faqs={ECOMMERCE_FAQS.map(f => ({ question: f.q, answer: f.a }))}
            />
            <EcommercePageContent />
        </>
    );
}
