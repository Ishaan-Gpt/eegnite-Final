"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

// --- DATA ---

const services = [
    {
        id: "01",
        title: "Search Engine Optimization (SEO)",
        description: "Rank higher. Drive traffic. Own your niche. Our search optimization agency approach combines technical precision with content authority to put your brand where it belongs- at the top.",
        theme: "orange",
        subCards: [
            {
                title: "Technical SEO",
                items: ["Speed, crawlability, and structure - we fix what holds you back."]
            },
            {
                title: "On-Page Optimization",
                items: ["Copy, headings, metadata - every element fine-tuned to rank."]
            },
            {
                title: "Keyword Research",
                items: ["Target the terms your buyers actually search."]
            },
            {
                title: "Link Building",
                items: ["Authority backlinks that Google trusts."]
            }
        ],
        link: "/services/seo"
    },
    {
        id: "02",
        title: "Social Media Marketing",
        description: "Your audience lives online. We make sure your brand lives there too- loudly, consistently, and with purpose. As a social marketing agency that goes beyond vanity metrics, we build communities that convert.",
        theme: "light",
        subCards: [
            {
                title: "Content Strategy",
                items: ["Stories that stop the scroll and spark engagement."]
            },
            {
                title: "Paid Social Ads",
                items: ["Precision-targeted campaigns on Meta, LinkedIn, and beyond."]
            },
            {
                title: "Influencer Collaborations",
                items: ["Real voices. Real reach. Real ROI."]
            },
            {
                title: "Social Media Management",
                items: ["Consistent presence that builds trust and drives action."]
            }
        ],
        link: "/services/social-media-marketing"
    },
    {
        id: "03",
        title: "PPC Advertising",
        description: "Every rupee, every dollar - accountable. As a data-led PPC advertising agency, we build campaigns that don't just spend budgets; they earn returns.",
        theme: "orange",
        subCards: [
            {
                title: "Google Ads",
                items: ["Search, Shopping, and Display - we run it all with precision."]
            },
            {
                title: "Meta Ads",
                items: ["Facebook and Instagram campaigns engineered for conversion."]
            },
            {
                title: "Conversion Tracking",
                items: ["Know exactly what's working and what's winning."]
            },
            {
                title: "Retargeting Campaigns",
                items: ["Bring back lost visitors. Close the loop. Recover revenue."]
            }
        ],
        link: "/services/ppc"
    },
    {
        id: "04",
        title: "Web Design & Development",
        description: "Your website is your best salesperson. We design it like one. As a web development company that prioritizes conversion, we build sites that are fast, beautiful, and built to perform.",
        theme: "light",
        subCards: [
            {
                title: "UI/UX Design",
                items: ["Intuitive, visually compelling interfaces that delight users."]
            },
            {
                title: "E-commerce Development",
                items: ["Online stores built to sell - not just display."]
            },
            {
                title: "Landing Pages",
                items: ["High-converting pages designed around your goals."]
            },
            {
                title: "CRO-Focused Design",
                items: ["Every pixel placed with purpose. Every layout tested to convert."]
            }
        ],
        link: "/services/web-development"
    },
    {
        id: "05",
        title: "Email Marketing",
        description: "The highest ROI channel in digital marketing - when done right. We build email systems that nurture, convert, and retain. Automatically.",
        theme: "orange",
        subCards: [
            {
                title: "Automation Flows",
                items: ["Sequences that sell while you sleep."]
            },
            {
                title: "Campaign Strategy",
                items: ["From welcome series to re-engagement strategic and smart."]
            },
            {
                title: "CRM Integration",
                items: ["Your email ecosystem synced with your sales pipeline."]
            },
            {
                title: "Lead Nurturing",
                items: ["Move prospects through the funnel with the right message at the right time."]
            }
        ],
        link: "/services/email-marketing"
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
                            <p className="text-sm font-medium leading-relaxed mb-2 px-2 text-black/60">
                                {service.description}
                            </p>
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

                            {service.link.startsWith("/services/") && (
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

    const rawScale = useTransform(scrollYProgress, [0, 0.4], [0.95, 1]);
    const rawOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    const scale = useSpring(rawScale, { stiffness: 100, damping: 30, restDelta: 0.001 });
    const opacity = useSpring(rawOpacity, { stiffness: 100, damping: 30, restDelta: 0.001 });

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
                        {service.link.startsWith("/services/") && (
                            <Link href={service.link} className={`hidden md:flex items-center gap-2 px-6 py-2 rounded-full font-bold uppercase text-xs tracking-widest transition-all hover:scale-105 ${isOrange ? 'bg-white text-[#FF6105]' : 'bg-[#FF6105] text-white'}`}>
                                View Page <ArrowRight size={14} />
                            </Link>
                        )}
                    </div>

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
                        {service.title}
                    </h2>

                    <p className={`text-base lg:text-lg mb-8 max-w-3xl leading-relaxed font-medium ${isOrange ? 'text-white/80' : 'text-black/60'}`}>
                        {service.description}
                    </p>

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

                {service.link.startsWith("/services/") && (
                    <div className="mt-8 md:hidden">
                        <Link href={service.link} className={`flex items-center justify-center w-full gap-3 px-8 py-4 rounded-xl font-bold uppercase tracking-widest transition-all ${isOrange ? 'bg-white text-[#FF6105]' : 'bg-[#FF6105] text-white'}`}>
                            View Service <ArrowRight size={20} />
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

interface ServicesProps {
    title?: React.ReactNode;
    subtitle?: string;
    customDescriptions?: Record<string, string>;
}

export default function Services({ title, subtitle, customDescriptions }: ServicesProps = {}) {
    const modifiedServices = services.map(s => ({
        ...s,
        description: customDescriptions?.[s.id] || s.description
    }));

    return (
        <section className="bg-white py-20 lg:py-40" id="services">
            <div className="max-w-7xl mx-auto px-6 mb-8 lg:mb-16 text-left lg:text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl lg:text-[4.5rem] font-bold uppercase tracking-tighter leading-none text-black"
                >
                    {title || (
                        <>
                            Everything Your Brand <br className="hidden lg:block" /> Needs.{" "}
                            <span className="text-[#FF6105]">Under One Roof</span>
                        </>
                    )}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="mt-6 max-w-xl lg:mx-auto text-sm md:text-lg text-black/50 font-medium tracking-wide"
                >
                    {subtitle || "From search to social, ads to analytics - we are the only digital marketing agency you'll ever need."}
                </motion.p>
            </div>

            {/* Desktop View: Sticky Cards */}
            <div className="relative hidden lg:block">
                {modifiedServices.map((service, index) => (
                    <ServiceCard
                        key={service.id}
                        service={service}
                        index={index}
                        total={modifiedServices.length}
                    />
                ))}
            </div>

            {/* Mobile View: Accordion List */}
            <div className="block lg:hidden px-4">
                <div className="rounded-2xl border border-black/10 overflow-hidden">
                    {modifiedServices.map((service) => (
                        <MobileServiceItem key={service.id} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
}
