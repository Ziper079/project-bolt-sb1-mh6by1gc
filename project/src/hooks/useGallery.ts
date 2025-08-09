import { useState, useEffect } from 'react';
import { GalleryItem } from '../types/gallery';
import { bathroomLocalItems } from '../data/bathroomLocal';

export function useGallery(category: string = 'all') {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadGallery = async () => {
      try {
        setLoading(true);
        setError(null);

        // Add a small delay to prevent too frequent updates
        await new Promise(resolve => setTimeout(resolve, 100));

        const shouldShowBathroom = category === 'bathroom' || category === 'all';
        
        if (!shouldShowBathroom) {
          setItems([]);
          return;
        }

        // Process items more efficiently
        const processedItems = bathroomLocalItems.map(item => ({
          ...item,
          imageUrl: item.image_path
        }));

        // Randomize order for better user experience
        const shuffledItems = [...processedItems].sort(() => Math.random() - 0.5);
        
        setItems(shuffledItems);
      } catch (err) {
        console.error('Local gallery load error:', err);
        setError('Er is een fout opgetreden bij het laden van lokale afbeeldingen.');
        setItems([]);
      } finally {
        setLoading(false);
      }
    };

    loadGallery();
  }, [category]);

  return { items, loading, error };
}