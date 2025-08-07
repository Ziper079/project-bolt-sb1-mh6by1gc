import React from 'react';
import { GalleryItem } from '../../types/gallery';

interface PhotoGridProps {
  items: GalleryItem[];
}

export default function PhotoGrid({ items }: PhotoGridProps) {
  if (items.length === 0) {
    return (
      <div className="text-center py-8 text-off-white">
        Geen afbeeldingen gevonden in deze categorie.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <div 
          key={item.id} 
          className="aspect-square bg-background/40 rounded-xl overflow-hidden relative group"
        >
          <img 
            src={item.imageUrl} 
            alt={item.title}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              console.error(`Image load error for ${item.image_path}`);
              // Fallback to a default image from the Badkamers folder
              e.currentTarget.src = '/Badkamers/IMG_2752.JPEG';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 p-4">
              <h3 className="text-white font-medium text-lg mb-1">{item.title}</h3>
              <p className="text-white/80 text-sm capitalize">
                {item.category === 'bathroom' ? 'Badkamer' :
                 item.category === 'kitchen' ? 'Keuken' :
                 item.category === 'renovation' ? 'Renovatie' : 'Installatie'}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}