import { motion } from "framer-motion";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import Testimonials from "@/components/ui/testimonials-columns-1";
import { InteractiveTools } from "@/components/InteractiveTools";
import { services } from "@/data/services";
import { EnhancedHero } from "@/components/EnhancedHero";
import { EegniteTimeline } from "@/components/EegniteTimeline";
import { ServicesGrid } from "@/components/ServicesGrid";
import { FeaturesShowcase } from "@/components/FeaturesShowcase";
import { Zap, Target, Users, TrendingUp } from 'lucide-react';
import { TeamSection } from "@/components/TeamSection";
import { Helmet } from "react-helmet-async";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { ContactForm } from '@/components/ContactForm';
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const processSteps = [
  {
    number: "01",
    title: "Discover & Analyze",
    description: "We dive deep into your business, market, and current performance to identify the biggest opportunities for growth."
  },
  {
    number: "02", 
    title: "Strategize & Plan",
    description: "Based on our analysis, we create a custom growth roadmap with clear milestones and measurable outcomes."
  },
  {
    number: "03",
    title: "Execute & Optimize", 
    description: "We implement proven strategies while continuously testing and optimizing for maximum performance."
  },
  {
    number: "04",
    title: "Scale & Grow",
    description: "As results compound, we scale successful campaigns and explore new channels to accelerate your growth."
  }
];

