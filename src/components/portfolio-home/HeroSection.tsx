
import { Button } from '@/components/ui/button';
import SafeIcon from '@/components/common/SafeIcon';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 md:py-0 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top left corner decoration */}
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-accent/20 rounded-lg transform -rotate-12 opacity-50"></div>
        
        {/* Bottom right corner decoration */}
        <div className="absolute bottom-10 right-10 w-40 h-40 border-2 border-secondary/20 rounded-full opacity-50"></div>
        
        {/* Center glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-96 h-96 bg-gradient-radial-at-t from-accent/10 to-transparent rounded-full blur-3xl opacity-30"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
{/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-accent via-secondary to-accent flex items-center justify-center magical-glow shadow-card overflow-hidden">
              <img 
                src="https://spark-builder.s3.us-east-1.amazonaws.com/user-image/2025/11/13/c8fa99f1-7fe7-469a-ad00-79e80a8a48f6.png"
                alt="Hala Daoudi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Main Headline */}
<div className="space-y-4">
 <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
               Hala
             </h1>
 <p className="text-2xl md:text-3xl text-accent font-serif italic">
               Author&nbsp;<span style={{color: 'rgb(191, 191, 191)', fontSize: '21.25px', fontStyle: 'normal', fontWeight: 600}}>•</span>&nbsp;Teacher&nbsp;<span style={{color: 'rgb(191, 191, 191)', fontSize: '21.25px', fontStyle: 'normal', fontWeight: 600}}>•</span>&nbsp;Administrator
             </p>
           </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Crafting narratives and shaping minds through education, administration, and literature. 
            Welcome to my professional portfolio, inspired by the magic of storytelling.
          </p>

          {/* Decorative line */}
          <div className="flex justify-center gap-2 py-4">
            <div className="h-1 w-8 bg-accent rounded-full"></div>
            <div className="h-1 w-8 bg-secondary rounded-full"></div>
            <div className="h-1 w-8 bg-accent rounded-full"></div>
          </div>

          {/* CTA Buttons */}
<div id="i1tre" className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a href="./about-me-intro.html">
              <Button 
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-accent to-secondary hover:shadow-card transition-all duration-300 text-background font-semibold"
              >
                <SafeIcon name="User" size={18} className="mr-2" />
                Explore My Story
              </Button>
            </a>
            <a href="./contact-me.html">
              <Button 
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-secondary text-secondary hover:bg-secondary/10 font-semibold"
              >
                <SafeIcon name="Mail" size={18} className="mr-2" />
                Get In Touch
              </Button>
            </a>
          </div>

          {/* Quick Navigation */}
          <div className="pt-12 border-t border-border/30">
            <p className="text-sm text-muted-foreground mb-6">Quick Navigation</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="./about-me-intro.html" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 hover:bg-card border border-border/50 hover:border-accent/50 transition-all duration-300 text-sm text-muted-foreground hover:text-accent">
                <SafeIcon name="User" size={16} />
                About Me
              </a>
              <a href="./project-gallery.html" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 hover:bg-card border border-border/50 hover:border-accent/50 transition-all duration-300 text-sm text-muted-foreground hover:text-accent">
                <SafeIcon name="FolderOpen" size={16} />
                Projects
              </a>
              <a href="./book-gallery.html" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 hover:bg-card border border-border/50 hover:border-accent/50 transition-all duration-300 text-sm text-muted-foreground hover:text-accent">
                <SafeIcon name="BookOpen" size={16} />
                Books
              </a>
              <a href="./client-testimonials.html" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 hover:bg-card border border-border/50 hover:border-accent/50 transition-all duration-300 text-sm text-muted-foreground hover:text-accent">
                <SafeIcon name="Star" size={16} />
                Testimonials
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <SafeIcon name="ChevronDown" size={24} className="text-accent/50" />
      </div>
    </section>
  );
}
