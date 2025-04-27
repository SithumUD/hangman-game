import React from 'react';
import { format } from 'date-fns';
import { Calendar } from 'lucide-react';

const DailyChallenge = ({ onStart, completed }) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg text-white mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Calendar className="w-6 h-6" />
          <h2 className="text-lg font-bold">Daily Challenge</h2>
        </div>
        <span className="text-sm opacity-80">{format(new Date(), 'MMM d, yyyy')}</span>
      </div>
      
      {!completed ? (
        <div className="mt-3">
          <p className="text-sm mb-3 opacity-90">
            Complete today's challenge to earn extra points and achievements!
          </p>
          <button
            onClick={onStart}
            className="bg-white text-purple-600 px-4 py-2 rounded-md font-medium
              hover:bg-opacity-90 transition-colors duration-200"
          >
            Start Challenge
          </button>
        </div>
      ) : (
        <div className="mt-3 bg-white bg-opacity-20 p-3 rounded-md">
          <p className="text-sm">
            You've completed today's challenge! Come back tomorrow for a new one.
          </p>
        </div>
      )}
    </div>
  );
};

export default DailyChallenge;