
'use client';

import { useState } from 'react';
import { PortfolioBooks } from '@/data/books';
import BookCard from './BookCard';
import BookDetailModal from './BookDetailModal';
import type { FavoriteBookModel } from '@/data/books';

export default function BookGalleryGrid() {
  const [selectedBook, setSelectedBook] = useState<FavoriteBookModel | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {PortfolioBooks.map((book, index) => (
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

      {/* Book Detail Modal */}
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
