
import { Button } from '@/components/ui/button';
import SafeIcon from '@/components/common/SafeIcon';

export default function CallToActionSection() {
  const ctaItems = [
    {
      title: 'Explore My Projects',
      description: 'Discover the diverse projects I\'ve worked on across education, administration, and creative writing.',
      icon: 'FolderOpen',
      href: './project-gallery.html',
      color: 'from-accent to-secondary'
    },
    {
      title: 'My Favorite Books',
      description: 'Explore the literary works that have shaped my thinking and inspired my writing.',
      icon: 'BookOpen',
      href: './book-gallery.html',
      color: 'from-secondary to-accent'
    },
    {
      title: 'Get In Touch',
      description: 'Ready to collaborate or discuss opportunities? Let\'s connect!',
      icon: 'Mail',
      href: './contact-me.html',
      color: 'from-accent via-secondary to-accent'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What's Next?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continue your journey through my portfolio to discover my work and connect with me
          </p>
        </div>

        {/* CTA Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ctaItems.map((item, index) => (
            <a
              key={item.title}
              href={item.href}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

              {/* Card */}
              <div className="relative p-8 rounded-lg border-2 border-border group-hover:border-accent/50 transition-all duration-300 h-full flex flex-col bg-card/50 group-hover:bg-card/80">
                {/* Icon */}
                <div className="mb-6 inline-flex">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.color} opacity-20 flex items-center justify-center group-hover:opacity-30 transition-opacity duration-300`}>
                    <SafeIcon 
                      name={item.icon} 
                      size={28} 
                      className="text-accent"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-base text-muted-foreground leading-relaxed flex-1 mb-6">
                  {item.description}
                </p>

                {/* Arrow indicator */}
                <div className="flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-semibold">Explore</span>
                  <SafeIcon 
                    name="ArrowRight" 
                    size={16}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center mt-12">
          <Button 
            asChild
            size="lg"
            className="bg-gradient-to-r from-accent to-secondary hover:shadow-card transition-all duration-300"
          >
            <a href="./portfolio-home.html" className="flex items-center gap-2">
              <SafeIcon name="Home" size={20} />
              Back to Portfolio Home
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
