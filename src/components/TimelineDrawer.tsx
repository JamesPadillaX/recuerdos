import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, MapPin, ChevronRight, BookOpen } from 'lucide-react';
import { MemoryPage } from '../types';

interface TimelineDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  memories: MemoryPage[];
  currentIndex: number;
  onSelectPage: (index: number) => void;
}

export const TimelineDrawer: React.FC<TimelineDrawerProps> = ({
  isOpen,
  onClose,
  memories,
  currentIndex,
  onSelectPage,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-xs"
        />

        {/* Drawer Panel */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="relative w-full max-w-md bg-[#FDFBF7] h-full shadow-2xl flex flex-col justify-between border-l border-[#E5DCCB] z-10 p-6 overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#EADFCB] pb-4">
            <div>
              <p className="text-xs font-sans-clean tracking-[0.2em] text-[#722F37] uppercase font-semibold">
                Índice Cronológico
              </p>
              <h3 className="text-xl font-serif-display font-semibold text-[#1A1817]">
                Nuestra Historia
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[#F3EFE6] text-[#2C221E] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Timeline List */}
          <div className="flex-1 overflow-y-auto py-6 pr-1 space-y-4">
            {memories.map((item, idx) => {
              const isCurrent = idx === currentIndex;
              const firstPhoto = item.photos[0]?.url || item.specialLetter?.finalPhotoUrl;

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    onSelectPage(idx);
                    onClose();
                  }}
                  className={`group relative flex items-center gap-4 p-3 rounded-sm border transition-all cursor-pointer ${
                    isCurrent
                      ? 'bg-[#F5EFE6] border-[#722F37] shadow-sm'
                      : 'bg-white border-[#EBE3D5] hover:border-[#C4B8A5] hover:bg-[#FAF7F2]'
                  }`}
                >
                  {/* Thumbnail */}
                  {firstPhoto ? (
                    <div className="w-14 h-14 rounded-sm overflow-hidden bg-[#EFE9DC] flex-shrink-0 border border-[#DDD3C2]">
                      <img
                        src={firstPhoto}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ) : (
                    <div className="w-14 h-14 rounded-sm bg-[#722F37]/10 flex items-center justify-center flex-shrink-0 border border-[#722F37]/20">
                      <BookOpen className="w-6 h-6 text-[#722F37]" />
                    </div>
                  )}

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 text-[11px] font-sans-clean font-medium text-[#722F37]">
                      <span>{item.pageNumber}</span>
                      <span>&bull;</span>
                      <span className="truncate">{item.date}</span>
                    </div>
                    <h4 className="text-sm font-serif-display font-semibold text-[#1A1817] truncate mt-0.5">
                      {item.title}
                    </h4>
                    {item.location && (
                      <p className="text-xs text-[#7A7067] flex items-center gap-1 truncate mt-0.5">
                        <MapPin className="w-3 h-3 text-[#722F37]" />
                        {item.location}
                      </p>
                    )}
                  </div>

                  <ChevronRight className="w-4 h-4 text-[#A89C8C] group-hover:text-[#722F37] transition-colors flex-shrink-0" />
                </div>
              );
            })}
          </div>

          {/* Footer */}
          <div className="pt-4 border-t border-[#EADFCB] text-center">
            <p className="text-xs font-serif-display italic text-[#7A7067]">
              Agosto 2024 — Febrero 2026 &bull; {memories.length} Capítulos
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
