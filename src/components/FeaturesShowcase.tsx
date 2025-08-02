"use client";

import { Zap, Shield, Rocket, Star, Clock, Award } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

export function FeaturesShowcase({ features }: { features?: { title: string; description: string }[] }) {
  const defaultFeatures = [
    { title: "Rapid Implementation", description: "Fast-track your success with our agile consulting approach and proven implementation strategies." },
    { title: "Trusted Expertise", description: "Leverage decades of combined experience from industry experts across multiple business domains." },
    { title: "Growth Focused", description: "Every solution is designed to accelerate your business growth and competitive advantage." },
    { title: "Premium Quality", description: "Exceptional service quality with attention to detail that exceeds client expectations consistently." },
    { title: "24/7 Support", description: "Round-the-clock support ensuring your business operations never skip a beat during transformation." },
    { title: "Proven Results", description: "Track record of success with measurable ROI improvements and satisfied clients across industries." },
  ];
  const displayFeatures = features && features.length > 0 ? features : defaultFeatures;
  return (
    <section className="py-20 px-4 md:px-8 lg:px-10 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="luxury-h2 text-3xl md:text-5xl font-bold mb-4 text-foreground">
          Why Choose <span className="gradient-text">EEGNITE</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto luxury-body">
          Experience excellence through our proven methodologies and commitment to delivering exceptional results.
        </p>
      </div>
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-2 lg:gap-6">
        {displayFeatures.map((feature, idx) => (
          <GridItem
            key={feature.title + idx}
            area=""
            icon={<Zap className="h-5 w-5" aria-label="Feature icon" />}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </ul>
    </section>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-[1.25rem] border border-border/50 p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={35}
          glow={true}
          disabled={false}
          proximity={48}
          inactiveZone={0.02}
          borderWidth={2}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border border-border/30 bg-card/40 p-6 backdrop-blur-sm shadow-elegant">
          <div className="relative flex flex-1 flex-col justify-between gap-4">
            <div className="w-fit rounded-lg border border-border/50 bg-accent/20 text-accent-foreground p-3">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="text-lg md:text-xl font-semibold text-foreground leading-tight">
                {title}
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};