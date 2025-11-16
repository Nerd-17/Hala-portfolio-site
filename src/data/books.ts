
        
export interface FavoriteBookModel {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  favoriteQuote: string;
  year: number;
  description: string;
}

export const PortfolioBooks: FavoriteBookModel[] = [
{
    id: "b1",
    title: "The Lost Symbol",
    author: "Dan Brown",
    coverUrl: "/images/lost-symbol.jpg",
    favoriteQuote: "There is a fine line between insanity and genius.",
    year: 2009,
    description: "A thrilling adventure that blends history, symbology, and secret societies. This novel explores ancient mysteries hidden within modern power structures, forcing characters to confront profound questions about knowledge and humanity's potential. A masterclass in pacing and intricate plot construction."
  },
  {
    id: "b2",
    title: "The Secret History",
    author: "Donna Tartt",
    coverUrl: "/images/secret-history.jpg",
    favoriteQuote: "Forgive me, for all the things I did but mostly for the ones that I did not.",
    year: 1992,
    description: "A dark academic novel exploring the fatalistic spiral of a group of classics students in Vermont. It's a gripping story about aesthetics, moral decay, and the limits of intellectual elitism. I admire its prose, character depth, and profoundly atmospheric world-building."
  },
  {
    id: "b3",
    title: "1984",
    author: "George Orwell",
    coverUrl: "/images/1984.jpg",
    favoriteQuote: "War is peace. Freedom is slavery. Ignorance is strength.",
    year: 1949,
    description: "The definitive dystopian novel. '1984' remains a terrifying and highly relevant exploration of totalitarianism, surveillance, and the manipulation of truth. It is essential reading for understanding political power and linguistic control."
  },
  {
    id: "b4",
    title: "The Help",
    author: "Kathryn Stockett",
    coverUrl: "/images/the-help.jpeg",
    favoriteQuote: "You is kind. You is smart. You is important.",
    year: 2009,
    description: "Set in 1960s Mississippi, this novel shares the story of black maids working for white families. It is a powerful, emotional narrative about friendship, bravery, and finding a voice in the face of profound inequality. Its depiction of complex human relationships is masterful."
  },
  {
    id: "b5",
    title: "Dead Poets Society",
    author: "Nancy H. Kleinbaum",
    coverUrl: "/images/dead-poets.jpg",
    favoriteQuote: "Only in their dreams can men be truly free. 'Twas always thus, and always thus will be.",
    year: 1989,
    description: "Based on the iconic film, this narrative celebrates the transformative power of poetry and the importance of independent thought against rigid traditionalism. It resonates deeply with my experience as an educator dedicated to Carpe Diem. (Seize the Day)."
  },
  {
    id: "b6",
    title: "Doctor Faustus",
    author: "Christopher Marlowe",
    coverUrl: "/images/doctor-Faustus.jpg",
    favoriteQuote: "Fools that will laugh on earth, most weep in hell.",
    year: 1592,
    description: "A foundational work of Elizabethan tragedy. Marlowe's play on the famous Faust legend, where a scholar trades his soul for knowledge and power, explores themes of ambition, sin, and the inevitable consequences of overreaching intellectual curiosity. A dramatic and philosophical masterpiece."
  },
];
    