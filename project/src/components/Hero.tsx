import React from 'react';
import { Link } from 'react-router-dom';
import SplineBackground from './SplineBackground';

export default function Hero() {
  return (
    <div className="relative h-[600px]">
      <SplineBackground />
      <div className="relative h-full flex flex-col items-center justify-center text-center text-black px-4">
        <h1 className="text-6xl font-bold mb-6 text-black leading-tight">
          Uw nieuwe keuken tot<br />
          in de puntjes<br />
          <span className="text-primary-green">verzorgd!</span>
        </h1>
        <p className="text-xl mb-8 text-black/90 max-w-2xl">
          Is uw keuken toe aan renovatie? Of wilt u een compleet nieuwe
          keuken laten plaatsen?
        </p>
        <p className="text-2xl mb-8 font-semibold text-primary-green">
          Exact Montage is uw partner bij uitstek!
        </p>
        <Link 
          to="/werkwijze"
          className="inline-block bg-primary-green text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-secondary-green transition-all transform hover:scale-105"
        >
          Wat wij voor u kunnen betekenen
        </Link>
      </div>
    </div>
  );
}