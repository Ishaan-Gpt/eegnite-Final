"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 relative z-10">
                    <div>
                        <div className="flex items-center gap-4 mb-4 opacity-70">
                            <span className="font-bold tracking-widest uppercase">0{service.id} — Service</span>
                        </div>
                        <h2 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter leading-none">
                            {service.title}
                        </h2>
                    </div>
                    <Link href={service.link} className={`hidden md:flex items-center gap-3 px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-all hover:scale-105 ${isOrange ? 'bg-white text-[#FF6105]' : 'bg-[#FF6105] text-white'}`}>
                        Start Project <ArrowRight size={20} />
                    </Link>
                </div>

                {/* Sub-Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                    {service.subCards.map((card, i) => (
                        <div
                            key={i}
                            className={`
                                rounded-3xl p-8 flex flex-col h-full
                                ${isOrange ? 'bg-white/10 backdrop-blur-md border border-white/20' : 'bg-[#FAFAFA] border border-black/5'}
                            `}
                        >
                            {/* Top Accent Line */}
                            <div className={`w-12 h-1.5 rounded-full mb-8 ${isOrange ? 'bg-white' : 'bg-[#FF6105]'}`} />

                            <h3 className={`text-xl font-black uppercase tracking-tight mb-6 ${isOrange ? 'text-white' : 'text-black'}`}>
                                {card.title}
                            </h3>

                            <ul className="space-y-4">
                                {card.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm font-bold">
                                        <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${isOrange ? 'bg-white/60' : 'bg-[#FF6105]'}`} />
                                        <span className={`${isOrange ? 'text-white/80' : 'text-black/60'} leading-relaxed`}>
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Mobile CTA */}
                <div className="mt-8 md:hidden">
                    <Link href={service.link} className={`flex items-center justify-center w-full gap-3 px-8 py-4 rounded-xl font-bold uppercase tracking-widest transition-all ${isOrange ? 'bg-white text-[#FF6105]' : 'bg-[#FF6105] text-white'}`}>
                        Start Project <ArrowRight size={20} />
                    </Link>
                </div>

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
        <section className="bg-[#111] py-20 lg:py-40" id="services">
            <div className="relative">
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.id}
                        service={service}
                        index={index}
                        total={services.length}
                    />
                ))}
            </div>
        </section>
    );
}
