import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, MapPin, Maximize2, Calendar, Quote, Home, Edit3 } from 'lucide-react';
import { MemoryPage, PhotoItem } from '../types';

interface PageLayoutProps {
  page: MemoryPage;
  currentIndex: number;
  totalPages: number;
  onNext: () => void;
  onPrev: () => void;
  onGoHome: () => void;
  onOpenPhoto: (photo: PhotoItem) => void;
  onOpenEditPage?: () => void;
  allPages: MemoryPage[];
  onSelectPage: (index: number) => void;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  page,
  currentIndex,
  totalPages,
  onNext,
  onPrev,
  onGoHome,
  onOpenPhoto,
  onOpenEditPage,
  allPages,
  onSelectPage,
}) => {
  // Keyboard navigation listener (Left/Right arrow keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        onNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        onPrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onNext, onPrev]);

  return (
    <div className="min-h-screen w-full bg-paper-cream flex flex-col justify-between py-6 px-4 sm:px-8 selection:bg-[#722F37] selection:text-white">
      {/* Book Container Wrapper */}
      <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col justify-between my-2">
        {/* Top Header Controls & Progress */}
        <div className="flex items-center justify-between border-b border-[#E3DAC9] pb-4 mb-8">
          <button
            onClick={onGoHome}
            className="flex items-center gap-2 text-xs font-sans-clean font-medium text-[#5C524A] hover:text-[#722F37] transition-colors py-1 px-3 rounded-full bg-[#F3EDE2] border border-[#E0D5C3]"
            title="Volver a la portada"
          >
            <Home className="w-3.5 h-3.5 text-[#722F37]" />
            <span className="hidden sm:inline">Portada</span>
          </button>

          {/* Page Counter & Date Indicator */}
          <div className="flex items-center gap-2 text-center">
            <span className="text-xs font-sans-clean tracking-[0.2em] font-semibold text-[#722F37] uppercase">
              {page.pageNumber}
            </span>
            <span className="text-[#B5A895]">&bull;</span>
            <span className="text-xs font-sans-clean text-[#6B5F54] uppercase tracking-wider">
              {currentIndex + 1} de {totalPages}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {onOpenEditPage && (
              <button
                onClick={onOpenEditPage}
                className="flex items-center gap-1.5 text-xs font-sans-clean text-[#5C524A] hover:text-[#722F37] transition-colors py-1 px-3 rounded-full bg-[#F3EDE2] border border-[#E0D5C3]"
                title="Editar este recuerdo"
              >
                <Edit3 className="w-3.5 h-3.5 text-[#722F37]" />
                <span className="hidden sm:inline">Editar</span>
              </button>
            )}
          </div>
        </div>

        {/* Animated Page Main Content */}
        <AnimatePresence mode="wait">
          <motion.article
            key={page.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="bg-[#FDFBF7] paper-shadow border border-[#EBE3D5] rounded-sm p-6 sm:p-10 md:p-12 relative overflow-hidden"
          >
            {/* Corner Decorative Accent */}
            <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none opacity-20 bg-gradient-to-bl from-[#722F37] to-transparent" />

            {/* Page Title Header */}
            <header className="mb-8 text-center sm:text-left">
              <div className="flex flex-wrap items-center gap-3 text-xs font-sans-clean text-[#722F37] tracking-wider uppercase font-semibold mb-2">
                <span className="inline-flex items-center gap-1 bg-[#F5EFE6] px-2.5 py-1 rounded-sm border border-[#E6DCCF]">
                  <Calendar className="w-3 h-3 text-[#722F37]" />
                  {page.date}
                </span>
                {page.location && (
                  <span className="inline-flex items-center gap-1 text-[#6B5F54]">
                    <MapPin className="w-3 h-3 text-[#722F37]" />
                    {page.location}
                  </span>
                )}
              </div>

              <h2 className="text-2xl sm:text-4xl font-serif-display font-semibold text-[#1A1817] leading-tight">
                {page.title}
              </h2>
              {page.subtitle && (
                <p className="text-sm sm:text-base font-serif-display italic text-[#6B5F54] mt-1">
                  {page.subtitle}
                </p>
              )}
            </header>

            {/* Content Layout: Photos & Story Text */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-10">
              {/* Photo Section (Polaroid / Printed Photo Style) */}
              {page.photos.length > 0 && (
                <div
                  className={`md:col-span-5 flex flex-col gap-6 items-center justify-center ${
                    page.photos.length > 1 ? 'md:col-span-6' : ''
                  }`}
                >
                  {page.photos.map((photo, pIdx) => {
                    const rot = photo.rotation || (pIdx % 2 === 0 ? -1.5 : 1.5);
                    return (
                      <motion.div
                        key={photo.id || pIdx}
                        initial={{ opacity: 0, scale: 0.95, rotate: 0 }}
                        animate={{ opacity: 1, scale: 1, rotate: rot }}
                        transition={{ duration: 0.7, delay: 0.15 * pIdx }}
                        className="photo-frame group cursor-pointer max-w-sm w-full relative"
                        onClick={() => onOpenPhoto(photo)}
                      >
                        <div className="relative overflow-hidden aspect-[4/3] bg-[#F3EFE6]">
                          <img
                            src={photo.url}
                            alt={photo.alt || page.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="p-2 rounded-full bg-white/90 text-[#1A1817] shadow-md">
                              <Maximize2 className="w-4 h-4 text-[#722F37]" />
                            </span>
                          </div>
                        </div>

                        {photo.caption && (
                          <p className="text-xs font-handwriting text-[#4A423D] text-center mt-3 pt-1 border-t border-[#F0EBE1] tracking-wide text-base">
                            {photo.caption}
                          </p>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              )}

              {/* Story Narrative Text */}
              <div
                className={`flex flex-col justify-between ${
                  page.photos.length > 0
                    ? page.photos.length > 1
                      ? 'md:col-span-6'
                      : 'md:col-span-7'
                    : 'md:col-span-12'
                }`}
              >
                <div className="prose prose-stone max-w-none text-sm sm:text-base leading-relaxed text-[#2C221E] font-sans-clean space-y-4">
                  {page.storyText.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="first-letter:text-3xl first-letter:font-serif-display first-letter:font-bold first-letter:text-[#722F37] first-letter:mr-1">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Highlighted Quote Box */}
                {page.quote && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-8 p-4 sm:p-5 bg-[#F7F2E9] border-l-2 border-[#722F37] rounded-r-sm relative"
                  >
                    <Quote className="w-5 h-5 text-[#722F37]/30 absolute top-3 right-3" />
                    <p className="font-serif-display italic text-base sm:text-lg text-[#5C1D24] leading-snug">
                      &ldquo;{page.quote}&rdquo;
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.article>
        </AnimatePresence>

        {/* Story Progress Line */}
        <div className="mt-8 mb-4 px-2">
          <div className="flex items-center justify-between text-[11px] font-sans-clean text-[#7A7067] uppercase tracking-wider mb-2">
            <span>{allPages[0]?.monthKey || 'AGO 2024'}</span>
            <span className="font-medium text-[#722F37]">
              Capítulo {currentIndex + 1} &bull; {page.monthKey}
            </span>
            <span>{allPages[allPages.length - 1]?.monthKey || 'FEB 2026'}</span>
          </div>

          <div className="relative h-1.5 w-full bg-[#E5DDCF] rounded-full overflow-hidden flex cursor-pointer">
            <div
              className="h-full bg-gradient-to-r from-[#5C1D24] to-[#722F37] transition-all duration-500 rounded-full"
              style={{ width: `${((currentIndex + 1) / totalPages) * 100}%` }}
            />
          </div>

          {/* Quick Node Jump Markers */}
          <div className="flex justify-between mt-1.5 px-0.5">
            {allPages.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => onSelectPage(idx)}
                title={`${p.pageNumber}: ${p.title}`}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'bg-[#722F37] scale-125 ring-2 ring-[#722F37]/30'
                    : idx < currentIndex
                    ? 'bg-[#8C7A68]'
                    : 'bg-[#D6CBB8] hover:bg-[#A89883]'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Pagination Controls */}
        <nav className="flex justify-between items-center pt-2 border-t border-[#E3DAC9]">
          <button
            onClick={onPrev}
            disabled={currentIndex === 0}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-sm font-serif-display text-sm tracking-wide transition-all duration-300 ${
              currentIndex === 0
                ? 'opacity-40 cursor-not-allowed text-[#9E9283]'
                : 'bg-[#EFE9DC] hover:bg-[#E2D8C5] text-[#2C221E] shadow-sm hover:shadow'
            }`}
          >
            <ChevronLeft className="w-4 h-4 text-[#722F37]" />
            <span>Anterior</span>
          </button>

          <span className="text-xs font-serif-display italic text-[#6B5F54] hidden sm:inline">
            Usa las flechas del teclado para navegar
          </span>

          <button
            onClick={onNext}
            className="flex items-center gap-2 px-6 py-2.5 rounded-sm bg-[#2C221E] hover:bg-[#1A1817] text-[#FDFBF7] font-serif-display text-sm tracking-wide transition-all duration-300 shadow-sm hover:shadow"
          >
            <span>
              {currentIndex === totalPages - 1 ? 'Capítulo Final' : 'Siguiente'}
            </span>
            <ChevronRight className="w-4 h-4 text-[#D4C3A3]" />
          </button>
        </nav>
      </div>
    </div>
  );
};
