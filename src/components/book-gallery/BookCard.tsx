
'use client';

import { useState } from 'react';
import SafeIcon from '@/components/common/SafeIcon';
import type { FavoriteBookModel } from '@/data/books';

interface BookCardProps {
  book: FavoriteBookModel;
  onClick: () => void;
}

export default function BookCard({ book, onClick }: BookCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className="group cursor-pointer h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
      }}
    >
      <div className="relative h-full rounded-lg overflow-hidden bg-card border border-border transition-all duration-300 hover:border-accent hover:shadow-card">
        {/* Book Cover Container */}
        <div className="relative w-full aspect-[3/4] overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
          {/* Book Cover Image */}
          {!imageError ? (
            <img
              src={book.coverUrl}
              alt={`${book.title} by ${book.author}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={() => setImageError(true)}
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-primary to-secondary/50 p-4">
              <SafeIcon name="BookOpen" size={48} className="text-accent/60 mb-2" />
              <p className="text-sm text-center text-foreground/60 font-medium">{book.title}</p>
            </div>
          )}

          {/* Overlay on Hover */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          ></div>

          {/* Magical Glow Effect */}
          <div
            className={`absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          ></div>
        </div>

        {/* Book Info */}
        <div className="p-4 md:p-5 flex flex-col gap-3">
          {/* Title and Author */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-foreground line-clamp-2 group-hover:text-accent transition-colors duration-300">
              {book.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              by {book.author}
            </p>
          </div>

          {/* Quote Preview */}
          <div className="flex-1">
            <p className="text-sm text-secondary/80 italic line-clamp-3 leading-relaxed">
              "{book.favoriteQuote}"
            </p>
          </div>

          {/* Year and CTA */}
          <div className="flex items-center justify-between pt-3 border-t border-border/50">
            <span className="text-xs text-muted-foreground">
              {book.year}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
              className="inline-flex items-center gap-2 text-xs font-medium text-accent hover:text-accent/80 transition-colors duration-300 group-hover:translate-x-1 transition-transform"
            >
              Read More
              <SafeIcon name="ArrowRight" size={14} />
            </button>
          </div>
        </div>

        {/* Decorative Corner */}
        <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-accent/20 to-transparent rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
}
