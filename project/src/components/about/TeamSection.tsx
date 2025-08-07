import React from 'react';

const teamMembers = [
  {
    name: "Jan de Vries",
    role: "Oprichter & Directeur",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
  },
  {
    name: "Peter Bakker",
    role: "Hoofdmonteur",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
  },
  {
    name: "Erik Jansen",
    role: "Projectmanager",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80"
  }
];

export default function TeamSection() {
  return (
    <section className="py-24 px-4 bg-background/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary-green mb-16">Ons team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {teamMembers.map((member) => (
            <div key={member.name} className="group">
              <div className="relative h-96 mb-6 rounded-xl overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-off-white mb-2">{member.name}</h3>
              <p className="text-primary-green">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}