import React from 'react';
import { Link } from 'react-router-dom';

export default function Content() {
  return (
    <div className="py-24 px-4 bg-background/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-primary-green mb-8">Exact Montage</h2>
          <p className="text-off-white text-lg leading-relaxed">
            Vanuit Zoetermeer bedienen wij al jaren de regio groot Zuid Holland op het gebied van nieuwe 
            keukens en renovaties.
          </p>
          <p className="text-off-white text-lg leading-relaxed mb-12">
            Wij werken dagelijks met meerdere collega's om uw projecten, wensen en dromen uit te laten komen!
          </p>
          <Link 
            to="/about"
            className="inline-block bg-primary-green text-dark-green px-8 py-4 rounded-lg font-semibold hover:bg-secondary-green transition-all transform hover:scale-105"
          >
            Over ons
          </Link>
        </div>
        
        <div className="bg-background/40 backdrop-blur-md text-off-white p-12 rounded-2xl border border-primary-green/20 shadow-xl shadow-primary-green/5">
          <h2 className="text-3xl font-bold mb-6 text-primary-green">Trots op ons werk!</h2>
          <p className="text-lg mb-8 leading-relaxed">
            Bij Exact Montage zijn we trots op het werk dat we doen.
          </p>
          <Link 
            to="/fotoboek"
            className="inline-block bg-primary-green text-dark-green px-8 py-4 rounded-lg font-semibold hover:bg-secondary-green transition-all transform hover:scale-105"
          >
            Bekijk ons portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}