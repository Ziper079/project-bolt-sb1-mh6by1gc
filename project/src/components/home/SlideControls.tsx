import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideControlsProps {
  onPrev: () => void;
  onNext: () => void;
}

export default function SlideControls({ onPrev, onNext }: SlideControlsProps) {
  return (
    <>
      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/70 text-off-white p-2 rounded-full backdrop-blur-sm transition-all z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/70 text-off-white p-2 rounded-full backdrop-blur-sm transition-all z-20"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </>
  );
}