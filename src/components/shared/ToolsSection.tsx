"use client";

interface ToolItem {
    name: string;
    src: string;
}

export function ToolsSection() {
    const tools: ToolItem[] = [
        { name: "Google Analytics", src: "/icons/google-analytics.png" },
        { name: "Google Search Console", src: "/icons/google.png" },
        { name: "SemRush", src: "/icons/semrush.png" },
        { name: "Ahrefs", src: "/icons/ahrefs.png" },
        { name: "Google Ads", src: "/icons/google-ads.png" },
        { name: "Google Tag Manager", src: "/icons/gtm.png" },
        { name: "Meta Ads", src: "/icons/meta.png" },
        { name: "HubSpot", src: "/icons/hubspot.png" },
        { name: "Klaviyo", src: "/icons/klaviyo.png" },
        { name: "Mailchimp", src: "/icons/mailchimp.png" },
        { name: "WordPress", src: "/icons/wordpress.png" },
        { name: "WooCommerce", src: "/icons/woocommerce.png" },
    ];

    return (
        <section className="py-20 md:py-32 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 mb-12 md:mb-16 text-left md:text-center">
                <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-black">
                    Tools We <span className="text-[#FF6105]">Use</span>
                </h2>
            </div>

            <div className="relative flex overflow-hidden group py-10 select-none">
                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 lg:w-60 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 lg:w-60 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

                {[0, 1].map((copy) => (
                    <div key={copy} className="flex animate-loop-scroll gap-12 md:gap-20 pr-12 md:pr-20" aria-hidden={copy === 1}>
                        {[...tools, ...tools].map((tool, index) => (
                            <div key={index} className="flex flex-col items-center justify-center flex-shrink-0">
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#F9F9F9] rounded-2xl flex items-center justify-center p-3 border border-black/5 hover:border-[#FF6105]/20 hover:shadow-lg transition-all">
                                    <img src={tool.src} alt={tool.name} className="w-full h-full object-contain" />
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}
