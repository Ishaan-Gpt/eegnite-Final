import { Metadata } from "next";
import SitemapPageContent from "@/components/page-content/SitemapPageContent";

export const dynamic = 'force-static';

export const metadata: Metadata = {
    title: "HTML Sitemap | EEGNITE Digital Marketing Agency",
    description: "Explore the full HTML sitemap of EEGNITE. Easily navigate through our main pages, digital marketing services, industry solutions, and growth blog posts.",
    alternates: {
        canonical: "https://www.eegnite.com/sitemap/",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "HTML Sitemap | EEGNITE",
        description: "Complete visual index of all pages, services, industry solutions, and blog posts on EEGNITE.",
        url: "https://www.eegnite.com/sitemap/",
        siteName: "EEGNITE",
        type: "website",
    },
};

export default function SitemapPage() {
    return <SitemapPageContent />;
}
