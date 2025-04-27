import React from 'react';

const WordDisplay = ({ word, guessedLetters, gameOver }) => {
  return (
    <div className="flex justify-center flex-wrap gap-3 mb-6">
      {word.split('').map((letter, index) => {
        const isSpace = letter === ' ';
        const isGuessed = guessedLetters.has(letter.toLowerCase());
        const shouldReveal = gameOver || isGuessed || isSpace;
        
        return (
          <div 
            key={`${index}-${letter}`}
            className={`
              w-10 h-14 md:w-12 md:h-16 
              flex items-center justify-center 
              ${isSpace ? 'border-none mx-2' : 'border-b-4 dark:border-gray-400 border-gray-700'}
              ${shouldReveal && !isSpace ? 'animate-[pop_0.3s_ease-in-out]' : ''}
              bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-800
              rounded-t-lg
            `}
            aria-label={shouldReveal ? letter : "Hidden letter"}
          >
            {shouldReveal ? (
              <span className="text-2xl md:text-3xl font-bold uppercase bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                {letter}
              </span>
            ) : (
              <span className="sr-only">Unknown letter</span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default WordDisplay;