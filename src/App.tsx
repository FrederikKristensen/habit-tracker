import React, { useState } from 'react';
import Habitcard from './components/Habitcard';
import './css/App.css';

export interface Habit {
  id: string;
  name: string;
  selectedDays: Set<string>;
}

function App() {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim()) {
      setHabits([
        ...habits,
        {
          id: Date.now().toString(),
          name: input,
          selectedDays: new Set(),
        },
      ]);
      setInput('');
    }
  };

  const toggleDay = (habitId: string, day: string) => {
    setHabits(
      habits.map((habit) => {
        if (habit.id === habitId) {
          const newSelectedDays = new Set(habit.selectedDays);
          if (newSelectedDays.has(day)) {
            newSelectedDays.delete(day);
          } else {
            newSelectedDays.add(day);
          }
          return { ...habit, selectedDays: newSelectedDays };
        }
        return habit;
      })
    );
  };

  return (
    <>
      <div className="text-white font-bold bg-mist-800 max-w-2xs mx-auto p-3 m-8  rounded-md">
        <button>Habits</button>
      </div>

      <div className="text-white font-semibold bg-mist-700 max-w-xs mx-auto p-2">
        <form onSubmit={handleSubmit}>
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
          <button type="submit">Add</button>
        </form>
      </div>

      <div className="text-white bg-mist-600 max-w-sm mx-auto p-0.5 m-3">
        {habits.map((habit) => (
          <Habitcard key={habit.id} habit={habit} onToggleDay={toggleDay} />
        ))}
      </div>
    </>
  );
}

export default App;
