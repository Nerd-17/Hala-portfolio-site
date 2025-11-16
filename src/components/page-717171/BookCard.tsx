
import SafeIcon from '@/components/common/SafeIcon';

interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  quote: string;
  genre: string;
  year: number;
}

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 group-hover:border-accent/50 group-hover:magical-glow">
      {/* Book Cover */}
      <div className="relative aspect-[3/4] bg-gradient-to-br from-primary to-background overflow-hidden">
        <img 
          src={book.coverImage}
          alt={book.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="text-white text-sm font-semibold">View Details</div>
        </div>
      </div>

      {/* Book Info */}
      <div className="p-4">
        <h3 className="font-semibold text-foreground mb-1 line-clamp-2 group-hover:text-accent transition-colors">
          {book.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-1">
          {book.author}
        </p>
        
        {/* Quote Preview */}
        <blockquote className="text-xs text-accent/80 italic mb-3 line-clamp-2 border-l-2 border-accent/30 pl-2">
          "{book.quote}"
        </blockquote>

        {/* Meta */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <SafeIcon name="BookOpen" size={12} />
            {book.genre}
          </span>
          <span>{book.year}</span>
        </div>
      </div>
    </div>
  );
}
