import React from 'react';
import useSound from '../hooks/useSound';

const Keyboard = ({ 
  guessedLetters, 
  correctLetters, 
  guessLetter,
  disabled
}) => {
  const rows = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm']
  ];

  const getButtonClass = (letter) => {
    const isGuessed = guessedLetters.has(letter);
    const isCorrect = correctLetters.has(letter);
    
    if (!isGuessed) {
      return "bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-600 dark:hover:to-gray-700 shadow-md";
    }
    
    if (isCorrect) {
      return "bg-gradient-to-b from-green-400 to-green-500 dark:from-green-500 dark:to-green-600 text-white shadow-lg";
    }
    
    return "bg-gradient-to-b from-red-400 to-red-500 dark:from-red-500 dark:to-red-600 text-white shadow-lg";
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-8" role="keyboard">
      {rows.map((row, rowIndex) => (
        <div 
          key={`row-${rowIndex}`} 
          className="flex justify-center gap-1.5 md:gap-2 mt-2"
        >
          {rowIndex === 2 && <div className="flex-grow max-w-[20px]"></div>}
          
          {row.map(letter => (
            <button
              key={letter}
              className={`
                w-8 h-12 md:w-12 md:h-14 
                rounded-lg 
                text-lg md:text-xl font-medium 
                uppercase 
                transition-all duration-300
                transform hover:scale-105 active:scale-95
                disabled:opacity-80 disabled:scale-100 disabled:hover:scale-100
                focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
                ${getButtonClass(letter)}
              `}
              onClick={() => guessLetter(letter)}
              disabled={guessedLetters.has(letter) || disabled}
              aria-label={letter}
              aria-pressed={guessedLetters.has(letter)}
            >
              {letter}
            </button>
          ))}
          
          {rowIndex === 2 && <div className="flex-grow max-w-[20px]"></div>}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;