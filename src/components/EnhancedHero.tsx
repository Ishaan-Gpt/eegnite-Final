import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mockup } from "@/components/ui/mockup";
import { Glow } from "@/components/ui/glow";
import { Floating3D } from "@/components/ui/floating-3d";
import { ArrowRight, Play } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import heroMockup from "@/assets/hero-bg.jpg";

export interface HeroStat {
  value: string;
  label: string;
}
export interface HeroCTA {
  text: string;
  link: string;
}
export interface EnhancedHeroProps {
  titleLines: string[];
  subtitle: string;
  ctaPrimary: HeroCTA;
  ctaSecondary: HeroCTA;
  stats: HeroStat[];
}

// Allow custom element 'spline-viewer' for JSX
// Use declare global with module augmentation for JSX.IntrinsicElements

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { url: string };
    }
  }
}

export function EnhancedHero({
  titleLines = [],
  subtitle = "",
  ctaPrimary,
  ctaSecondary,
  stats = [],
}: EnhancedHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95])

  useEffect(() => {
    // Dynamically add the Spline viewer script if not already present
    if (!document.querySelector('script[src="https://unpkg.com/@splinetool/viewer@1.10.30/build/spline-viewer.js"]')) {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://unpkg.com/@splinetool/viewer@1.10.30/build/spline-viewer.js';
      document.head.appendChild(script);
    }
    // Remove Beam background and script
    const beamDiv = document.querySelector('[data-us-project="6osq2Wmaq9mq6HAxJH0K"]');
    if (beamDiv && beamDiv.parentElement) {
      beamDiv.parentElement.removeChild(beamDiv);
    }
    const beamScript = document.querySelector('script[src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.28/dist/unicornStudio.umd.js"]');
    if (beamScript && beamScript.parentElement) {
      beamScript.parentElement.removeChild(beamScript);
    }
  }, []);

  return (
    <motion.section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#181C24] via-[#10131A] to-[#23283A]"
      style={{ y, opacity, scale }}
    >
      {/* Modern Subtle Glow/Vignette Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Deep black base */}
        <div className="absolute inset-0 bg-black opacity-100" />
        {/* Subtle orange radial semicircle gradient centered at bottom middle */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(255,140,0,0.35)_0%,_rgba(255,140,0,0.18)_40%,_rgba(0,0,0,0.0)_70%)] opacity-90" />
      </div>
      {/* Animated 3D floating shapes for depth (orange tones) */}
      <Floating3D />
      {/* Remove old grid and conic/radial overlays */}

      <div className="relative z-10 container mx-auto px-4 pt-10 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <motion.div 
            className="space-y-5"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Removed Premium Badge */}

            {/* Main Headline with Advanced Typography */}
            <motion.div className="space-y-4">
              <motion.h1 
                className="luxury-h1 text-3xl md:text-5xl lg:text-6xl font-bold leading-[0.85] tracking-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
              >
                {titleLines.length > 0
                  ? titleLines.map((line, idx) => (
                      <span key={idx} className="inline-block bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                        {line}
                      </span>
                    ))
                  : (
                  <>
                    <motion.span 
                      className="inline-block bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      Transform
                    </motion.span>
                    <br />
                    <motion.span 
                      className="inline-block"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      Your Business
                    </motion.span>
                    <br />
                    <motion.span 
                      className="inline-block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      Growth
                    </motion.span>
                  </>
                    )
                }
              </motion.h1>
              
              <motion.p 
                className="luxury-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                {subtitle || 'We deliver proven marketing strategies that generate qualified leads, increase revenue, and scale your business to new heights.'}
              </motion.p>
            </motion.div>

            {/* Social Proof Stats */}
            <motion.div 
              className="flex flex-wrap gap-6 py-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {/* Assuming stat.icon is not directly available here,
                        but the original code had it. For now, we'll keep it
                        as it was in the original file, but it might need
                        adjustment based on the new prop structure. */}
                    {/* <stat.icon className="w-4 h-4 text-primary" /> */}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground luxury-body">{stat.value}</div>
                    <div className="text-xs text-muted-foreground luxury-body">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
            >
              <Glow intensity="lg" color="primary">
              <Button 
                size="lg" 
                className="group relative overflow-hidden px-8 py-4 text-base font-semibold"
                onClick={() => {
                  const element = document.getElementById(ctaPrimary.link.replace('#', ''));
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                <motion.span
                  className="relative z-10 flex items-center gap-2"
                  whileHover={{ x: 2 }}
                >
                  {ctaPrimary.text}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary to-accent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
              </Glow>
              
              <Button 
                variant="outline" 
                size="lg"
                className="group px-8 py-4 text-base font-semibold border-2 hover:border-primary/50"
                onClick={() => {
                  const element = document.getElementById(ctaSecondary.link.replace('#', ''));
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                <Play className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
                {ctaSecondary.text}
              </Button>
            </motion.div>

            {/* Removed Contextual Testimonial with Gestures */}
          </motion.div>

          {/* Right Spline 3D Robot */}
          <motion.div
            className="relative flex items-center justify-center w-full h-full min-h-[400px] bg-transparent -mt-16 translate-y-30 translate-x-25"
            initial={{ opacity: 0, x: 50, rotateY: 15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <spline-viewer 
              url="https://prod.spline.design/xGsyl3mCiHSMITlf/scene.splinecode"
              style={{ width: '100%', height: '65vw', minHeight: 400, maxHeight: 750, maxWidth: '100%', background: 'transparent', border: 'none', boxShadow: 'none' }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-2 bg-primary rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </motion.section>
  )
}