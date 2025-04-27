import React from 'react';

const Hangman = ({ incorrectGuesses }) => {
  return (
    <div className="w-48 h-48 md:w-64 md:h-64 relative">
      <svg 
        viewBox="0 0 200 200" 
        className="w-full h-full stroke-current text-gray-800 dark:text-gray-200"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        {/* Base */}
        <line x1="40" y1="180" x2="160" y2="180" />
        
        {/* Vertical pole */}
        <line x1="60" y1="180" x2="60" y2="20" />
        
        {/* Horizontal top */}
        <line x1="60" y1="20" x2="140" y2="20" />
        
        {/* Rope */}
        <line x1="140" y1="20" x2="140" y2="40" />
        
        {/* Head - part 1 */}
        {incorrectGuesses >= 1 && (
          <circle 
            cx="140" 
            cy="60" 
            r="20" 
            className="animate-[fadeIn_0.5s_ease-in-out]"
          />
        )}
        
        {/* Body */}
        {incorrectGuesses >= 2 && (
          <line 
            x1="140" 
            y1="80" 
            x2="140" 
            y2="120" 
            className="animate-[drawLine_0.5s_ease-in-out]"
          />
        )}
        
        {/* Left arm */}
        {incorrectGuesses >= 3 && (
          <line 
            x1="140" 
            y1="90" 
            x2="120" 
            y2="100" 
            className="animate-[drawLine_0.5s_ease-in-out]"
          />
        )}
        
        {/* Right arm */}
        {incorrectGuesses >= 4 && (
          <line 
            x1="140" 
            y1="90" 
            x2="160" 
            y2="100" 
            className="animate-[drawLine_0.5s_ease-in-out]"
          />
        )}
        
        {/* Left leg */}
        {incorrectGuesses >= 5 && (
          <line 
            x1="140" 
            y1="120" 
            x2="120" 
            y2="150" 
            className="animate-[drawLine_0.5s_ease-in-out]"
          />
        )}
        
        {/* Right leg */}
        {incorrectGuesses >= 6 && (
          <line 
            x1="140" 
            y1="120" 
            x2="160" 
            y2="150" 
            className="animate-[drawLine_0.5s_ease-in-out]"
          />
        )}

        {/* Face - only appears when game is lost */}
        {incorrectGuesses >= 6 && (
          <>
            {/* X eyes */}
            <line x1="130" y1="55" x2="135" y2="60" className="animate-[drawLine_0.3s_ease-in-out_0.2s_forwards]" strokeWidth="2" opacity="0" />
            <line x1="135" y1="55" x2="130" y2="60" className="animate-[drawLine_0.3s_ease-in-out_0.3s_forwards]" strokeWidth="2" opacity="0" />
            <line x1="145" y1="55" x2="150" y2="60" className="animate-[drawLine_0.3s_ease-in-out_0.4s_forwards]" strokeWidth="2" opacity="0" />
            <line x1="150" y1="55" x2="145" y2="60" className="animate-[drawLine_0.3s_ease-in-out_0.5s_forwards]" strokeWidth="2" opacity="0" />
            
            {/* Sad mouth */}
            <path d="M130,70 Q140,60 150,70" className="animate-[drawLine_0.5s_ease-in-out_0.6s_forwards]" strokeWidth="2" opacity="0" />
          </>
        )}
      </svg>
    </div>
  );
};

export default Hangman;