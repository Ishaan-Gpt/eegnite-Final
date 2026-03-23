import type { Metadata } from "next";
import PpcPageContent from "@/components/page-content/PpcPageContent";

export const metadata: Metadata = {
    title: "Best PPC Management Services in India | ROI-Driven Ad Campaigns - EEGNITE",
    description: "EEGNITE delivers smart, ROI-driven PPC management services across Google Ads, Bing Ads, and social media. Drive sales, maximize ROI, and grow your business with data-backed PPC campaigns.",
    alternates: {
        canonical: 'https://eegnite.com/services/ppc',
    },
};

export default function PPCPage() {
    return <PpcPageContent />;
}
