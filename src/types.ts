export interface PhotoItem {
  id: string;
  url: string;
  caption?: string;
  rotation?: number; // e.g. -1.5deg or 2deg for polaroid feel
  alt?: string;
}

export interface SpecialLetter {
  title: string;
  paragraphs: string[];
  thanksText: string;
  finalPhotoUrl: string;
  finalPhotoCaption?: string;
  yearsRange: string;
  closingQuote: string;
}

export interface MemoryPage {
  id: string;
  pageNumber: string; // e.g., "PÁGINA 01"
  date: string; // e.g., "27 DE AGOSTO DE 2024"
  monthKey: string; // e.g., "AGOSTO 2024"
  title: string; // e.g., "El comienzo"
  subtitle?: string;
  location?: string;
  photos: PhotoItem[];
  storyText: string;
  quote: string;
  isSpecialFinal?: boolean;
  specialLetter?: SpecialLetter;
}

export type ViewMode = 'cover' | 'album' | 'gallery' | 'timeline';
