import { Award, Crown, Star, Zap, Target, Book, Trophy } from 'lucide-react';

export const ACHIEVEMENTS = [
  {
    id: 'first_win',
    name: 'First Victory',
    description: 'Win your first game',
    icon: 'Trophy'
  },
  {
    id: 'perfect_game',
    name: 'Perfect Game',
    description: 'Win without any incorrect guesses',
    icon: 'Star'
  },
  {
    id: 'streak_master',
    name: 'Streak Master',
    description: 'Achieve a 5-game winning streak',
    icon: 'Zap'
  },
  {
    id: 'category_collector',
    name: 'Category Collector',
    description: 'Play words from all categories',
    icon: 'Book'
  },
  {
    id: 'combo_king',
    name: 'Combo King',
    description: 'Achieve a 10x letter combo',
    icon: 'Crown'
  },
  {
    id: 'daily_devotee',
    name: 'Daily Devotee',
    description: 'Complete 5 daily challenges',
    icon: 'Target'
  },
  {
    id: 'power_player',
    name: 'Power Player',
    description: 'Use all types of power-ups',
    icon: 'Award'
  }
];

export const checkAchievements = (stats) => {
  const newAchievements = [];
  const existingIds = new Set(stats.achievements.map(a => a.id));

  // First Win
  if (!existingIds.has('first_win') && stats.gamesWon > 0) {
    newAchievements.push(ACHIEVEMENTS.find(a => a.id === 'first_win'));
  }

  // Streak Master
  if (!existingIds.has('streak_master') && stats.currentStreak >= 5) {
    newAchievements.push(ACHIEVEMENTS.find(a => a.id === 'streak_master'));
  }

  // Category Collector
  if (!existingIds.has('category_collector') && stats.categoriesUnlocked.length >= 5) {
    newAchievements.push(ACHIEVEMENTS.find(a => a.id === 'category_collector'));
  }

  // Combo King
  if (!existingIds.has('combo_king') && stats.maxCombo >= 10) {
    newAchievements.push(ACHIEVEMENTS.find(a => a.id === 'combo_king'));
  }

  // Daily Devotee
  if (!existingIds.has('daily_devotee') && stats.dailyChallengesCompleted.length >= 5) {
    newAchievements.push(ACHIEVEMENTS.find(a => a.id === 'daily_devotee'));
  }

  // Power Player
  if (!existingIds.has('power_player') && stats.powerUpsUsed >= 3) {
    newAchievements.push(ACHIEVEMENTS.find(a => a.id === 'power_player'));
  }

  return newAchievements;
};