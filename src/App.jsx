import React, { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Game from './components/Game';
import Header from './components/Header';
import AdSpace from './components/AdSpace';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [gameStats, setGameStats] = useLocalStorage('hangman-stats', {
    gamesPlayed: 0,
    gamesWon: 0,
    currentStreak: 0,
    bestStreak: 0,
    totalHintsUsed: 0
  });

  useEffect(() => {
    const handleFirstInteraction = () => {
      const audio = new Audio();
      audio.volume = 0.01;
      audio.play().catch(() => {});
      document.removeEventListener('click', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);
    return () => document.removeEventListener('click', handleFirstInteraction);
  }, []);

  const updateStats = (won, hintsUsed) => {
    setGameStats(prevStats => {
      const newStats = {
        gamesPlayed: prevStats.gamesPlayed + 1,
        gamesWon: won ? prevStats.gamesWon + 1 : prevStats.gamesWon,
        currentStreak: won ? prevStats.currentStreak + 1 : 0,
        bestStreak: won 
          ? Math.max(prevStats.bestStreak, prevStats.currentStreak + 1) 
          : prevStats.bestStreak,
        totalHintsUsed: prevStats.totalHintsUsed + hintsUsed
      };
      return newStats;
    });
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Header gameStats={gameStats} />
        
        {/* Header Ad */}
        {/*<div className="container mx-auto px-4">
          <AdSpace position="header" />
        </div>*/}

        <main className="flex-1 container mx-auto p-4">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Left Sidebar Ad */}
            {/*<div className="hidden lg:block">
              <AdSpace position="sidebar" />
            </div>*/}

            {/* Game Content */}
            <div className="flex-1 flex flex-col items-center">
              <Game updateStats={updateStats} />
            </div>

            {/* Right Sidebar Ad */}
            {/*<div className="hidden lg:block">
              <AdSpace position="sidebar" />
            </div>*/}
          </div>
        </main>

        <footer className="py-3 text-center text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Hangman Game - All rights reserved
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;