import React from 'react';
import KitchenSlideshow from './KitchenSlideshow';
import HomeBackground from './HomeBackground';

export default function HomeHero() {
  return (
    <div className="relative h-[600px]">
      <HomeBackground />
      <div className="relative z-10">
        <KitchenSlideshow />
      </div>
    </div>
  );
}