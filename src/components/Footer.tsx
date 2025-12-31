"use client";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Youtube, Phone, Mail, Send, ArrowUpRight, Loader2, CheckCircle } from "lucide-react";
import { useState } from "react";
import { TextHoverEffect } from "@/components/ui/hover-text-effect";
import { submitNewsletter } from "@/lib/firebaseService";

const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/eegnite", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/eegnite/", label: "Instagram" },
    { icon: Youtube, href: "https://www.youtube.com/@EEGNITE", label: "YouTube" },
];

export default function Footer() {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleNewsletterSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const result = await submitNewsletter({ email });

            if (result.success) {
                setIsSuccess(true);
                setEmail("");
                setTimeout(() => setIsSuccess(false), 5000);
            } else {
                setError("Failed to subscribe. Please try again.");
            }
        } catch (err) {
            setError("An error occurred. Please try again.");
            console.error("Newsletter error:", err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <footer className="relative z-10 w-full overflow-hidden pt-16 pb-0 bg-white">
            {/* Background Glow Effects */}
            <div className="pointer-events-none absolute top-0 left-1/2 z-0 h-full w-full -translate-x-1/2 select-none">
                <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-[#FF6105]/10 blur-[100px]" />
                <div className="absolute right-1/4 -bottom-24 h-80 w-80 rounded-full bg-[#FF6105]/10 blur-[100px]" />
            </div>

            {/* Glass Container */}
            <div className="relative mx-auto max-w-6xl px-6">
                <div
                    className="relative flex flex-col gap-12 rounded-3xl px-8 py-12 md:px-12"
                    style={{
                        background: 'radial-gradient(circle at 30% 20%, rgba(255, 97, 5, 0.08) 0%, rgba(255, 255, 255, 0.9) 50%, rgba(255, 97, 5, 0.05) 100%)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 97, 5, 0.1)',
                    }}
                >
                    {/* CTA Row */}
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-10 pb-10 border-b border-black/5">
                        <div className="max-w-xl">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black tracking-tight leading-[1.1]">
                                Let's Build <span className="text-[#FF6105]">The Future</span> Together.
                            </h2>
                        </div>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group flex items-center gap-3 bg-[#FF6105] text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider shadow-lg shadow-[#FF6105]/30 hover:shadow-xl hover:shadow-[#FF6105]/40 transition-shadow"
                        >
                            Start a Project
                            <ArrowUpRight className="group-hover:rotate-45 transition-transform" size={18} />
                        </motion.a>
                    </div>

                    {/* Main Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
                        {/* Brand */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="flex items-center gap-3">
                                <img src="/eegnite-logo.png" alt="EEGNITE" className="h-10 w-auto" loading="lazy" />
                                <span className="text-xl font-bold text-[#FF6105] uppercase tracking-wider">
                                    EEGNITE<sup className="text-[8px] ml-0.5">™</sup>
                                </span>
                            </div>
                            <p className="text-sm text-black/60 leading-relaxed max-w-sm">
                                Bridging the gap between complex digital data and human-centric design. We help businesses achieve measurable growth through strategic marketing.
                            </p>
                            <div className="flex gap-3">
                                {socialLinks.map((social, i) => (
                                    <motion.a
                                        key={i}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        className="w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center text-[#FF6105] hover:bg-[#FF6105] hover:text-white hover:border-[#FF6105] transition-colors shadow-sm"
                                    >
                                        <social.icon size={18} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="space-y-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#FF6105]">Navigation</span>
                            <ul className="space-y-3">
                                {["About", "Services", "Results", "Contact"].map(item => (
                                    <li key={item}>
                                        <a href={`#${item.toLowerCase()}`} className="text-sm text-black/70 hover:text-[#FF6105] transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="space-y-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#FF6105]">Services</span>
                            <ul className="space-y-3">
                                {["SEO", "Email Marketing", "PPC Advertising", "E-Commerce"].map(item => (
                                    <li key={item}>
                                        <a href="#services" className="text-sm text-black/70 hover:text-[#FF6105] transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="space-y-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#FF6105]">Get In Touch</span>
                            <ul className="space-y-3">
                                <li>
                                    <a href="https://www.linkedin.com/in/anish-kr/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-black/70 hover:text-[#FF6105] transition-colors">
                                        <Linkedin size={14} className="text-[#FF6105]" />
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a href="https://wa.me/916289753474" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-black/70 hover:text-[#FF6105] transition-colors">
                                        <svg className="w-3.5 h-3.5 text-[#FF6105]" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                        WhatsApp
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+916289753474" className="flex items-center gap-2 text-sm text-black/70 hover:text-[#FF6105] transition-colors">
                                        <Phone size={14} className="text-[#FF6105]" />
                                        +91 6289 753 474
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:anish@eegnite.com" className="flex items-center gap-2 text-sm text-black/70 hover:text-[#FF6105] transition-colors">
                                        <Mail size={14} className="text-[#FF6105]" />
                                        anish@eegnite.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Newsletter Row */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-black/5">
                        <div>
                            <h4 className="text-sm font-bold text-black mb-1">Subscribe to our Newsletter</h4>
                            <p className="text-xs text-black/50">
                                {isSuccess ? "Thanks for subscribing! 🎉" : "Get insights & updates straight to your inbox."}
                            </p>
                            {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
                        </div>
                        <form onSubmit={handleNewsletterSubmit} className="flex gap-2 w-full md:w-auto">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder={isSuccess ? "Subscribed!" : "Enter your email"}
                                required
                                disabled={isSubmitting || isSuccess}
                                className="flex-1 md:w-64 px-4 py-3 text-sm bg-white border border-black/10 rounded-full focus:outline-none focus:border-[#FF6105] transition-colors disabled:opacity-60"
                            />
                            <motion.button
                                type="submit"
                                disabled={isSubmitting || isSuccess}
                                whileHover={{ scale: isSubmitting || isSuccess ? 1 : 1.05 }}
                                whileTap={{ scale: isSubmitting || isSuccess ? 1 : 0.95 }}
                                className={`w-12 h-12 rounded-full text-white flex items-center justify-center transition-colors shadow-lg shadow-[#FF6105]/20 disabled:cursor-not-allowed ${isSuccess ? 'bg-green-500' : 'bg-[#FF6105] hover:bg-[#e55800]'
                                    }`}
                            >
                                {isSubmitting ? (
                                    <Loader2 size={18} className="animate-spin" />
                                ) : isSuccess ? (
                                    <CheckCircle size={18} />
                                ) : (
                                    <Send size={18} />
                                )}
                            </motion.button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8 px-4 text-xs text-black/40">
                    <span>© 2025 EEGNITE. All rights reserved.</span>
                    <div className="flex gap-6">
                        <a href="/privacy" className="hover:text-[#FF6105] transition-colors">Privacy Policy</a>
                        <a href="/terms" className="hover:text-[#FF6105] transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
