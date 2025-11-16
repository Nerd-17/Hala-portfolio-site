
import { useState, useEffect } from 'react';
import SafeIcon from '@/components/common/SafeIcon';
import type { ProjectGalleryItemModel } from '@/data/projects';

interface RelatedProjectsProps {
  currentProjectId: string;
  allProjects: ProjectGalleryItemModel[];
}

export default function RelatedProjects({ 
  currentProjectId, 
  allProjects 
}: RelatedProjectsProps) {
  const [relatedProjects, setRelatedProjects] = useState<ProjectGalleryItemModel[]>([]);

  useEffect(() => {
    // Get related projects (same category, excluding current)
    const related = allProjects
      .filter(p => p.id !== currentProjectId)
      .slice(0, 3);
    
    setRelatedProjects(related);
  }, [currentProjectId, allProjects]);

  const handleProjectClick = (projectId: string) => {
    // Update URL with new project ID
    const newUrl = `./project-detail.html?id=${projectId}`;
    window.history.pushState({}, '', newUrl);
    
    // Reload to show new project
    window.location.href = newUrl;
  };

  return (
    <div className="p-6 rounded-lg bg-card border border-border">
      <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
        <SafeIcon name="Folder" size={20} className="text-accent" />
        More Projects
      </h3>

      <div className="space-y-3">
        {relatedProjects.length > 0 ? (
          relatedProjects.map((project) => (
            <button
              key={project.id}
              onClick={() => handleProjectClick(project.id)}
              className="w-full p-3 rounded-lg bg-muted hover:bg-accent/20 border border-border hover:border-accent/50 transition-all duration-200 text-left group"
            >
              <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors line-clamp-2">
                {project.title}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {project.category}
              </p>
            </button>
          ))
        ) : (
          <p className="text-sm text-muted-foreground text-center py-4">
            No related projects available
          </p>
        )}
      </div>

      {/* View All Projects Button */}
      <a
        href="./project-gallery.html"
        className="w-full mt-4 px-4 py-2 rounded-lg bg-gradient-to-r from-accent/20 to-secondary/20 hover:from-accent/30 hover:to-secondary/30 border border-accent/50 transition-all duration-200 text-accent text-sm font-medium flex items-center justify-center gap-2 group"
      >
        View All Projects
        <SafeIcon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
}
