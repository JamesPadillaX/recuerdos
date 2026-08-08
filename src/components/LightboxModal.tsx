import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download } from 'lucide-react';
import { PhotoItem } from '../types';

interface LightboxModalProps {
  photo: PhotoItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ photo, onClose }) => {
  if (!photo) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          title="Cerrar"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="max-w-5xl max-h-[90vh] flex flex-col items-center justify-center relative p-2"
        >
          <div className="bg-white p-3 sm:p-4 rounded-sm shadow-2xl max-w-full overflow-hidden border border-white/20">
            <img
              src={photo.url}
              alt={photo.caption || photo.alt || 'Fotografía'}
              className="max-h-[75vh] w-auto object-contain rounded-xs"
            />
            {photo.caption && (
              <div className="mt-3 text-center border-t border-[#EFE9DC] pt-2">
                <p className="text-lg font-handwriting text-[#1A1817]">
                  {photo.caption}
                </p>
              </div>
            )}
          </div>

          <div className="mt-4 flex items-center gap-4">
            <a
              href={photo.url}
              target="_blank"
              rel="noopener noreferrer"
              download="recuerdo.jpg"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-sans-clean rounded-full transition-colors border border-white/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Abrir imagen original</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
