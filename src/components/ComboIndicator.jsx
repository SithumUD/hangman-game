import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ComboIndicator = ({ combo }) => {
  return (
    <AnimatePresence>
      {combo > 1 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-blue-500 
            text-white px-4 py-2 rounded-full shadow-lg"
        >
          <span className="text-2xl font-bold">{combo}x</span>
          <span className="text-sm ml-1">Combo!</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ComboIndicator;