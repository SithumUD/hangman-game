import React, { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Game from './components/Game';
import Header from './components/Header';
import AdSpace from './components/AdSpace';
import useLocalStorage from './hooks/useLocalStorage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import ContactUs from './components/ContactPage';
import PrivacyPolicy from './components/PrivacyPage';
import TermsConditions from './components/TermsPage';

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
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
          <Header gameStats={gameStats} />

          <main className="flex-1 container mx-auto p-4">
            <Routes>
              <Route
                path="/"
                element={
                  <div className="flex flex-col lg:flex-row gap-4">
                    <div className="flex-1 flex flex-col items-center">
                      <Game updateStats={updateStats} />
                    </div>
                  </div>
                }
              />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
            </Routes>
          </main>

          <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
            <div className="flex flex-col md:flex-row justify-center items-center gap-2">
              <Link to="/" className="hover:underline">Home</Link>
              <Link to="/contact" className="hover:underline">Contact Us</Link>
              <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
              <Link to="/terms-conditions" className="hover:underline">Terms & Conditions</Link>
            </div>
            <div className="mt-2">
              &copy; {new Date().getFullYear()} Hangword - Hangman Game - All rights reserved
            </div>
          </footer>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
