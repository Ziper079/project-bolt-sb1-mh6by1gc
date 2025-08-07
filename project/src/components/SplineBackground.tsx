import React from 'react';

export default function SplineBackground() {
  return (
    <div className="fixed inset-0 -z-10 w-full h-screen overflow-hidden">
      <spline-viewer 
        url="https://prod.spline.design/QYmINJkiPdZprRUG/scene.splinecode"
        className="w-full h-full scale-125"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50 pointer-events-none"></div>
    </div>
  );
}