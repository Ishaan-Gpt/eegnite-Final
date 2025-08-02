import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'clash': ['Clash Display', 'sans-serif'],
				'satoshi': ['Satoshi', 'sans-serif'],
				'sans': ['Satoshi', 'ui-sans-serif', 'system-ui']
			},
			fontSize: {
				// Luxury EEGNITE font scale
				'xs': ['0.85rem', { lineHeight: '1.5' }], // 13.6px
				'sm': ['1rem', { lineHeight: '1.6' }],    // 16px
				'base': ['1.15rem', { lineHeight: '1.7' }], // 18.4px
				'lg': ['1.35rem', { lineHeight: '1.7' }], // 21.6px
				'xl': ['1.7rem', { lineHeight: '1.2' }],  // 27.2px
				'2xl': ['2.1rem', { lineHeight: '1.15' }], // 33.6px
				'3xl': ['2.7rem', { lineHeight: '1.1' }], // 43.2px
				'4xl': ['3.4rem', { lineHeight: '1.1' }], // 54.4px
				'5xl': ['4.2rem', { lineHeight: '1.05' }], // 67.2px
				'6xl': ['5.2rem', { lineHeight: '1.05' }], // 83.2px
				'7xl': ['6.5rem', { lineHeight: '1' }],   // 104px
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				'eegnite-orange': 'hsl(var(--eegnite-orange))',
				'deep-charcoal': 'hsl(var(--deep-charcoal))',
				'soft-white': 'hsl(var(--soft-white))',
				'warm-beige': 'hsl(var(--warm-beige))'
			},
			backgroundImage: {
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-orange': 'var(--gradient-orange)',
				'gradient-subtle': 'var(--gradient-subtle)'
			},
			boxShadow: {
				'orange': 'var(--shadow-orange)',
				'soft': 'var(--shadow-soft)'
			},
			transitionTimingFunction: {
				'smooth': 'var(--transition-smooth)',
				'bounce': 'var(--transition-bounce)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
