// src/contexts/HabitContext.jsx
import React, { createContext, useContext, useState } from 'react';
import dayjs from 'dayjs';

const HabitContext = createContext();

export function HabitProvider({ children }) {
  const [savedHabits, setSavedHabits] = useState([]);

  const addHabit = (habit) => {
    setSavedHabits((prev) => [...prev, { ...habit, progressHistory: [] }]);
  };

  const toggleHabitProgress = (habit, date) => {
    setSavedHabits((prev) =>
      prev.map((h) => {
        if (h === habit) {
          const alreadyDone = h.progressHistory?.some((d) =>
            dayjs(d).isSame(date, 'day')
          );

          const newHistory = alreadyDone
            ? h.progressHistory.filter((d) => !dayjs(d).isSame(date, 'day'))
            : [...(h.progressHistory || []), date.toISOString()];

          return { ...h, progressHistory: newHistory };
        }
        return h;
      })
    );
  };

  return (
    <HabitContext.Provider value={{ savedHabits, addHabit, toggleHabitProgress }}>
      {children}
    </HabitContext.Provider>
  );
}

// ✅ Correct export here
export function useHabitContext() {
  return useContext(HabitContext);
}
