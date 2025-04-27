import { useState, useEffect, useCallback } from 'react';
import { getWordByDifficulty } from '../utils/wordUtils';
import useLocalStorage from './useLocalStorage';
import useSound from './useSound';

const MAX_ATTEMPTS = 6;
const HINT_LIMIT = 2;

export function useGameState() {
  const [currentWord, setCurrentWord] = useState({ word: '', hints: [] });
  const [guessedLetters, setGuessedLetters] = useState(new Set());
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [difficulty, setDifficulty] = useLocalStorage('hangman-difficulty', 'medium');
  const [gameStatus, setGameStatus] = useState('playing');
  const [hintsUsed, setHintsUsed] = useState(0);
  const [revealedHints, setRevealedHints] = useState([]);
  const [soundEnabled, setSoundEnabled] = useLocalStorage('sound-enabled', true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { playSound } = useSound(soundEnabled);

  // Initialize game with a new word
  const initGame = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const { word, hints } = await getWordByDifficulty(difficulty);
      setCurrentWord({ word, hints });
      setGuessedLetters(new Set());
      setIncorrectGuesses(0);
      setGameStatus('playing');
      setHintsUsed(0);
      setRevealedHints([]);
    } catch (err) {
      setError(err.message);
      playSound('error');
    } finally {
      setIsLoading(false);
    }
  }, [difficulty, playSound]);

  // Handle letter guess
  const guessLetter = useCallback((letter) => {
    if (gameStatus !== 'playing' || guessedLetters.has(letter)) return;

    const letterLower = letter.toLowerCase();
    const wordLower = currentWord.word.toLowerCase();

    const newGuessedLetters = new Set(guessedLetters).add(letterLower);
    setGuessedLetters(newGuessedLetters);

    if (!wordLower.includes(letterLower)) {
      playSound('incorrect');
      const newIncorrectGuesses = incorrectGuesses + 1;
      setIncorrectGuesses(newIncorrectGuesses);

      if (newIncorrectGuesses >= MAX_ATTEMPTS) {
        setGameStatus('lost');
        playSound('lose');
      }
    } else {
      playSound('correct');
      const hasWon = [...wordLower].every(char => 
        char === ' ' || newGuessedLetters.has(char)
      );
      if (hasWon) {
        setGameStatus('won');
        playSound('win');
      }
    }
  }, [currentWord, gameStatus, guessedLetters, incorrectGuesses, playSound]);

  // Use a hint
  const useHint = useCallback(() => {
    if (hintsUsed >= HINT_LIMIT || gameStatus !== 'playing') return;

    const nextHintIndex = revealedHints.length;
    if (nextHintIndex < currentWord.hints.length) {
      setRevealedHints(prev => [...prev, currentWord.hints[nextHintIndex]]);
      setHintsUsed(prev => prev + 1);
      playSound('hint');
    }
  }, [hintsUsed, gameStatus, revealedHints, currentWord.hints, playSound]);

  // Change difficulty and restart game
  const changeDifficulty = useCallback(async (newDifficulty) => {
    if (newDifficulty !== difficulty) {
      setDifficulty(newDifficulty);
      await initGame();
    }
  }, [difficulty, setDifficulty, initGame]);

  // Initialize game on mount
  useEffect(() => {
    if (currentWord.word === '') {
      initGame();
    }
  }, [initGame]);

  return {
    currentWord,
    guessedLetters,
    incorrectGuesses,
    difficulty,
    gameStatus,
    hintsUsed,
    revealedHints,
    soundEnabled,
    isLoading,
    error,
    guessLetter,
    useHint,
    changeDifficulty,
    initGame,
    maxAttempts: MAX_ATTEMPTS,
    hintLimit: HINT_LIMIT,
    setSoundEnabled
  };
}