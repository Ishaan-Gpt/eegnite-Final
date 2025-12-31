"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { ArrowLeft, Shield } from "lucide-react";

export default function PrivacyPage() {
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
                <div className="absolute top-0 left-0 w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-[#FF6105]/10 to-transparent blur-[100px] -translate-y-1/2 -translate-x-1/4" />
                <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] rounded-full bg-gradient-to-br from-[#FF6105]/5 to-transparent blur-[80px]" />

                <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#FF6105] mb-6">
                            <span className="w-8 h-[2px] bg-[#FF6105]" />
                            Your Data
                            <span className="w-8 h-[2px] bg-[#FF6105]" />
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black uppercase tracking-tight">
                            Privacy <span className="text-[#FF6105]">Policy</span>
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
                        <div className="flex items-start gap-4 p-6 bg-[#FF6105]/5 rounded-2xl border border-[#FF6105]/10 mb-10">
                            <Shield className="text-[#FF6105] flex-shrink-0 mt-1" size={24} />
                            <p className="text-black/70 m-0">
                                When you visit our website or use our services, you trust us with your information. We take this responsibility seriously and are committed to protecting your privacy.
                            </p>
                        </div>

                        <div className="space-y-10">
                            {privacyContent.map((section, i) => (
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
                            <p className="text-black/60 m-0">
                                For any questions regarding this Privacy Policy, please contact us at{" "}
                                <a href="mailto:privacy@eegnite.com" className="text-[#FF6105] hover:underline">privacy@eegnite.com</a>
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

const privacyContent = [
    {
        title: "Information We Collect",
        content: (
            <div>
                <p className="mb-3"><strong>Information You Provide:</strong> Name, email address, phone number, company name, job title, and inquiry details when you fill out contact forms or subscribe to our newsletter.</p>
                <p><strong>Automatically Collected:</strong> IP address, browser type, device type, pages visited, referring website, and general geographic location through cookies and similar technologies.</p>
            </div>
        )
    },
    {
        title: "How We Use Your Information",
        content: (
            <ul className="list-disc pl-5 space-y-2">
                <li>To respond to your inquiries and provide information about our services</li>
                <li>To send newsletters and updates (with your consent)</li>
                <li>To improve our website and user experience</li>
                <li>To maintain security and prevent fraud</li>
                <li>To comply with legal obligations</li>
            </ul>
        )
    },
    {
        title: "Cookies and Tracking",
        content: (
            <div>
                <p className="mb-3">We use cookies to understand how visitors interact with our site. Types include:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Essential Cookies:</strong> Necessary for website functionality</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand visitor behavior</li>
                    <li><strong>Functional Cookies:</strong> Remember your preferences</li>
                </ul>
            </div>
        )
    },
    {
        title: "Information Sharing",
        content: <p>We do not sell, rent, or trade your personal information. We may share data with trusted service providers, for legal compliance, during business transfers, or with your explicit consent.</p>
    },
    {
        title: "Data Security",
        content: <p>We implement reasonable security measures including SSL/TLS encryption, limited access to authorized personnel, and regular security reviews. However, no method of transmission is 100% secure.</p>
    },
    {
        title: "Data Retention",
        content: (
            <ul className="list-disc pl-5 space-y-1">
                <li><strong>Contact Forms:</strong> Up to 3 years unless you request deletion</li>
                <li><strong>Newsletter:</strong> Until you unsubscribe</li>
                <li><strong>Analytics:</strong> Aggregated data may be retained indefinitely</li>
            </ul>
        )
    },
    {
        title: "Your Rights",
        content: (
            <ul className="list-disc pl-5 space-y-1">
                <li>Right to access your personal information</li>
                <li>Right to correction of inaccurate data</li>
                <li>Right to deletion of your data</li>
                <li>Right to withdraw consent at any time</li>
                <li>Right to unsubscribe from communications</li>
            </ul>
        )
    },
    {
        title: "Children's Privacy",
        content: <p>Our website is not intended for individuals under 18. We do not knowingly collect personal information from children.</p>
    },
    {
        title: "International Transfers",
        content: <p>Our servers are located in India. By using our website, you consent to the transfer of your information to India.</p>
    },
    {
        title: "Grievance Redressal",
        content: <p>In accordance with the Information Technology Act, 2000, you may contact our Grievance Officer at grievance@eegnite.com. We will acknowledge within 48 hours and resolve within one month.</p>
    },
];
