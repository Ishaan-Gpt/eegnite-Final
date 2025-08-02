import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { supabase } from '@/lib/supabaseClient';
import { CheckCircle, Send } from 'lucide-react';

const services = [
  'Performance Marketing',
  'Conversion Optimization',
  'Email Marketing',
  'Social Media Advertising',
  'SEO & Content Marketing',
  'Marketing Automation',
  'Growth Strategy Consulting',
  'Other'
];

const budgetRanges = [
  'Less than $5,000/month',
  '$5,000 - $10,000/month',
  '$10,000 - $25,000/month',
  '$25,000 - $50,000/month',
  '$50,000+/month'
];

const contactSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  company: z.string().min(2, 'Company name is required'),
  website: z.string().url('Invalid URL').optional().or(z.literal('')),
  phone: z.string().optional(),
  service: z.string().min(2, 'Service is required'),
  budget: z.string().min(2, 'Budget is required'),
  message: z.string().min(10, 'Please provide more details'),
  newsletter: z.boolean().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm({
  heading = 'Start Your Growth Journey',
  onSuccess
}: {
  heading?: string;
  onSuccess?: () => void;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      website: '',
      phone: '',
      service: '',
      budget: '',
      message: '',
      newsletter: false,
    },
  });

  // Test function to verify clickability
  const testClickability = (elementName: string) => {
    console.log(`${elementName} clicked successfully`);
    toast({
      title: 'Click Test',
      description: `${elementName} is clickable!`,
    });
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const { error: contactError } = await supabase
        .from('ContactSubmission')
        .insert([
        {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          company: data.company,
          website: data.website,
          phone: data.phone,
          service: data.service,
          budget: data.budget,
          message: data.message,
            newsletter: data.newsletter,
        },
      ]);
      if (contactError) throw new Error(contactError.message || 'Failed to submit contact form. Check your permissions and try again.');
      if (data.newsletter) {
        const { error: newsletterError } = await supabase
          .from('NewsletterSignup')
          .insert([
          {
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
              isActive: true,
          },
        ]);
        if (newsletterError) throw new Error(newsletterError.message || 'Failed to subscribe to newsletter.');
        }
      toast({
        title: 'Message Sent!',
        description: "We'll get back to you within 24 hours.",
      });
      reset();
      setCurrentStep(1);
      if (onSuccess) onSuccess();
    } catch (err) {
      toast({
        title: 'Error',
        description: err instanceof Error ? err.message : 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-subtle relative z-40">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative z-50"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-clash font-bold text-foreground mb-4">
              {heading}
            </h2>
            <p className="text-lg text-muted-foreground font-satoshi">
              Ready to accelerate your growth? Let's discuss your project.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="bg-card border border-border rounded-2xl p-8 lg:p-12 shadow-xl relative z-60" data-interactive="true">
            {/* Progress Steps */}
            <div className="flex items-center justify-center mb-8">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-clash font-semibold transition-all duration-300 border-2 ${
                    step <= currentStep
                      ? 'bg-primary text-white border-primary'
                      : 'bg-muted text-muted-foreground border-border'
                  }`}>
                    {step < currentStep ? <CheckCircle className="w-5 h-5" /> : step}
                  </div>
                  {step < 3 && (
                    <div className={`w-16 h-1 mx-2 rounded-full transition-all duration-300 ${
                      step < currentStep ? 'bg-primary' : 'bg-muted'
                    }`} />
                  )}
                </div>
              ))}
            </div>

            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-clash font-semibold text-foreground mb-6">
                  Personal Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name *
                    </Label>
                    <Input 
                      id="firstName" 
                      {...register('firstName')} 
                      className="w-full h-12 px-4 bg-background border border-border focus:ring-2 focus:ring-primary focus:border-transparent relative z-70"
                      placeholder="Enter your first name"
                      style={{ pointerEvents: 'auto' }}
                      onClick={() => testClickability('First Name Input')}
                      data-interactive="true"
                    />
                    {errors.firstName && (
                      <p className="text-destructive text-sm mt-1">{errors.firstName.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name *
                    </Label>
                    <Input 
                      id="lastName" 
                      {...register('lastName')} 
                      className="w-full h-12 px-4 bg-background border border-border focus:ring-2 focus:ring-primary focus:border-transparent relative z-70"
                      placeholder="Enter your last name"
                      style={{ pointerEvents: 'auto' }}
                      onClick={() => testClickability('Last Name Input')}
                      data-interactive="true"
                    />
                    {errors.lastName && (
                      <p className="text-destructive text-sm mt-1">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </Label>
                  <Input 
                    id="email" 
                    type="email" 
                    {...register('email')} 
                    className="w-full h-12 px-4 bg-background border border-border focus:ring-2 focus:ring-primary focus:border-transparent relative z-70"
                    placeholder="Enter your email address"
                    style={{ pointerEvents: 'auto' }}
                    onClick={() => testClickability('Email Input')}
                    data-interactive="true"
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    {...register('phone')} 
                    className="w-full h-12 px-4 bg-background border border-border focus:ring-2 focus:ring-primary focus:border-transparent relative z-70"
                    placeholder="Enter your phone number"
                    style={{ pointerEvents: 'auto' }}
                    onClick={() => testClickability('Phone Input')}
                    data-interactive="true"
                  />
                </div>
              </motion.div>
            )}

            {/* Step 2: Business Information */}
            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-clash font-semibold text-foreground mb-6">
                  Business Information
                </h3>
                
                <div>
                  <Label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company Name *
                  </Label>
                  <Input 
                    id="company" 
                    {...register('company')} 
                    className="w-full h-12 px-4 bg-background border border-border focus:ring-2 focus:ring-primary focus:border-transparent relative z-70"
                    placeholder="Enter your company name"
                    style={{ pointerEvents: 'auto' }}
                    onClick={() => testClickability('Company Input')}
                    data-interactive="true"
                  />
                  {errors.company && (
                    <p className="text-destructive text-sm mt-1">{errors.company.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="website" className="block text-sm font-medium mb-2">
                    Website URL
                  </Label>
                  <Input 
                    id="website" 
                    {...register('website')} 
                    className="w-full h-12 px-4 bg-background border border-border focus:ring-2 focus:ring-primary focus:border-transparent relative z-70"
                    placeholder="https://yourwebsite.com"
                    style={{ pointerEvents: 'auto' }}
                    onClick={() => testClickability('Website Input')}
                    data-interactive="true"
                  />
                  {errors.website && (
                    <p className="text-destructive text-sm mt-1">{errors.website.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="service" className="block text-sm font-medium mb-2">
                    Service Interest *
                  </Label>
                  <Select value={watch('service')} onValueChange={val => setValue('service', val)}>
                    <SelectTrigger className="w-full h-12 bg-background border border-border focus:ring-2 focus:ring-primary focus:border-transparent relative z-70" style={{ pointerEvents: 'auto' }} onClick={() => testClickability('Service Select')} data-interactive="true">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>{service}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.service && (
                    <p className="text-destructive text-sm mt-1">{errors.service.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="budget" className="block text-sm font-medium mb-2">
                    Monthly Budget Range *
                  </Label>
                  <Select value={watch('budget')} onValueChange={val => setValue('budget', val)}>
                    <SelectTrigger className="w-full h-12 bg-background border border-border focus:ring-2 focus:ring-primary focus:border-transparent relative z-70" style={{ pointerEvents: 'auto' }} onClick={() => testClickability('Budget Select')} data-interactive="true">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      {budgetRanges.map((range) => (
                        <SelectItem key={range} value={range}>{range}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.budget && (
                    <p className="text-destructive text-sm mt-1">{errors.budget.message}</p>
                  )}
                </div>
              </motion.div>
            )}

            {/* Step 3: Project Details */}
            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-clash font-semibold text-foreground mb-6">
                  Tell Us About Your Goals
                </h3>
                
                <div>
                  <Label htmlFor="message" className="block text-sm font-medium mb-2">
                    Project Details *
                  </Label>
                  <Textarea 
                    id="message" 
                    rows={6} 
                    {...register('message')} 
                    className="w-full px-4 py-3 bg-background border border-border focus:ring-2 focus:ring-primary focus:border-transparent resize-none relative z-70"
                    placeholder="Describe your project goals, challenges, and what you hope to achieve..."
                    style={{ pointerEvents: 'auto' }}
                    onClick={() => testClickability('Message Textarea')}
                    data-interactive="true"
                  />
                  {errors.message && (
                    <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>
                
                <div className="flex items-start space-x-3 pt-4">
                  <Checkbox 
                    id="newsletter" 
                    checked={watch('newsletter')} 
                    onCheckedChange={checked => setValue('newsletter', !!checked)}
                    className="mt-1 relative z-70"
                    style={{ pointerEvents: 'auto' }}
                    onClick={() => testClickability('Newsletter Checkbox')}
                    data-interactive="true"
                  />
                  <Label htmlFor="newsletter" className="text-sm text-muted-foreground leading-relaxed">
                    Subscribe to our newsletter for growth tips and industry insights
                  </Label>
                </div>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-8 pt-6 border-t border-border">
              {currentStep > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="px-6 py-3 font-satoshi relative z-80"
                  style={{ pointerEvents: 'auto' }}
                  data-interactive="true"
                >
                  Previous
                </Button>
              )}
              
              {currentStep < 3 ? (
                <Button
                  type="button"
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className="bg-gradient-orange hover:bg-gradient-orange/90 text-primary-foreground font-satoshi px-6 py-3 ml-auto relative z-80"
                  disabled={Object.keys(errors).length > 0}
                  style={{ pointerEvents: 'auto' }}
                  data-interactive="true"
                >
                  Next Step
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-orange hover:bg-gradient-orange/90 text-primary-foreground font-satoshi px-6 py-3 ml-auto relative z-80"
                  style={{ pointerEvents: 'auto' }}
                  data-interactive="true"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
} 