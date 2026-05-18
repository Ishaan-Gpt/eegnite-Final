import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import VelocityScroll from "@/components/VelocityScroll";
import Services from "@/components/Services";
import ROISection from "@/components/ROISection";
import IndustriesGrid from "@/components/IndustriesGrid";
import GlobalReach from "@/components/GlobalReach";
import Testimonials from "@/components/Testimonials";
import Results from "@/components/Results";
import Founder from "@/components/Founder";
import FAQ from "@/components/FAQ";
import GrowthCTA from "@/components/GrowthCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HomeClient from "@/components/HomeClient";
import { OrganizationJsonLd, WebsiteJsonLd, LocalBusinessJsonLd } from "@/components/JsonLd";

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            {/* JSON-LD Structured Data */}
            <OrganizationJsonLd />
            <WebsiteJsonLd />
            <LocalBusinessJsonLd />

            {/* Loader overlay + Lenis + TravelingLine — client-only, sits on top */}
            <HomeClient />

            <Navbar />
            <Hero />
            <About />
            <VelocityScroll />
            <Services />
            <ROISection />
            <IndustriesGrid />
            <GlobalReach />
            <Testimonials />
            <Results />
            <Founder />
            <FAQ />
            <GrowthCTA />
            <Contact />
            <Footer />
        </main>
    );
}
