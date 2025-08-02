import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search, Download, Calendar, ArrowRight, BookOpen, Calculator, FileText, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Helmet } from "react-helmet-async";
import { supabase } from '@/lib/supabaseClient';
import { useToast } from '@/hooks/use-toast';

const resourceCategories = [
  { id: 'all', label: 'All Resources', icon: BookOpen },
  { id: 'guides', label: 'Guides & Ebooks', icon: FileText },
  { id: 'tools', label: 'Free Tools', icon: Calculator },
  { id: 'webinars', label: 'Webinars', icon: Video }
];

const resources = [
  {
    id: 1,
    title: 'The Complete Digital Marketing Audit Checklist',
    description: 'A comprehensive 50-point checklist to audit your current marketing performance and identify growth opportunities.',
    category: 'guides',
    type: 'PDF Guide',
    downloadUrl: '/downloads/digital-marketing-audit-checklist.pdf',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
    featured: true,
    readTime: '15 min read'
  },
  {
    id: 2,
    title: 'ROI Calculator for Marketing Campaigns',
    description: 'Calculate the potential return on investment for your marketing campaigns with our advanced calculator.',
    category: 'tools',
    type: 'Interactive Tool',
    downloadUrl: '/downloads/roi-calculator.xlsx',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop',
    featured: true,
    readTime: '5 min use'
  },
  {
    id: 3,
    title: 'Scaling to 7-Figures: A Growth Framework',
    description: 'Learn the exact framework we use to help businesses scale from 6 to 7 figures in revenue.',
    category: 'webinars',
    type: 'Webinar Recording',
    downloadUrl: '/downloads/growth-framework-guide.pdf',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop',
    featured: false,
    readTime: '45 min watch'
  },
  {
    id: 4,
    title: 'Email Marketing Automation Templates',
    description: 'Ready-to-use email templates and automation sequences for different stages of the customer journey.',
    category: 'guides',
    type: 'Template Pack',
    downloadUrl: '/downloads/email-templates.zip',
    image: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=400&h=250&fit=crop',
    featured: false,
    readTime: '10 min setup'
  },
  {
    id: 5,
    title: 'Conversion Rate Optimization Toolkit',
    description: 'Everything you need to optimize your conversion rates, including templates, checklists, and case studies.',
    category: 'tools',
    type: 'Toolkit',
    downloadUrl: '/downloads/conversion-rate-optimization-toolkit.pdf',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=250&fit=crop',
    featured: true,
    readTime: '30 min use'
  },
  {
    id: 6,
    title: 'Social Media Content Calendar Template',
    description: 'Plan and organize your social media content with our comprehensive calendar template.',
    category: 'guides',
    type: 'Spreadsheet',
    downloadUrl: '/downloads/social-media-content-calendar.xlsx',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop',
    featured: false,
    readTime: '5 min setup'
  },
  {
    id: 7,
    title: 'Advanced Facebook Ads Masterclass',
    description: 'Master Facebook advertising with advanced strategies for targeting, creative, and optimization.',
    category: 'webinars',
    type: 'Video Course',
    downloadUrl: '/downloads/facebook-ads-masterclass.pdf',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=400&h=250&fit=crop',
    featured: false,
    readTime: '2 hour watch'
  },
  {
    id: 8,
    title: 'Lead Scoring Model Builder',
    description: 'Build an effective lead scoring model to prioritize your sales efforts and improve conversion rates.',
    category: 'tools',
    type: 'Spreadsheet Tool',
    downloadUrl: '/downloads/lead-scoring-model-builder.xlsx',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop',
    featured: false,
    readTime: '20 min setup'
  }
];

