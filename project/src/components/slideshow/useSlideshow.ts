import { useState, useEffect, useCallback, useRef } from 'react';

interface UseSlideshowProps {
  totalSlides: number;
  autoInterval?: number;
  manualInterval?: number;
}

export function useSlideshow({ 
  totalSlides, 
  autoInterval = 5000,   // 5 seconds for automatic transitions
  manualInterval = 10000 // 10 seconds after manual navigation
}: UseSlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isManualTransition = useRef(false);

  const startTimer = useCallback((interval: number) => {
    return setInterval(() => {
      isManualTransition.current = false;
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, interval);
  }, [totalSlides]);

  useEffect(() => {
    const interval = isManualTransition.current ? manualInterval : autoInterval;
    const timer = startTimer(interval);
    return () => clearInterval(timer);
  }, [currentSlide, startTimer, autoInterval, manualInterval]);

  const goToSlide = (index: number) => {
    isManualTransition.current = true;
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    isManualTransition.current = true;
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    isManualTransition.current = true;
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return {
    currentSlide,
    goToSlide,
    nextSlide,
    prevSlide
  };
}