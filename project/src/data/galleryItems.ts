export interface GalleryItem {
  id: string;
  imageUrl: string;
  category: 'kitchen' | 'bathroom' | 'renovation' | 'installation';
  title: string;
}

export const galleryItems: GalleryItem[] = [
  // Kitchen Category
  {
    id: '1',
    title: 'Moderne Witte Keuken',
    imageUrl: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80',
    category: 'kitchen'
  },
  {
    id: '2',
    title: 'Luxe Kookeiland',
    imageUrl: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80',
    category: 'kitchen'
  },
  {
    id: '3',
    title: 'Minimalistische Keuken',
    imageUrl: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80',
    category: 'kitchen'
  },
  
  // Bathroom Category
  {
    id: '4',
    title: 'Luxe Badkamer',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80',
    category: 'bathroom'
  },
  {
    id: '5',
    title: 'Moderne Badkamer',
    imageUrl: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80',
    category: 'bathroom'
  },
  {
    id: '6',
    title: 'Stijlvolle Badkamer',
    imageUrl: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80',
    category: 'bathroom'
  },

  // Renovation Category
  {
    id: '7',
    title: 'Complete Renovatie',
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80',
    category: 'renovation'
  },
  {
    id: '8',
    title: 'Keukenrenovatie',
    imageUrl: 'https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?auto=format&fit=crop&q=80',
    category: 'renovation'
  },
  {
    id: '9',
    title: 'Badkamerrenovatie',
    imageUrl: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=80',
    category: 'renovation'
  },

  // Installation Category
  {
    id: '10',
    title: 'Waterontharder Installatie',
    imageUrl: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&q=80',
    category: 'installation'
  },
  {
    id: '11',
    title: 'Keukenapparatuur',
    imageUrl: 'https://images.unsplash.com/photo-1586208958839-06c17cacdf08?auto=format&fit=crop&q=80',
    category: 'installation'
  },
  {
    id: '12',
    title: 'Sanitair Installatie',
    imageUrl: 'https://images.unsplash.com/photo-1584622781867-1c5642ee48a2?auto=format&fit=crop&q=80',
    category: 'installation'
  }
];