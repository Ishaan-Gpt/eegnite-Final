'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { FacebookIcon, FrameIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from 'lucide-react';
import Ballpit from "./ballpit";

interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
	label: string;
	links: FooterLink[];
}

// --- Update footerLinks and branding for EEGNITE ---
const footerLinks: FooterSection[] = [
	{
		label: 'Solutions',
		links: [
			{ title: 'Growth Strategy', href: '/services' },
			{ title: 'ROI Calculator', href: '/#roi-calculator' },
			{ title: 'Case Studies', href: '/case-studies' },
			{ title: 'Resources', href: '/resources' },
		],
	},
	{
		label: 'Company',
		links: [
			{ title: 'About EEGNITE', href: '/about' },
			{ title: 'Team', href: '/about#team' },
			{ title: 'Contact', href: '/contact' },
			{ title: 'Careers', href: '/careers' },
		],
	},
	{
		label: 'Support',
		links: [
			{ title: 'FAQs', href: '/faqs' },
			{ title: 'Blog', href: '/blog' },
			{ title: 'Downloads', href: '/resources#downloads' },
			{ title: 'Help Center', href: '/help' },
		],
	},
	{
		label: 'Connect',
		links: [
			{ title: 'Facebook', href: 'https://facebook.com/eegnite', icon: FacebookIcon },
			{ title: 'Instagram', href: 'https://instagram.com/eegnite', icon: InstagramIcon },
			{ title: 'Youtube', href: 'https://youtube.com/@eegnite', icon: YoutubeIcon },
			{ title: 'LinkedIn', href: 'https://linkedin.com/company/eegnite', icon: LinkedinIcon },
		],
	},
];

export function Footer() {
	return (
		<footer className="md:rounded-t-6xl relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t bg-[radial-gradient(40%_160px_at_50%_0%,theme(colors.orange.500/10%),transparent)] px-6 py-20 lg:py-28 min-h-[320px]">
			<div className="bg-primary/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />
			<div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
				<AnimatedContainer className="space-y-4">
					<div className="flex items-center space-x-2">
						<img src="/favicon.ico" alt="EEGNITE Logo" className="w-8 h-8 rounded" />
						<span className="text-2xl font-clash font-bold text-primary">EEG</span>
						<span className="text-2xl font-clash font-bold text-foreground">NITE</span>
					</div>
					<p className="text-muted-foreground mt-4 text-sm md:mt-0 max-w-xs">
						Strategic digital marketing and growth consulting. We architect systems that turn your biggest marketing challenges into competitive advantages.
					</p>
					<p className="text-muted-foreground text-xs mt-2">© {new Date().getFullYear()} EEGNITE. All rights reserved.</p>
				</AnimatedContainer>
				<div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
					{footerLinks.map((section, index) => (
						<AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
							<div className="mb-10 md:mb-0">
								<h3 className="text-xs font-bold text-primary mb-2 tracking-wide uppercase">{section.label}</h3>
								<ul className="text-muted-foreground mt-2 space-y-2 text-sm">
									{section.links.map((link) => (
										<li key={link.title}>
											<a
												href={link.href}
												className="hover:text-primary inline-flex items-center transition-all duration-300"
												target={link.href.startsWith('http') ? '_blank' : undefined}
												rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
											>
												{link.icon && <link.icon className="me-1 size-4" />}
												{link.title}
											</a>
										</li>
									))}
								</ul>
							</div>
						</AnimatedContainer>
					))}
				</div>
			</div>
			{/* Ballpit animation at the bottom, seamless with footer */}
			{/* Removed Ballpit animation as per user request */}
		</footer>
	);
};

type ViewAnimationProps = {
	delay?: number;
	className?: ComponentProps<typeof motion.div>['className'];
	children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return children;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
} 