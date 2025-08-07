export interface KitchenSlide {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export const kitchenSlides: KitchenSlide[] = [
  {
    id: '1',
    title: 'Moderne Keukens',
    description: 'Strakke lijnen en hoogwaardige materialen',
    imageUrl: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    title: 'Landelijke Keukens',
    description: 'Warmte en gezelligheid in uw huis',
    imageUrl: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80'
  },
  {
    id: '3',
    title: 'Design Keukens',
    description: 'Unieke ontwerpen voor uw droomkeuken',
    imageUrl: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80'
  }
];