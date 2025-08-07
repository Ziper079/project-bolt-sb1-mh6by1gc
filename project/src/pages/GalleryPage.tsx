import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import PhotoGrid from '../components/gallery/PhotoGrid';
import { useGallery } from '../hooks/useGallery';

type Category = 'all' | 'kitchen' | 'bathroom' | 'renovation' | 'installation';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const { items, loading, error } = useGallery(activeCategory);

  const categories = [
    { id: 'all', label: 'Alles' },
    { id: 'kitchen', label: 'Keukens' },
    { id: 'bathroom', label: 'Badkamers' },
    { id: 'renovation', label: 'Renovaties' },
    { id: 'installation', label: 'Installaties' }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <Link 
          to="/" 
          className="inline-flex items-center text-off-white hover:text-primary-green transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Terug naar home
        </Link>

        <h1 className="text-4xl font-bold text-primary-green mb-8">Fotoboek</h1>
        
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as Category)}
              className={`px-6 py-2 rounded-full ${
                activeCategory === category.id
                  ? 'bg-primary-green text-dark-green'
                  : 'text-off-white hover:bg-primary-green/10'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {loading && (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-green"></div>
          </div>
        )}
        
        {error && (
          <div className="text-red-500 text-center py-8">
            Er is een fout opgetreden bij het laden van de afbeeldingen.
          </div>
        )}
        
        {!loading && !error && <PhotoGrid items={items} />}
      </div>
    </div>
  );
}