const blogPosts = [
  {
    id: 1,
    title: '10 Growth Hacking Strategies That Actually Work in 2024',
    excerpt: 'Discover the most effective growth hacking strategies that are driving results for businesses this year.',
    author: 'Alex Chen',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Growth Strategy',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop'
  },
  {
    id: 2,
    title: 'How to Build a High-Converting Landing Page in 30 Minutes',
    excerpt: 'A step-by-step guide to creating landing pages that convert visitors into customers.',
    author: 'Sarah Rodriguez',
    date: '2024-01-12',
    readTime: '6 min read',
    category: 'Conversion Optimization',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b332a34f?w=400&h=250&fit=crop'
  },
  {
    id: 3,
    title: 'The Psychology Behind High-Converting Email Campaigns',
    excerpt: 'Learn how to use psychological triggers to create email campaigns that drive action.',
    author: 'Marcus Thompson',
    date: '2024-01-10',
    readTime: '10 min read',
    category: 'Email Marketing',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=250&fit=crop'
  }
];

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterLoading, setNewsletterLoading] = useState(false);
  const [selectedBlogPost, setSelectedBlogPost] = useState<any>(null);
  const [showBlogModal, setShowBlogModal] = useState(false);
  const [selectedType, setSelectedType] = useState('all');
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  const [sortBy, setSortBy] = useState('name');
  const { toast } = useToast();
  
  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    const matchesFeatured = !showFeaturedOnly || resource.featured;
    
    return matchesCategory && matchesSearch && matchesType && matchesFeatured;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.title.localeCompare(b.title);
      case 'type':
        return a.type.localeCompare(b.type);
      case 'readTime':
        return parseInt(a.readTime) - parseInt(b.readTime);
      case 'featured':
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      default:
        return 0;
    }
  });

  const featuredResources = resources.filter(resource => resource.featured);

  // Get unique types for filtering
  const resourceTypes = ['all', ...Array.from(new Set(resources.map(r => r.type)))];

  const handleDownload = (resource: any) => {
    try {
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = resource.downloadUrl;
      link.download = resource.title.replace(/[^a-z0-9]/gi, '_').toLowerCase();
      link.target = '_blank';
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Show success toast
      toast({
        title: 'Download Started!',
        description: `${resource.title} is being downloaded.`,
      });
    } catch (error) {
      // Show error toast
      toast({
        title: 'Download Error',
        description: 'There was an issue downloading the file. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const handleReadBlogPost = (post: any) => {
    setSelectedBlogPost(post);
    setShowBlogModal(true);
  };

  const handleCloseBlogModal = () => {
    setShowBlogModal(false);
    setSelectedBlogPost(null);
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSearchTerm('');
    setSelectedType('all');
    setShowFeaturedOnly(false);
    setSortBy('name');
  };

  const handleNewsletterSubscribe = async () => {
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      toast({
        title: 'Invalid Email',
        description: 'Please enter a valid email address.',
        variant: 'destructive',
      });
      return;
    }
    setNewsletterLoading(true);
    try {
      const { error } = await supabase.from('NewsletterSignup').insert([
        { email: newsletterEmail }
      ]);
      if (error && !error.message.includes('duplicate key')) {
        toast({
          title: 'Newsletter Error',
          description: error.message,
          variant: 'destructive',
        });
      } else if (!error) {
        toast({
          title: 'Subscribed!',
          description: "You've been added to our newsletter.",
        });
        setNewsletterEmail('');
      }
    } catch (err) {
      toast({
        title: 'Error',
        description: err instanceof Error ? err.message : 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setNewsletterLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Resources | EEGNITE</title>
        <meta name="description" content="Download free digital marketing resources, guides, and tools from EEGNITE." />
        <meta property="og:title" content="Resources | EEGNITE" />
        <meta property="og:description" content="Download free digital marketing resources, guides, and tools from EEGNITE." />
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
                Free Growth <span className="text-primary">Resources</span>
              </h1>
              <p className="text-xl text-muted-foreground font-satoshi leading-relaxed mb-8">
                Access our library of proven templates, tools, and guides that have helped 
                hundreds of businesses accelerate their growth.
              </p>
              
              {/* Search */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 py-3 text-lg"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Resources */}
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
                Most <span className="text-primary">Popular Resources</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredResources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-elegant transition-shadow duration-300"
                >
                  <img 
                    src={resource.image} 
                    alt={resource.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="font-satoshi">
                        {resource.type}
                      </Badge>
                      <Badge className="bg-gradient-orange text-primary-foreground font-satoshi">
                        Popular
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-clash font-bold text-foreground mb-3">
                      {resource.title}
                    </h3>
                    
                    <p className="text-muted-foreground font-satoshi mb-4 line-clamp-3">
                      {resource.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground font-satoshi">
                        {resource.readTime}
                      </span>
                      <Button className="bg-gradient-orange hover:bg-gradient-orange/90 text-primary-foreground font-satoshi" onClick={() => handleDownload(resource)}>
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All Resources */}
        <section className="py-16 lg:py-24 bg-gradient-subtle">
          <div className="container mx-auto px-4 lg:px-8">
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-16">
                {resourceCategories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <TabsTrigger 
                      key={category.id} 
                      value={category.id}
                      className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                    >
                      <IconComponent className="w-4 h-4 mr-2" />
                      {category.label}
                    </TabsTrigger>
                  );
                })}
              </TabsList>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredResources.map((resource, index) => (
                  <motion.div
                    key={resource.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-elegant transition-shadow duration-300"
                  >
                    <img 
                      src={resource.image} 
                      alt={resource.title}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary" className="font-satoshi">
                          {resource.type}
                        </Badge>
                        {resource.featured && (
                          <Badge className="bg-gradient-orange text-primary-foreground font-satoshi">
                            Popular
                          </Badge>
                        )}
                      </div>
                      
                      <h3 className="text-lg font-clash font-bold text-foreground mb-3">
                        {resource.title}
                      </h3>
                      
                      <p className="text-muted-foreground font-satoshi mb-4 line-clamp-2">
                        {resource.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground font-satoshi">
                          {resource.readTime}
                        </span>
                        <Button variant="outline" className="font-satoshi" onClick={() => handleDownload(resource)}>
                          <Download className="w-4 h-4 mr-2" />
                          Get Free
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Tabs>
          </div>
        </section>

        {/* Blog Section */}
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
                Latest <span className="text-primary">Growth Insights</span>
              </h2>
              <p className="text-lg text-muted-foreground font-satoshi max-w-3xl mx-auto">
                Stay up-to-date with the latest growth strategies, tactics, and industry insights.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-elegant transition-shadow duration-300"
                >
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <Badge variant="secondary" className="font-satoshi mb-3">
                      {post.category}
                    </Badge>
                    
                    <h3 className="text-xl font-clash font-bold text-foreground mb-3">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground font-satoshi mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground font-satoshi">
                      <div className="flex items-center gap-2">
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <Button variant="ghost" className="w-full mt-4 font-satoshi" onClick={() => handleReadBlogPost(post)}>
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
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
      </div>

      {/* Blog Post Modal */}
      {showBlogModal && selectedBlogPost && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-card border border-border rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <Badge variant="secondary" className="font-satoshi">
                  {selectedBlogPost.category}
                </Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCloseBlogModal}
                  className="text-muted-foreground hover:text-foreground"
                >
                  ✕
                </Button>
              </div>
              
              <h2 className="text-2xl lg:text-3xl font-clash font-bold text-foreground mb-4">
                {selectedBlogPost.title}
              </h2>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground font-satoshi mb-6">
                <span>{selectedBlogPost.author}</span>
                <span>•</span>
                <span>{new Date(selectedBlogPost.date).toLocaleDateString()}</span>
                <span>•</span>
                <span>{selectedBlogPost.readTime}</span>
              </div>
              
              <img 
                src={selectedBlogPost.image} 
                alt={selectedBlogPost.title}
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground font-satoshi leading-relaxed mb-4">
                  {selectedBlogPost.excerpt}
                </p>
                
                <div className="space-y-4 text-muted-foreground font-satoshi">
                  <p>
                    This is a comprehensive article about {selectedBlogPost.title.toLowerCase()}. 
                    In this detailed guide, we'll explore the key strategies and tactics that can help 
                    businesses achieve significant growth and improve their marketing performance.
                  </p>
                  
                  <h3 className="text-xl font-clash font-semibold text-foreground mt-8 mb-4">
                    Key Takeaways
                  </h3>
                  
                  <ul className="list-disc list-inside space-y-2">
                    <li>Understanding the fundamentals of {selectedBlogPost.category.toLowerCase()}</li>
                    <li>Implementing proven strategies for better results</li>
                    <li>Measuring and optimizing your performance</li>
                    <li>Scaling successful campaigns effectively</li>
                  </ul>
                  
                  <p className="mt-6">
                    Ready to take your {selectedBlogPost.category.toLowerCase()} to the next level? 
                    Contact our team of experts to discuss how we can help you implement these strategies 
                    and achieve your growth goals.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 mt-8 pt-6 border-t border-border">
                <Button 
                  className="bg-gradient-orange hover:bg-gradient-orange/90 text-primary-foreground font-satoshi"
                  onClick={() => {
                    handleCloseBlogModal();
                    // Scroll to contact form or navigate to contact page
                    window.location.href = '/contact';
                  }}
                >
                  Get Started Today
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  className="font-satoshi"
                  onClick={handleCloseBlogModal}
                >
                  Close
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Resources;