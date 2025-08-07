export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: 'kitchen' | 'renovation' | 'installation';
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Moderne Keuken Renovatie',
    description: 'Complete renovatie van een jaren 80 keuken naar een moderne, functionele ruimte.',
    imageUrl: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80',
    category: 'kitchen'
  },
  {
    id: '2',
    title: 'Luxe Appartement Verbouwing',
    description: 'Volledige verbouwing van een appartement inclusief nieuwe keuken en badkamer.',
    imageUrl: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80',
    category: 'renovation'
  },
  {
    id: '3',
    title: 'Waterontharder Installatie',
    description: 'Professionele installatie van een waterontharder systeem voor een gezinswoning.',
    imageUrl: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&q=80',
    category: 'installation'
  },
  {
    id: '4',
    title: 'Keuken op Maat',
    description: 'Op maat gemaakte keuken met hoogwaardige apparatuur en slim ruimtegebruik.',
    imageUrl: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80',
    category: 'kitchen'
  }
];