const Index = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterLoading, setNewsletterLoading] = useState(false);
  const [homepageData, setHomepageData] = useState<any>(null);

  useEffect(() => {
    (async () => {
      try {
        // 1. Get the homepage page row
        const { data: page, error: pageError } = await supabase
          .from('pages')
          .select('id')
          .eq('slug', 'home')
          .single();
        if (pageError || !page) throw new Error('No homepage found');

        // 2. Get all sections for this page
        const { data: sections, error: sectionsError } = await supabase
          .from('sections')
          .select('*')
          .eq('page_id', page.id)
          .order('order', { ascending: true });
        if (sectionsError || !sections) throw new Error('No sections found');

        // 3. Get all elements for these sections
        const sectionIds = sections.map((s: any) => s.id);
        const { data: elements, error: elementsError } = await supabase
          .from('elements')
          .select('*')
          .in('section_id', sectionIds)
          .order('order', { ascending: true });
        if (elementsError || !elements) throw new Error('No elements found');

        // 4. Group elements by section_id
        const elementsBySection: Record<string, any[]> = {};
        for (const el of elements) {
          if (!elementsBySection[el.section_id]) elementsBySection[el.section_id] = [];
          elementsBySection[el.section_id].push(el);
        }

        // 5. Assemble homepageData: { [sectionType]: { section, elements } }
        const homepageData: Record<string, any> = {};
        for (const section of sections) {
          homepageData[section.type] = {
            section,
            elements: elementsBySection[section.id] || []
          };
        }

        setHomepageData(homepageData);
      } catch (err) {
        // Fallback to static JSON
        fetch('/home.json')
      .then(res => res.json())
          .then(json => setHomepageData(json))
          .catch(() => setHomepageData(null));
      }
    })();
  }, []);

  const handleNewsletterSubscribe = async () => {
    setNewsletterLoading(true);
    try {
      // In a real application, you would send this email to your backend
      // For demonstration, we'll just log it or show a success message
      console.log("Subscribing email:", newsletterEmail);
      alert(`Thank you for subscribing, ${newsletterEmail}!`);
      setNewsletterEmail(''); // Clear input after successful subscription
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
      alert("Failed to subscribe. Please try again.");
    } finally {
      setNewsletterLoading(false);
    }
  };

  // Get Supabase/editor features
  const realFeatures = homepageData?.features?.elements?.map((el: any) => el.content) || [];
  // Default luxury features (from FeaturesShowcase)
  const defaultFeatures = [
    { title: "Rapid Implementation", description: "Fast-track your success with our agile consulting approach and proven implementation strategies." },
    { title: "Trusted Expertise", description: "Leverage decades of combined experience from industry experts across multiple business domains." },
    { title: "Growth Focused", description: "Every solution is designed to accelerate your business growth and competitive advantage." },
    { title: "Premium Quality", description: "Exceptional service quality with attention to detail that exceeds client expectations consistently." },
    { title: "24/7 Support", description: "Round-the-clock support ensuring your business operations never skip a beat during transformation." },
    { title: "Proven Results", description: "Track record of success with measurable ROI improvements and satisfied clients across industries." },
  ];
  // Fill up to 6 with defaults, avoiding duplicates by title
  const titles = new Set(realFeatures.map(f => f.title));
  const filledFeatures = [
    ...realFeatures,
    ...defaultFeatures.filter(f => !titles.has(f.title)).slice(0, 6 - realFeatures.length)
  ];

  return (
    <>
      <Helmet>
        <title>EEGNITE - Digital Marketing Agency</title>
        <meta name="description" content="Unlock growth with EEGNITE's data-driven digital marketing, strategy, and analytics solutions." />
        <meta property="og:title" content="EEGNITE - Digital Marketing Agency" />
        <meta property="og:description" content="Unlock growth with EEGNITE's data-driven digital marketing, strategy, and analytics solutions." />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="EEGNITE - Digital Marketing Agency" />
        <meta name="twitter:description" content="Unlock growth with EEGNITE's data-driven digital marketing, strategy, and analytics solutions." />
      </Helmet>
      <div className="min-h-screen">
        {/* Enhanced Hero Section */}
        <section id="home">
          {homepageData?.hero && homepageData?.hero.section ? (
            <EnhancedHero
              titleLines={homepageData.hero.section.meta?.titleLines || []}
              subtitle={homepageData.hero.section.subtitle || ""}
              ctaPrimary={homepageData.hero.section.meta?.ctaPrimary || { text: "", link: "" }}
              ctaSecondary={homepageData.hero.section.meta?.ctaSecondary || { text: "", link: "" }}
              stats={homepageData.hero.elements?.map((el: any) => el.content) || []}
            />
          ) : (
          <EnhancedHero
              titleLines={[]}
              subtitle={homepageData?.heroSubtitle || ""}
              ctaPrimary={{ text: homepageData?.ctaText || "", link: "#contact" }}
              ctaSecondary={{ text: "Watch Success Stories", link: "#services" }}
              stats={[]}
          />
          )}
        </section>

        {/* Services Grid Section */}
        <section id="services">
          <ServicesGrid services={homepageData?.services?.elements?.map((el: any) => el.content) || []} />
        </section>

        {/* Process Section */}
        <section id="services" className="py-16 lg:py-24 bg-gradient-subtle">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-5xl font-clash font-bold text-foreground mb-6">
                Our Proven <span className="text-primary">Growth Process</span>
              </h2>
              <p className="text-lg text-muted-foreground font-satoshi max-w-3xl mx-auto">
                A systematic approach to digital marketing that has generated over $50M in revenue for our clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step: any, index: number) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center relative group"
                >
                  {/* Connecting Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent transform translate-x-4 group-hover:from-primary group-hover:to-primary transition-all duration-300" />
                  )}
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-orange text-primary-foreground flex items-center justify-center font-clash font-bold text-xl mx-auto mb-4 shadow-orange group-hover:shadow-orange/50 group-hover:scale-110 transition-all duration-300">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-clash font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground font-satoshi leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Process Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              <div className="text-center p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-clash font-semibold text-foreground mb-2">Data-Driven Decisions</h3>
                <p className="text-muted-foreground font-satoshi text-sm">
                  Every strategy is backed by comprehensive analytics and real-time performance data.
                </p>
              </div>
              
              <div className="text-center p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-clash font-semibold text-foreground mb-2">Continuous Optimization</h3>
                <p className="text-muted-foreground font-satoshi text-sm">
                  We constantly test, measure, and refine campaigns for maximum ROI and performance.
                </p>
              </div>
              
              <div className="text-center p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-clash font-semibold text-foreground mb-2">Dedicated Support</h3>
                <p className="text-muted-foreground font-satoshi text-sm">
                  Your dedicated growth team is always available to answer questions and provide updates.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Showcase */}
        <section id="about">
          <FeaturesShowcase features={filledFeatures} />
        </section>

        {/* Team Section */}
        <section id="team">
          <TeamSection
            members={homepageData?.team?.elements?.filter((el: any) => el.type === 'team_member').map((el: any) => el.content) || []}
            stats={homepageData?.team?.elements?.filter((el: any) => el.type === 'team_stat').map((el: any) => el.content) || []}
          />
        </section>

        {/* Velocity Scroll Section (EEGNITE custom) */}
        <section className="py-24 bg-gradient-to-b from-background to-muted/40 relative">
          <div className="container mx-auto px-4 lg:px-8">
            <VelocityScroll
              text={homepageData?.velocityScroll?.section?.meta?.text || ''}
              default_velocity={0.5}
              className="font-clash text-center text-5xl md:text-8xl font-extrabold tracking-tight bg-gradient-to-r from-[#f5e7c4] via-[#e7cfa0] to-[#ffb347] bg-clip-text text-transparent drop-shadow-xl md:leading-[6rem] leading-[3.5rem] py-8"
            />
          </div>
        </section>

        {/* Company Timeline */}
        <EegniteTimeline />

        {/* Interactive Tools */}
        <InteractiveTools />

        {/* Testimonials */}
        {/* <Testimonials testimonials={
          homepageData?.testimonials?.elements?.map((el: any) => ({
            text: el.content.quote,
            image: el.content.src,
            name: el.content.name,
            role: el.content.designation
          })) || []
        } /> */}

        {/* Contact Form (unified with Contact page) */}
        <ContactForm />

        {/* Newsletter Subscription */}
        <section className="py-16 lg:py-24 bg-gradient-subtle">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center bg-card border border-border rounded-2xl p-12"
            >
              <h2 className="text-3xl lg:text-4xl font-clash font-bold text-foreground mb-4">
                Get Weekly <span className="text-primary">Growth Tips</span>
              </h2>
              <p className="text-lg text-muted-foreground font-satoshi mb-8 max-w-2xl mx-auto">
                Join 5,000+ growth-focused entrepreneurs who receive our weekly newsletter 
                with actionable insights and strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  placeholder="Enter your email"
                  className="flex-1"
                  value={newsletterEmail}
                  onChange={e => setNewsletterEmail(e.target.value)}
                  disabled={newsletterLoading}
                />
                <Button
                  className="bg-gradient-orange hover:bg-gradient-orange/90 text-primary-foreground font-satoshi"
                  onClick={handleNewsletterSubscribe}
                  disabled={newsletterLoading}
                >
                  {newsletterLoading ? 'Subscribing...' : (<><span>Subscribe</span><ArrowRight className="w-4 h-4 ml-2" /></>)}
                </Button>
              </div>
              <p className="text-sm text-muted-foreground font-satoshi mt-4">
                No spam. Unsubscribe at any time.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact">
          <CTASection
            title={homepageData?.cta?.section?.meta?.title || ''}
            subtitle={homepageData?.cta?.section?.meta?.subtitle || ''}
            primaryCTA={homepageData?.cta?.section?.meta?.primaryCTA}
            secondaryCTA={homepageData?.cta?.section?.meta?.secondaryCTA}
            trustIndicators={homepageData?.cta?.elements?.map((el: any) => el.content.text) || []}
          />
        </section>

        {/* Newsletter Subscription (unified with Resources page) */}
        {/* Import and use the same newsletter subscription form/logic as Resources page here */}
        {/* <NewsletterForm /> or inline newsletter code from Resources page */}
      </div>
    </>
  );
};

export default Index;
