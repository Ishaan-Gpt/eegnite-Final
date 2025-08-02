import { motion } from 'framer-motion';
import { Check, ArrowRight, Star, Zap, Target, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import { services } from '@/data/services';
import { ServiceCard } from '@/components/ServiceCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { CTASection } from '@/components/CTASection';
import { ServicesGrid } from '@/components/ServicesGrid';
import { PaymentSimulation } from '@/components/PaymentSimulation';
import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';

const processSteps = [
  {
    step: '01',
    title: 'Growth Audit',
    description: 'Deep dive analysis of your current marketing performance and growth potential'
  },
  {
    step: '02', 
    title: 'Strategy Development',
    description: 'Custom growth roadmap with clear KPIs and milestone targets'
  },
  {
    step: '03',
    title: 'Implementation',
    description: 'Launch optimized campaigns across your highest-impact channels'
  },
  {
    step: '04',
    title: 'Optimization',
    description: 'Continuous testing and refinement to maximize your ROI'
  }
];

const Services = () => {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({ name: '', price: '' });
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterLoading, setNewsletterLoading] = useState(false);
  const [servicesContent, setServicesContent] = useState<{ title: string; description: string }[] | null>(null);

  useEffect(() => {
    fetch('/content.json')
      .then(res => res.json())
      .then(data => setServicesContent(data.services))
      .catch(() => setServicesContent(null));
  }, []);

  const pricingPlans = [
    {
      name: 'Starter Growth',
      price: '$2,500',
      period: '/month',
      description: 'Perfect for businesses just starting their growth journey',
      features: [
        'Growth Audit & Strategy',
        'Basic Campaign Setup',
        'Monthly Performance Reports',
        'Email Support',
        'Up to 2 Marketing Channels'
      ],
      popular: false
    },
    {
      name: 'Accelerator',
      price: '$5,000',
      period: '/month',
      description: 'Our most popular plan for scaling businesses',
      features: [
        'Everything in Starter',
        'Advanced Campaign Optimization',
        'Weekly Performance Reviews',
        'Priority Support',
        'Up to 5 Marketing Channels',
        'A/B Testing & Optimization',
        'Custom Reporting Dashboard'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$12,500',
      period: '/month',
      description: 'For established businesses ready to dominate their market',
      features: [
        'Everything in Accelerator',
        'Dedicated Growth Manager',
        'Daily Performance Monitoring',
        '24/7 Priority Support',
        'Unlimited Marketing Channels',
        'Custom Strategy Development',
        'Competitor Analysis',
        'Advanced Analytics & Insights'
      ],
      popular: false
    }
  ];

  const handleGetStarted = (plan: any) => {
    setSelectedPlan({ name: plan.name, price: plan.price });
    setIsPaymentOpen(true);
  };

  const handleNewsletterSubscribe = async () => {
    setNewsletterLoading(true);
    try {
      // In a real application, you would send this email to your backend
      // For demonstration, we'll just log it or show a success message
      console.log('Subscribing email:', newsletterEmail);
      alert('Thank you for subscribing!');
      setNewsletterEmail(''); // Clear input after successful subscription
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      alert('Failed to subscribe. Please try again.');
    } finally {
      setNewsletterLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Services | EEGNITE</title>
        <meta name="description" content="Explore EEGNITE's full suite of digital marketing, analytics, and growth services." />
        <meta property="og:title" content="Services | EEGNITE" />
        <meta property="og:description" content="Explore EEGNITE's full suite of digital marketing, analytics, and growth services." />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pb-24 bg-gradient-subtle">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl lg:text-6xl font-clash font-bold text-foreground mb-6">
                Growth Services That <span className="text-primary">Actually Work</span>
              </h1>
              <p className="text-xl text-muted-foreground font-satoshi leading-relaxed mb-8">
                Stop throwing money at marketing tactics that don't scale. Get a proven growth system 
                that turns your business into a revenue-generating machine.
              </p>
              <Button asChild className="bg-gradient-orange hover:bg-gradient-orange/90 text-primary-foreground font-clash font-semibold text-lg px-8 py-4">
                <Link to="/contact">
                  Get Your Growth Plan
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Services Grid Section (unified with landing page) */}
        <ServicesGrid services={servicesContent || undefined} />

        {/* Process Section (unified with landing page) */}
        <section className="py-16 lg:py-24 bg-gradient-subtle">
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
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center relative"
                >
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent transform translate-x-4" />
                  )}
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-orange text-primary-foreground flex items-center justify-center font-clash font-bold text-xl mx-auto mb-4 shadow-orange">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-clash font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground font-satoshi leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-5xl font-clash font-bold text-foreground mb-6">
                Investment Options for <span className="text-primary">Every Stage</span>
              </h2>
              <p className="text-lg text-muted-foreground font-satoshi max-w-3xl mx-auto">
                Choose the growth package that matches your business stage and ambitions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-card border border-border rounded-2xl p-8 hover:shadow-elegant transition-shadow duration-300 ${
                    plan.popular ? 'ring-2 ring-primary shadow-orange' : ''
                  }`}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-orange text-primary-foreground font-satoshi">
                      Most Popular
                    </Badge>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-clash font-bold text-foreground mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-muted-foreground font-satoshi mb-4">
                      {plan.description}
                    </p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-clash font-bold text-foreground">
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground font-satoshi ml-1">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center font-satoshi">
                        <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => handleGetStarted(plan)}
                    className={`w-full font-satoshi ${
                      plan.popular
                        ? 'bg-gradient-orange hover:bg-gradient-orange/90 text-primary-foreground'
                        : 'bg-primary hover:bg-primary/90 text-primary-foreground'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Payment Simulation Modal */}
        <PaymentSimulation
          isOpen={isPaymentOpen}
          onClose={() => setIsPaymentOpen(false)}
          planName={selectedPlan.name}
          planPrice={selectedPlan.price}
        />

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

        {/* CTA Section (shared with landing page) */}
        <CTASection />
      </div>
    </>
  );
};

export default Services;