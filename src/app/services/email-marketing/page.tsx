import type { Metadata } from "next";
import EmailMarketingPageContent, { EMAIL_FAQS } from "@/components/page-content/EmailMarketingPageContent";
import { UnifiedSchemaJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Revenue-Driven Email Marketing Services | EEGNITE",
    description: "Nurture leads, recover cart revenue, and build automated customer relationships. EEGNITE's email marketing services include deliverability setups, flow automation, and campaign management designed to maximize ROI.",
    alternates: {
        canonical: 'https://www.eegnite.com/services/email-marketing/',
    },
    openGraph: {
        title: "Revenue-Driven Email Marketing Services | EEGNITE",
        description: "Nurture leads, recover cart revenue, and build automated customer relationships. EEGNITE's email marketing services include deliverability setups, flow automation, and campaign management designed to maximize ROI.",
        url: "https://www.eegnite.com/services/email-marketing/",
        type: "website",
        images: [
            {
                url: "/eegnite-logo.png",
                width: 1200,
                height: 630,
                alt: "EEGNITE - Email Marketing"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Revenue-Driven Email Marketing Services | EEGNITE",
        description: "Nurture leads, recover cart revenue, and build automated customer relationships. EEGNITE's email marketing services include deliverability setups, flow automation, and campaign management designed to maximize ROI.",
        images: ["/eegnite-logo.png"]
    }
};

export default function EmailMarketingPage() {
    return (
        <>
            <UnifiedSchemaJsonLd
                pageUrl="https://www.eegnite.com/services/email-marketing/"
                pageTitle="Revenue-Driven Email Marketing Services | EEGNITE"
                pageDescription="Nurture leads, recover cart revenue, and build automated customer relationships. EEGNITE's email marketing services include deliverability setups, flow automation, and campaign management designed to maximize ROI."
                pageType="service"
                serviceName="Email Marketing & Automation Strategy Services"
                serviceDescription="Generate scalable recurring sales using advanced email deliverability configurations, custom flow automations, cart recovery, and weekly performance newsletters."
                serviceCategory="Email Marketing"
                breadcrumbs={[
                    { position: 1, name: "Home", url: "https://www.eegnite.com/" },
                    { position: 2, name: "Services", url: "https://www.eegnite.com/services/" },
                    { position: 3, name: "Email Marketing", url: "https://www.eegnite.com/services/email-marketing/" }
                ]}
                faqs={EMAIL_FAQS.map(f => ({ question: f.q, answer: f.a }))}
            />
            <EmailMarketingPageContent />
        </>
    );
}
