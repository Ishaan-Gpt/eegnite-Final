import type { Metadata } from "next";
import KolkataSeoPageContent from "@/components/page-content/KolkataSeoPageContent";
import { UnifiedSchemaJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Best SEO Solutions For Kolkata Businesses | EEGNITE",
    description: "EEGNITE delivers SEO services in Kolkata built for real rankings and real traffic. Local SEO, technical fixes, content, and link building. Get your free SEO audit today.",
    alternates: {
        canonical: "https://www.eegnite.com/kolkata/seo-services/",
    },
    openGraph: {
        title: "Best SEO Solutions For Kolkata Businesses | EEGNITE",
        description: "EEGNITE delivers SEO services in Kolkata built for real rankings and real traffic. Local SEO, technical fixes, content, and link building. Get your free SEO audit today.",
        url: "https://www.eegnite.com/kolkata/seo-services/",
        type: "website",
        images: [
            {
                url: "/images/logos/eegnite-logo.png",
                width: 1200,
                height: 630,
                alt: "EEGNITE - Kolkata SEO Services"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Best SEO Solutions For Kolkata Businesses | EEGNITE",
        description: "EEGNITE delivers SEO services in Kolkata built for real rankings and real traffic. Local SEO, technical fixes, content, and link building. Get your free SEO audit today.",
        images: ["/images/logos/eegnite-logo.png"]
    }
};

const kolkataSeoFaqs = [
    {
        question: "How much do EEGNITE’s SEO services cost in Kolkata?",
        answer: "Our SEO services in Kolkata start at ₹25,000 per month. The final investment depends on your business goals, competition, website health, and growth requirements. After an initial audit, EEGNITE creates a tailored SEO roadmap and pricing structure designed around your specific needs."
    },
    {
        question: "How long does SEO take to show results in Kolkata?",
        answer: "Most Kolkata businesses see meaningful movement in rankings and organic traffic within 3 to 5 months, depending on the competition level. Local SEO improvements, such as Google Business Profile optimisation, can show results faster, often within 4 to 8 weeks."
    },
    {
        question: "Is local SEO different from regular SEO?",
        answer: "Yes. Local SEO focuses on visibility for location-based searches, such as 'near me' queries and Google Maps results, while regular SEO focuses on broader organic rankings. For most Kolkata businesses, both are needed together for full visibility."
    },
    {
        question: "Can EEGNITE fix a website that already has SEO problems?",
        answer: "Yes. A large part of our work in Kolkata involves auditing existing websites, identifying what previous SEO efforts missed or did incorrectly, and rebuilding the strategy on a stronger technical and content foundation."
    },
    {
        question: "Do you only work with businesses based in Kolkata?",
        answer: "No. While this page focuses on Kolkata, EEGNITE provides SEO services across India and internationally. Kolkata-based businesses benefit from our understanding of the local market alongside our broader SEO expertise."
    }
];

export default function KolkataSeoPage() {
    return (
        <>
            <UnifiedSchemaJsonLd
                pageUrl="https://www.eegnite.com/kolkata/seo-services/"
                pageTitle="Best SEO Solutions For Kolkata Businesses | EEGNITE"
                pageDescription="EEGNITE delivers SEO services in Kolkata built for real rankings and real traffic. Local SEO, technical fixes, content, and link building. Get your free SEO audit today."
                pageType="service"
                serviceName="Search Engine Optimization (SEO) Services in Kolkata"
                serviceDescription="AI-powered and traditional SEO services for Kolkata businesses including keyword research, content optimization, tech audit, and local SEO map ranking."
                serviceCategory="SEO Services"
                breadcrumbs={[
                    { position: 1, name: "Home", url: "https://www.eegnite.com/" },
                    { position: 2, name: "Kolkata", url: "https://www.eegnite.com/kolkata/" },
                    { position: 3, name: "SEO Services", url: "https://www.eegnite.com/kolkata/seo-services/" }
                ]}
                faqs={kolkataSeoFaqs}
            />
            <KolkataSeoPageContent />
        </>
    );
}
