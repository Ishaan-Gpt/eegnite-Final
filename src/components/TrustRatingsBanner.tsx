"use client";

import { motion } from "framer-motion";

export default function TrustRatingsBanner() {
    const ratings = [
        {
            name: "LinkedIn",
            logo: (
                <img 
                    src="/icons/linkedin.png" 
                    alt="LinkedIn" 
                    className="w-7 h-7 object-contain" 
                />
            ),
            stars: 5,
            href: "https://www.linkedin.com/services/page/680aab33391bb15b42/",
            ariaLabel: "Visit our LinkedIn profile",
        },
        {
            name: "Trustpilot",
            logo: (
                <img 
                    src="/icons/trustpilot.png" 
                    alt="Trustpilot" 
                    className="w-7 h-7 object-contain" 
                />
            ),
            stars: 5,
            href: "https://www.trustpilot.com/review/eegnite.com",
            ariaLabel: "Read our reviews on Trustpilot profile",
        },
        {
            name: "GBP",
            logo: (
                <img 
                    src="/icons/gmb.webp" 
                    alt="Google Business Profile" 
                    className="w-7 h-7 object-contain" 
                />
            ),
            stars: 5,
            href: "https://search.google.com/local/reviews?placeid=ChIJ_yA5Hj5x-0ARt4Eg33jURBU",
            ariaLabel: "Read our reviews on Google Business",
        },
    ];

    const StarRow = () => (
        <div className="flex gap-0.5 justify-center mt-1.5">
            {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
            ))}
        </div>
    );

    return (
        <div className="w-full">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#FF6105] p-6 md:p-8 lg:p-10 shadow-[0_20px_50px_rgba(255,97,5,0.2)]">
                {/* Visual texture overlay */}
                <div 
                    className="absolute inset-0 opacity-[0.08]" 
                    style={{ 
                        backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`, 
                        backgroundSize: '40px 40px' 
                     }} 
                />
                <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />

                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
                    
                    {/* Left: Text Description */}
                    <div className="w-full lg:w-[52%] text-center lg:text-left">
                        <h3 
                            className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white uppercase tracking-tight leading-tight text-balance"
                            style={{ textWrap: 'balance' }}
                        >
                            Trusted Digital Marketing Agency <br className="hidden md:block" />
                            Across Leading Platforms
                        </h3>
                    </div>

                    {/* Middle: Divider Line */}
                    <div className="hidden lg:block w-[1px] h-16 bg-white/20 self-center" />

                    {/* Right: Ratings Grid */}
                    <div className="w-full lg:w-[45%] grid grid-cols-3 gap-4 md:gap-8 justify-items-center">
                        {ratings.map((rating, idx) => (
                            <a
                                key={rating.name}
                                href={rating.href}
                                target="_blank"
                                rel="noopener"
                                aria-label={rating.ariaLabel}
                                className="group flex flex-col items-center justify-center p-2 rounded-2xl transition-all duration-300 hover:scale-105 hover:bg-white/5 w-full text-center"
                            >
                                <motion.div 
                                    className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md group-hover:bg-white/90 transition-colors duration-300"
                                    whileHover={{ rotate: [0, -5, 5, 0] }}
                                    transition={{ duration: 0.4 }}
                                >
                                    {rating.logo}
                                </motion.div>
                                <StarRow />
                            </a>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}
