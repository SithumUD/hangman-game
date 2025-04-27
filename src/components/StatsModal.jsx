import React from 'react';
import { X, Trash2 } from 'lucide-react';

const StatsModal = ({ gameStats, onClose, onResetStats }) => {
  const winPercentage = gameStats.gamesPlayed > 0 
    ? Math.round((gameStats.gamesWon / gameStats.gamesPlayed) * 100) 
    : 0;

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all your statistics? This cannot be undone.')) {
      onResetStats();
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div 
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 max-w-md w-full"
        role="dialog"
        aria-modal="true"
        aria-labelledby="stats-modal-title"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 
            id="stats-modal-title"
            className="text-xl font-bold text-gray-900 dark:text-white"
          >
            Your Statistics
          </h2>
          
          <button
            onClick={onClose}
            className="p-1 rounded-full text-gray-400 hover:text-gray-600 dark:hover:text-gray-200
              focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              {gameStats.gamesPlayed}
            </p>
            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">Games Played</p>
          </div>
          
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              {winPercentage}%
            </p>
            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">Win Rate</p>
          </div>
          
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              {gameStats.currentStreak}
            </p>
            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">Current Streak</p>
          </div>
          
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              {gameStats.bestStreak}
            </p>
            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">Best Streak</p>
          </div>
        </div>
        
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Hints Used
            </span>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              {gameStats.totalHintsUsed}
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Win/Loss Ratio
            </span>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              {gameStats.gamesPlayed > 0 
                ? (gameStats.gamesWon / (gameStats.gamesPlayed - gameStats.gamesWon)).toFixed(1) 
                : '-'}
            </span>
          </div>
        </div>

        <button
          onClick={handleReset}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-red-600 
            bg-red-50 hover:bg-red-100 dark:text-red-400 dark:bg-gray-700 dark:hover:bg-gray-600 
            rounded-lg transition-colors"
        >
          <Trash2 size={16} />
          Reset All Statistics
        </button>
      </div>
    </div>
  );
};

export default StatsModal;