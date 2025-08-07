import React from 'react';
import ServiceCard from './ServiceCard';

export default function Services() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background/40 to-background/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-primary-green mb-16">
          Wat wij voor u kunnen doen
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <ServiceCard
            title="Verbouwing"
            subtitle="Meer dan alleen keukens"
            imageUrl="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80"
          />
          
          <ServiceCard
            title="Keuken plaatsing"
            subtitle="Nieuw huis, nieuwe keuken"
            imageUrl="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80"
          />
          
          <ServiceCard
            title="Waterontharders"
            subtitle="Uw huis kalkvrij"
            imageUrl="https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&q=80"
          />
        </div>
      </div>
    </section>
  );
}