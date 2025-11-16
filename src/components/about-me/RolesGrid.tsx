
import { HalaProfile } from '@/data/profile';
import SafeIcon from '@/components/common/SafeIcon';

export default function RolesGrid() {
  const { roles } = HalaProfile;

  return (
    <section className="py-16 md:py-24 bg-card/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            My Professional Roles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three interconnected disciplines that define my career and passion
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-accent to-secondary rounded-full mx-auto mt-6"></div>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <div
              key={role.role}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Card background with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Card content */}
              <div className="relative p-8 rounded-lg border border-border/50 group-hover:border-accent/50 transition-all duration-300 h-full flex flex-col">
                {/* Icon */}
                <div className="mb-6 inline-flex">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-secondary/20 border border-accent/30 flex items-center justify-center group-hover:shadow-card transition-all duration-300">
                    <SafeIcon 
                      name={role.iconName} 
                      size={32} 
                      className="text-accent"
                    />
                  </div>
                </div>

                {/* Role Title */}
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                  {role.role}
                </h3>

                {/* Focus Area */}
                <p className="text-sm font-semibold text-accent mb-4">
                  {role.focusArea}
                </p>

                {/* Description */}
                <p className="text-base text-muted-foreground leading-relaxed flex-1">
                  {role.description}
                </p>

                {/* Decorative bottom line */}
                <div className="h-0.5 w-0 bg-gradient-to-r from-accent to-secondary rounded-full group-hover:w-full transition-all duration-300 mt-6"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
