import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Strategic SEO', href: '#services' },
    { name: 'Performance PPC', href: '#services' },
    { name: 'Email Marketing', href: '#services' },
    { name: 'LinkedIn Strategy', href: '#services' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Case Studies', href: '#services' },
    { name: 'Resources', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#contact' },
    { name: 'Terms of Service', href: '#contact' },
    { name: 'Cookie Policy', href: '#contact' },
  ],
};

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Twitter', href: '#', icon: Twitter },
];

export function Footer() {
  return (
    <footer className="bg-gradient-subtle border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <button 
              onClick={() => {
                const element = document.getElementById('home');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="flex items-center space-x-2 mb-4"
            >
              <div className="text-2xl font-clash font-bold">
                <span className="text-primary">EEG</span>
                <span className="text-foreground">NITE</span>
              </div>
            </button>
            <p className="text-muted-foreground mb-6 font-satoshi luxury-body">
              Strategic digital marketing that drives real growth. We're not just an agency - we're your growth partner.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-clash font-semibold text-foreground mb-4 luxury-h3">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.href.replace('#', ''));
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors font-satoshi"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-clash font-semibold text-foreground mb-4 luxury-h3">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.href.replace('#', ''));
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors font-satoshi"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-clash font-semibold text-foreground mb-4 luxury-h3">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary" />
                <a
                  href="mailto:hello@eegnite.com"
                  className="text-muted-foreground hover:text-primary transition-colors font-satoshi"
                >
                  hello@eegnite.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary" />
                <a
                  href="tel:+1234567890"
                  className="text-muted-foreground hover:text-primary transition-colors font-satoshi"
                >
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-primary" />
                <span className="text-muted-foreground font-satoshi luxury-body">
                  New York, NY
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground font-satoshi text-sm luxury-body">
            © 2024 EEGNITE. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {footerLinks.legal.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  const element = document.getElementById(link.href.replace('#', ''));
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="text-muted-foreground hover:text-primary transition-colors font-satoshi text-sm luxury-body"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}