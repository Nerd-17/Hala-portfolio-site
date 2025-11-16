
import SafeIcon from '@/components/common/SafeIcon';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { name: string; href: string }[];
  size?: 'small' | 'medium' | 'large';
}

export default function PageHero({ 
  title, 
  subtitle, 
  breadcrumbs,
  size = 'medium' 
}: PageHeroProps) {
  const sizeClasses = {
    small: 'py-12 md:py-16',
    medium: 'py-16 md:py-24',
    large: 'py-24 md:py-32',
  };

  const titleSizeClasses = {
    small: 'text-3xl md:text-4xl',
    medium: 'text-4xl md:text-5xl lg:text-6xl',
    large: 'text-5xl md:text-6xl lg:text-7xl',
  };

return (
    <div id="izwci" className={`relative ${sizeClasses[size]} bg-gradient-to-b from-card to-background border-b border-border overflow-hidden`}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            {breadcrumbs.map((crumb, index) => (
              <div key={crumb.name} className="flex items-center gap-2">
                {index > 0 && <SafeIcon name="ChevronRight" size={14} />}
                <a 
                  href={crumb.href}
                  className="hover:text-accent transition-colors"
                >
                  {crumb.name}
                </a>
              </div>
            ))}
          </nav>
        )}

        {/* Title */}
        <h1 className={`${titleSizeClasses[size]} font-bold text-foreground mb-4 text-balance animate-fade-in`}>
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {subtitle}
          </p>
        )}

        {/* Decorative flourish */}
        <div className="mt-8 flex justify-center md:justify-start">
          <div className="h-1 w-24 bg-gradient-to-r from-accent to-secondary rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
