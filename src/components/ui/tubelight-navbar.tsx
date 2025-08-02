import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function NavBar({ items, className }: NavBarProps) {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(items[0].name);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Set active tab based on current route
    const current = items.find(item => location.pathname === item.url);
    if (current) setActiveTab(current.name);
  }, [location.pathname, items]);

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-40 mb-6 sm:pt-6",
        className,
      )}
    >
      <div className="flex items-center gap-2 bg-white/5 border border-white/30 backdrop-blur-3xl py-1 px-2 rounded-full shadow-2xl scale-90" style={{boxShadow: '0 8px 32px 0 rgba(31,38,135,0.25), 0 1.5px 8px 0 rgba(255,255,255,0.10)'}}>
        {/* EEGNITE Logo */}
        <Link to="/" className="flex items-center gap-1 px-1 py-0.5 rounded-full hover:bg-white/20 transition">
          <span className="flex items-center justify-center w-7 h-7 bg-white/20 rounded-full shadow-inner">
            <img src="/favicon.ico" alt="EEGNITE Logo" className="w-5 h-5 object-contain" />
          </span>
        </Link>
        <div className="h-6 w-px bg-white/20 mx-1 hidden sm:block" />
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;
          return (
            <Link
              key={item.name}
              to={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-base font-satoshi font-medium px-3 py-1 rounded-full transition-colors",
                "text-foreground/80 hover:text-primary",
                // Remove background for active state
                isActive && "text-primary shadow-lg",
              )}
            >
              <span className="hidden md:inline font-satoshi">{item.name}</span>
              <span className="md:hidden">
                <Icon size={14} strokeWidth={2} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/10 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-primary rounded-t-full">
                    <div className="absolute w-7 h-3 bg-primary/20 rounded-full blur-md -top-1.5 -left-1.5" />
                    <div className="absolute w-5 h-3 bg-primary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-2 h-2 bg-primary/20 rounded-full blur-sm top-0 left-1" />
                  </div>
                </motion.div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
} 