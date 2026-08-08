// Web Audio API Gentle Ambient Piano Synthesizer for Digital Album
let audioCtx: AudioContext | null = null;
let masterGain: GainNode | null = null;
let isLooping = false;
let loopTimer: number | null = null;

// Frequencies for a soft nostalgic piano melody (Key of C / A minor with soft 7th chords)
const CHORDS = [
  // Cmaj9
  [261.63, 329.63, 392.00, 493.88, 587.33], // C4, E4, G4, B4, D5
  // Am9
  [220.00, 261.63, 329.63, 392.00, 493.88], // A3, C4, E4, G4, B4
  // Fmaj7
  [174.61, 220.00, 261.63, 329.63, 392.00], // F3, A3, C4, E4, G4
  // G6/9 / Em7
  [196.00, 246.94, 293.66, 392.00, 440.00], // G3, B3, D4, G4, A4
];

const MELODY_NOTES = [
  523.25, 587.33, 659.25, 783.99, 659.25, 587.33,
  523.25, 493.88, 440.00, 392.00, 440.00, 493.88
];

function initAudioContext(): AudioContext {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    audioCtx = new AudioContextClass();
    masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(0.15, audioCtx.currentTime);

    // Filter to warm up the sound
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1200, audioCtx.currentTime);

    masterGain.connect(filter);
    filter.connect(audioCtx.destination);
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playPianoNote(freq: number, time: number, duration: number = 3.5, velocity: number = 0.2) {
  if (!audioCtx || !masterGain) return;

  const osc = audioCtx.createOscillator();
  const osc2 = audioCtx.createOscillator();
  const noteGain = audioCtx.createGain();

  // Fundamental (Triangle wave for warmth)
  osc.type = 'triangle';
  osc.frequency.setValueAtTime(freq, time);

  // Soft overtone (Sine)
  osc2.type = 'sine';
  osc2.frequency.setValueAtTime(freq * 2, time);

  // Envelope
  noteGain.gain.setValueAtTime(0, time);
  noteGain.gain.linearRampToValueAtTime(velocity, time + 0.08); // soft attack
  noteGain.gain.exponentialRampToValueAtTime(velocity * 0.3, time + 0.8);
  noteGain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

  osc.connect(noteGain);
  osc2.connect(noteGain);
  noteGain.connect(masterGain);

  osc.start(time);
  osc2.start(time);
  osc.stop(time + duration);
  osc2.stop(time + duration);
}

function playChordSequenceStep(step: number) {
  if (!isLooping || !audioCtx) return;

  const now = audioCtx.currentTime;
  const chord = CHORDS[step % CHORDS.length];

  // Arpeggiate chord notes softly
  chord.forEach((freq, idx) => {
    playPianoNote(freq, now + idx * 0.18, 4.5, 0.12 - idx * 0.015);
  });

  // Play a gentle melody note on top
  const melodyNote = MELODY_NOTES[(step * 2) % MELODY_NOTES.length];
  playPianoNote(melodyNote, now + 1.2, 3.0, 0.09);

  const nextMelodyNote = MELODY_NOTES[(step * 2 + 1) % MELODY_NOTES.length];
  playPianoNote(nextMelodyNote, now + 2.6, 2.5, 0.07);

  // Schedule next chord step in 4.2 seconds
  loopTimer = window.setTimeout(() => {
    playChordSequenceStep(step + 1);
  }, 4200);
}

export function startAmbientMusic(): boolean {
  try {
    const ctx = initAudioContext();
    if (ctx && !isLooping) {
      isLooping = true;
      playChordSequenceStep(0);
      return true;
    }
  } catch (err) {
    console.error('Audio synthesizer error:', err);
  }
  return false;
}

export function stopAmbientMusic(): void {
  isLooping = false;
  if (loopTimer !== null) {
    clearTimeout(loopTimer);
    loopTimer = null;
  }
  if (audioCtx && masterGain) {
    masterGain.gain.linearRampToValueAtTime(0.001, audioCtx.currentTime + 0.5);
  }
}

export function setVolume(level: number): void {
  if (masterGain && audioCtx) {
    // level: 0 to 1
    const clamped = Math.max(0, Math.min(1, level));
    masterGain.gain.setValueAtTime(clamped * 0.3, audioCtx.currentTime);
  }
}

export function isMusicPlaying(): boolean {
  return isLooping;
}
