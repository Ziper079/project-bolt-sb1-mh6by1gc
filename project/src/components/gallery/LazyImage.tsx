import React, { useEffect, useRef, useState } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

export default function LazyImage({ src, alt, className, fallbackSrc = '/exact-montage-logo.png' }: LazyImageProps) {
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [isInView, setIsInView] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [attempt, setAttempt] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Observe when the image enters the viewport
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { root: null, rootMargin: '200px', threshold: 0.01 }
    );

    observer.observe(node);
    return () => observer.unobserve(node);
  }, []);

  // When in view, preload and decode before showing
  useEffect(() => {
    if (!isInView) return;
    let cancelled = false;

    const preload = async (srcToLoad: string) => {
      try {
        const img = new Image();
        img.src = srcToLoad;
        await img.decode?.();
        if (!cancelled) {
          setCurrentSrc(srcToLoad);
          setIsLoaded(true);
        }
      } catch (err) {
        if (cancelled) return;
        // Try alternate extensions first, then fallback
        if (attempt === 0) {
          // Swap .JPEG <-> .JPG
          if (/\.JPEG$/i.test(src)) {
            setAttempt(1);
            preload(src.replace(/\.JPEG$/i, '.JPG'));
            return;
          }
          if (/\.JPG$/i.test(src)) {
            setAttempt(1);
            preload(src.replace(/\.JPG$/i, '.JPEG'));
            return;
          }
        } else if (attempt === 1) {
          // Lowercase extension
          if (/\.JPEG$/i.test(src)) {
            setAttempt(2);
            preload(src.replace(/\.JPEG$/i, '.jpeg'));
            return;
          }
          if (/\.JPG$/i.test(src)) {
            setAttempt(2);
            preload(src.replace(/\.JPG$/i, '.jpg'));
            return;
          }
        }

        // Final fallback
        setCurrentSrc(fallbackSrc);
        setIsLoaded(true);
      }
    };

    preload(src);
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView, src, attempt]);

  return (
    <div ref={containerRef} className="w-full h-full">
      {!isLoaded && (
        <div className="w-full h-full animate-pulse bg-background/50" />
      )}
      {isLoaded && (
        <img
          src={currentSrc}
          alt={alt}
          className={className}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
        />
      )}
    </div>
  );
}


