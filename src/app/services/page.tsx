import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import SmoothScrolling from "@/components/SmoothScrolling";

export default function ServicesPage() {
    return (
        <SmoothScrolling>
            <div className="bg-white min-h-screen">
                <Navbar />
                {/* Add padding-top to account for fixed navbar if needed, though Services has internal padding */}
                <div className="pt-20">
                    <Services />
                </div>
                <Footer />
            </div>
        </SmoothScrolling>
    );
}
