
import SafeIcon from '@/components/common/SafeIcon';

interface SectionDividerProps {
  variant?: 'full' | 'contained';
  withIcon?: boolean;
  iconName?: string;
}

export default function SectionDivider({ 
  variant = 'contained',
  withIcon = false,
  iconName = 'Sparkles'
}: SectionDividerProps) {
  const containerClasses = variant === 'full' 
    ? 'w-full' 
    : 'container mx-auto px-4';

  return (
    <div className={`${containerClasses} py-8 md:py-12`}>
      <div className="relative flex items-center justify-center">
        {/* Left line */}
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-border"></div>
        
        {/* Center icon */}
        {withIcon && (
          <div className="mx-4 w-10 h-10 rounded-full bg-gradient-to-br from-accent/20 to-secondary/20 border border-border flex items-center justify-center">
            <SafeIcon name={iconName} size={20} className="text-accent" />
          </div>
        )}
        
        {/* Right line */}
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-border to-border"></div>
      </div>
    </div>
  );
}
