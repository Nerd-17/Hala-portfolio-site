
import SafeIcon from '@/components/common/SafeIcon';

interface FooterProps {
  variant?: 'simple' | 'detailed';
}

export default function Footer({ variant = 'detailed' }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Me', href: './about-me.html' },
    { name: 'My Projects', href: './project-gallery.html' },
    { name: 'Favorite Books', href: './book-gallery.html' },
    { name: 'Testimonials', href: './client-testimonials.html' },
    { name: 'Contact', href: './contact-me.html' },
  ];

  if (variant === 'simple') {
    return (
      <footer className="bg-card border-t border-border mt-auto">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
© {currentYear} Hala. All rights reserved.
            </p>
            <a 
              href="./index.html" 
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              Back to Portfolio
            </a>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center magical-glow">
                <span className="text-2xl font-bold text-background">H</span>
              </div>
<span className="text-xl font-bold text-foreground">Hala</span>
            </div>
            <p className="text-sm text-muted-foreground text-center md:text-left max-w-xs">
              Teacher, Administrator & Author. Crafting stories and shaping minds.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-lg font-semibold text-foreground">Get In Touch</h3>
            <a 
              href="./contact-me.html"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              <SafeIcon name="Mail" size={16} />
              Contact Me
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-6"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
© {currentYear} Hala. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground italic text-center md:text-right">
            "So many books, so little time." - Frank Zappa
          </p>
        </div>
      </div>
    </footer>
  );
}
