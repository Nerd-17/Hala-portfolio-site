
import { Button } from '@/components/ui/button';
import SafeIcon from '@/components/common/SafeIcon';

interface SectionPreviewProps {
  sectionId: string;
  title: string;
  description: string;
  href: string;
  icon: string;
  accentColor: string;
}

export default function SectionPreview({
  sectionId,
  title,
  description,
  href,
  icon,
  accentColor,
}: SectionPreviewProps) {
  const isEven = sectionId === 'projects' || sectionId === 'testimonials' || sectionId === 'contact';

  return (
    <section className="relative py-16 md:py-24 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        {isEven ? (
          <>
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-secondary/10 to-transparent rounded-full blur-3xl opacity-40"></div>
            <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl opacity-30"></div>
          </>
        ) : (
          <>
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl opacity-40"></div>
            <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-gradient-to-tl from-secondary/10 to-transparent rounded-full blur-3xl opacity-30"></div>
          </>
        )}
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${isEven ? 'md:grid-flow-dense' : ''}`}>
          {/* Icon/Visual Side */}
          <div className={`flex justify-center ${isEven ? 'md:col-start-2' : ''}`}>
            <div className={`relative w-48 h-48 md:w-64 md:h-64 rounded-2xl bg-gradient-to-br ${accentColor} to-secondary/30 p-1 group hover:shadow-card transition-all duration-300`}>
              {/* Inner card */}
              <div className="w-full h-full rounded-xl bg-card/80 backdrop-blur-sm flex items-center justify-center border border-border/50 group-hover:border-accent/50 transition-all duration-300">
                <div className="text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center group-hover:magical-glow transition-all duration-300">
                      <SafeIcon name={icon} size={40} className="text-background" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">
                    {title}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className={`space-y-6 ${isEven ? 'md:col-start-1' : ''}`}>
            {/* Title */}
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                {title}
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-accent to-secondary rounded-full"></div>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>

            {/* Features/Benefits */}
            <div className="space-y-3 pt-4">
              {sectionId === 'about' && (
                <>
                  <div className="flex items-start gap-3">
                    <SafeIcon name="CheckCircle2" size={20} className="text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Diverse expertise in education and administration</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <SafeIcon name="CheckCircle2" size={20} className="text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Published author with creative vision</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <SafeIcon name="CheckCircle2" size={20} className="text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Passionate about shaping minds and narratives</span>
                  </div>
                </>
              )}
              {sectionId === 'projects' && (
                <>
                  <div className="flex items-start gap-3">
                    <SafeIcon name="CheckCircle2" size={20} className="text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">7 professional projects showcased</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <SafeIcon name="CheckCircle2" size={20} className="text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Gallery view with rotating images</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <SafeIcon name="CheckCircle2" size={20} className="text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Detailed project descriptions and insights</span>
                  </div>
                </>
              )}
              {sectionId === 'books' && (
                <>
                  <div className="flex items-start gap-3">
                    <SafeIcon name="CheckCircle2" size={20} className="text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">6 favorite books with covers</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <SafeIcon name="CheckCircle2" size={20} className="text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Inspiring quotes from each book</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <SafeIcon name="CheckCircle2" size={20} className="text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Discover literary influences</span>
                  </div>
                </>
              )}
              {sectionId === 'testimonials' && (
                <>
                  <div className="flex items-start gap-3">
                    <SafeIcon name="CheckCircle2" size={20} className="text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Positive feedback from clients and collaborators</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <SafeIcon name="CheckCircle2" size={20} className="text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Build trust and credibility</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <SafeIcon name="CheckCircle2" size={20} className="text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Real impact stories</span>
                  </div>
                </>
              )}
              {sectionId === 'contact' && (
                <>
                  <div className="flex items-start gap-3">
                    <SafeIcon name="CheckCircle2" size={20} className="text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Easy email communication</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <SafeIcon name="CheckCircle2" size={20} className="text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Quick response to inquiries</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <SafeIcon name="CheckCircle2" size={20} className="text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Open to collaboration opportunities</span>
                  </div>
                </>
              )}
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <a href={href}>
                <Button 
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-accent to-secondary hover:shadow-card transition-all duration-300 text-background font-semibold"
                >
                  Explore {title}
                  <SafeIcon name="ArrowRight" size={18} className="ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
