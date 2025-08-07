import React from 'react';
import AboutHero from '../components/about/AboutHero';
import ValuesSection from '../components/about/ValuesSection';
import HistorySection from '../components/about/HistorySection';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <div className="space-y-16">
        <div className="py-16 px-4 bg-background/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-primary-green mb-4">Onze kernwaarden</h2>
            <p className="text-center text-off-white/80 max-w-2xl mx-auto mb-12">
              Bij Exact Montage werken we volgens duidelijke principes die de basis vormen van onze dienstverlening
            </p>
            <ValuesSection />
          </div>
        </div>
        <HistorySection />
      </div>
    </div>
  );
}