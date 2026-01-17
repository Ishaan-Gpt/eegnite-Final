"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

// --- DATA ---

const services = [
    {
        id: "01",
        title: "SEO SERVICES",
        theme: "orange", // Orange background, White text
        subCards: [
            {
                title: "TECHNICAL SEO",
                items: ["Site speed optimization", "Mobile responsiveness", "XML sitemaps & robots.txt", "Schema markup", "Crawlability fixes"]
            },
            {
                title: "ON-PAGE SEO",
                items: ["Keyword research", "Content optimization", "Internal linking", "Image optimization", "URL structure"]
            },
            {
                title: "OFF-PAGE SEO",
                items: ["Backlink acquisition", "Guest posting", "Local citations", "Brand monitoring", "Competitor analysis"]
            },
            {
                title: "LOCAL SEO",
                items: ["Google Business Profile", "Local keywords", "Review management", "Local link building", "NAP consistency"]
            }
        ],
        link: "/services/seo"
    },
    {
        id: "02",
        title: "EMAIL MARKETING",
        theme: "light", // White background, Black text
        subCards: [
            {
                title: "STRATEGY",
                items: ["Audience segmentation", "Campaign calendar", "A/B testing", "Email funnel design", "Automation setup"]
            },
            {
                title: "DESIGN & CONTENT",
                items: ["Responsive templates", "Compelling copy", "Visual branding", "Dynamic content", "Subject line optimization"]
            },
            {
                title: "AUTOMATION",
                items: ["Drip campaigns", "Abandoned cart recovery", "Re-engagement flows", "Behavioral triggers", "Lead scoring"]
            },
            {
                title: "ANALYTICS",
                items: ["Open & click tracking", "ROI analysis", "List health monitoring", "Deliverability optimization", "Performance reporting"]
            }
        ],
        link: "/services/email-marketing"
    },
    {
        id: "03",
        title: "PPC ADVERTISING",
        theme: "orange",
        subCards: [
            {
                title: "SEARCH ADS",
                items: ["Keyword bidding strategy", "Ad copy testing", "Quality score optimization", "Negative keyword management", "Competitor conquesting"]
            },
            {
                title: "SOCIAL ADS",
                items: ["Creative strategy", "Audience targeting", "Retargeting pools", "Pixel installation", "Influencer integration"]
            },
            {
                title: "SHOPPING",
                items: ["Feed management", "Product optimization", "Bid adjustments", "Merchant Center setup", "Visual asset optimization"]
            },
            {
                title: "DISPLAY & VIDEO",
                items: ["Banner design", "Placement targeting", "Remarketing campaigns", "Brand awareness", "YouTube ad formats"]
            }
        ],
        link: "/services/ppc"
    },
    {
        id: "04",
        title: "E-COMMERCE",
        theme: "light",
        subCards: [
            {
                title: "DEVELOPMENT",
                items: ["Shopify/WooCommerce", "Custom features", "Speed optimization", "Mobile UX design", "Theme customization"]
            },
            {
                title: "CRO",
                items: ["A/B testing", "Checkout flow optimization", "Cart abandonment", "User behavior analysis", "Heatmap tracking"]
            },
            {
                title: "GROWTH",
                items: ["SEO for Ecommerce", "Paid funnel architecture", "Email retention", "Loyalty programs", "Lifetime value opt."]
            },
            {
                title: "OPERATIONS",
                items: ["Inventory sync", "Payment gateways", "Shipping integration", "Analytics setup", "CRM integration"]
            }
        ],
        link: "/services/ecommerce"
    }
];

// --- COMPONENTS ---

