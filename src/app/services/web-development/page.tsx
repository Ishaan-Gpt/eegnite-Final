import type { Metadata } from "next";
import WebDesignDevelopmentPageContent from "@/components/page-content/web-design-development-page-content";
import { UnifiedSchemaJsonLd } from "@/components/JsonLd";
import { WEB_DESIGN_FAQS } from "@/data/web-design-development.data";

export const metadata: Metadata = {
    title: "Conversion-Focused Web Design and Development Agency | EEGNITE",
    description: "Create high-performing websites with EEGNITE. From UI/UX design and eCommerce development to WordPress development and CRO-driven experiences, we build websites engineered to convert visitors into customers.",
    alternates: {
        canonical: "https://www.eegnite.com/services/web-development/",
    },
    openGraph: {
        title: "Conversion-Focused Web Design and Development Agency | EEGNITE",
        description: "Create high-performing websites with EEGNITE. From UI/UX design and eCommerce development to WordPress development and CRO-driven experiences, we build websites engineered to convert visitors into customers.",
        url: "https://www.eegnite.com/services/web-development/",
        type: "website",
        images: [
            {
                url: "/eegnite-logo.png",
                width: 1200,
                height: 630,
                alt: "EEGNITE - Web Design and Development"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Conversion-Focused Web Design and Development Agency | EEGNITE",
        description: "Create high-performing websites with EEGNITE. From UI/UX design and eCommerce development to WordPress development and CRO-driven experiences, we build websites engineered to convert visitors into customers.",
        images: ["/eegnite-logo.png"]
    }
};

export default function WebDesignPage() {
    return (
        <>
            <UnifiedSchemaJsonLd
                pageUrl="https://www.eegnite.com/services/web-development/"
                pageTitle="Conversion-Focused Web Design and Development Agency | EEGNITE"
                pageDescription="Create high-performing websites with EEGNITE. From UI/UX design and eCommerce development to WordPress development and CRO-driven experiences, we build websites engineered to convert visitors into customers."
                pageType="service"
                serviceName="Web Design & Conversion Rate Optimization (CRO) Services"
                serviceDescription="Build modern, ultra-fast, and premium high-converting custom React/Next.js and WordPress websites built for brands looking to maximize conversions and customer engagement."
                serviceCategory="Web Design & Development"
                breadcrumbs={[
                    { position: 1, name: "Home", url: "https://www.eegnite.com/" },
                    { position: 2, name: "Services", url: "https://www.eegnite.com/services/" },
                    { position: 3, name: "Web Development", url: "https://www.eegnite.com/services/web-development/" }
                ]}
                faqs={WEB_DESIGN_FAQS.map(f => ({ question: f.q, answer: f.a }))}
            />
            <WebDesignDevelopmentPageContent />
        </>
    );
}
