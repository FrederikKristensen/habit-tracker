import React, { useState } from 'react';
import Habitcard from '../components/Habitcard';
import { capitalize } from '../util/capitalize';

export interface Habit {
  id: string;
  name: string;
  selectedDays: Set<string>;
  completed: boolean;
}

interface HabitsProps {
  habits: Habit[];
  setHabits: React.Dispatch<React.SetStateAction<Habit[]>>;
  removeHabit: (id: string) => void;
}

function Habits({ habits, setHabits, removeHabit }: HabitsProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    // prevents reload on submit
    e.preventDefault();
    // checks if input field is empty
    if (input.trim()) {
      // Makes a new array with the previous state of todos and adds the new todo at the end
      setHabits((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          name: capitalize(input),
          selectedDays: new Set(),
          completed: false,
        },
      ]);
      // empties the input field
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
      <div className="max-w-xs mx-auto p-3 bg-mist-700 rounded-lg">
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a habit..."
            className="flex-1 text-white focus:outline-none"
          />
          <button type="submit" className="text-white hover:text-mist-300">
            Add
          </button>
        </form>
      </div>

      <div className="max-w-sm mx-auto p-0.5 m-3 bg-mist-600 text-white rounded-sm">
        {habits.map((habit) => (
          <Habitcard key={habit.id} habit={habit} onToggleDay={toggleDay} onRemove={removeHabit} />
        ))}
      </div>
    </>
  );
}

export default Habits;
