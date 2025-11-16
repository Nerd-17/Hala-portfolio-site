
import { useState, useEffect } from 'react';

const quotes = [
  { text: "Carpe Diem.", author: "Tom Schulman" },
  { text: "We accept the love we think we deserve.", author: "Stephen Chbosky" },
  { text: "What is grief, if not love persevering?", author: "Laura Donney" },
  { text: "So many books, so little time.", author: "Frank Zappa" },
  { text: "Hell is empty and all the devils are here.", author: "William Shakespeare" },
  { text: "Life can't ever be all bad or all good. You know, eventually, things have to come back to the middle.", author: "Jeff Davis" },
  { text: "No amount of money ever bought a second of time.", author: "Christopher Markus" },
  { text: "Literature is the most agreeable way of ignoring life.", author: "Fernando Pessoa" },
  { text: "Have a heart that never hardens, and a temper that never tires, and a touch that never hurts.", author: "Charles Dickens" },
  { text: "Monsters are real, and ghosts are real too. They live inside us, and sometimes, they win.", author: "Stephen King" },
];

export default function QuoteBackground() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
        setIsVisible(true);
      }, 1000);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const currentQuote = quotes[currentQuoteIndex];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Magical particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-secondary rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-accent rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-secondary rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Quote display */}
      <div className="absolute inset-0 flex items-center justify-center p-8">
<div 
          className={`max-w-4xl text-center transition-all duration-1000 ${
            isVisible ? 'opacity-50 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <blockquote className="text-2xl md:text-4xl lg:text-5xl font-serif text-accent/70 italic leading-relaxed mb-4">
            "{currentQuote.text}"
          </blockquote>
          <cite className="text-lg md:text-xl text-secondary/80 not-italic">
            — {currentQuote.author}
          </cite>
        </div>
      </div>

      {/* Parchment texture overlay */}
      <div className="absolute inset-0 parchment-texture opacity-30"></div>
    </div>
  );
}
