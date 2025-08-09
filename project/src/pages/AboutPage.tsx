import React from 'react';
import AboutHero from '../components/about/AboutHero';
import ValuesSection from '../components/about/ValuesSection';
import HistorySection from '../components/about/HistorySection';
// Removed AboutCTASection: CTA should not appear as footer anymore

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <div className="h-32" /> {/* Spacer */}
      <ValuesSection />
      <HistorySection />
      {/* Footer is handled globally in Layout */}
    </div>
  );
}