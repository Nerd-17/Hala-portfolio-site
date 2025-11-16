
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import SafeIcon from '@/components/common/SafeIcon';
import BookCard from './BookCard';

interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  quote: string;
  description: string;
  genre: string;
  year: number;
}

const booksData: Book[] = [
  {
    id: 'book-1',
    title: 'Dead Poets Society',
    author: 'N.H. Kleinbaum',
    coverImage: 'https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/11/13/cd4dc1b0-3bca-45b7-9ac4-6257283ed124.png',
    quote: 'Carpe Diem.',
    description: 'A timeless classic about seizing the day and living life to its fullest. This novel explores the power of literature and the importance of individual expression through the story of an inspiring English teacher and his students.',
    genre: 'Drama',
    year: 1989
  },
  {
    id: 'book-2',
    title: 'The Perks of Being a Wallflower',
    author: 'Stephen Chbosky',
    coverImage: 'https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/11/13/46389620-c6b8-4b99-9455-993ba946c378.png',
    quote: 'We accept the love we think we deserve.',
    description: 'A poignant coming-of-age story told through letters, exploring friendship, love, and the challenges of adolescence. This novel resonates deeply with anyone who has felt like an outsider.',
    genre: 'Young Adult',
    year: 1999
  },
  {
    id: 'book-3',
    title: 'WandaVision: The Official Novelization',
    author: 'Laura Donney',
    coverImage: 'https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/11/13/03fd7221-8776-48a9-a3cd-ae00009ca8f2.png',
    quote: 'What is grief, if not love persevering?',
    description: 'A beautiful exploration of love, loss, and resilience. This novelization captures the emotional depth of the story and the power of love to transcend all boundaries.',
    genre: 'Science Fiction',
    year: 2021
  },
  {
    id: 'book-4',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    coverImage: 'https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/11/13/9d669197-1796-49cc-a438-304fcba7cfce.png',
    quote: 'So many books, so little time.',
    description: 'An epic fantasy adventure that inspired generations of readers. The journey of Bilbo Baggins teaches us about courage, friendship, and the unexpected adventures life can bring.',
    genre: 'Fantasy',
    year: 1937
  },
  {
    id: 'book-5',
    title: 'The Tempest',
    author: 'William Shakespeare',
    coverImage: 'https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/11/13/bf0c2ab3-86ac-482c-a26e-09024d92db04.png',
    quote: 'Hell is empty and all the devils are here.',
    description: 'A masterpiece of dramatic literature exploring themes of power, forgiveness, and magic. Shakespeare\'s final play remains a testament to the enduring power of storytelling.',
    genre: 'Drama',
    year: 1610
  },
  {
    id: 'book-6',
    title: 'Teen Wolf: The Novel',
    author: 'Jeff Davis',
    coverImage: 'https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/11/13/271b5947-2e1e-47fb-83ee-14de5c18252d.png',
    quote: 'Life can\'t ever be all bad or all good. You know, eventually, things have to come back to the middle.',
    description: 'A gripping supernatural tale that explores the balance between light and darkness. This story reminds us that life is about finding equilibrium and accepting both our strengths and weaknesses.',
    genre: 'Supernatural',
    year: 2011
  }
];

export default function BookDetailContent() {
  const [selectedBookId, setSelectedBookId] = useState<string>('book-1');
  const [selectedBook, setSelectedBook] = useState<Book>(booksData[0]);

  useEffect(() => {
    // Get book ID from URL query parameter
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const bookId = params.get('id');
      
      if (bookId) {
        const book = booksData.find(b => b.id === bookId);
        if (book) {
          setSelectedBookId(bookId);
          setSelectedBook(book);
        }
      }
    }
  }, []);

  const handleBookSelect = (bookId: string) => {
    const book = booksData.find(b => b.id === bookId);
    if (book) {
      setSelectedBookId(bookId);
      setSelectedBook(book);
      // Update URL without page reload
      if (typeof window !== 'undefined') {
        window.history.replaceState({}, '', `./page-717171.html?id=${bookId}`);
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Main Book Display */}
        <div className="lg:col-span-2">
          <div className="bg-card rounded-lg border border-border overflow-hidden shadow-card magical-glow">
            {/* Book Cover */}
            <div className="relative aspect-video md:aspect-auto md:h-96 bg-gradient-to-br from-primary to-background overflow-hidden">
              <img 
                src={selectedBook.coverImage}
                alt={selectedBook.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
            </div>

            {/* Book Info */}
            <div className="p-8 md:p-10">
              <div className="mb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {selectedBook.title}
                </h1>
                <p className="text-lg text-muted-foreground mb-4">
                  by <span className="text-accent font-semibold">{selectedBook.author}</span>
                </p>
                
                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <SafeIcon name="BookOpen" size={16} className="text-accent" />
                    <span>{selectedBook.genre}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SafeIcon name="Calendar" size={16} className="text-accent" />
                    <span>{selectedBook.year}</span>
                  </div>
                </div>
              </div>

              {/* Featured Quote */}
              <div className="bg-gradient-to-br from-primary/20 to-accent/10 border border-accent/30 rounded-lg p-6 md:p-8 mb-8">
                <div className="flex items-start gap-4">
                  <SafeIcon name="Quote" size={24} className="text-accent flex-shrink-0 mt-1" />
                  <blockquote className="text-xl md:text-2xl font-serif text-foreground italic">
                    "{selectedBook.quote}"
                  </blockquote>
                </div>
              </div>

              {/* Description */}
              <div className="prose prose-invert max-w-none mb-8">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {selectedBook.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="./book-gallery.html">
                  <Button variant="outline" className="w-full sm:w-auto">
                    <SafeIcon name="ArrowLeft" size={16} className="mr-2" />
                    Back to Books
                  </Button>
                </a>
                <a href="./portfolio-home.html">
                  <Button variant="ghost" className="w-full sm:w-auto">
                    <SafeIcon name="Home" size={16} className="mr-2" />
                    Home
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Books Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <h2 className="text-xl font-bold text-foreground mb-6">All Books</h2>
            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
              {booksData.map((book) => (
                <button
                  key={book.id}
                  onClick={() => handleBookSelect(book.id)}
                  className={`w-full text-left transition-all duration-300 ${
                    selectedBookId === book.id
                      ? 'bg-accent/20 border-accent'
                      : 'bg-card border-border hover:border-accent/50'
                  } border rounded-lg p-4 group`}
                >
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-1 line-clamp-2">
                    {book.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-1">
                    {book.author}
                  </p>
                  {selectedBookId === book.id && (
                    <div className="mt-2 flex items-center gap-2 text-accent text-sm">
                      <SafeIcon name="Check" size={14} />
                      <span>Currently viewing</span>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Books Section */}
      <div className="mt-16 pt-12 border-t border-border">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          Explore Other Favorites
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {booksData
            .filter(book => book.id !== selectedBookId)
            .slice(0, 3)
            .map((book) => (
              <button
                key={book.id}
                onClick={() => handleBookSelect(book.id)}
                className="group text-left"
              >
                <BookCard book={book} />
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}
