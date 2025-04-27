import { Lightbulb, SkipForward, Shield } from 'lucide-react';

export const POWER_UPS = [
  {
    id: 'reveal_vowels',
    name: 'Vowel Reveal',
    description: 'Reveals all vowels in the word',
    icon: 'Lightbulb',
    used: false
  },
  {
    id: 'extra_life',
    name: 'Extra Life',
    description: 'Adds one more attempt',
    icon: 'Shield',
    used: false
  },
  {
    id: 'skip_word',
    name: 'Skip Word',
    description: 'Skip to a new word without penalty',
    icon: 'SkipForward',
    used: false
  }
];

export const applyPowerUp = (powerUpId, gameState, setGameState) => {
  switch (powerUpId) {
    case 'reveal_vowels':
      const vowels = ['a', 'e', 'i', 'o', 'u'];
      vowels.forEach(vowel => {
        if (gameState.currentWord.word.toLowerCase().includes(vowel)) {
          gameState.guessLetter(vowel);
        }
      });
      break;
    case 'extra_life':
      setGameState({
        ...gameState,
        maxAttempts: gameState.maxAttempts + 1
      });
      break;
    case 'skip_word':
      gameState.initGame();
      break;
    default:
      break;
  }
};