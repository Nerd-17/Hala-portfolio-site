
'use client';

import { PortfolioBooks } from '@/data/books';
import BookCard from './BookCard';
import { useState } from 'react';
import BookDetailModal from './BookDetailModal';
import type { FavoriteBookModel } from '@/data/books';

interface BookGallerySectionProps {
  limit?: number;
  showTitle?: boolean;
  showViewAll?: boolean;
}

export default function BookGallerySection({ 
  limit,
  showTitle = true,
  showViewAll = true 
}: BookGallerySectionProps) {
  const [selectedBook, setSelectedBook] = useState<FavoriteBookModel | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const displayedBooks = limit ? PortfolioBooks.slice(0, limit) : PortfolioBooks;

  const handleBookClick = (book: FavoriteBookModel) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedBook(null), 300);
  };

  return (
    <>
      {showTitle && (
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            My Favorite Books
          </h2>
          <p className="text-lg text-muted-foreground">
            A curated collection of literary treasures that inspire my work.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
        {displayedBooks.map((book, index) => (
          <div
            key={book.id}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <BookCard 
              book={book}
              onClick={() => handleBookClick(book)}
            />
          </div>
        ))}
      </div>

      {showViewAll && limit && limit < PortfolioBooks.length && (
        <div className="flex justify-center pt-4">
          <a
            href="./book-gallery.html"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium"
          >
            View All Books
            <span>→</span>
          </a>
        </div>
      )}

      {selectedBook && (
        <BookDetailModal 
          book={selectedBook}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}
