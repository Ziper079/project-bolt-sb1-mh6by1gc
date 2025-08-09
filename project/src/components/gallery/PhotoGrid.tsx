import React, { useEffect, useState } from 'react';
import { GalleryItem } from '../../types/gallery';
import LazyImage from './LazyImage';

interface PhotoGridProps {
  items: GalleryItem[];
}

export default function PhotoGrid({ items }: PhotoGridProps) {
  // Start with even fewer images for better initial performance
  const [visibleCount, setVisibleCount] = useState<number>(4);

  useEffect(() => {
    // Reset on items change - start with 4 images
    setVisibleCount(4);
  }, [items]);

  const visibleItems: GalleryItem[] = items.slice(0, visibleCount);
  if (items.length === 0) {
    return (
      <div className="text-center py-8 text-off-white">
        Geen afbeeldingen gevonden in deze categorie.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {visibleItems.map((item) => (
        <div 
          key={item.id} 
          className="aspect-square bg-background/40 rounded-xl overflow-hidden relative group"
        >
          <LazyImage
            src={item.imageUrl as string}
            alt={item.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            fallbackSrc="/Badkamers/IMG_2752.JPEG"
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
      {visibleCount < items.length && (
        <div className="col-span-full flex justify-center mt-8">
          <button 
            onClick={() => setVisibleCount((c) => Math.min(c + 4, items.length))}
            className="px-8 py-3 rounded-full bg-primary-green/20 text-primary-green hover:bg-primary-green hover:text-black transition-all duration-300 font-medium"
          >
            Laad meer foto's ({Math.min(items.length - visibleCount, 4)})
          </button>
        </div>
      )}
    </div>
  );
}