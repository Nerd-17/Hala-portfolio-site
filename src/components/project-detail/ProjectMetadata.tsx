
import SafeIcon from '@/components/common/SafeIcon';

interface ProjectMetadataProps {
  category: string;
  projectId: string;
}

export default function ProjectMetadata({ category, projectId }: ProjectMetadataProps) {
  const getCategoryIcon = (cat: string): string => {
    if (cat.includes('Education') || cat.includes('Teaching')) return 'BookOpen';
    if (cat.includes('Administrative')) return 'Briefcase';
    if (cat.includes('Author')) return 'PenTool';
    return 'Folder';
  };

  return (
    <div className="space-y-6">
      {/* Category Card */}
      <div className="p-6 rounded-lg bg-gradient-to-br from-card to-muted border border-border">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
          Project Category
        </h3>
        
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-accent/20 border border-accent/50 flex items-center justify-center">
            <SafeIcon name={getCategoryIcon(category)} size={24} className="text-accent" />
          </div>
          <div>
            <p className="text-lg font-semibold text-foreground">{category}</p>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="p-6 rounded-lg bg-card border border-border space-y-4">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Project Details
        </h3>
        
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <SafeIcon name="Target" size={18} className="text-accent mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Focus Area</p>
              <p className="text-foreground font-medium">{category}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <SafeIcon name="Zap" size={18} className="text-accent mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Impact</p>
              <p className="text-foreground font-medium">Significant & Measurable</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <SafeIcon name="Award" size={18} className="text-accent mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Status</p>
              <p className="text-foreground font-medium">Completed Successfully</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
