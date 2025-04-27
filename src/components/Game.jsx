import React, { useState, useEffect } from 'react';
import { useGameState } from '../hooks/useGameState';
import Hangman from './Hangman';
import WordDisplay from './WordDisplay';
import Keyboard from './Keyboard';
import GameControls from './GameControls';
import ResultModal from './ResultModal';
import LoadingSpinner from './LoadingSpinner';

const Game = ({ updateStats }) => {
  const {
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
    maxAttempts,
    hintLimit,
    setSoundEnabled
  } = useGameState();

  const [showModal, setShowModal] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Keyboard event handler
  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();
      if (gameStatus === 'playing' && key.length === 1 && key.match(/[a-z]/)) {
        guessLetter(key);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameStatus, guessLetter]);

  // Show result modal when game ends
  useEffect(() => {
    if ((gameStatus === 'won' || gameStatus === 'lost') && !isTransitioning && !showModal) {
      setShowModal(true);
      updateStats(gameStatus === 'won', hintsUsed);
    }
  }, [gameStatus, hintsUsed, updateStats, isTransitioning, showModal]);

  const handlePlayAgain = async () => {
    setIsTransitioning(true);
    setShowModal(false);
    await initGame();
    setIsTransitioning(false);
  };

  const handleChangeDifficulty = async (newDifficulty) => {
    setIsTransitioning(true);
    setShowModal(false);
    await changeDifficulty(newDifficulty);
    setIsTransitioning(false);
  };

  if (isLoading) {
    return (
      <div className="w-full max-w-3xl bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
        <LoadingSpinner />
        <p className="mt-4 text-gray-600 dark:text-gray-300">Loading word...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-3xl bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
        <div className="text-red-500 mb-4">Error: {error}</div>
        <button
          onClick={initGame}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className={`w-full max-w-3xl bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90 ${isTransitioning ? 'opacity-50' : ''}`}>
      <div className="flex flex-col items-center mb-8">
        <GameControls
          difficulty={difficulty}
          changeDifficulty={handleChangeDifficulty}
          hintsUsed={hintsUsed}
          hintLimit={hintLimit}
          useHint={useHint}
          gameStatus={gameStatus}
          soundEnabled={soundEnabled}
          setSoundEnabled={setSoundEnabled}
        />

        <div className="mt-4 text-sm px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          Attempts remaining: {maxAttempts - incorrectGuesses}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="flex justify-center items-center bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <Hangman incorrectGuesses={incorrectGuesses} />
        </div>

        <div className="flex flex-col justify-center items-center">
          <WordDisplay
            word={currentWord.word}
            guessedLetters={guessedLetters}
            gameOver={gameStatus !== 'playing'}
          />

          {revealedHints.length > 0 && (
            <div className="mt-4 w-full p-4 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900 dark:to-orange-900 rounded-lg text-sm border border-yellow-200 dark:border-yellow-800">
              <div className="font-bold text-yellow-800 dark:text-yellow-200">Hints:</div>
              {revealedHints.map((hint, index) => (
                <div key={index} className="text-yellow-700 dark:text-yellow-300 mt-1">
                  {hint}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Keyboard
        guessedLetters={guessedLetters}
        correctLetters={new Set([...currentWord.word.toLowerCase()].filter(char => char !== ' '))}
        guessLetter={guessLetter}
        disabled={gameStatus !== 'playing' || isLoading}
      />

      {showModal && (
        <ResultModal
          gameStatus={gameStatus}
          word={currentWord.word}
          onPlayAgain={handlePlayAgain}
        />
      )}
    </div>
  );
};

export default Game;