"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { ArrowLeft, FileText } from "lucide-react";

export default function TermsPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    const headerY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
    const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

    return (
        <main ref={containerRef} className="min-h-screen bg-white">
            {/* Fixed Nav */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-black/5">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 text-[#FF6105] hover:opacity-80 transition-opacity">
                        <ArrowLeft size={20} />
                        <span className="text-sm font-semibold uppercase tracking-wider">Back to Home</span>
                    </Link>
                    <div className="flex items-center gap-2">
                        <img src="/eegnite-logo.png" alt="EEGNITE" className="h-8 w-auto" />
                        <span className="text-base font-bold uppercase tracking-wider text-black/80">
                            EEGNITE<sup className="text-[10px] ml-0.5">™</sup>
                        </span>
                    </div>
                </div>
            </nav>

            {/* Hero Header */}
            <motion.div
                style={{ y: headerY, opacity: headerOpacity }}
                className="relative pt-32 pb-20 overflow-hidden"
            >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-[#FF6105]/10 to-transparent blur-[100px] -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] rounded-full bg-gradient-to-br from-[#FF6105]/5 to-transparent blur-[80px]" />

                <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#FF6105] mb-6">
                            <span className="w-8 h-[2px] bg-[#FF6105]" />
                            Legal
                            <span className="w-8 h-[2px] bg-[#FF6105]" />
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black uppercase tracking-tight">
                            Terms & <span className="text-[#FF6105]">Conditions</span>
                        </h1>
                        <p className="mt-6 text-black/50 text-lg">
                            <strong>Effective Date:</strong> December 27, 2025 · <strong>Last Updated:</strong> December 27, 2025
                        </p>
                    </motion.div>
                </div>
            </motion.div>

            {/* Content */}
            <div className="relative max-w-4xl mx-auto px-6 md:px-12 pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-gradient-to-br from-white to-gray-50 border border-black/5 rounded-3xl p-8 md:p-12 shadow-xl"
                >
                    <div className="prose prose-lg max-w-none">
                        <p className="text-lg text-black/70 leading-relaxed">
                            Welcome to EEGNITE. These Terms and Conditions constitute a legally binding agreement between you and EEGNITE concerning your access to and use of the https://eegnite.com website.
                        </p>

                        <div className="space-y-10 mt-10">
                            {termsContent.map((section, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: i * 0.05 }}
                                    className="border-l-4 border-[#FF6105]/20 pl-6 hover:border-[#FF6105] transition-colors"
                                >
                                    <h2 className="text-xl md:text-2xl font-bold text-black mb-4 flex items-center gap-3">
                                        <span className="text-[#FF6105]">{i + 1}.</span> {section.title}
                                    </h2>
                                    <div className="text-black/60 leading-relaxed space-y-3">
                                        {section.content}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-12 p-6 bg-[#FF6105]/5 rounded-2xl border border-[#FF6105]/10">
                            <h3 className="font-bold text-black mb-2">Contact Us</h3>
                            <p className="text-black/60">
                                For any questions regarding these Terms, please contact us at{" "}
                                <a href="mailto:legal@eegnite.com" className="text-[#FF6105] hover:underline">legal@eegnite.com</a>
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Footer */}
            <div className="border-t border-black/5 py-8 text-center text-sm text-black/40">
                © 2025 EEGNITE. All Rights Reserved.
            </div>
        </main>
    );
}

const termsContent = [
    {
        title: "About Our Services",
        content: <p>EEGNITE is a digital growth and marketing agency. Our Site provides information about our services, including strategic marketing consulting, digital advertising, content creation, performance tracking, social media management, and search engine optimization.</p>
    },
    {
        title: "Eligibility",
        content: <p>By using this Site, you represent that you are at least 18 years of age, have the legal capacity to agree to these Terms, and your use will comply with all applicable laws.</p>
    },
    {
        title: "Intellectual Property Rights",
        content: <p>All content on this Site is the property of EEGNITE and is protected by copyright, trademark, and other intellectual property laws. You are granted a limited, non-exclusive license to access and view the Site for informational purposes only.</p>
    },
    {
        title: "Contact Forms and Newsletter",
        content: <p>By submitting information through our forms, you agree that all information is accurate, we may use it to respond to inquiries, and your information will be handled according to our Privacy Policy.</p>
    },
    {
        title: "Marketing Results Disclaimer",
        content: <p>EEGNITE does not guarantee specific results including search engine rankings, traffic volumes, lead generation, conversion rates, or revenue increases. Results depend on many factors beyond our control.</p>
    },
    {
        title: "Third-Party Links",
        content: <p>Our Site may contain links to third-party websites. We do not control or assume responsibility for their content, privacy policies, or practices.</p>
    },
    {
        title: "Analytics and Cookies",
        content: <p>We may use analytics tools and cookies to understand how visitors interact with our Site. Please refer to our Privacy Policy for detailed information.</p>
    },
    {
        title: "Prohibited Conduct",
        content: <p>You agree not to use the Site for unlawful purposes, attempt unauthorized access, upload malware, interfere with functionality, collect information about others without consent, or impersonate any person or entity.</p>
    },
    {
        title: "Disclaimer of Warranties",
        content: <p>The Site is provided on an "as-is" and "as-available" basis. We disclaim all warranties, express or implied, including merchantability and fitness for a particular purpose.</p>
    },
    {
        title: "Limitation of Liability",
        content: <p>To the maximum extent permitted by law, EEGNITE shall not be liable for any indirect, incidental, special, consequential, or punitive damages. Our total liability shall not exceed INR 1,000.</p>
    },
    {
        title: "Governing Law",
        content: <p>These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana, India.</p>
    },
    {
        title: "Dispute Resolution",
        content: <p>Before legal proceedings, you agree to contact us at legal@eegnite.com to attempt informal resolution within 30 days.</p>
    },
];
