
'use client';

import { useState, useEffect } from 'react';
import type { ProjectImageModel } from '@/data/projects';
import { Button } from '@/components/ui/button';
import SafeIcon from '@/components/common/SafeIcon';

interface ProjectImageCarouselProps {
  images: ProjectImageModel[];
  autoRotate?: boolean;
  rotationInterval?: number;
}

export default function ProjectImageCarousel({
  images,
  autoRotate = true,
  rotationInterval = 5000,
}: ProjectImageCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(autoRotate);

  useEffect(() => {
    if (!isAutoRotating || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [isAutoRotating, images.length, rotationInterval]);

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoRotating(false);
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
    setIsAutoRotating(false);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
    setIsAutoRotating(false);
  };

  if (images.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-muted">
        <div className="text-center">
          <SafeIcon name="Image" size={32} className="text-muted-foreground mx-auto mb-2 opacity-50" />
          <p className="text-sm text-muted-foreground">No images available</p>
        </div>
      </div>
    );
  }

  const currentImage = images[currentImageIndex];

  return (
    <div className="relative w-full h-full group">
      {/* Main Image */}
      <img
        src={currentImage.url}
        alt={currentImage.alt}
        className="w-full h-full object-cover transition-opacity duration-500"
      />

      {/* Image Counter */}
      <div className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-foreground">
        {currentImageIndex + 1} / {images.length}
      </div>

      {/* Navigation Buttons - Only show if multiple images */}
      {images.length > 1 && (
        <>
          {/* Previous Button */}
          <Button
            onClick={goToPrevious}
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-background/60 hover:bg-background/80 text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <SafeIcon name="ChevronLeft" size={20} />
          </Button>

          {/* Next Button */}
          <Button
            onClick={goToNext}
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-background/60 hover:bg-background/80 text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <SafeIcon name="ChevronRight" size={20} />
          </Button>

          {/* Thumbnail Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? 'bg-accent w-6'
                    : 'bg-secondary/50 hover:bg-secondary'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-rotate Toggle */}
          <Button
            onClick={() => setIsAutoRotating(!isAutoRotating)}
            variant="ghost"
            size="icon"
            className="absolute bottom-4 right-4 z-20 bg-background/60 hover:bg-background/80 text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            title={isAutoRotating ? 'Pause rotation' : 'Resume rotation'}
          >
            <SafeIcon name={isAutoRotating ? 'Pause' : 'Play'} size={16} />
          </Button>
        </>
      )}
    </div>
  );
}
