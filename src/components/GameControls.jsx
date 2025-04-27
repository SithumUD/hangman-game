import React from 'react';
import { HelpCircle, Volume2, VolumeX } from 'lucide-react';

const GameControls = ({
  difficulty,
  changeDifficulty,
  hintsUsed,
  hintLimit,
  useHint,
  gameStatus,
  soundEnabled,
  setSoundEnabled
}) => {
  return (
    <div className="w-full flex flex-wrap justify-center gap-3 mb-4">
      <div className="flex gap-1 p-1 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-full shadow-inner">
        {(['easy', 'medium', 'hard']).map((level) => (
          <button
            key={level}
            className={`
              px-4 py-2 rounded-full text-sm font-medium
              transition-all duration-300 transform hover:scale-105
              ${difficulty === level 
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' 
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}
            `}
            onClick={() => changeDifficulty(level)}
            aria-pressed={difficulty === level}
          >
            {level.charAt(0).toUpperCase() + level.slice(1)}
          </button>
        ))}
      </div>

      <button
        className={`
          flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
          transition-all duration-300 transform hover:scale-105
          ${hintsUsed < hintLimit && gameStatus === 'playing'
            ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white shadow-lg hover:from-yellow-500 hover:to-orange-500'
            : 'bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed'}
        `}
        onClick={useHint}
        disabled={hintsUsed >= hintLimit || gameStatus !== 'playing'}
        aria-label="Use hint"
      >
        <HelpCircle size={16} />
        Hint ({hintLimit - hintsUsed})
      </button>

      <button
        className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
          bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800
          text-gray-700 dark:text-gray-300
          hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-600 dark:hover:to-gray-700
          transition-all duration-300 transform hover:scale-105 shadow-lg"
        onClick={() => setSoundEnabled(!soundEnabled)}
        aria-label={soundEnabled ? "Disable sound" : "Enable sound"}
        aria-pressed={soundEnabled}
      >
        {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
        {soundEnabled ? "Sound On" : "Sound Off"}
      </button>
    </div>
  );
};

export default GameControls;