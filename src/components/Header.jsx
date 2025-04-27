import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate
import { Moon, Sun, BarChart, Crown } from 'lucide-react';
import StatsModal from './StatsModal';
// import SubscriptionModal from './SubscriptionModal';

const Header = ({ gameStats }) => {
  const { theme, toggleTheme } = useTheme();
  const [showStats, setShowStats] = useState(false);
  const navigate = useNavigate(); // ✅ Initialize useNavigate

  // const [showSubscription, setShowSubscription] = useState(false);

  // const handleSubscribe = (plan) => {
  //   console.log('Subscribing to plan:', plan);
  //   setShowSubscription(false);
  // };

  const handleLogoClick = () => {
    navigate('/'); // ✅ Navigate to home
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1
          onClick={handleLogoClick}
          className="cursor-pointer text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400"
        >
          Hangword
        </h1>

        <div className="flex items-center gap-2">
          {/* Subscription Button (commented)
          <button
            onClick={() => setShowSubscription(true)}
            className="flex items-center gap-1 px-3 py-1.5 rounded-md
              bg-gradient-to-r from-purple-500 to-blue-500 
              text-white
              hover:from-purple-600 hover:to-blue-600
              transition-all duration-200"
            aria-label="Subscribe"
          >
            <Crown size={18} />
            <span className="hidden md:inline">Subscribe</span>
          </button>
          */}

          <button
            onClick={() => setShowStats(true)}
            className="flex items-center gap-1 px-3 py-1.5 rounded-md
              bg-gray-100 dark:bg-gray-700 
              text-gray-700 dark:text-gray-300
              hover:bg-gray-200 dark:hover:bg-gray-600
              transition-colors duration-200"
            aria-label="View statistics"
          >
            <BarChart size={18} />
            <span className="hidden md:inline">Stats</span>
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-md
              bg-gray-100 dark:bg-gray-700 
              text-gray-700 dark:text-gray-300
              hover:bg-gray-200 dark:hover:bg-gray-600
              transition-colors duration-200"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>

      {showStats && (
        <StatsModal gameStats={gameStats} onClose={() => setShowStats(false)} />
      )}

      {/* Subscription Modal (commented)
      {showSubscription && (
        <SubscriptionModal 
          onClose={() => setShowSubscription(false)}
          onSubscribe={handleSubscribe}
        />
      )}
      */}
    </header>
  );
};

export default Header;
