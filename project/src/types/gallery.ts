export interface GalleryItem {
  id: string;
  title: string;
  category: 'kitchen' | 'bathroom' | 'renovation' | 'installation';
  image_path: string;
  created_at: string;
  imageUrl?: string;
}