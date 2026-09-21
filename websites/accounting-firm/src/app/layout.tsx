import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/motion/SmoothScroll";
import PageLoader from "@/components/motion/PageLoader";
import SampleWatermark from "@/components/motion/SampleWatermark";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";

const fraunces = Fraunces({
    subsets: ["latin"],
    variable: "--font-fraunces",
    weight: ["400", "500", "600"],
    style: ["normal", "italic"],
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: `${SITE_NAME} | Accounting & Advisory`,
    description: SITE_DESCRIPTION,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
            <body>
                <PageLoader />
                <SampleWatermark />
                <SmoothScroll>
                    <Navbar />
                    {children}
                    <Footer />
                </SmoothScroll>
            </body>
        </html>
    );
}