const MobileServiceItem = ({ service }: { service: typeof services[0] }) => {
    const [isOpen, setIsOpen] = useState(false);
    const isOrange = service.theme === "orange";

    return (
        <div className="border-b border-black/10 last:border-none">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full text-left py-6 px-4 flex items-center justify-between transition-colors ${isOpen && isOrange ? 'bg-[#FF6105] text-white' : ''} ${isOpen && !isOrange ? 'bg-black/5' : ''}`}
            >
                <div className="flex flex-col">
                    <span className={`text-xs font-bold tracking-[0.2em] mb-2 ${isOpen && isOrange ? 'text-white/70' : 'text-black/40'}`}>
                        0{service.id} — SERVICE
                    </span>
                    <h3 className={`text-2xl font-black uppercase tracking-tighter ${isOpen && isOrange ? 'text-white' : 'text-black'}`}>
                        {service.title}
                    </h3>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <ChevronDown className={`${isOpen && isOrange ? 'text-white' : 'text-black'}`} />
                </motion.div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className={`p-4 pb-8 grid gap-6 ${isOrange ? 'bg-orange-50' : 'bg-gray-50'}`}>
                            {service.subCards.map((card, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-xl border border-black/5 shadow-sm">
                                    <h4 className="text-[#FF6105] font-black uppercase tracking-tight mb-3 text-lg">
                                        {card.title}
                                    </h4>
                                    <ul className="space-y-2">
                                        {card.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-black/70 font-medium">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#FF6105] mt-1.5 shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

                            {/* Service Link - Only for SEO */}
                            {service.link === "/services/seo" && (
                                <Link
                                    href={service.link}
                                    className="flex items-center justify-center w-full gap-2 py-3 bg-[#FF6105] text-white rounded-lg font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-opacity"
                                >
                                    View Service <ArrowRight size={16} />
                                </Link>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const ServiceCard = ({ service, index, total }: { service: typeof services[0], index: number, total: number }) => {
    const isOrange = service.theme === "orange";
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "start start", "end end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

    return (
        <div ref={containerRef} className="sticky top-0 min-h-screen py-12 flex items-center justify-center">
            <motion.div
                style={{ scale, opacity }}
                className={`
                    w-full max-w-[95vw] lg:max-w-7xl rounded-[2.5rem] p-8 lg:p-16 relative overflow-hidden flex flex-col justify-between shadow-2xl border border-black/5
                    ${isOrange ? 'bg-[#FF6105] text-white' : 'bg-white text-black'}
                `}
            >
                {/* Header Section */}
                <div className="flex flex-col mb-12 relative z-10 w-full">
                    <div className="flex items-center justify-between w-full mb-6">
                        <div className="flex items-center gap-4 opacity-70">
                            <span className="font-bold tracking-[0.2em] uppercase text-sm">0{service.id} — Service</span>
                        </div>
                        {/* Desktop CTA - Only show for SEO page */}
                        {service.link === "/services/seo" && (
                            <Link href={service.link} className={`hidden md:flex items-center gap-2 px-6 py-2 rounded-full font-bold uppercase text-xs tracking-widest transition-all hover:scale-105 ${isOrange ? 'bg-white text-[#FF6105]' : 'bg-[#FF6105] text-white'}`}>
                                View Page <ArrowRight size={14} />
                            </Link>
                        )}
                    </div>

                    <h2 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter leading-none mb-10">
                        {service.title}
                    </h2>

                    {/* Separator Line */}
                    <div className={`w-full h-px ${isOrange ? 'bg-white/20' : 'bg-black/10'}`} />
                </div>

                {/* Sub-Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 h-full">
                    {service.subCards.map((card, i) => (
                        <div
                            key={i}
                            className={`
                                rounded-2xl p-8 flex flex-col justify-start h-full
                                ${isOrange
                                    ? 'bg-white/10 border border-white/10'
                                    : 'bg-white border border-black/[0.05] shadow-[0_10px_30px_rgba(0,0,0,0.03)]'
                                }
                            `}
                        >
                            {/* Top Accent Line */}
                            <div className={`w-8 h-1 rounded-full mb-6 ${isOrange ? 'bg-white' : 'bg-[#FF6105]'}`} />

                            <h3 className={`text-xl font-black uppercase tracking-tight mb-4 ${isOrange ? 'text-white' : 'text-[#FF6105]'}`}>
                                {card.title}
                            </h3>

                            <ul className="space-y-3">
                                {card.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm font-bold">
                                        <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${isOrange ? 'bg-white' : 'bg-[#FF6105]'}`} />
                                        <span className={`${isOrange ? 'text-white/90' : 'text-black/60'} leading-relaxed`}>
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Mobile CTA - Only show for SEO page */}
                {service.link === "/services/seo" && (
                    <div className="mt-8 md:hidden">
                        <Link href={service.link} className={`flex items-center justify-center w-full gap-3 px-8 py-4 rounded-xl font-bold uppercase tracking-widest transition-all ${isOrange ? 'bg-white text-[#FF6105]' : 'bg-[#FF6105] text-white'}`}>
                            Start Project <ArrowRight size={20} />
                        </Link>
                    </div>
                )}

                {/* Background Decoration */}
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                    <span className="text-[15rem] leading-none font-black">{service.id}</span>
                </div>
            </motion.div>
        </div>
    );
};

export default function Services() {
    return (
        <section className="bg-white py-20 lg:py-40" id="services">
            <div className="max-w-7xl mx-auto px-6 mb-12 lg:mb-32 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-6xl lg:text-[8rem] font-black uppercase tracking-tighter leading-none text-black"
                >
                    Our <span className="text-[#FF6105]">Services</span>
                </motion.h2>
            </div>

            {/* Desktop View: Sticky Cards */}
            <div className="relative hidden lg:block">
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.id}
                        service={service}
                        index={index}
                        total={services.length}
                    />
                ))}
            </div>

            {/* Mobile View: Accordion List */}
            <div className="block lg:hidden px-4">
                <div className="rounded-2xl border border-black/10 overflow-hidden">
                    {services.map((service) => (
                        <MobileServiceItem key={service.id} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
}
