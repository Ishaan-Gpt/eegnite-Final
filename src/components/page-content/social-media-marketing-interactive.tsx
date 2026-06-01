"use client";

import React from "react";
import { ServiceHero } from "@/components/shared/ServiceHero";
import { ServiceComparison } from "@/components/shared/ServiceComparison";
import { FullServiceGrid } from "@/components/shared/FullServiceGrid";
import { ServiceProcess } from "@/components/shared/ServiceProcess";
import { ServiceTimeline } from "@/components/shared/ServiceTimeline";
import { WhyChooseUs } from "@/components/shared/WhyChooseUs";
import {
    SOCIAL_MEDIA_SERVICES,
    SOCIAL_MEDIA_PROCESS_STEPS,
    SOCIAL_MEDIA_TIMELINE_STEPS,
    SOCIAL_MEDIA_CHOOSE_REASONS,
} from "@/data/social-media-marketing.data";

export function SocialMediaHero() {
    return (
        <ServiceHero
            badgeText="Businesses Using Paid Social See Average ROI Of 250%+"
            title={<>SOCIAL MEDIA MARKETING<br />SERVICES THAT DRIVE REAL GROWTH</>}
            titleClassName="text-[5.8vw] xs:text-2xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.1]"
            subtitle="GROW YOUR AUDIENCE. CONVERT YOUR FOLLOWERS."
            subtitleClassName="text-[3vw] xs:text-[10px] sm:text-xs md:text-xl lg:text-2xl"
            description={
                <>
                    At EEGNITE, <span className="text-[#FF6105] font-semibold">every post, every campaign, every creative</span> has one job — “GROW YOUR BUSINESS”. We turn social channels into revenue engines. Not someday. <span className="text-[#FF6105] font-semibold">From day one.</span> From content strategy and paid social ads to community management — we cover every angle of social. Done right. Done consistently. Done to convert.
                </>
            }
        />
    );
}

export function SocialMediaComparison() {
    return (
        <ServiceComparison
            title={<>WHY <span className="text-[#FF6105]">EEGNITE?</span></>}
            description={
                <>
                    Most brands have social media. Few have social media that works. The difference is not the platform. It is the <span className="text-[#FF6105] font-semibold">strategy behind it.</span> Businesses across India, the US, Europe, and the Middle East choose EEGNITE because we do not just manage social pages. We build social ecosystems that <span className="text-[#FF6105] font-semibold">attract, engage, and convert.</span> Every campaign is data-backed, goal-aligned, and built to deliver returns you can actually measure. Not just likes. Real business growth.
                </>
            }
            firstSolutionTitle="EEGNITE SMM SOLUTIONS"
            firstSolutionItems={[
                {
                    title: "Audience-First Strategy. Built Around Your Customers.",
                    desc: "We map your buyer before we plan a single post. Every piece of content has a purpose: speak to the right person, at the right moment, on the right platform."
                },
                {
                    title: "Creative That Converts. Designed To Drive Action.",
                    desc: "Stop-the-scroll content built to communicate your value in seconds and push your audience to act. Beauty with a business brain. Always."
                },
                {
                    title: "Transparent ROI Reporting. Clear Results, No Guesswork.",
                    desc: "Weekly visibility. Monthly performance reviews. Clear next steps. We connect your social activity to your revenue. No jargon. No excuses. Just proof."
                }
            ]}
            secondSolutionTitle="TRADITIONAL SMM AGENCY"
            secondSolutionItems={[
                {
                    title: "Generic Content Calendars. No Room For Originality.",
                    desc: "Same posts, same formats, same results. Agencies fill calendars with content that looks busy but drives nothing. Activity reported. Growth nowhere."
                },
                {
                    title: "Vanity Metric Reporting. Numbers Without Impact.",
                    desc: "Impressions and reach dressed up as wins. No connection to your leads, your sales, or your growth. Numbers that look good in a slide and mean nothing for your business."
                },
                {
                    title: "One-Size Strategy. Not Built For Your Brand.",
                    desc: "The same social playbook applied to every client, every industry, every market. Your brand is not generic. Your strategy should not be either."
                }
            ]}
        />
    );
}

export function FullServiceSocialMedia() {
    return (
        <FullServiceGrid
            badgeText="Brands With Consistent Social Presence See 23% Higher Revenue"
            title={<>RESULTS-DRIVEN SOCIAL MEDIA MARKETING. <span className="text-[#FF6105]">FOCUSED ON BRAND GROWTH</span></>}
            description="Our social media services go beyond growing a following. We build brand authority, drive qualified traffic, and generate a consistent lead pipeline through strategically managed social channels."
            services={SOCIAL_MEDIA_SERVICES}
        />
    );
}

export function SocialMediaProcess() {
    return (
        <ServiceProcess
            title={<>OUR ROI-DRIVEN <span className="text-[#FF6105]">GROWTH FRAMEWORK</span></>}
            steps={SOCIAL_MEDIA_PROCESS_STEPS}
        />
    );
}

export function SocialMediaTimelineSection() {
    return (
        <ServiceTimeline
            title={<>HOW EEGNITE BECOMES A <span className="text-[#FF6105]">STRONG SOCIAL MEDIA MARKETING PARTNER</span> FOR YOUR BUSINESS</>}
            steps={SOCIAL_MEDIA_TIMELINE_STEPS}
            ctaTitle="Talk to Us"
            ctaDescription="Get a free social media presence audit and advertising breakdown to find hidden organic and paid opportunities."
            ctaButtonText="Book Social Audit"
        />
    );
}

export function WhyChooseSocialMedia() {
    return (
        <WhyChooseUs
            title={<>Why <span className="text-[#FF6105]">Businesses</span> Choose Us</>}
            reasons={SOCIAL_MEDIA_CHOOSE_REASONS}
        />
    );
}
