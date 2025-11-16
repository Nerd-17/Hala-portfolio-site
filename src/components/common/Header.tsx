
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import SafeIcon from '@/components/common/SafeIcon';

interface HeaderProps {
  variant?: 'default' | 'transparent';
}

export default function Header({ variant = 'default' }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Me', href: './about-me.html' },
    { name: 'My Projects', href: './project-gallery.html' },
    { name: 'Favorite Books', href: './book-gallery.html' },
    { name: 'Testimonials', href: './client-testimonials.html' },
    { name: 'Contact', href: './contact-me.html' },
  ];

  const headerClasses = `
    fixed top-0 left-0 right-0 z-50 transition-all duration-300
    ${variant === 'transparent' && !isScrolled 
      ? 'bg-transparent' 
      : 'bg-background/95 backdrop-blur-md border-b border-border shadow-soft'
    }
  `;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="./index.html" className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center transition-all duration-300 group-hover:magical-glow">
              <span className="text-xl md:text-2xl font-bold text-background">H</span>
            </div>
<span className="text-lg md:text-xl font-bold text-foreground hidden sm:inline-block">
              Hala
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <SafeIcon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-card border-border">
              <div className="flex flex-col gap-6 mt-8">
                <div className="flex items-center gap-3 pb-4 border-b border-border">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
                    <span className="text-xl font-bold text-background">H</span>
                  </div>
<span className="text-lg font-bold text-foreground">Hala</span>
                </div>
                
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-all duration-200"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
