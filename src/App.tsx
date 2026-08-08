/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from 'react';
import { CoverPage } from './components/CoverPage';
import { PageLayout } from './components/PageLayout';
import { FinalChapterPage } from './components/FinalChapterPage';
import { TimelineDrawer } from './components/TimelineDrawer';
import { PhotoGalleryModal } from './components/PhotoGalleryModal';
import { LightboxModal } from './components/LightboxModal';
import { MemoryEditorModal } from './components/MemoryEditorModal';
import { AmbientParticles } from './components/AmbientParticles';
import { getSavedMemories, saveMemories, resetMemoriesToDefault } from './utils/storage';
import { startAmbientMusic, stopAmbientMusic, isMusicPlaying } from './utils/audioSynthesizer';
import { MemoryPage, PhotoItem, ViewMode } from './types';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('cover');
  const [memories, setMemories] = useState<MemoryPage[]>(() => getSavedMemories());
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Modals state
  const [isMusicOn, setIsMusicOn] = useState<boolean>(false);
  const [particlesEnabled] = useState<boolean>(true);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const [isTimelineOpen, setIsTimelineOpen] = useState<boolean>(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState<boolean>(false);
  const [isEditorOpen, setIsEditorOpen] = useState<boolean>(false);

  // Audio Handler
  const handleToggleMusic = useCallback(() => {
    if (isMusicPlaying()) {
      stopAmbientMusic();
      setIsMusicOn(false);
    } else {
      const started = startAmbientMusic();
      setIsMusicOn(started);
    }
  }, []);

  // Sync index bounds if memories change
  useEffect(() => {
    if (currentIndex >= memories.length) {
      setCurrentIndex(Math.max(0, memories.length - 1));
    }
  }, [memories, currentIndex]);

  // Start story from Cover
  const handleStartStory = () => {
    setViewMode('album');
    setCurrentIndex(0);
    // Optionally start soft ambient music if user hasn't toggled yet
    if (!isMusicPlaying()) {
      const started = startAmbientMusic();
      if (started) setIsMusicOn(true);
    }
  };

  // Next Page
  const handleNextPage = () => {
    if (currentIndex < memories.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  // Prev Page
  const handlePrevPage = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setViewMode('cover');
    }
  };

  // Select page from timeline/gallery
  const handleSelectPage = (index: number) => {
    setCurrentIndex(index);
    setViewMode('album');
  };

  // Save customized memories
  const handleSaveMemories = (updated: MemoryPage[]) => {
    setMemories(updated);
    saveMemories(updated);
  };

  // Reset memories
  const handleResetMemories = () => {
    if (confirm('¿Restablecer el álbum a los recuerdos iniciales?')) {
      const reset = resetMemoriesToDefault();
      setMemories(reset);
      setCurrentIndex(0);
      setIsEditorOpen(false);
    }
  };

  const currentPage = memories[currentIndex] || memories[0];

  return (
    <div className="relative min-h-screen w-full bg-[#FDFBF7] text-[#1A1817] font-sans-clean overflow-x-hidden selection:bg-[#722F37] selection:text-white">
      {/* Delicate Atmospheric Particles */}
      <AmbientParticles enabled={particlesEnabled} />

      {/* View Routing */}
      {viewMode === 'cover' ? (
        <CoverPage
          onStart={handleStartStory}
          onOpenTimeline={() => setIsTimelineOpen(true)}
          onOpenGallery={() => setIsGalleryOpen(true)}
          isMusicOn={isMusicOn}
          onToggleMusic={handleToggleMusic}
        />
      ) : currentPage?.isSpecialFinal ? (
        <FinalChapterPage
          page={currentPage}
          currentIndex={currentIndex}
          totalPages={memories.length}
          onPrev={handlePrevPage}
          onGoHome={() => setViewMode('cover')}
          onOpenPhoto={(photo) => setSelectedPhoto(photo)}
          onOpenEditPage={() => setIsEditorOpen(true)}
        />
      ) : (
        <PageLayout
          page={currentPage}
          currentIndex={currentIndex}
          totalPages={memories.length}
          onNext={handleNextPage}
          onPrev={handlePrevPage}
          onGoHome={() => setViewMode('cover')}
          onOpenPhoto={(photo) => setSelectedPhoto(photo)}
          onOpenEditPage={() => setIsEditorOpen(true)}
          allPages={memories}
          onSelectPage={handleSelectPage}
        />
      )}

      {/* Timeline Drawer */}
      <TimelineDrawer
        isOpen={isTimelineOpen}
        onClose={() => setIsTimelineOpen(false)}
        memories={memories}
        currentIndex={currentIndex}
        onSelectPage={handleSelectPage}
      />

      {/* Photo Gallery Modal */}
      <PhotoGalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        memories={memories}
        onOpenPhoto={(photo) => setSelectedPhoto(photo)}
        onGoToPage={handleSelectPage}
      />

      {/* Lightbox Fullscreen Photo Modal */}
      <LightboxModal
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />

      {/* Memory Customization Editor Modal */}
      <MemoryEditorModal
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        memories={memories}
        activePageIndex={currentIndex}
        onSaveMemories={handleSaveMemories}
        onResetToDefault={handleResetMemories}
      />
    </div>
  );
}
