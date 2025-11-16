
'use client';

import { useState } from 'react';
import type { ProjectGalleryItemModel } from '@/data/projects';
import ProjectImageCarousel from './ProjectImageCarousel';
import { Button } from '@/components/ui/button';
import SafeIcon from '@/components/common/SafeIcon';

interface ProjectCardProps {
  project: ProjectGalleryItemModel;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleViewDetails = () => {
    // Navigate to project detail page with project ID as query parameter
    window.location.href = `./project-detail.html?id=${project.id}`;
  };

  return (
    <div
      className="group relative h-full rounded-lg overflow-hidden bg-card border border-border transition-all duration-300 hover:border-accent hover:shadow-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Carousel */}
      <div className="relative h-64 md:h-72 overflow-hidden bg-muted">
        <ProjectImageCarousel images={project.images} />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/90 text-background text-xs font-semibold">
            <SafeIcon name="Tag" size={12} />
            {project.category}
          </span>
        </div>

        {/* Overlay on hover */}
        <div className={`absolute inset-0 bg-background/60 backdrop-blur-sm transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}></div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col h-full">
        {/* Title */}
        <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-grow">
          {project.shortDescription}
        </p>

        {/* Image Count */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4 pb-4 border-b border-border">
          <SafeIcon name="Image" size={14} />
          <span>{project.images.length} images</span>
        </div>

        {/* View Details Button */}
        <Button
          onClick={handleViewDetails}
          className="w-full bg-gradient-to-r from-accent to-secondary hover:from-accent/90 hover:to-secondary/90 text-background font-semibold transition-all duration-300 group-hover:shadow-lg"
        >
          <span>View Details</span>
          <SafeIcon name="ArrowRight" size={16} className="ml-2" />
        </Button>
      </div>

      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
}
