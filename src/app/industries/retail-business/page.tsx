import { Metadata } from "next";
import RetailBusinessPageContent from "@/components/page-content/retail-business-page-content";
import { UnifiedSchemaJsonLd } from "@/components/JsonLd";
import { RETAIL_FAQS } from "@/data/retail-business.data";

export const metadata: Metadata = {
    title: "Revenue-Driven Retail Digital Marketing Agency | EEGNITE",
    description: "Increase foot traffic, online sales, and customer retention with EEGNITE’s retail digital marketing strategies. SEO, Google Ads, social commerce, local SEO, and conversion-focused analytics built for modern retail growth.",
    alternates: {
        canonical: "https://www.eegnite.com/industries/retail-business/",
    },
    openGraph: {
        title: "Revenue-Driven Retail Digital Marketing Agency | EEGNITE",
        description: "Increase foot traffic, online sales, and customer retention with EEGNITE’s retail digital marketing strategies. SEO, Google Ads, social commerce, local SEO, and conversion-focused analytics built for modern retail growth.",
        url: "https://www.eegnite.com/industries/retail-business/",
        type: "website",
        images: [
            {
                url: "/eegnite-logo.png",
                width: 1200,
                height: 630,
                alt: "EEGNITE - Retail Digital Marketing"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Revenue-Driven Retail Digital Marketing Agency | EEGNITE",
        description: "Increase foot traffic, online sales, and customer retention with EEGNITE’s retail digital marketing strategies. SEO, Google Ads, social commerce, local SEO, and conversion-focused analytics built for modern retail growth.",
        images: ["/eegnite-logo.png"]
    }
};

export default function RetailBusinessPage() {
    return (
        <>
            <UnifiedSchemaJsonLd
                pageUrl="https://www.eegnite.com/industries/retail-business/"
                pageTitle="Revenue-Driven Retail Digital Marketing Agency | EEGNITE"
                pageDescription="Increase foot traffic, online sales, and customer retention with EEGNITE’s retail digital marketing strategies. SEO, Google Ads, social commerce, local SEO, and conversion-focused analytics built for modern retail growth."
                pageType="industry"
                breadcrumbs={[
                    { position: 1, name: "Home", url: "https://www.eegnite.com/" },
                    { position: 2, name: "Industries", url: "https://www.eegnite.com/industries/" },
                    { position: 3, name: "Retail Business", url: "https://www.eegnite.com/industries/retail-business/" }
                ]}
                faqs={RETAIL_FAQS.map(f => ({ question: f.q, answer: f.a }))}
            />
            <RetailBusinessPageContent />
        </>
    );
}
