import { NavBar } from './ui/tubelight-navbar';
import { Home, User, Briefcase, FileText, Phone, TrendingUp } from 'lucide-react';
import { Footer } from './ui/footer-section';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '/about', icon: User },
    { name: 'Services', url: '/services', icon: Briefcase },
    { name: 'Case Studies', url: '/case-studies', icon: TrendingUp },
    { name: 'Resources', url: '/resources', icon: FileText },
    { name: 'Contact', url: '/contact', icon: Phone },
  ];
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar items={navItems} />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
}