'use client';
import * as React from 'react';
import {
    FloatingIconsHero,
    type FloatingIconsHeroProps,
} from '@/components/ui/floating-icons-hero-section';

// Define exactly 6 floating icons safely positioned around outer edges to prevent text collision on all screen sizes
const demoIcons: FloatingIconsHeroProps['icons'] = [
    { id: 1, src: '/images/icons/google.png', alt: 'Google', className: 'top-[10%] left-[5%] md:left-[7%]' },
    { id: 2, src: '/images/icons/meta.png', alt: 'Meta Ads', className: 'top-[10%] right-[5%] md:right-[7%]' },
    { id: 3, src: '/images/icons/google-analytics.png', alt: 'Google Analytics', className: 'top-[46%] left-[2%] md:left-[4%]' },
    { id: 4, src: '/images/icons/hubspot.png', alt: 'HubSpot', className: 'top-[46%] right-[2%] md:right-[4%]' },
    { id: 5, src: '/images/icons/gtm.png', alt: 'Google Tag Manager', className: 'bottom-[12%] left-[6%] md:left-[8%]' },
    { id: 6, src: '/images/icons/semrush.png', alt: 'SEMrush', className: 'bottom-[12%] right-[6%] md:right-[8%]' },
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
