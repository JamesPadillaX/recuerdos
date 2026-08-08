import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Maximize2, ExternalLink } from 'lucide-react';
import { MemoryPage, PhotoItem } from '../types';

interface PhotoGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  memories: MemoryPage[];
  onOpenPhoto: (photo: PhotoItem) => void;
  onGoToPage: (pageIndex: number) => void;
}

export const PhotoGalleryModal: React.FC<PhotoGalleryModalProps> = ({
  isOpen,
  onClose,
  memories,
  onOpenPhoto,
  onGoToPage,
}) => {
  if (!isOpen) return null;

  // Flatten all photos with their parent memory info
  const allPhotos = memories.flatMap((page, pageIdx) => {
    const list: Array<{ photo: PhotoItem; pageTitle: string; date: string; pageIdx: number }> = [];
    page.photos.forEach((photo) => {
      list.push({ photo, pageTitle: page.title, date: page.date, pageIdx });
    });
    if (page.specialLetter?.finalPhotoUrl) {
      list.push({
        photo: {
          id: 'special-final-p',
          url: page.specialLetter.finalPhotoUrl,
          caption: page.specialLetter.finalPhotoCaption || 'Última fotografía',
          alt: 'Foto de epílogo'
        },
        pageTitle: page.title,
        date: page.date,
        pageIdx
      });
    }
    return list;
  });

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-xs"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative w-full max-w-5xl max-h-[90vh] bg-[#FDFBF7] rounded-sm shadow-2xl flex flex-col overflow-hidden border border-[#E5DCCB] z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-[#EADFCB] bg-[#F8F4EC]">
            <div>
              <p className="text-xs font-sans-clean tracking-[0.2em] text-[#722F37] uppercase font-semibold">
                Galería de Fotografías
              </p>
              <h3 className="text-xl font-serif-display font-semibold text-[#1A1817]">
                Nuestros Recuerdos Impresos ({allPhotos.length})
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[#EFE9DC] text-[#2C221E] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Photos Grid */}
          <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {allPhotos.map((item, idx) => (
              <motion.div
                key={`${item.photo.id}-${idx}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="photo-frame group relative bg-white flex flex-col justify-between"
              >
                <div
                  className="relative overflow-hidden aspect-[4/3] bg-[#EFE9DC] cursor-pointer"
                  onClick={() => onOpenPhoto(item.photo)}
                >
                  <img
                    src={item.photo.url}
                    alt={item.photo.caption || item.pageTitle}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <span className="p-2 rounded-full bg-white text-[#1A1817] shadow-md">
                      <Maximize2 className="w-4 h-4 text-[#722F37]" />
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-white flex flex-col justify-between flex-1">
                  {item.photo.caption && (
                    <p className="text-sm font-handwriting text-[#2C221E] mb-2 leading-tight">
                      {item.photo.caption}
                    </p>
                  )}

                  <div className="flex items-center justify-between pt-2 border-t border-[#F3EFE6] text-[11px] font-sans-clean text-[#7A7067]">
                    <span className="flex items-center gap-1 font-medium text-[#722F37]">
                      <Calendar className="w-3 h-3 text-[#722F37]" />
                      {item.date}
                    </span>
                    <button
                      onClick={() => {
                        onGoToPage(item.pageIdx);
                        onClose();
                      }}
                      className="flex items-center gap-1 text-[#2C221E] hover:text-[#722F37] font-medium"
                    >
                      <span>{item.pageTitle}</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-[#EADFCB] bg-[#F8F4EC] text-center text-xs font-serif-display italic text-[#7A7067]">
            Haz clic en cualquier imagen para verla en tamaño completo o ir al capítulo correspondiente.
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
