import React from 'react';
import { PortfolioItem } from '../../data/portfolioItems';
import AnimatedSection from '../AnimatedSection';

interface PortfolioGridProps {
  items: PortfolioItem[];
}

export default function PortfolioGrid({ items }: PortfolioGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {items.map((item, index) => (
        <AnimatedSection key={item.id} delay={index * 200}>
          <div className="bg-background/40 backdrop-blur-md rounded-xl overflow-hidden border border-primary-green/20 hover:border-primary-green/40 transition-all group">
            <div className="h-64 overflow-hidden">
              <img 
                src={item.imageUrl} 
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-off-white mb-2">{item.title}</h3>
              <p className="text-off-white/80">{item.description}</p>
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
}