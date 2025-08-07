import React from 'react';
import { Shield, Target, Users, Wrench, Clock, ThumbsUp } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: "Kwaliteitsgarantie",
    description: "Wij staan voor hoogwaardige kwaliteit en duurzame oplossingen in elk project dat we uitvoeren."
  },
  {
    icon: Target,
    title: "Precisie & Detail",
    description: "Elk detail telt. We werken met de grootste precisie om het perfecte resultaat te bereiken."
  },
  {
    icon: Users,
    title: "Persoonlijke Aanpak",
    description: "Uw wensen staan centraal. We denken mee en zoeken naar de beste oplossing voor uw situatie."
  },
  {
    icon: Wrench,
    title: "Vakmanschap",
    description: "Ons team bestaat uit ervaren vakmensen die trots zijn op hun werk en expertise."
  },
  {
    icon: Clock,
    title: "Stipte Planning",
    description: "We komen onze afspraken na en houden ons aan de planning die we met u afspreken."
  },
  {
    icon: ThumbsUp,
    title: "Tevreden Klanten",
    description: "Onze grootste trots is de tevredenheid van onze klanten na elk voltooid project."
  }
];

export default function ValuesSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {values.map((value) => (
        <div 
          key={value.title}
          className="p-8 bg-background/40 backdrop-blur-md rounded-xl border border-primary-green/20 hover:border-primary-green/40 transition-all group"
        >
          <value.icon className="w-12 h-12 text-primary-green mb-6 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-bold text-off-white mb-4">{value.title}</h3>
          <p className="text-off-white/80">{value.description}</p>
        </div>
      ))}
    </div>
  );
}