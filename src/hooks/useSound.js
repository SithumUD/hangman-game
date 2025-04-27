import { useCallback } from 'react';

// Sound files
const SOUNDS = {
  correct: '/sounds/correct.mp3',
  incorrect: '/sounds/incorrect.mp3',
  win: '/sounds/win.mp3',
  lose: '/sounds/lose.mp3',
  hint: '/sounds/hint.mp3',
  click: '/sounds/click.mp3'
};

// Create audio element cache
const audioCache = {};

export default function useSound(enabled) {
  // Initialize audio elements lazily
  const getAudio = useCallback((type) => {
    if (!audioCache[type]) {
      audioCache[type] = new Audio(SOUNDS[type]);
      // Lower volume
      audioCache[type].volume = 0.3;
    }
    return audioCache[type];
  }, []);

  const playSound = useCallback((type) => {
    if (!enabled) return;

    try {
      const audio = getAudio(type);
      // Reset audio to beginning if it's already playing
      audio.currentTime = 0;
      audio.play().catch((err) => {
        // Ignore autoplay errors - these happen when the user hasn't interacted with the page yet
        console.log('Audio play error (normal before user interaction):', err);
      });
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  }, [enabled, getAudio]);

  return { playSound };
}