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
import FAQ, { HOME_FAQS } from "@/components/FAQ";
import GrowthCTA from "@/components/GrowthCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HomeClient from "@/components/HomeClient";
import { UnifiedSchemaJsonLd } from "@/components/JsonLd";

export default function Home() {
    return (
        <main className="min-h-screen bg-white">

            {/* Premium Unified Schema Markup */}
            <UnifiedSchemaJsonLd
                pageUrl="https://www.eegnite.com/"
                pageTitle="Digital Marketing Agency in India | Value-driven Solution"
                pageDescription="EEGNITE is a senior-led digital marketing agency in India helping brands grow through data-driven SEO, web design, social media, and content strategies. Let's connect now."
                pageType="generic"
                breadcrumbs={[
                    { position: 1, name: "Home", url: "https://www.eegnite.com/" }
                ]}
                faqs={HOME_FAQS}
            />

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
