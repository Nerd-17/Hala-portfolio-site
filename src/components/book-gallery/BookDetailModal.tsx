
'use client';

import { useEffect } from 'react';
import SafeIcon from '@/components/common/SafeIcon';
import type { FavoriteBookModel } from '@/data/books';

interface BookDetailModalProps {
  book: FavoriteBookModel;
  isOpen: boolean;
  onClose: () => void;
}

export default function BookDetailModal({ book, isOpen, onClose }: BookDetailModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
        <div
          className="relative w-full max-w-2xl max-h-[90vh] bg-card border border-border rounded-lg shadow-card overflow-y-auto animate-fade-in"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-all duration-300 group"
            aria-label="Close modal"
          >
            <SafeIcon name="X" size={20} className="text-foreground group-hover:text-accent" />
          </button>

          {/* Content */}
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Book Cover */}
              <div className="flex justify-center md:justify-start">
                <div className="relative w-full max-w-xs">
                  <div className="aspect-[3/4] rounded-lg overflow-hidden border border-border shadow-card">
                    <img
                      src={book.coverUrl}
                      alt={`${book.title} by ${book.author}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative glow */}
                  <div className="absolute -inset-2 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-lg -z-10 blur-xl opacity-50"></div>
                </div>
              </div>

              {/* Book Details */}
              <div className="md:col-span-2 flex flex-col gap-6">
                {/* Title and Author */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {book.title}
                  </h2>
                  <p className="text-lg text-accent font-medium mb-2">
                    by {book.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Published in {book.year}
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-accent/50 to-secondary/50"></div>

                {/* Favorite Quote */}
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-border/50 rounded-lg p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <SafeIcon name="Quote" size={24} className="text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-semibold text-accent mb-2">My Favorite Quote</p>
                      <blockquote className="text-lg md:text-xl text-foreground italic leading-relaxed">
                        "{book.favoriteQuote}"
                      </blockquote>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Why I Love This Book
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {book.description}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    onClick={onClose}
                    className="flex-1 px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium flex items-center justify-center gap-2"
                  >
                    <SafeIcon name="BookOpen" size={18} />
                    Back to Gallery
                  </button>
                  <a
                    href="./book-gallery.html"
                    className="flex-1 px-4 py-3 border border-accent text-accent rounded-lg hover:bg-accent/10 transition-all duration-300 font-medium flex items-center justify-center gap-2"
                  >
                    <SafeIcon name="Library" size={18} />
                    All Books
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-br-full -z-10 opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-secondary/10 to-transparent rounded-tl-full -z-10 opacity-50"></div>
        </div>
      </div>
    </>
  );
}
