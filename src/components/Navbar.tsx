"use client";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    Search,
    Share2,
    Megaphone,
    Globe,
    Mail,
    ShoppingBag,
    Target,
    HeartPulse,
    Store,
    Factory,
    Briefcase,
    ChevronDown,
    ArrowRight
} from "lucide-react";

// --- DATA STRUCTURES ---

const servicesList = [
    {
        title: "Search Engine Optimization (SEO)",
        description: "Rank higher, drive organic traffic, and dominate search results.",
        href: "/services/seo",
        icon: Search
    },
    {
        title: "Social Media Marketing",
        description: "Build highly engaged communities that turn scroll stops into sales.",
        href: "/services/social-media-marketing",
        icon: Share2
    },
    {
        title: "PPC Advertising",
        description: "Precision-targeted campaigns engineered to maximize ROI.",
        href: "/services/ppc",
        icon: Megaphone
    },
    {
        title: "Web Design & Development",
        description: "Fast, gorgeous, conversion-focused websites built to perform.",
        href: "/services/web-development",
        icon: Globe
    },
    {
        title: "Email Marketing",
        description: "High-ROI automated email flows that convert and retain.",
        href: "/services/email-marketing",
        icon: Mail
    }
];

const industriesList = [
    {
        title: "E-commerce",
        description: "Scale your online sales and maximize revenue per click.",
        href: "/industries/e-commerce",
        icon: ShoppingBag
    },
    {
        title: "B2B & Lead Generation",
        description: "Fill your pipeline with high-intent decision-makers and buyers.",
        href: "/industries/b2b-lead-generation",
        icon: Target
    },
    {
        title: "Medical & Healthcare",
        description: "Trusted, compliant digital marketing that drives bookings.",
        href: "/industries/medical-healthcare",
        icon: HeartPulse
    },
    {
        title: "Retail Business",
        description: "Bridge localized physical footfall and digital sales.",
        href: "/industries/retail-business",
        icon: Store
    },
    {
        title: "Manufacturing & Logistics",
        description: "Generate qualified B2B leads with targeted strategies.",
        href: "/industries/manufacturing-logistics",
        icon: Factory
    },
    {
        title: "Professional Services",
        description: "Build authority and attract ideal clients for law, finance, and agency.",
        href: "/industries/professional-services",
        icon: Briefcase
    }
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState<'services' | 'industries' | null>(null);

    // Mobile specific sub-accordions
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);

    const pathname = usePathname();
    const navRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Detect click outside to close desktop megamenu
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const clickedInsideNav = navRef.current && navRef.current.contains(event.target as Node);
            const clickedInsideMenu = menuRef.current && menuRef.current.contains(event.target as Node);
            if (!clickedInsideNav && !clickedInsideMenu) {
                setActiveMenu(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Reset menus on navigation
    useEffect(() => {
        if (typeof window !== "undefined" && !window.location.hash) {
            window.scrollTo(0, 0);
        }
        setActiveMenu(null);
        setMobileMenuOpen(false);
        setMobileServicesOpen(false);
        setMobileIndustriesOpen(false);
    }, [pathname]);

    const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        setMobileMenuOpen(false);
        if (!href.startsWith('/#')) return;
        if (pathname === '/') {
            e.preventDefault();
            const el = document.getElementById(href.slice(2));
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const handleDropdownToggle = (menu: 'services' | 'industries') => {
        setActiveMenu(prev => prev === menu ? null : menu);
    };

    const links = [
        { name: 'About', href: '/#about' },
        { name: 'Services', href: '/services' },
        { name: 'Industries', href: '/industries' },
        { name: 'Results', href: '/#results' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/#contact' }
    ];

    return (
        <>
            <nav
                ref={navRef}
                className={`navbar-float fixed top-0 left-1/2 w-[92vw] lg:w-[56vw] z-[100] rounded-full px-4 lg:px-6 py-3 flex justify-between items-center transition-all duration-500 ${scrolled
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
                    {links.map((link) => {
                        const isDropdownLink = link.name === 'Services' || link.name === 'Industries';
                        const menuKey = link.name.toLowerCase() as 'services' | 'industries';

                        if (isDropdownLink) {
                            return (
                                <button
                                    key={link.name}
                                    onClick={() => handleDropdownToggle(menuKey)}
                                    className={`nav-item px-3 py-2 text-[12px] font-semibold uppercase tracking-wider transition-colors duration-300 flex items-center gap-1 hover:text-[#FF6105] ${activeMenu === menuKey
                                        ? 'text-[#FF6105] nav-item-active'
                                        : scrolled ? 'text-black/50' : 'text-black/70'
                                        }`}
                                >
                                    <span>{link.name}</span>
                                    <motion.span
                                        animate={{ rotate: activeMenu === menuKey ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="inline-block"
                                    >
                                        <ChevronDown size={11} />
                                    </motion.span>
                                </button>
                            );
                        }

                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleHashClick(e, link.href)}
                                className={`nav-item px-3 py-2 text-[12px] font-semibold uppercase tracking-wider hover:text-[#FF6105] transition-colors duration-300 ${scrolled ? 'text-black/50' : 'text-black/70'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
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

            {/* --- DESKTOP MEGAMENU DROPDOWN --- */}
            <AnimatePresence>
                {activeMenu && (
                    <motion.div
                        ref={menuRef}
                        initial={{ opacity: 0, y: -10, x: "-50%" }}
                        animate={{ opacity: 1, y: 0, x: "-50%" }}
                        exit={{ opacity: 0, y: -10, x: "-50%" }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="hidden lg:block fixed top-[84px] left-1/2 w-[56vw] bg-white rounded-3xl border border-black/5 shadow-[0_20px_50px_rgba(0,0,0,0.12)] p-8 text-black z-[101] pointer-events-auto"
                    >
                        <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                            {(activeMenu === 'services' ? servicesList : industriesList).map((item) => {
                                const IconComponent = item.icon;
                                return (
                                    <Link
                                        key={item.title}
                                        href={item.href}
                                        onClick={() => setActiveMenu(null)}
                                        className="group flex gap-4 p-3 rounded-2xl hover:bg-black/[0.015] transition-all duration-300"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-[#FF6105]/5 text-[#FF6105] flex items-center justify-center shrink-0 group-hover:bg-[#FF6105] group-hover:text-white transition-all duration-300 shadow-sm">
                                            <IconComponent size={18} />
                                        </div>
                                        <div>
                                            <h4 className="text-[13px] font-black uppercase tracking-tight text-black group-hover:text-[#FF6105] transition-colors duration-300">
                                                {item.title}
                                            </h4>
                                            <p className="text-[11px] text-black/50 font-medium leading-relaxed mt-1">
                                                {item.description}
                                            </p>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>

                        <div className="flex justify-end mt-6 pt-6 border-t border-black/5">
                            <Link
                                href={activeMenu === 'services' ? '/services' : '/industries'}
                                onClick={() => setActiveMenu(null)}
                                className="px-6 py-3 rounded-2xl bg-[#FF6105]/5 hover:bg-[#FF6105]/10 text-[#FF6105] font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 transition-all hover:gap-3"
                            >
                                {activeMenu === 'services' ? 'Browse All Services' : 'Browse All Fields'}
                                <ArrowRight size={12} />
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

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
                            className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl overflow-y-auto"
                            onClick={(e: React.MouseEvent) => e.stopPropagation()}
                        >
                            <div className="pt-20 px-6 pb-12">
                                <div className="space-y-2">
                                    {links.map((link) => {
                                        const isServices = link.name === 'Services';
                                        const isIndustries = link.name === 'Industries';

                                        if (isServices || isIndustries) {
                                            const isOpen = isServices ? mobileServicesOpen : mobileIndustriesOpen;
                                            const setOpen = isServices ? setMobileServicesOpen : setMobileIndustriesOpen;
                                            const items = isServices ? servicesList : industriesList;
                                            const browseHref = isServices ? '/services' : '/industries';
                                            const browseLabel = isServices ? 'Browse All Services' : 'Browse All Fields';

                                            return (
                                                <div key={link.name} className="border-b border-black/5">
                                                    <button
                                                        onClick={() => setOpen(!isOpen)}
                                                        className="w-full py-3 flex items-center justify-between text-lg font-semibold text-black/85 hover:text-[#FF6105] transition-colors"
                                                    >
                                                        <span>{link.name}</span>
                                                        <motion.div
                                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                                            transition={{ duration: 0.2 }}
                                                        >
                                                            <ChevronDown size={18} className="text-black/40" />
                                                        </motion.div>
                                                    </button>
                                                    <AnimatePresence>
                                                        {isOpen && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: "auto", opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                transition={{ duration: 0.25, ease: "easeInOut" }}
                                                                className="overflow-hidden bg-gray-50/50 rounded-2xl px-2 my-1"
                                                            >
                                                                <div className="py-2 space-y-2">
                                                                    {items.map((item) => {
                                                                        const SubIcon = item.icon;
                                                                        return (
                                                                            <Link
                                                                                key={item.title}
                                                                                href={item.href}
                                                                                onClick={() => setMobileMenuOpen(false)}
                                                                                className="flex items-center gap-3 py-2.5 px-2 text-sm font-bold text-black/75 hover:text-[#FF6105] transition-colors"
                                                                            >
                                                                                <div className="w-8 h-8 rounded-lg bg-[#FF6105]/10 text-[#FF6105] flex items-center justify-center shrink-0 shadow-sm">
                                                                                    <SubIcon size={14} />
                                                                                </div>
                                                                                <span className="truncate">{item.title}</span>
                                                                            </Link>
                                                                        );
                                                                    })}
                                                                    <Link
                                                                        href={browseHref}
                                                                        onClick={() => setMobileMenuOpen(false)}
                                                                        className="flex items-center justify-between py-2.5 px-3 text-xs font-black uppercase tracking-wider text-[#FF6105] bg-[#FF6105]/5 rounded-xl mt-2 hover:bg-[#FF6105]/10 transition-colors"
                                                                    >
                                                                        <span>{browseLabel}</span>
                                                                        <ArrowRight size={12} />
                                                                    </Link>
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            );
                                        }

                                        return (
                                            <Link
                                                key={link.name}
                                                href={link.href}
                                                onClick={(e) => handleHashClick(e, link.href)}
                                                className="block py-3 text-lg font-semibold text-black/80 hover:text-[#FF6105] border-b border-black/5"
                                            >
                                                {link.name}
                                            </Link>
                                        );
                                    })}
                                </div>
                                <Link
                                    href="/#contact"
                                    onClick={(e) => handleHashClick(e, '/#contact')}
                                    className="mt-8 block w-full text-center bg-[#FF6105] text-white py-3.5 rounded-full font-bold text-sm uppercase tracking-widest shadow-md hover:bg-[#e55800] transition-colors"
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

