
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import SafeIcon from '@/components/common/SafeIcon';
import type { ProjectImageModel } from '@/data/projects';

interface ProjectImageCarouselProps {
  images: ProjectImageModel[];
  projectTitle: string;
}

export default function ProjectImageCarousel({ 
  images, 
  projectTitle 
}: ProjectImageCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, images.length]);

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
    setIsAutoPlay(false);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
    setIsAutoPlay(false);
  };

  if (!images || images.length === 0) {
    return (
      <div className="w-full aspect-video bg-card border border-border rounded-lg flex items-center justify-center">
        <p className="text-muted-foreground">No images available</p>
      </div>
    );
  }

  const currentImage = images[currentImageIndex];

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative w-full aspect-video bg-card border border-border rounded-lg overflow-hidden group magical-glow">
        <img
          src={currentImage.url}
          alt={currentImage.alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Image Counter */}
        <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-foreground border border-border">
          {currentImageIndex + 1} / {images.length}
        </div>

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-accent hover:text-background transition-all duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100"
              aria-label="Previous image"
            >
              <SafeIcon name="ChevronLeft" size={20} />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-accent hover:text-background transition-all duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100"
              aria-label="Next image"
            >
              <SafeIcon name="ChevronRight" size={20} />
            </button>
          </>
        )}

        {/* Autoplay Toggle */}
        {images.length > 1 && (
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-accent hover:text-background transition-all duration-200 flex items-center justify-center"
            aria-label={isAutoPlay ? 'Pause autoplay' : 'Play autoplay'}
          >
            <SafeIcon name={isAutoPlay ? 'Pause' : 'Play'} size={18} />
          </button>
        )}
      </div>

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg border-2 overflow-hidden transition-all duration-200 ${
                index === currentImageIndex
                  ? 'border-accent ring-2 ring-accent/50'
                  : 'border-border hover:border-accent/50'
              }`}
              aria-label={`Go to image ${index + 1}`}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Image Description */}
      <p className="text-sm text-muted-foreground italic">
        {currentImage.alt}
      </p>
    </div>
  );
}
