import React from 'react';
import { Link } from 'react-router-dom';
import { kitchenSlides } from '../../data/kitchenSlides';
import BackgroundSlideshow from '../slideshow/BackgroundSlideshow';

export default function AboutHero() {
  return (
    <BackgroundSlideshow 
      slides={kitchenSlides}
      overlayClassName="bg-gradient-to-b from-black/30 to-black/50"
    >
      <div className="min-h-[600px] flex items-center justify-center py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6">
            <span className="text-white">Welkom bij</span>
            <span className="text-primary-green"> Exact Montage</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-12">
            Al meer dan 25 jaar zijn wij dé specialist in het monteren van keukens en het uitvoeren van complete verbouwingen in Zoetermeer en omstreken. 
            Met passie voor vakmanschap en oog voor detail maken wij van uw woning een droomplek.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            {[
              { number: "25+", label: "Jaren ervaring" },
              { number: "120+", label: "Tevreden klanten" },
              { number: "100%", label: "Kwaliteitsgarantie" }
            ].map((stat) => (
              <div key={stat.label} className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-primary-green/20">
                <div className="text-4xl font-bold text-primary-green mb-2">{stat.number}</div>
                <div className="text-white">{stat.label}</div>
              </div>
            ))}
          </div>
          <Link 
            to="/fotoboek"
            className="inline-block bg-primary-green text-black px-8 py-4 rounded-lg font-semibold hover:bg-secondary-green transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Zie ons werk
          </Link>
        </div>
      </div>
    </BackgroundSlideshow>
  );
}