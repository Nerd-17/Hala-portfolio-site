
import SafeIcon from '@/components/common/SafeIcon';

export default function CallToActionSection() {
  const ctaItems = [
    {
      title: 'Explore My Projects',
      description: 'Discover the 7 projects that showcase my diverse expertise across education, administration, and creative writing.',
      href: './project-gallery.html',
      icon: 'Folder',
      color: 'from-accent to-secondary',
    },
    {
      title: 'My Favorite Books',
      description: 'Explore the 6 books that have shaped my thinking and inspired my work as an author and educator.',
      href: './book-gallery.html',
      icon: 'BookOpen',
      color: 'from-secondary to-accent',
    },
    {
      title: 'Get In Touch',
      description: 'Ready to collaborate or discuss opportunities? I\'d love to hear from you.',
      href: './contact-me.html',
      icon: 'Mail',
      color: 'from-accent via-secondary to-accent',
    },
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What's Next?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your path to explore more about my work and connect with me
          </p>
        </div>

        {/* CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {ctaItems.map((item, index) => (
            <a
              key={item.title}
              href={item.href}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 0.15}s` }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}></div>

              {/* Card */}
              <div className="relative p-8 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-accent/50 transition-all duration-300 h-full flex flex-col">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:shadow-card transition-all duration-300 transform group-hover:scale-110`}>
                  <SafeIcon 
                    name={item.icon} 
                    size={32} 
                    className="text-background"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                  {item.description}
                </p>

                {/* Arrow indicator */}
                <div className="flex items-center gap-2 text-accent text-sm font-semibold">
                  <span>Explore</span>
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

        {/* Decorative elements */}
        <div className="mt-16 flex justify-center">
          <div className="text-center space-y-4">
            <p className="text-muted-foreground italic text-sm">
              "So many books, so little time." - Frank Zappa
            </p>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-accent/50 to-transparent mx-auto"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
