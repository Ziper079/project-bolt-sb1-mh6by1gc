import React from 'react';

interface SlideIndicatorsProps {
  total: number;
  current: number;
  onClick: (index: number) => void;
}

export default function SlideIndicators({ total, current, onClick }: SlideIndicatorsProps) {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onClick(index)}
          className={`w-2 h-2 rounded-full transition-all ${
            index === current
              ? 'bg-primary-green w-4'
              : 'bg-off-white/50 hover:bg-off-white/70'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}