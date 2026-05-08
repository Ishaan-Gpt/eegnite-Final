"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        setMobileMenuOpen(false);
        if (!href.startsWith('/#')) return;
        if (pathname === '/') {
            e.preventDefault();
            const el = document.getElementById(href.slice(2));
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const links = [
        { name: 'About', href: '/#about' },
        { name: 'Services', href: '/#services' },
        { name: 'Results', href: '/#results' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/#contact' }
    ];

    return (
        <>
            <nav
                className={`navbar-float fixed top-0 left-1/2 w-[92vw] lg:w-[50vw] z-[100] rounded-full px-4 lg:px-6 py-3 flex justify-between items-center transition-all duration-500 ${scrolled
                    ? 'bg-white/40 backdrop-blur-md border border-white/20 shadow-lg'
                    : 'bg-white/70 backdrop-blur-sm border border-white/30'
                    }`}
            >
                <Link href="/" className="flex items-center gap-2">
                    <img src="/eegnite-logo.png" alt="EEGNITE" className="h-7 lg:h-8 w-auto" loading="lazy" />
                    <span className={`text-sm lg:text-base font-bold uppercase tracking-wider transition-colors duration-300 ${scrolled ? 'text-black/60' : 'text-black/80'
                        }`}>
                        EEGNITE<sup className="text-[8px] lg:text-[10px] ml-0.5">™</sup>
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-1">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleHashClick(e, link.href)}
                            className={`nav-item px-3 py-2 text-[12px] font-semibold uppercase tracking-wider hover:text-[#FF6105] transition-colors duration-300 ${scrolled ? 'text-black/50' : 'text-black/70'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="lg:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
                >
                    <motion.span
                        animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 6 : 0 }}
                        className={`w-5 h-0.5 rounded-full transition-colors ${scrolled ? 'bg-black/60' : 'bg-black/80'}`}
                    />
                    <motion.span
                        animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
                        className={`w-5 h-0.5 rounded-full transition-colors ${scrolled ? 'bg-black/60' : 'bg-black/80'}`}
                    />
                    <motion.span
                        animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -6 : 0 }}
                        className={`w-5 h-0.5 rounded-full transition-colors ${scrolled ? 'bg-black/60' : 'bg-black/80'}`}
                    />
                </button>

                {/* Desktop CTA */}
                <Link href="/#contact" onClick={(e) => handleHashClick(e, '/#contact')} className={`hidden lg:block text-white text-[11px] uppercase tracking-widest px-5 py-2.5 rounded-full font-bold transition-all duration-300 ${scrolled
                    ? 'bg-[#FF6105]/80 hover:bg-[#FF6105]'
                    : 'bg-[#FF6105] hover:bg-[#e55800]'
                    }`}>
                    Get Started
                </Link>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[99] bg-black/50 lg:hidden"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="absolute right-0 top-0 h-full w-72 bg-white shadow-2xl"
                            onClick={(e: React.MouseEvent) => e.stopPropagation()}
                        >
                            <div className="pt-20 px-6">
                                <div className="space-y-1">
                                    {links.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            onClick={(e) => handleHashClick(e, link.href)}
                                            className="block py-3 text-lg font-semibold text-black/80 hover:text-[#FF6105] border-b border-black/5"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                                <Link
                                    href="/#contact"
                                    onClick={(e) => handleHashClick(e, '/#contact')}
                                    className="mt-6 block w-full text-center bg-[#FF6105] text-white py-3 rounded-full font-bold text-sm uppercase tracking-wider"
                                >
                                    Get Started
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
