// Changed to HTML Audio element by user request for TV Girl - Loving Machine

let audioElement: HTMLAudioElement | null = null;
let isPlaying = false;

export function startAmbientMusic(): boolean {
  try {
    if (!audioElement) {
      audioElement = new Audio('/music/Pistol - Cigarettes After Sex.mp3');
      audioElement.loop = true;
      audioElement.volume = 0.5;
    }
    
    if (!isPlaying) {
      // Browsers may block autoplay without interaction, but since this is called on click it should be fine
      audioElement.play().catch(e => console.error("Autoplay prevented:", e));
      isPlaying = true;
      return true;
    }
  } catch (err) {
    console.error('Audio playback error:', err);
  }
  return false;
}

export function stopAmbientMusic(): void {
  if (audioElement && isPlaying) {
    audioElement.pause();
    isPlaying = false;
  }
}

export function setVolume(level: number): void {
  if (audioElement) {
    const clamped = Math.max(0, Math.min(1, level));
    audioElement.volume = clamped;
  }
}

export function isMusicPlaying(): boolean {
  return isPlaying;
}
