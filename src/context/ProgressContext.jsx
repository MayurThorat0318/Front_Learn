import React, { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

// Create Progress Context
const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  // Use our custom useLocalStorage hook to persist user progress
  const [completedLessons, setCompletedLessons] = useLocalStorage('completed-lessons', []);

  // Check if a lesson is completed
  const isCompleted = (lessonId) => {
    return completedLessons.includes(lessonId);
  };

  // Mark a lesson as completed
  const markComplete = (lessonId) => {
    setCompletedLessons((prev) => {
      if (prev.includes(lessonId)) return prev;
      return [...prev, lessonId];
    });
  };

  // Toggle/remove completion
  const markIncomplete = (lessonId) => {
    setCompletedLessons((prev) => prev.filter((id) => id !== lessonId));
  };

  // Reset all course progress
  const resetProgress = () => {
    setCompletedLessons([]);
  };

  return (
    <ProgressContext.Provider value={{
      completedLessons,
      isCompleted,
      markComplete,
      markIncomplete,
      resetProgress
    }}>
      {children}
    </ProgressContext.Provider>
  );
};

// Hook to consume ProgressContext easily
export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
