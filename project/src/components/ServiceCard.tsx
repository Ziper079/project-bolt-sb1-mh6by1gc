import React from 'react';

interface ServiceCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

export default function ServiceCard({ title, subtitle, imageUrl }: ServiceCardProps) {
  return (
    <div className="group rounded-2xl overflow-hidden shadow-xl bg-background/40 hover:bg-background/60 transition-all duration-300 border border-primary-green/20 transform hover:-translate-y-1 backdrop-blur-md">
      <div className="h-72 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" 
        />
      </div>
      <div className="p-8">
        <p className="text-primary-green text-sm font-medium mb-2">{subtitle}</p>
        <h3 className="text-2xl font-bold mb-6 text-off-white group-hover:text-primary-green transition-colors">{title}</h3>
        <button className="bg-primary-green text-dark-green px-6 py-3 rounded-lg font-semibold hover:bg-secondary-green transition-all transform hover:scale-105">
          Lees meer
        </button>
      </div>
    </div>
  );
}