import React from 'react';
import { motion } from 'motion/react';
import { Home, Heart, Maximize2, RotateCcw, Edit3, Calendar } from 'lucide-react';
import { MemoryPage, PhotoItem } from '../types';

interface FinalChapterPageProps {
  page: MemoryPage;
  currentIndex: number;
  totalPages: number;
  onPrev: () => void;
  onGoHome: () => void;
  onOpenPhoto: (photo: PhotoItem) => void;
  onOpenEditPage?: () => void;
}

export const FinalChapterPage: React.FC<FinalChapterPageProps> = ({
  page,
  currentIndex,
  onPrev,
  onGoHome,
  onOpenPhoto,
  onOpenEditPage,
}) => {
  const letter = page.specialLetter || {
    title: 'Antes de cerrar este álbum...',
    paragraphs: [
      'Hay historias que no necesitan ser eternas en el tiempo para ser infinitas en el corazón. Cuando miro hacia atrás y recorro cada una de estas fechas, desde aquel cálido agosto de 2024 hasta este febrero de 2026, no puedo sentir más que una profunda serenidad y un sincero agradecimiento.',
      'Gracias por tus palabras cuando hicieron falta, por tu risa limpia en las tardes más grises, por los silencios compartidos que jamás resultaron incómodos y por la luz que aportaste a mi vida durante todo este tiempo.',
      'Fue un viaje hermoso, lleno de momentos reales, aprendizajes profundos y recuerdos que conservaré siempre en un lugar muy especial. Deseo con el alma que la vida te devuelva multiplicada toda la calidez, la alegría y la belleza que le regalaste a la mía.'
    ],
    thanksText: 'Gracias por formar parte de una parte de mi historia.',
    finalPhotoUrl: 'https://images.unsplash.com/photo-1499209974431-9dac3ada0097?q=80&w=1400&auto=format&fit=crop',
    finalPhotoCaption: 'Para siempre en el recuerdo',
    yearsRange: 'Agosto 2024 — Febrero 2026',
    closingQuote: 'Algunas historias terminan, pero ciertos recuerdos siempre encuentran la manera de quedarse.'
  };

  return (
    <div className="min-h-screen w-full bg-paper-dark text-[#F3EFE6] flex flex-col justify-between py-8 px-4 sm:px-8 selection:bg-[#722F37] selection:text-white">
      <div className="max-w-3xl mx-auto w-full flex-1 flex flex-col justify-between my-2">
        {/* Top Header Controls */}
        <div className="flex items-center justify-between border-b border-[#3A332E] pb-4 mb-8">
          <button
            onClick={onPrev}
            className="flex items-center gap-2 text-xs font-sans-clean text-[#C4B7A5] hover:text-[#E8DCCB] transition-colors py-1.5 px-3 rounded-full bg-[#2A2420] border border-[#423933]"
          >
            &larr; <span className="hidden sm:inline">Capítulo Anterior</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-xs font-sans-clean tracking-[0.25em] font-semibold text-[#D4A373] uppercase">
              Epílogo
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Botón de editar eliminado a petición del usuario */}
            <button
              onClick={onGoHome}
              className="flex items-center gap-1.5 text-xs font-sans-clean text-[#C4B7A5] hover:text-[#E8DCCB] transition-colors py-1.5 px-3 rounded-full bg-[#2A2420] border border-[#423933]"
            >
              <Home className="w-3.5 h-3.5 text-[#D4A373]" />
              <span className="hidden sm:inline">Portada</span>
            </button>
          </div>
        </div>

        {/* Main Emotional Letter Container */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="bg-[#24201D] border border-[#3E3630] rounded-sm p-6 sm:p-12 paper-shadow relative my-4 overflow-hidden"
        >
          {/* Subtle Burgundy Watermark */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#722F37]/20 to-transparent pointer-events-none" />

          {/* Title */}
          <header className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#342C27] border border-[#4A3F38] text-[#D4A373] mb-4">
              <Heart className="w-4 h-4 text-[#722F37]" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif-display font-medium text-[#FDFBF7] tracking-tight">
              {letter.title}
            </h2>
            <div className="w-16 h-[1px] bg-[#722F37] mx-auto mt-4" />
          </header>

          {/* Letter Body Content */}
          <div className="space-y-6 text-base sm:text-lg font-serif-display text-[#E5DDCF] leading-relaxed max-w-2xl mx-auto">
            {letter.paragraphs.map((para, idx) => (
              <p key={idx} className="indent-4 sm:indent-8">
                {para}
              </p>
            ))}
          </div>

          {/* Dedicated Gratitude Phrase */}
          <div className="my-12 py-6 border-y border-[#3E3630] text-center">
            <p className="text-xl sm:text-2xl font-serif-title italic text-[#D4A373]">
              &ldquo;{letter.thanksText}&rdquo;
            </p>
          </div>

          {/* Final Large Photograph */}
          <div className="my-10 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="photo-frame max-w-xl w-full cursor-pointer bg-[#FFFFFF] p-3 sm:p-4 rounded-sm shadow-2xl"
              onClick={() =>
                onOpenPhoto({
                  id: 'final-photo',
                  url: letter.finalPhotoUrl,
                  caption: letter.finalPhotoCaption,
                  alt: 'Fotografía final'
                })
              }
            >
              <div className="relative overflow-hidden aspect-[16/10] bg-[#1A1817]">
                <img
                  src={letter.finalPhotoUrl}
                  alt="Última fotografía del álbum"
                  className="w-full h-full object-cover filter brightness-95 hover:brightness-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-2.5 rounded-full bg-white/90 text-[#1A1817]">
                    <Maximize2 className="w-4 h-4 text-[#722F37]" />
                  </span>
                </div>
              </div>
              {letter.finalPhotoCaption && (
                <p className="text-xs sm:text-sm font-handwriting text-[#4A423D] text-center mt-3 pt-2 border-t border-[#F0EBE1] text-lg">
                  {letter.finalPhotoCaption}
                </p>
              )}
            </motion.div>
          </div>

          {/* Final Closure Dates & Quote */}
          <footer className="text-center pt-6 space-y-4">
            <p className="text-xs font-sans-clean uppercase tracking-[0.35em] text-[#722F37] font-semibold">
              {letter.yearsRange}
            </p>

            <blockquote className="text-base sm:text-xl font-serif-display italic text-[#C9BEAF] max-w-xl mx-auto leading-relaxed">
              &ldquo;{letter.closingQuote}&rdquo;
            </blockquote>
          </footer>
        </motion.article>

        {/* Bottom Actions */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6 pt-4 border-t border-[#3A332E]">
          <button
            onClick={onGoHome}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#722F37] hover:bg-[#5C1D24] text-[#FDFBF7] font-serif-display text-base tracking-wide rounded-sm transition-all shadow-lg hover:shadow-xl"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Volver al inicio del álbum</span>
          </button>
        </div>
      </div>
    </div>
  );
};
