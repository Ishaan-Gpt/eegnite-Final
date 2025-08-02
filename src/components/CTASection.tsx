import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  trustIndicators?: string[];
}

export function CTASection({ 
  title = "Ready to Ignite Your Growth?",
  subtitle = "Join 200+ businesses that trust EEGNITE to drive their digital marketing success. Let's build something extraordinary together.",
  primaryCTA = { text: "Get Your Free Strategy Call", href: "/contact" },
  secondaryCTA = { text: "View Case Studies", href: "/case-studies" },
  trustIndicators
}: CTASectionProps) {
  const defaultTrustIndicators = [
    "Free 30-minute strategy session",
    "No long-term contracts required",
    "ROI-focused approach"
  ];
  const displayTrustIndicators = trustIndicators && trustIndicators.length > 0 ? trustIndicators : defaultTrustIndicators;

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-orange opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,88,0,0.1)_0%,transparent_70%)]" />
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-10 left-10 w-4 h-4 bg-primary/30 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-3 h-3 bg-primary/40 rounded-full"
        animate={{
          y: [0, -15, 0],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="luxury-h2 text-3xl lg:text-5xl font-clash font-bold text-foreground mb-6">
            {title}
          </h2>
          
          <p className="luxury-body text-lg lg:text-xl text-muted-foreground font-satoshi leading-relaxed mb-10">
            {subtitle}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
              size="lg" 
              className="bg-gradient-orange hover:shadow-orange transition-all duration-300 group"
              onClick={() => {
                const element = document.getElementById(primaryCTA.href.replace('#', ''));
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              <Calendar className="w-5 h-5" />
              <span>{primaryCTA.text}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                const element = document.getElementById(secondaryCTA.href.replace('#', ''));
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              <MessageCircle className="w-4 h-4" />
              <span>{secondaryCTA.text}</span>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-border"
          >
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-muted-foreground font-satoshi">
              {displayTrustIndicators.map((indicator, index) => (
                <div key={index} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>{indicator}</span>
              </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}