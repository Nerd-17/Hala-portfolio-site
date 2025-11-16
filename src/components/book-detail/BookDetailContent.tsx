
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import SafeIcon from '@/components/common/SafeIcon';
import type { FavoriteBookModel } from '@/data/books';

interface BookDetailContentProps {
  book: FavoriteBookModel;
}

export default function BookDetailContent({ book }: BookDetailContentProps) {
  const [coverImage, setCoverImage] = useState<string>(book.coverUrl);
  const [isEditMode, setIsEditMode] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setCoverImage(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

return (
    <div id="i4olx" className="relative z-10">
      <div id="iunfy" className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Book Cover Section */}
          <div className="lg:col-span-1 flex flex-col items-center">
            <div className="relative group w-full max-w-sm">
              {/* Cover Image */}
              <div className="relative rounded-lg overflow-hidden shadow-card magical-glow transition-all duration-300 group-hover:shadow-lg">
                <img
                  src={coverImage}
                  alt={book.title}
                  className="w-full h-auto object-cover aspect-[3/4]"
                />
                
{/* Overlay on hover */}
                <div id="iazpa" className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  {isEditMode && (
                    <button
                      onClick={triggerFileInput}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-accent/90 hover:bg-accent text-background px-4 py-2 rounded-lg flex items-center gap-2 font-medium"
                    >
                      <SafeIcon name="Upload" size={18} />
                      Change Cover
                    </button>
                  )}
                </div>
              </div>

              {/* Hidden file input */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />

              {/* Edit button */}
              <button
                onClick={() => setIsEditMode(!isEditMode)}
                className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-all duration-200 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                <SafeIcon name={isEditMode ? "X" : "Edit"} size={16} />
                {isEditMode ? 'Done Editing' : 'Edit Cover'}
              </button>
            </div>

            {/* Book Info Card */}
            <div className="mt-8 w-full bg-card rounded-lg border border-border p-6 space-y-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Author</p>
                <p className="text-lg font-semibold text-foreground">{book.author}</p>
              </div>
              <div className="h-px bg-border"></div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Published</p>
                <p className="text-lg font-semibold text-foreground">{book.year}</p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Favorite Quote */}
            <div className="bg-gradient-to-br from-card to-muted rounded-lg border border-border p-8 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full -mr-12 -mt-12"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/5 rounded-full -ml-16 -mb-16"></div>

              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <SafeIcon name="Quote" size={32} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">My Favorite Quote</p>
                    <blockquote className="text-2xl md:text-3xl font-serif italic text-foreground leading-relaxed">
                      "{book.favoriteQuote}"
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">About This Book</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {book.description}
              </p>
            </div>

            {/* Why I Love It Section */}
            <div className="bg-card rounded-lg border border-border p-8 space-y-4">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-3">
                <SafeIcon name="Heart" size={24} className="text-accent" />
                Why I Love This Book
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                This book resonates deeply with my values as an educator and author. The themes explored within its pages challenge conventional thinking and inspire personal growth. Whether through its narrative brilliance, philosophical depth, or emotional resonance, this work has left an indelible mark on my perspective and creative practice.
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="./book-gallery.html"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border hover:bg-muted transition-all duration-200 text-foreground font-medium group"
              >
                <SafeIcon name="ChevronLeft" size={18} className="group-hover:-translate-x-1 transition-transform" />
                Back to Books
              </a>
              <a
                href="./portfolio-home.html"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent hover:bg-accent/90 transition-all duration-200 text-background font-medium group"
              >
                <SafeIcon name="Home" size={18} />
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Related Books Section */}
      <div className="mt-20 pt-12 border-t border-border">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-foreground mb-8">Explore More Books</h3>
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4">
            {/* This would be populated with other books from the gallery */}
            <a
              href="./book-gallery.html"
              className="flex-shrink-0 px-6 py-3 rounded-lg bg-card border border-border hover:border-accent hover:bg-muted transition-all duration-200 text-foreground font-medium whitespace-nowrap"
            >
              View All Books →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
