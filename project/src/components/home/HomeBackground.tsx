import React from 'react';

export default function HomeBackground() {
  return (
    <div className="absolute inset-0 h-[600px] -z-10 overflow-hidden">
      <spline-viewer 
        url="https://prod.spline.design/QYmINJkiPdZprRUG/scene.splinecode"
        className="w-full h-full scale-125"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background pointer-events-none"></div>
    </div>
  );
}