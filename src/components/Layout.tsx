import { NavBar } from './ui/tubelight-navbar';
import { Home, User, Briefcase, Users, Phone } from 'lucide-react';
import { Footer } from './ui/footer-section';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const navItems = [
    { name: 'Home', sectionId: 'home', icon: Home },
    { name: 'Services', sectionId: 'services', icon: Briefcase },
    { name: 'About', sectionId: 'about', icon: User },
    { name: 'Team', sectionId: 'team', icon: Users },
    { name: 'Contact', sectionId: 'contact', icon: Phone },
  ];
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar items={navItems} />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
}