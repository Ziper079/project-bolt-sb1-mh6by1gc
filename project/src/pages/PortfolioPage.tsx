import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import PortfolioGrid from '../components/portfolio/PortfolioGrid';
import { portfolioItems } from '../data/portfolioItems';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <Link 
          to="/" 
          className="inline-flex items-center text-off-white hover:text-primary-green transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Terug naar home
        </Link>

        <AnimatedSection>
          <h1 className="text-4xl font-bold text-primary-green mb-8">Ons Portfolio</h1>
        </AnimatedSection>
        
        <PortfolioGrid items={portfolioItems} />
      </div>
    </div>
  );
}