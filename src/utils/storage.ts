import { MemoryPage } from '../types';
import { INITIAL_MEMORIES } from '../data/memories';

const STORAGE_KEY = 'album_recuerdos_memories_v2';

export function getSavedMemories(): MemoryPage[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.error('Failed to load memories from storage:', err);
  }
  return INITIAL_MEMORIES;
}

export function saveMemories(memories: MemoryPage[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(memories));
  } catch (err) {
    console.error('Failed to save memories:', err);
  }
}

export function resetMemoriesToDefault(): MemoryPage[] {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.error('Failed to reset storage:', err);
  }
  return INITIAL_MEMORIES;
}
