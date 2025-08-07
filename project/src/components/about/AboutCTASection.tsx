import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../AnimatedSection';

export default function AboutCTASection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background/40 to-background/60">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="relative max-w-xl mx-auto">
              <div className="aspect-square overflow-hidden rounded-full border-4 border-primary-green/20">
                <img 
                  src="/Foto Footer/451981767_1703295043836813_3334825831208992607_n.jpg" 
                  alt="Professional Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full shadow-2xl shadow-primary-green/10"></div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-primary-green">
                Laat Uw Project Aan Ons Over
              </h2>
              <h3 className="text-2xl text-off-white">
                Vertel wat u wilt, het wordt geregeld.
              </h3>
              <p className="text-off-white/80 text-lg">
                Neem vandaag nog contact met ons op voor een vrijblijvende offerte en ontdek hoe wij u kunnen helpen met al uw klussen.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-primary-green text-dark-green px-8 py-4 rounded-lg font-semibold hover:bg-secondary-green transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Contact
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}