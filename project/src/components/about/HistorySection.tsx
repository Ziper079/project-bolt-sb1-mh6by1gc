import React from 'react';

export default function HistorySection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-primary-green mb-8">Onze geschiedenis</h2>
            <div className="space-y-6 text-off-white/90">
              <p className="leading-relaxed">
                Exact Montage werd opgericht vanuit een passie voor perfectie en vakmanschap. Als familiebedrijf begonnen we met het monteren van keukens, maar al snel groeide de vraag naar onze expertise.
              </p>
              <p className="leading-relaxed">
                Door de jaren heen hebben we ons ontwikkeld tot een veelzijdig montagebedrijf dat zich specialiseert in complete verbouwingen, keukeninstallaties en renovaties. Onze focus op kwaliteit en klanttevredenheid heeft ons gebracht waar we nu zijn.
              </p>
              <p className="leading-relaxed">
                Vandaag de dag zijn we uitgegroeid tot een toonaangevend bedrijf in de regio Zoetermeer, met een team van ervaren vakmensen die elke uitdaging aangaan met dezelfde toewijding als op dag één.
              </p>
            </div>
          </div>
          
          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80" 
              alt="Keukenrenovatie - Exact Montage geschiedenis" 
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}