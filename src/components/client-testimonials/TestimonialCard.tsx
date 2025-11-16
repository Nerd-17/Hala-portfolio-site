
import type { TestimonialModel } from '@/data/testimonials';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import SafeIcon from '@/components/common/SafeIcon';

interface TestimonialCardProps {
  testimonial: TestimonialModel;
  delay?: number;
}

export default function TestimonialCard({ testimonial, delay = 0 }: TestimonialCardProps) {
  const initials = testimonial.clientName
    .split(' ')
    .map(name => name[0])
    .join('')
    .toUpperCase();

  return (
    <div 
      className="group relative animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Card Background with gradient border effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-secondary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
      
      {/* Main Card */}
      <div className="relative bg-card border border-border rounded-xl p-6 md:p-8 h-full transition-all duration-300 group-hover:border-accent/50 group-hover:shadow-card">
        {/* Star Rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <SafeIcon 
              key={i}
              name="Star" 
              size={16} 
              className="text-accent fill-accent"
            />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-base md:text-lg text-foreground mb-6 italic leading-relaxed font-serif">
          "{testimonial.quote}"
        </blockquote>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-accent/20 to-secondary/20 mb-6"></div>

        {/* Client Info */}
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <Avatar className="w-12 h-12 border-2 border-accent/30 group-hover:border-accent transition-colors">
            <AvatarImage src={testimonial.avatarUrl} alt={testimonial.clientName} />
            <AvatarFallback className="bg-gradient-to-br from-accent to-secondary text-background font-bold">
              {initials}
            </AvatarFallback>
          </Avatar>

          {/* Name and Title */}
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-foreground truncate">
              {testimonial.clientName}
            </p>
            <p className="text-sm text-muted-foreground truncate">
              {testimonial.clientTitle}
            </p>
          </div>
        </div>

        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full"></div>
          <div className="absolute top-2 right-6 w-1 h-1 bg-secondary rounded-full"></div>
          <div className="absolute top-6 right-2 w-1 h-1 bg-secondary rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
