import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navigation = [
  { name: 'Home', href: '#home', sectionId: 'home' },
  { name: 'Services', href: '#services', sectionId: 'services' },
  { name: 'About', href: '#about', sectionId: 'about' },
  { name: 'Team', href: '#team', sectionId: 'team' },
  { name: 'Contact', href: '#contact', sectionId: 'contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = navigation.map(item => item.sectionId);
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-lg border-b border-border shadow-soft' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('home')} 
            className="flex items-center space-x-2"
          >
            <img src="/favicon.ico" alt="Logo" className="w-8 h-8 lg:w-10 lg:h-10 rounded" />
            <motion.div
              className="text-2xl lg:text-3xl font-clash font-bold"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span className="text-primary">EEG</span>
              <span className="text-foreground">NITE</span>
            </motion.div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.sectionId)}
                className={`relative font-satoshi font-medium transition-colors hover:text-primary ${
                  activeSection === item.sectionId 
                    ? 'text-primary' 
                    : 'text-muted-foreground'
                }`}
              >
                {item.name}
                {activeSection === item.sectionId && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => scrollToSection('contact')}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden border-t border-border mt-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="py-4 space-y-4">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.sectionId)}
                    className={`block w-full text-left py-2 font-satoshi font-medium transition-colors ${
                      activeSection === item.sectionId 
                        ? 'text-primary' 
                        : 'text-muted-foreground hover:text-primary'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
                <div className="pt-4 border-t border-border">
                  <Button 
                    className="w-full"
                    onClick={() => scrollToSection('contact')}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}