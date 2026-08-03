'use client';
import * as React from 'react';
import {
    FloatingIconsHero,
    type FloatingIconsHeroProps,
} from '@/components/ui/floating-icons-hero-section';

// Define the icons - 6 on mobile, all on desktop, widely placed
const demoIcons: FloatingIconsHeroProps['icons'] = [
    // Mobile visible icons (6) - widely placed around edges
    { id: 1, src: '/images/icons/meta.png', alt: 'Meta Ads', className: 'top-[8%] right-[5%]' },
    { id: 2, src: '/images/icons/google.png', alt: 'Google', className: 'top-[12%] left-[8%]' },
    { id: 3, src: '/images/icons/google-analytics.png', alt: 'Google Analytics', className: 'top-[45%] left-[3%]' },
    { id: 4, src: '/images/icons/hubspot.png', alt: 'HubSpot', className: 'top-[50%] right-[5%]' },
    { id: 5, src: '/images/icons/gtm.png', alt: 'Google Tag Manager', className: 'bottom-[15%] left-[10%]' },
    { id: 6, src: '/images/icons/semrush.png', alt: 'SEMrush', className: 'bottom-[12%] right-[8%]' },

    // Desktop only icons (hidden on mobile)
    { id: 7, src: '/images/icons/klaviyo.png', alt: 'Klaviyo', className: 'top-[5%] left-[35%] hidden md:block' },
    { id: 8, src: '/images/icons/google-ads.png', alt: 'Google Ads', className: 'top-[20%] right-[20%] hidden md:block' },
    { id: 9, src: '/images/icons/figma.png', alt: 'Figma', className: 'top-[25%] left-[15%] hidden md:block' },
    { id: 10, src: '/images/icons/excel.png', alt: 'Excel', className: 'top-[40%] right-[15%] hidden md:block' },
    { id: 11, src: '/images/icons/wordpress.png', alt: 'WordPress', className: 'top-[70%] left-[20%] hidden md:block' },
    { id: 12, src: '/images/icons/powerbi.png', alt: 'Power BI', className: 'top-[65%] right-[25%] hidden md:block' },
    { id: 13, src: '/images/icons/woocommerce.png', alt: 'WooCommerce', className: 'bottom-[10%] left-[35%] hidden md:block' },
    { id: 14, src: '/images/icons/linkedin.png', alt: 'LinkedIn', className: 'top-[35%] left-[5%] hidden md:block' },
    { id: 15, src: '/images/icons/windy.png', alt: 'Windy', className: 'top-[30%] right-[8%] hidden md:block' },
];

export default function FloatingIconsHeroDemo() {
    return (
        <div className="relative overflow-hidden noise">
            <FloatingIconsHero
                title="Your Business Doesn't Just Need Traffic. Your Business Needs Growth."
                subtitle={`EEGNITE is a performance-driven digital marketing agency built for businesses that refuse to settle. We turn clicks into customers, brands into authorities, and strategies into revenue. Whether you need SEO that dominates rankings, PPC that converts, or a website that actually sells , we do it all.
No Fluff. No Excuses. Just Results.`}
                ctaText="Talk to Our Experts"
                ctaHref="#contact"
                icons={demoIcons}
            />
        </div>
    );
}
