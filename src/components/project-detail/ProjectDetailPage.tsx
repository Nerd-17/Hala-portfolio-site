'use client';

import { useState, useEffect } from 'react';
import PageHero from '@/components/common/PageHero';
import ProjectImageCarousel from '@/components/project-detail/ProjectImageCarousel';
import ProjectDescription from '@/components/project-detail/ProjectDescription';
import ProjectMetadata from '@/components/project-detail/ProjectMetadata';
import RelatedProjects from '@/components/project-detail/RelatedProjects';
import { ProjectGalleryItemModel } from '@/data/projects';

interface ProjectDetailPageProps {
  projects: ProjectGalleryItemModel[];
}

export default function ProjectDetailPage({ projects }: ProjectDetailPageProps) {
  const [selectedProject, setSelectedProject] = useState<ProjectGalleryItemModel | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const projectId = params.get('id');
      
      if (projectId) {
        const project = projects.find(p => p.id === projectId);
        setSelectedProject(project || projects[0]);
      } else {
        setSelectedProject(projects[0]);
      }
    }
  }, [projects]);

  if (!selectedProject) {
    return (
      <div className="container mx-auto px-4 py-12 md:py-16">
        <p className="text-center text-muted-foreground">Loading project...</p>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <PageHero 
        title={selectedProject.title}
        subtitle={selectedProject.shortDescription}
        breadcrumbs={[
          { name: 'Home', href: './portfolio-home.html' },
          { name: 'My Projects', href: './project-gallery.html' },
          { name: selectedProject.title, href: '#' }
        ]}
        size="medium"
      />

      {/* Project Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Main Content - 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Carousel */}
            <ProjectImageCarousel 
              images={selectedProject.images}
              projectTitle={selectedProject.title}
            />

            {/* Description */}
            <ProjectDescription 
              longDescription={selectedProject.longDescription}
              highlights={selectedProject.highlights}
            />
          </div>

          {/* Sidebar - 1 column */}
          <div className="space-y-6">
            {/* Metadata */}
            <ProjectMetadata 
              category={selectedProject.category}
              projectId={selectedProject.id}
            />

            {/* Related Projects */}
            <RelatedProjects 
              currentProjectId={selectedProject.id}
              allProjects={projects}
            />
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="container mx-auto px-4 py-12 md:py-16 border-t border-border">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
          <a 
            href="./project-gallery.html"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-card hover:bg-muted border border-border transition-all duration-200 text-foreground hover:text-accent group"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            Back to Projects
          </a>
          
          <a 
            href="./portfolio-home.html"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-accent/20 to-secondary/20 hover:from-accent/30 hover:to-secondary/30 border border-accent/50 transition-all duration-200 text-accent"
          >
            Back to Home
          </a>
        </div>
      </div>
    </>
  );
}