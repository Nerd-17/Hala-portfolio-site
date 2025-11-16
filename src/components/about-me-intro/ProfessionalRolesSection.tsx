
import { HalaProfile } from '@/data/profile';
import SafeIcon from '@/components/common/SafeIcon';

export default function ProfessionalRolesSection() {
  const { roles } = HalaProfile;

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-background via-card/30 to-background border-y border-border/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            My Areas of Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three interconnected passions that define my professional journey
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-16 bg-gradient-to-r from-accent to-secondary rounded-full"></div>
          </div>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {roles.map((role, index) => (
            <div
              key={role.role}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 0.15}s` }}
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>

              {/* Card Content */}
              <div className="relative p-6 md:p-8 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-accent/50 transition-all duration-300 h-full flex flex-col">
                {/* Icon */}
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-accent/20 to-secondary/20 border border-accent/30 flex items-center justify-center mb-4 group-hover:shadow-card transition-all duration-300">
                  <SafeIcon 
                    name={role.iconName} 
                    size={28} 
                    className="text-accent"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {role.role}
                </h3>

                {/* Focus Area */}
                <p className="text-sm font-semibold text-secondary mb-3">
                  {role.focusArea}
                </p>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {role.description}
                </p>

                {/* Decorative element */}
                <div className="mt-4 pt-4 border-t border-border/30 flex items-center gap-2 text-accent text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <SafeIcon name="Sparkles" size={14} />
                  <span>Learn more</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative line */}
        <div className="mt-12 flex justify-center">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
