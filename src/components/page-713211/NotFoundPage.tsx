
import { Button } from '@/components/ui/button';
import SafeIcon from '@/components/common/SafeIcon';

export default function NotFoundPage() {
  return (
    <div className="relative min-h-[calc(100vh-200px)] flex items-center justify-center overflow-hidden px-4">
      {/* Magical background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-secondary rounded-full animate-float opacity-30" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-secondary rounded-full animate-float opacity-30" style={{ animationDelay: '3s' }}></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-accent/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Error code with magical styling */}
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-accent/20 to-secondary/20 border-2 border-accent/50 magical-glow mb-6">
            <span className="text-5xl md:text-7xl font-bold text-accent">404</span>
          </div>
        </div>

        {/* Main message */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Page Not Found
        </h1>

        {/* Subtitle with magical theme */}
        <p className="text-lg md:text-xl text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          It seems this page has vanished like a spell gone wrong. The page you're looking for doesn't exist in our magical realm.
        </p>

        {/* Decorative quote */}
        <div className="mb-8 p-6 bg-card border border-border rounded-lg animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <blockquote className="text-base md:text-lg text-accent/80 italic font-serif">
            "It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all—in which case, you fail by default."
          </blockquote>
          <cite className="text-sm text-secondary/70 mt-3 block not-italic">
            — J.K. Rowling
          </cite>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <a href="./portfolio-home.html">
            <Button 
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-accent to-secondary hover:from-accent/90 hover:to-secondary/90 text-background font-semibold"
            >
              <SafeIcon name="Home" size={20} className="mr-2" />
              Return to Portfolio
            </Button>
          </a>
          
          <a href="./about-me.html">
            <Button 
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-border hover:bg-muted"
            >
              <SafeIcon name="User" size={20} className="mr-2" />
              About Me
            </Button>
          </a>
        </div>

        {/* Additional navigation links */}
        <div className="mt-12 pt-8 border-t border-border animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <p className="text-sm text-muted-foreground mb-4">Or explore these sections:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a 
              href="./project-gallery.html"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              <SafeIcon name="Briefcase" size={16} />
              My Projects
            </a>
            <a 
              href="./book-gallery.html"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              <SafeIcon name="BookOpen" size={16} />
              Favorite Books
            </a>
            <a 
              href="./client-testimonials.html"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              <SafeIcon name="MessageSquare" size={16} />
              Testimonials
            </a>
            <a 
              href="./contact-me.html"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              <SafeIcon name="Mail" size={16} />
              Contact
            </a>
          </div>
        </div>

        {/* Magical footer message */}
        <div className="mt-12 text-xs text-muted-foreground/60 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <p>✨ "The truth is, the world is what we make of it." ✨</p>
        </div>
      </div>
    </div>
  );
}
