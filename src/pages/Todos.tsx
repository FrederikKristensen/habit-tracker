import React, { useState } from 'react';
import Todocard from '../components/Todocard';
import type { Habit } from './Habits';
import Habitcard from '../components/Habitcard';

export interface Todo {
  id: string;
  name: string;
  completed: boolean;
}

interface TodosProps {
  habits: Habit[];
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  removeHabit: (id: string) => void;
}

const Todos = ({ habits, todos, setTodos, removeHabit }: TodosProps) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim()) {
      setTodos((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          name: input,
          completed: false,
        },
      ]);
      setInput('');
    }
  };

  const removeTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <div className="max-w-xs mx-auto p-3 bg-mist-700 rounded-lg">
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add todo..."
            className="flex-1 text-white focus:outline-none"
          />
          <button type="submit" className="text-white hover:text-mist-300">
            Add
          </button>
        </form>
      </div>

      <div className="max-w-sm mx-auto p-0.5 m-3 bg-mist-600 text-white rounded-sm">
        {todos.map((todo) => (
          <Todocard key={todo.id} todo={todo} onRemove={removeTodo} />
        ))}
        {habits.map((habit) => (
          <Habitcard key={habit.id} habit={habit} onRemove={removeHabit} />
        ))}
      </div>
    </>
  );
};

export default Todos;
