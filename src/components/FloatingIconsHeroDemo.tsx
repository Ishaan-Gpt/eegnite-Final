'use client';
import * as React from 'react';
import {
    FloatingIconsHero,
    type FloatingIconsHeroProps,
} from '@/components/ui/floating-icons-hero-section';

// Define the icons - 6 on mobile, all on desktop, widely placed
const demoIcons: FloatingIconsHeroProps['icons'] = [
    // Mobile visible icons (6) - widely placed around edges
    { id: 1, src: './icons/meta.png', alt: 'Meta Ads', className: 'top-[8%] right-[5%]' },
    { id: 2, src: './icons/google.png', alt: 'Google', className: 'top-[12%] left-[8%]' },
    { id: 3, src: './icons/google-analytics.png', alt: 'Google Analytics', className: 'top-[45%] left-[3%]' },
    { id: 4, src: './icons/hubspot.png', alt: 'HubSpot', className: 'top-[50%] right-[5%]' },
    { id: 5, src: './icons/gtm.png', alt: 'Google Tag Manager', className: 'bottom-[15%] left-[10%]' },
    { id: 6, src: './icons/semrush.png', alt: 'SEMrush', className: 'bottom-[12%] right-[8%]' },

    // Desktop only icons (hidden on mobile)
    { id: 7, src: './icons/klaviyo.png', alt: 'Klaviyo', className: 'top-[5%] left-[35%] hidden md:block' },
    { id: 8, src: './icons/google-ads.png', alt: 'Google Ads', className: 'top-[20%] right-[20%] hidden md:block' },
    { id: 9, src: './icons/figma.png', alt: 'Figma', className: 'top-[25%] left-[15%] hidden md:block' },
    { id: 10, src: './icons/excel.png', alt: 'Excel', className: 'top-[40%] right-[15%] hidden md:block' },
    { id: 11, src: './icons/wordpress.png', alt: 'WordPress', className: 'top-[70%] left-[20%] hidden md:block' },
    { id: 12, src: './icons/powerbi.png', alt: 'Power BI', className: 'top-[65%] right-[25%] hidden md:block' },
    { id: 13, src: './icons/woocommerce.png', alt: 'WooCommerce', className: 'bottom-[10%] left-[35%] hidden md:block' },
    { id: 14, src: './icons/linkedin.png', alt: 'LinkedIn', className: 'top-[35%] left-[5%] hidden md:block' },
    { id: 15, src: './icons/windy.png', alt: 'Windy', className: 'top-[30%] right-[8%] hidden md:block' },
];

export default function FloatingIconsHeroDemo() {
    return (
        <div className="relative overflow-hidden noise">
            <FloatingIconsHero
                title="Strategy. Design. Results."
                subtitle="At EEGNITE, we don't believe in quick fixes, we believe in complete transformation. We turn ideas into growth engines with smart strategy, high-performing design, and measurable impact."
                ctaText="Talk to Our Experts"
                ctaHref="#contact"
                icons={demoIcons}
            />
        </div>
    );
}
