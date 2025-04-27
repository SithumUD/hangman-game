import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award } from 'lucide-react';

const AchievementPopup = ({ achievement }) => {
  return (
    <AnimatePresence>
      {achievement && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed bottom-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 
            text-white p-4 rounded-lg shadow-lg flex items-center gap-3"
        >
          <Award className="w-8 h-8" />
          <div>
            <h3 className="font-bold text-lg">{achievement.name}</h3>
            <p className="text-sm opacity-90">{achievement.description}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AchievementPopup;