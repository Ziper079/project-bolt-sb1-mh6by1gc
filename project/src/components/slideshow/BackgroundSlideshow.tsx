import React from 'react';
import SlideControls from '../home/SlideControls';
import SlideIndicators from '../home/SlideIndicators';
import { useSlideshow } from './useSlideshow';

interface Slide {
  id: string;
  imageUrl: string;
  title: string;
}

interface BackgroundSlideshowProps {
  slides: Slide[];
  children: React.ReactNode;
  overlayClassName?: string;
}

export default function BackgroundSlideshow({ 
  slides, 
  children,
  overlayClassName = "bg-gradient-to-b from-background/40 via-background/60 to-background/80"
}: BackgroundSlideshowProps) {
  const { currentSlide, goToSlide, nextSlide, prevSlide } = useSlideshow({
    totalSlides: slides.length
  });

  return (
    <div className="relative min-h-[600px]">
      {/* Slideshow Background */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.imageUrl}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      
      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayClassName}`} />
      
      {/* Navigation Controls */}
      <SlideControls onPrev={prevSlide} onNext={nextSlide} />
      <SlideIndicators 
        total={slides.length} 
        current={currentSlide} 
        onClick={goToSlide} 
      />

      {/* Content */}
      <div className="relative">
        {children}
      </div>
    </div>
  );
}