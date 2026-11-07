import type { Metadata } from "next";
import { UnifiedSchemaJsonLd } from "@/components/JsonLd";
import BahrainServicePage from "@/components/page-content/BahrainServicePage";
import type { BahrainServiceData } from "@/data/bahrain-service.types";

// Server-side helpers shared by the five /bahrain/<service>/ routes: metadata, schema and the page body.

export function bahrainMetadata({ meta }: BahrainServiceData): Metadata {
    return {
        title: meta.title,
        description: meta.description,
        alternates: { canonical: meta.url },
        openGraph: {
            title: meta.title,
            description: meta.description,
            url: meta.url,
            type: "website",
            images: [{ url: "/images/logos/eegnite-logo.png", width: 1200, height: 630, alt: `EEGNITE - ${meta.serviceName}` }],
        },
        twitter: { card: "summary_large_image", title: meta.title, description: meta.description, images: ["/images/logos/eegnite-logo.png"] },
    };
}

export function BahrainServiceRoute({ data }: { data: BahrainServiceData }) {
    const { meta } = data;
    return (
        <>
            <UnifiedSchemaJsonLd
                pageUrl={meta.url}
                pageTitle={meta.title}
                pageDescription={meta.description}
                pageType="service"
                serviceName={meta.serviceName}
                serviceDescription={meta.serviceDescription}
                serviceCategory={meta.serviceCategory}
                breadcrumbs={[
                    { position: 1, name: "Home", url: "https://www.eegnite.com/" },
                    { position: 2, name: "Bahrain", url: "https://www.eegnite.com/bahrain/" },
                    { position: 3, name: meta.crumb, url: meta.url },
                ]}
                faqs={data.faq.items.map((f) => ({ question: f.q, answer: f.text }))}
            />
            <BahrainServicePage data={data} />
        </>
    );
}
