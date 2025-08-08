import { useState, useEffect } from 'react';
import { GalleryItem } from '../types/gallery';
import { bathroomLocalItems } from '../data/bathroomLocal';

export function useGallery(category: string = 'all') {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      setLoading(true);

      const shouldShowBathroom = category === 'bathroom' || category === 'all';
      const localOnly: GalleryItem[] = shouldShowBathroom ? bathroomLocalItems : [];

      const processedItems = localOnly.map(item => ({
        ...item,
        imageUrl: item.image_path
      }));

      setItems(processedItems);
      setError(null);
    } catch (err) {
      console.error('Local gallery load error:', err);
      setError('Er is een fout opgetreden bij het laden van lokale afbeeldingen.');
      setItems([]);
    } finally {
      setLoading(false);
    }
  }, [category]);

  return { items, loading, error };
}