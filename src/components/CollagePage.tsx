import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { COLLAGE_PHOTOS } from '../data/memories';

interface CollagePageProps {
  onNext: () => void;
  onBack: () => void;
}

export const CollagePage: React.FC<CollagePageProps> = ({ onNext, onBack }) => {
  const photos = COLLAGE_PHOTOS;

  return (
    <div className="min-h-screen w-full bg-[#F3EDE2] relative overflow-hidden flex flex-col items-center justify-center py-12 px-4 selection:bg-[#722F37] selection:text-white">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40 bg-[radial-gradient(circle_at_center,_#E3DAC9_0%,_transparent_70%)]" />
      
      {/* Header controls */}
      <div className="absolute top-6 left-4 sm:left-8 z-30">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-sans-clean font-medium text-[#5C524A] hover:text-[#722F37] transition-colors py-2 px-4 rounded-full bg-white/60 backdrop-blur-sm border border-[#E0D5C3] shadow-sm hover:shadow"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver</span>
        </button>
      </div>

      <div className="text-center mb-4 sm:mb-10 z-20">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-serif-display font-semibold text-[#5C1D24] mb-3 drop-shadow-sm"
        >
          NUNCA TE OLVIDARE JAMI, APRENDERE A VIVIR SIN TI
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-[#6B5F54] font-serif-display italic text-lg md:text-xl"
        >
          Te deseo que sea feliz
        </motion.p>
      </div>

      {/* Collage Area */}
      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 w-full max-w-6xl z-10 my-4 sm:my-8 px-2">
        {photos.map((photo, index) => {
          // Rotación sutil para mantener el aspecto desordenado y romántico
          const rot = (index % 2 === 0 ? -1 : 1) * (4 + (index * 7) % 8);

          return (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotate: rot }}
              transition={{ 
                type: "spring",
                stiffness: 80,
                damping: 15,
                delay: index * 0.1 
              }}
              whileHover={{ 
                scale: 1.15, 
                zIndex: 50, 
                rotate: 0, 
                transition: { type: 'spring', stiffness: 300, damping: 20 } 
              }}
              className="relative bg-[#FDFBF7] p-3 pb-10 sm:p-4 sm:pb-14 shadow-lg hover:shadow-2xl rounded-sm border border-[#EBE3D5] cursor-pointer"
              style={{
                // Tamaño mucho más grande, ocupa casi la mitad de la pantalla en móvil y hasta 350px en PC
                width: 'clamp(150px, 42vw, 320px)',
                height: 'auto',
                zIndex: index
              }}
            >
              <img 
                src={photo.url} 
                alt={photo.alt || 'Recuerdo'} 
                className="w-full h-auto object-contain bg-[#F3EFE6]"
                draggable={false}
              />
            </motion.div>
          );
        })}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: photos.length * 0.15 + 0.5 }}
        className="mt-12 sm:mt-16 z-30"
      >
        <button
          onClick={onNext}
          className="flex items-center gap-3 px-8 py-3 rounded-full bg-[#2C221E] hover:bg-[#1A1817] text-[#FDFBF7] font-serif-display text-lg tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          <span>Abrir el Álbum</span>
          <ChevronRight className="w-5 h-5 text-[#D4C3A3]" />
        </button>
      </motion.div>
    </div>
  );
};
