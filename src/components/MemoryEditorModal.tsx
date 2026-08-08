import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Trash2, RotateCcw, Save, Upload, Image as ImageIcon } from 'lucide-react';
import { MemoryPage } from '../types';

interface MemoryEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  memories: MemoryPage[];
  activePageIndex: number;
  onSaveMemories: (updated: MemoryPage[]) => void;
  onResetToDefault: () => void;
}

export const MemoryEditorModal: React.FC<MemoryEditorModalProps> = ({
  isOpen,
  onClose,
  memories,
  activePageIndex,
  onSaveMemories,
  onResetToDefault,
}) => {
  const [editedMemories, setEditedMemories] = useState<MemoryPage[]>(memories);
  const [selectedIdx, setSelectedIdx] = useState<number>(activePageIndex);

  if (!isOpen) return null;

  const current = editedMemories[selectedIdx] || editedMemories[0];

  const handleFieldChange = (field: keyof MemoryPage, value: unknown) => {
    const updated = [...editedMemories];
    updated[selectedIdx] = { ...updated[selectedIdx], [field]: value };
    setEditedMemories(updated);
  };

  const handlePhotoUrlChange = (photoIdx: number, newUrl: string) => {
    const updated = [...editedMemories];
    const page = { ...updated[selectedIdx] };
    const photos = [...page.photos];
    photos[photoIdx] = { ...photos[photoIdx], url: newUrl };
    page.photos = photos;
    updated[selectedIdx] = page;
    setEditedMemories(updated);
  };

  const handlePhotoCaptionChange = (photoIdx: number, newCaption: string) => {
    const updated = [...editedMemories];
    const page = { ...updated[selectedIdx] };
    const photos = [...page.photos];
    photos[photoIdx] = { ...photos[photoIdx], caption: newCaption };
    page.photos = photos;
    updated[selectedIdx] = page;
    setEditedMemories(updated);
  };

  const handleAddPhoto = () => {
    const updated = [...editedMemories];
    const page = { ...updated[selectedIdx] };
    page.photos = [
      ...page.photos,
      {
        id: `custom-photo-${Date.now()}`,
        url: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=1200&auto=format&fit=crop',
        caption: 'Nueva fotografía',
        rotation: (Math.random() - 0.5) * 4
      }
    ];
    updated[selectedIdx] = page;
    setEditedMemories(updated);
  };

  const handleRemovePhoto = (photoIdx: number) => {
    const updated = [...editedMemories];
    const page = { ...updated[selectedIdx] };
    page.photos = page.photos.filter((_, idx) => idx !== photoIdx);
    updated[selectedIdx] = page;
    setEditedMemories(updated);
  };

  const handleImageFileUpload = (e: React.ChangeEvent<HTMLInputElement>, photoIdx?: number) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        if (photoIdx !== undefined) {
          handlePhotoUrlChange(photoIdx, result);
        } else if (current.isSpecialFinal && current.specialLetter) {
          handleLetterFieldChange('finalPhotoUrl', result);
        } else {
          // Add new photo with uploaded file
          const updated = [...editedMemories];
          const page = { ...updated[selectedIdx] };
          page.photos = [
            ...page.photos,
            {
              id: `upload-${Date.now()}`,
              url: result,
              caption: 'Fotografía subida',
              rotation: 1
            }
          ];
          updated[selectedIdx] = page;
          setEditedMemories(updated);
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleLetterFieldChange = (field: string, value: unknown) => {
    if (!current.specialLetter) return;
    const updated = [...editedMemories];
    const page = { ...updated[selectedIdx] };
    page.specialLetter = {
      ...page.specialLetter,
      [field]: value
    };
    updated[selectedIdx] = page;
    setEditedMemories(updated);
  };

  const handleLetterParagraphChange = (pIdx: number, newText: string) => {
    if (!current.specialLetter) return;
    const updated = [...editedMemories];
    const page = { ...updated[selectedIdx] };
    const paras = [...page.specialLetter.paragraphs];
    paras[pIdx] = newText;
    page.specialLetter = { ...page.specialLetter, paragraphs: paras };
    updated[selectedIdx] = page;
    setEditedMemories(updated);
  };

  const handleAddNewPage = () => {
    const newPageNum = editedMemories.length;
    const newPage: MemoryPage = {
      id: `custom-page-${Date.now()}`,
      pageNumber: `PÁGINA ${newPageNum < 10 ? '0' + newPageNum : newPageNum}`,
      date: 'MARZO DE 2025',
      monthKey: 'MAR 2025',
      title: 'Nuevo Recuerdo',
      subtitle: 'Descripción breve de la ocasión',
      location: 'Lugar especial',
      photos: [
        {
          id: `photo-${Date.now()}`,
          url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop',
          caption: 'Fotografía del recuerdo',
          rotation: -1.2
        }
      ],
      storyText: 'Escribe aquí la anécdota especial de este momento...',
      quote: 'Una frase que resuma este capítulo especial.'
    };

    // Insert before the special final chapter if present
    const updated = [...editedMemories];
    const finalIndex = updated.findIndex((p) => p.isSpecialFinal);
    if (finalIndex !== -1) {
      updated.splice(finalIndex, 0, newPage);
      setEditedMemories(updated);
      setSelectedIdx(finalIndex);
    } else {
      updated.push(newPage);
      setEditedMemories(updated);
      setSelectedIdx(updated.length - 1);
    }
  };

  const handleDeletePage = () => {
    if (editedMemories.length <= 1) return;
    if (confirm('¿Seguro que deseas eliminar esta página del álbum?')) {
      const updated = editedMemories.filter((_, idx) => idx !== selectedIdx);
      setEditedMemories(updated);
      setSelectedIdx(Math.max(0, selectedIdx - 1));
    }
  };

  const handleSave = () => {
    onSaveMemories(editedMemories);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#FDFBF7] rounded-sm shadow-2xl flex flex-col overflow-hidden border border-[#E5DCCB] z-10 text-[#1A1817]"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-[#EADFCB] bg-[#F8F4EC]">
            <div>
              <p className="text-xs font-sans-clean tracking-[0.2em] text-[#722F37] uppercase font-semibold">
                Personalización del Álbum
              </p>
              <h3 className="text-xl font-serif-display font-semibold">
                Editar Recuerdos & Textos
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[#EFE9DC] text-[#2C221E] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Modal Content */}
          <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Sidebar Page Selection */}
            <div className="md:col-span-4 border-r border-[#EADFCB] pr-4 space-y-2">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-sans-clean font-semibold uppercase text-[#722F37]">
                  Páginas ({editedMemories.length})
                </span>
                <button
                  onClick={handleAddNewPage}
                  className="flex items-center gap-1 text-xs bg-[#722F37] text-white px-2.5 py-1 rounded-sm hover:bg-[#5C1D24] transition-colors font-sans-clean"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Añadir</span>
                </button>
              </div>

              <div className="space-y-1.5 max-h-[50vh] overflow-y-auto pr-1">
                {editedMemories.map((m, idx) => (
                  <button
                    key={m.id}
                    onClick={() => setSelectedIdx(idx)}
                    className={`w-full text-left p-2.5 rounded-sm text-xs font-sans-clean flex items-center justify-between transition-colors ${
                      idx === selectedIdx
                        ? 'bg-[#722F37] text-white font-medium'
                        : 'bg-[#F3EFE6] hover:bg-[#EAE2D3] text-[#2C221E]'
                    }`}
                  >
                    <span className="truncate">
                      {m.pageNumber}: {m.title}
                    </span>
                    {m.isSpecialFinal && (
                      <span className="text-[10px] bg-[#D4A373] text-[#1A1817] px-1.5 py-0.5 rounded-xs ml-1 flex-shrink-0">
                        Carta
                      </span>
                    )}
                  </button>
                ))}
              </div>

              <div className="pt-4 border-t border-[#EADFCB] mt-4">
                <button
                  onClick={onResetToDefault}
                  className="w-full flex items-center justify-center gap-2 py-2 text-xs font-sans-clean text-[#722F37] hover:bg-[#F3EFE6] border border-[#722F37]/30 rounded-sm transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Restablecer datos iniciales</span>
                </button>
              </div>
            </div>

            {/* Editor Form */}
            <div className="md:col-span-8 space-y-4 pr-1">
              {current && !current.isSpecialFinal && (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-sans-clean font-semibold text-[#5C524A] mb-1">
                        Número de Página
                      </label>
                      <input
                        type="text"
                        value={current.pageNumber}
                        onChange={(e) => handleFieldChange('pageNumber', e.target.value)}
                        className="w-full text-xs p-2 bg-white border border-[#DDD3C2] rounded-sm focus:outline-none focus:border-[#722F37]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-sans-clean font-semibold text-[#5C524A] mb-1">
                        Fecha (Ej: 27 DE AGOSTO DE 2024)
                      </label>
                      <input
                        type="text"
                        value={current.date}
                        onChange={(e) => handleFieldChange('date', e.target.value)}
                        className="w-full text-xs p-2 bg-white border border-[#DDD3C2] rounded-sm focus:outline-none focus:border-[#722F37]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-sans-clean font-semibold text-[#5C524A] mb-1">
                        Título del Recuerdo
                      </label>
                      <input
                        type="text"
                        value={current.title}
                        onChange={(e) => handleFieldChange('title', e.target.value)}
                        className="w-full text-xs p-2 bg-white border border-[#DDD3C2] rounded-sm focus:outline-none focus:border-[#722F37]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-sans-clean font-semibold text-[#5C524A] mb-1">
                        Subtítulo o Lugar
                      </label>
                      <input
                        type="text"
                        value={current.subtitle || ''}
                        onChange={(e) => handleFieldChange('subtitle', e.target.value)}
                        className="w-full text-xs p-2 bg-white border border-[#DDD3C2] rounded-sm focus:outline-none focus:border-[#722F37]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-sans-clean font-semibold text-[#5C524A] mb-1">
                      Texto de la Anécdota (usa doble salto de línea para párrafos)
                    </label>
                    <textarea
                      rows={5}
                      value={current.storyText}
                      onChange={(e) => handleFieldChange('storyText', e.target.value)}
                      className="w-full text-xs p-2.5 bg-white border border-[#DDD3C2] rounded-sm focus:outline-none focus:border-[#722F37] leading-relaxed font-sans-clean"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans-clean font-semibold text-[#5C524A] mb-1">
                      Frase Destacada / Cita
                    </label>
                    <input
                      type="text"
                      value={current.quote}
                      onChange={(e) => handleFieldChange('quote', e.target.value)}
                      className="w-full text-xs p-2 bg-white border border-[#DDD3C2] rounded-sm focus:outline-none focus:border-[#722F37] font-serif-display italic"
                    />
                  </div>

                  {/* Photos list in memory */}
                  <div className="pt-3 border-t border-[#EADFCB]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-sans-clean font-semibold text-[#722F37]">
                        Fotografías del Capítulo ({current.photos.length})
                      </span>
                      <div className="flex gap-2">
                        <label className="cursor-pointer inline-flex items-center gap-1 text-xs bg-[#EFE9DC] hover:bg-[#E2D8C5] text-[#2C221E] px-2.5 py-1 rounded-sm border border-[#D5CAA6]">
                          <Upload className="w-3 h-3 text-[#722F37]" />
                          <span>Subir Imagen</span>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => handleImageFileUpload(e)}
                          />
                        </label>
                        <button
                          onClick={handleAddPhoto}
                          className="flex items-center gap-1 text-xs bg-[#EFE9DC] hover:bg-[#E2D8C5] text-[#2C221E] px-2.5 py-1 rounded-sm border border-[#D5CAA6]"
                        >
                          <ImageIcon className="w-3 h-3 text-[#722F37]" />
                          <span>URL Externa</span>
                        </button>
                      </div>
                    </div>

                    <div className="space-y-3 max-h-40 overflow-y-auto pr-1">
                      {current.photos.map((photo, pIdx) => (
                        <div
                          key={photo.id || pIdx}
                          className="p-2.5 bg-white border border-[#EBE3D5] rounded-sm flex items-center gap-3"
                        >
                          <img
                            src={photo.url}
                            alt="preview"
                            className="w-12 h-12 object-cover rounded-xs border border-[#DDD3C2]"
                          />
                          <div className="flex-1 space-y-1">
                            <input
                              type="text"
                              value={photo.url}
                              placeholder="URL de la fotografía"
                              onChange={(e) => handlePhotoUrlChange(pIdx, e.target.value)}
                              className="w-full text-[11px] p-1 bg-[#FAF7F2] border border-[#DDD3C2] rounded-xs"
                            />
                            <input
                              type="text"
                              value={photo.caption || ''}
                              placeholder="Leyenda o pie de foto"
                              onChange={(e) => handlePhotoCaptionChange(pIdx, e.target.value)}
                              className="w-full text-[11px] p-1 bg-[#FAF7F2] border border-[#DDD3C2] rounded-xs font-handwriting"
                            />
                          </div>
                          <button
                            onClick={() => handleRemovePhoto(pIdx)}
                            className="p-1.5 text-red-600 hover:bg-red-50 rounded-xs"
                            title="Eliminar foto"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Delete Chapter option */}
                  <div className="pt-4 flex justify-end">
                    <button
                      onClick={handleDeletePage}
                      className="inline-flex items-center gap-1 text-xs text-red-700 hover:text-red-900 font-sans-clean"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Eliminar este capítulo</span>
                    </button>
                  </div>
                </>
              )}

              {/* Special Letter Editor */}
              {current && current.isSpecialFinal && current.specialLetter && (
                <div className="space-y-4">
                  <h4 className="text-sm font-serif-display font-semibold text-[#722F37] border-b border-[#EADFCB] pb-1">
                    Edición de la Carta Final (Epílogo)
                  </h4>

                  <div>
                    <label className="block text-xs font-sans-clean font-semibold text-[#5C524A] mb-1">
                      Título
                    </label>
                    <input
                      type="text"
                      value={current.specialLetter.title}
                      onChange={(e) => handleLetterFieldChange('title', e.target.value)}
                      className="w-full text-xs p-2 bg-white border border-[#DDD3C2] rounded-sm focus:outline-none focus:border-[#722F37]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-sans-clean font-semibold text-[#5C524A]">
                      Párrafos de la Carta Personal
                    </label>
                    {current.specialLetter.paragraphs.map((pText, pIdx) => (
                      <textarea
                        key={pIdx}
                        rows={3}
                        value={pText}
                        onChange={(e) => handleLetterParagraphChange(pIdx, e.target.value)}
                        className="w-full text-xs p-2 bg-white border border-[#DDD3C2] rounded-sm focus:outline-none focus:border-[#722F37] font-serif-display leading-relaxed"
                      />
                    ))}
                  </div>

                  <div>
                    <label className="block text-xs font-sans-clean font-semibold text-[#5C524A] mb-1">
                      Frase de Agradecimiento
                    </label>
                    <input
                      type="text"
                      value={current.specialLetter.thanksText}
                      onChange={(e) => handleLetterFieldChange('thanksText', e.target.value)}
                      className="w-full text-xs p-2 bg-white border border-[#DDD3C2] rounded-sm focus:outline-none focus:border-[#722F37] font-serif-title italic"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans-clean font-semibold text-[#5C524A] mb-1">
                      URL de la Fotografía Final
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={current.specialLetter.finalPhotoUrl}
                        onChange={(e) => handleLetterFieldChange('finalPhotoUrl', e.target.value)}
                        className="w-full text-xs p-2 bg-white border border-[#DDD3C2] rounded-sm focus:outline-none focus:border-[#722F37]"
                      />
                      <label className="cursor-pointer flex-shrink-0 inline-flex items-center gap-1 text-xs bg-[#EFE9DC] hover:bg-[#E2D8C5] text-[#2C221E] px-3 py-1 rounded-sm border border-[#D5CAA6]">
                        <Upload className="w-3 h-3 text-[#722F37]" />
                        <span>Subir</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleImageFileUpload(e)}
                        />
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-sans-clean font-semibold text-[#5C524A] mb-1">
                      Frase Final de Cierre
                    </label>
                    <input
                      type="text"
                      value={current.specialLetter.closingQuote}
                      onChange={(e) => handleLetterFieldChange('closingQuote', e.target.value)}
                      className="w-full text-xs p-2 bg-white border border-[#DDD3C2] rounded-sm focus:outline-none focus:border-[#722F37] font-serif-display italic"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer Save Actions */}
          <div className="p-4 border-t border-[#EADFCB] bg-[#F8F4EC] flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-sans-clean bg-[#EFE9DC] hover:bg-[#E2D8C5] text-[#2C221E] rounded-sm"
            >
              Cancelar
            </button>
            <button
              onClick={handleSave}
              className="inline-flex items-center gap-2 px-6 py-2 text-xs font-sans-clean bg-[#722F37] hover:bg-[#5C1D24] text-white rounded-sm font-semibold shadow-md"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Guardar Cambios</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
