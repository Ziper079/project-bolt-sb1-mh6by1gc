import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { GalleryItem } from '../types/gallery';

export function useGallery(category: string = 'all') {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchGalleryItems() {
      try {
        setLoading(true);
        
        let query = supabase
          .from('gallery')
          .select('*')
          .order('created_at', { ascending: false });

        if (category !== 'all') {
          query = query.eq('category', category);
        }

        const { data, error } = await query;

        if (error) {
          throw new Error(`Database query error: ${error.message}`);
        }

        if (!data) {
          throw new Error('No data returned from the database');
        }

        // Process items - use the image_path directly since it now contains the correct public path
        const processedItems = data.map(item => ({
          ...item,
          imageUrl: item.image_path
        }));

        setItems(processedItems);
      } catch (err) {
        console.error('Gallery fetch error:', err);
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchGalleryItems();
  }, [category]);

  return { items, loading, error };
}