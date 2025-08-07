import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { kitchenSlides } from '../../data/kitchenSlides';
import SlideIndicators from './SlideIndicators';
import SlideControls from './SlideControls';

export default function KitchenSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % kitchenSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % kitchenSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + kitchenSlides.length) % kitchenSlides.length);
  };

  return (
    <div className="relative h-[600px] overflow-hidden">
      {kitchenSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.imageUrl}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-white mb-4">{slide.title}</h2>
                <p className="text-xl text-white/90">{slide.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      <SlideControls onPrev={prevSlide} onNext={nextSlide} />
      <SlideIndicators 
        total={kitchenSlides.length} 
        current={currentSlide} 
        onClick={goToSlide} 
      />
    </div>
  );
}