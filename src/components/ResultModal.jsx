import React from 'react';
import Confetti from 'react-confetti';

const ResultModal = ({ gameStatus, word, onPlayAgain }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      {gameStatus === 'won' && <Confetti recycle={false} numberOfPieces={200} />}
      <div 
        className={`
          bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 max-w-md w-full
          transform transition-all duration-300
          animate-[zoomIn_0.3s_ease-out]
        `}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="text-center">
          <div 
            className={`
              w-16 h-16 mx-auto rounded-full flex items-center justify-center
              ${gameStatus === 'won' 
                ? 'bg-green-100 dark:bg-green-900 text-green-500 dark:text-green-300' 
                : 'bg-red-100 dark:bg-red-900 text-red-500 dark:text-red-300'}
            `}
          >
            {gameStatus === 'won' ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </div>
          
          <h2 
            id="modal-title"
            className="mt-4 text-2xl font-bold text-gray-900 dark:text-white"
          >
            {gameStatus === 'won' ? 'Congratulations!' : 'Game Over'}
          </h2>
          
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            {gameStatus === 'won' 
              ? 'You guessed the word correctly!' 
              : 'Better luck next time!'
            }
          </p>
          
          <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-700 rounded">
            <p className="text-sm text-gray-600 dark:text-gray-300">The word was:</p>
            <p className="text-xl font-bold text-gray-900 dark:text-white">{word}</p>
          </div>
        </div>
        
        <div className="mt-6 flex justify-center">
          <button
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 
              hover:to-purple-600 text-white rounded-lg font-medium transition-all duration-200 
              transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 
              dark:focus:ring-blue-400"
            onClick={onPlayAgain}
          >
            Play Next Round
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultModal;