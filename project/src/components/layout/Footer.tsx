import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-primary-green/20 text-black mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-2xl font-bold text-primary-green">Exact Montage</h3>
          <p className="mt-3 text-black/70">
            Vakmanschap in timmerwerk, renovatie en montage.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Snel naar</h4>
          <nav className="flex flex-col space-y-2 text-black/80">
            <Link to="/" className="hover:text-primary-green">Home</Link>
            <Link to="/werkwijze" className="hover:text-primary-green">Onze werkwijze</Link>
            <Link to="/fotoboek" className="hover:text-primary-green">Fotoboek</Link>
            <Link to="/contact" className="hover:text-primary-green">Contact</Link>
          </nav>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <div className="space-y-1 text-black/80">
            <p>Industrieweg 47</p>
            <p>2712 LA Zoetermeer</p>
            <a href="tel:+31791234567" className="hover:text-primary-green block">079 123 4567</a>
            <a href="mailto:info@exactmontage.nl" className="hover:text-primary-green block">info@exactmontage.nl</a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-green/10">
        <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-black/60 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Exact Montage. Alle rechten voorbehouden.</span>
          <span className="hidden sm:inline">Timmerwerk / Renovatie / Montage</span>
        </div>
      </div>
    </footer>
  );
}


