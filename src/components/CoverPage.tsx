import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Sparkles, Music, VolumeX, ListFilter, Image as ImageIcon } from 'lucide-react';

interface CoverPageProps {
  onStart: () => void;
  onOpenTimeline: () => void;
  onOpenGallery: () => void;
  isMusicOn: boolean;
  onToggleMusic: () => void;
}

export const CoverPage: React.FC<CoverPageProps> = ({
  onStart,
  onOpenTimeline,
  onOpenGallery,
  isMusicOn,
  onToggleMusic,
}) => {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between items-center px-6 py-10 bg-paper-cream overflow-hidden selection:bg-[#722F37] selection:text-white">
      {/* Background Decorative Vignette */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#F9F6F0]/50 to-[#EADECB]/40 pointer-events-none" />

      {/* Top Bar Navigation Actions */}
      <header className="relative z-20 w-full max-w-5xl flex justify-between items-center pt-2">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#722F37] animate-pulse" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#5C524A] font-medium">
            Álbum Personal &bull; Edición Especial
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onToggleMusic}
            title={isMusicOn ? "Desactivar música de fondo" : "Activar música de fondo"}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-sans-clean transition-all duration-300 bg-[#EFE9DC] hover:bg-[#E4DBCB] text-[#2C221E] border border-[#D8CEBC]"
          >
            {isMusicOn ? (
              <>
                <Music className="w-3.5 h-3.5 text-[#722F37] animate-bounce" />
                <span className="hidden sm:inline">Música Activa</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-[#722F37]/70" />
                <span className="hidden sm:inline">Música Silenciada</span>
              </>
            )}
          </button>

          <button
            onClick={onOpenTimeline}
            title="Índice de capítulos"
            className="p-2 rounded-full text-xs transition-all duration-300 bg-[#EFE9DC] hover:bg-[#E4DBCB] text-[#2C221E] border border-[#D8CEBC]"
          >
            <ListFilter className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenGallery}
            title="Galería de fotos"
            className="p-2 rounded-full text-xs transition-all duration-300 bg-[#EFE9DC] hover:bg-[#E4DBCB] text-[#2C221E] border border-[#D8CEBC]"
          >
            <ImageIcon className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Cover Content */}
      <main className="relative z-20 my-auto max-w-2xl text-center flex flex-col items-center px-4 py-12">
        {/* Subtle Crest / Ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-8"
        >
          <div className="w-16 h-16 rounded-full border border-[#722F37]/30 flex items-center justify-center p-2 bg-[#F9F6F0] paper-shadow">
            <div className="w-12 h-12 rounded-full border border-[#722F37]/60 flex items-center justify-center text-[#722F37]">
              <Sparkles className="w-5 h-5 text-[#722F37]" />
            </div>
          </div>
        </motion.div>

        {/* Date Range Title */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-xs sm:text-sm font-sans-clean tracking-[0.35em] text-[#722F37] uppercase font-semibold mb-4"
        >
          Agosto 2024 — Febrero 2026
        </motion.p>

        {/* Main Book Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="text-3xl sm:text-5xl md:text-6xl font-serif-display font-medium text-[#1A1817] leading-tight mb-6"
        >
          NO SE TRATA DE OLVIDAR, SI NO DE APRENDER DE LO VIVIDO
        </motion.h1>

        {/* Elegant Divider Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#722F37] to-transparent mb-8"
        />

        {/* Dedicated Subtitle Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65 }}
          className="text-base sm:text-lg font-serif-display italic text-[#4A423D] max-w-lg leading-relaxed mb-12 px-2"
        >
          &ldquo;Para ti Jami, porque hay personas que pasan por nuestra vida y dejan recuerdos que el tiempo no consigue borrar.&rdquo;
        </motion.blockquote>

        {/* Start Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            onClick={onStart}
            id="start-story-btn"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#2C221E] hover:bg-[#1A1817] text-[#FDFBF7] font-serif-display text-lg tracking-wide rounded-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 border border-[#3E322C]"
          >
            <span>Inicio</span>
            <BookOpen className="w-5 h-5 text-[#D4C3A3] group-hover:translate-x-1 transition-transform duration-300" />
            <span className="absolute -bottom-1 left-4 right-4 h-[1px] bg-[#722F37]/50 group-hover:bg-[#722F37] transition-colors" />
          </button>
        </motion.div>
      </main>

      {/* Footer Credits */}
      <footer className="relative z-20 w-full text-center py-4">
      </footer>
    </div>
  );
};
