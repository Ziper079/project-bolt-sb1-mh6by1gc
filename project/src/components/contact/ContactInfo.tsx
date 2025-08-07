import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-primary-green">Contact Informatie</h2>
      
      <div className="space-y-4">
        <div className="flex items-start space-x-4">
          <MapPin className="w-6 h-6 text-primary-green flex-shrink-0 mt-1" />
          <div>
            <p className="text-off-white">Exact Montage</p>
            <p className="text-off-white/80">Industrieweg 47</p>
            <p className="text-off-white/80">2712 LA Zoetermeer</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Phone className="w-6 h-6 text-primary-green flex-shrink-0" />
          <a href="tel:+31791234567" className="text-off-white hover:text-primary-green transition-colors">
            079 123 4567
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <Mail className="w-6 h-6 text-primary-green flex-shrink-0" />
          <a href="mailto:info@exactmontage.nl" className="text-off-white hover:text-primary-green transition-colors">
            info@exactmontage.nl
          </a>
        </div>
      </div>

      <div className="pt-8">
        <h3 className="text-xl font-bold text-primary-green mb-4">Openingstijden</h3>
        <div className="space-y-2 text-off-white">
          <p>Maandag - Vrijdag: 08:00 - 17:00</p>
          <p>Zaterdag: Op afspraak</p>
          <p>Zondag: Gesloten</p>
        </div>
      </div>
    </div>
  );
}