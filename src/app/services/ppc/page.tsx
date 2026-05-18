import type { Metadata } from "next";
import PpcPageContent from "@/components/page-content/PpcPageContent";

export const metadata: Metadata = {
    title: "Performance-Focused PPC Advertising Agency | EEGNITE",
    description: "Scale faster with EEGNITE’s PPC advertising services. Google Ads, Meta Ads, conversion-focused landing pages, audience targeting, and campaign optimization built to maximize leads, sales, and ad spend performance.",
    alternates: {
        canonical: 'https://www.eegnite.com/services/ppc',
    },
};

export default function PPCPage() {
    return <PpcPageContent />;
}
