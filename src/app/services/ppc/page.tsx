import type { Metadata } from "next";
import PpcPageContent, { PPC_FAQS } from "@/components/page-content/PpcPageContent";
import { UnifiedSchemaJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Performance-Focused PPC Advertising Agency | EEGNITE",
    description: "Scale faster with EEGNITE’s PPC advertising services. Google Ads, Meta Ads, conversion-focused landing pages, audience targeting, and campaign optimization built to maximize leads, sales, and ad spend performance.",
    alternates: {
        canonical: 'https://www.eegnite.com/services/ppc/',
    },
    openGraph: {
        title: "Performance-Focused PPC Advertising Agency | EEGNITE",
        description: "Scale faster with EEGNITE’s PPC advertising services. Google Ads, Meta Ads, conversion-focused landing pages, audience targeting, and campaign optimization built to maximize leads, sales, and ad spend performance.",
        url: "https://www.eegnite.com/services/ppc/",
        type: "website",
        images: [
            {
                url: "/eegnite-logo.png",
                width: 1200,
                height: 630,
                alt: "EEGNITE - PPC Advertising"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Performance-Focused PPC Advertising Agency | EEGNITE",
        description: "Scale faster with EEGNITE’s PPC advertising services. Google Ads, Meta Ads, conversion-focused landing pages, audience targeting, and campaign optimization built to maximize leads, sales, and ad spend performance.",
        images: ["/eegnite-logo.png"]
    }
};

export default function PPCPage() {
    return (
        <>
            <UnifiedSchemaJsonLd
                pageUrl="https://www.eegnite.com/services/ppc/"
                pageTitle="Performance-Focused PPC Advertising Agency | EEGNITE"
                pageDescription="Scale faster with EEGNITE’s PPC advertising services. Google Ads, Meta Ads, conversion-focused landing pages, audience targeting, and campaign optimization built to maximize leads, sales, and ad spend performance."
                pageType="service"
                serviceName="PPC Advertising & Paid Acquisition Services"
                serviceDescription="Drive instant targeted leads and revenue utilizing advanced Google Search/Display Ads, Meta/Facebook Campaigns, LinkedIn targeting, and custom conversion rate optimized (CRO) landing pages."
                serviceCategory="Pay-Per-Click Advertising"
                breadcrumbs={[
                    { position: 1, name: "Home", url: "https://www.eegnite.com/" },
                    { position: 2, name: "Services", url: "https://www.eegnite.com/services/" },
                    { position: 3, name: "PPC", url: "https://www.eegnite.com/services/ppc/" }
                ]}
                faqs={PPC_FAQS.map(f => ({ question: f.q, answer: f.a }))}
            />
            <PpcPageContent />
        </>
    );
}
