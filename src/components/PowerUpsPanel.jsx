import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Shield, SkipForward } from 'lucide-react';

const PowerUpsPanel = ({ powerUps, onUsePowerUp }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Lightbulb':
        return <Lightbulb size={24} />;
      case 'Shield':
        return <Shield size={24} />;
      case 'SkipForward':
        return <SkipForward size={24} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex gap-2 mb-4">
      {powerUps.map((powerUp) => (
        <motion.button
          key={powerUp.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`
            flex items-center gap-2 px-3 py-2 rounded-lg
            ${powerUp.used
              ? 'bg-gray-200 dark:bg-gray-700 cursor-not-allowed'
              : 'bg-indigo-100 dark:bg-indigo-900 hover:bg-indigo-200 dark:hover:bg-indigo-800'}
            transition-colors duration-200
          `}
          onClick={() => !powerUp.used && onUsePowerUp(powerUp.id)}
          disabled={powerUp.used}
          title={powerUp.description}
        >
          {getIcon(powerUp.icon)}
          <span className="text-sm font-medium">{powerUp.name}</span>
        </motion.button>
      ))}
    </div>
  );
};

export default PowerUpsPanel;