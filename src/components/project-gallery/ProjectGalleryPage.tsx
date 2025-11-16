
'use client';

import { useState } from 'react';
import { PortfolioProjects } from '@/data/projects';
import ProjectCard from './ProjectCard';
import { Button } from '@/components/ui/button';
import SafeIcon from '@/components/common/SafeIcon';

export default function ProjectGalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories
  const categories = Array.from(new Set(PortfolioProjects.map(p => p.category)));
  
  // Filter projects based on selected category
  const filteredProjects = selectedCategory 
    ? PortfolioProjects.filter(p => p.category === selectedCategory)
    : PortfolioProjects;

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Category Filter */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
          <SafeIcon name="Filter" size={28} className="text-accent" />
          Filter by Category
        </h2>
        
        <div className="flex flex-wrap gap-3">
          <Button
            onClick={() => setSelectedCategory(null)}
            variant={selectedCategory === null ? 'default' : 'outline'}
            className={`transition-all duration-300 ${
              selectedCategory === null 
                ? 'bg-accent text-background hover:bg-accent/90' 
                : 'border-border hover:border-accent'
            }`}
          >
            All Projects ({PortfolioProjects.length})
          </Button>
          
          {categories.map((category) => {
            const count = PortfolioProjects.filter(p => p.category === category).length;
            return (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className={`transition-all duration-300 ${
                  selectedCategory === category 
                    ? 'bg-accent text-background hover:bg-accent/90' 
                    : 'border-border hover:border-accent'
                }`}
              >
                {category} ({count})
              </Button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <SafeIcon name="FolderOpen" size={48} className="text-muted-foreground mx-auto mb-4 opacity-50" />
          <p className="text-lg text-muted-foreground">No projects found in this category.</p>
        </div>
      )}

      {/* Summary Section */}
      <div className="mt-16 pt-12 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
              {PortfolioProjects.length}
            </div>
            <p className="text-muted-foreground">Professional Projects</p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
              {categories.length}
            </div>
            <p className="text-muted-foreground">Categories</p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
              3
            </div>
            <p className="text-muted-foreground">Disciplines</p>
          </div>
        </div>
      </div>
    </div>
  );
}
