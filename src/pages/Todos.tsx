import React, { useState } from 'react';
import Todocard from '../components/Todocard';
import type { Habit } from './Habits';
import Habitcard from '../components/Habitcard';
import { capitalize } from '../util/capitalize';
export interface Todo {
  id: string;
  name: string;
  completed: boolean;
}

interface TaskProps {
  habits: Habit[];
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  removeHabit: (id: string) => void;
  toggleHabit: (id: string) => void;
}

const Todos = ({ habits, todos, setTodos, toggleHabit }: TaskProps) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    // prevents reload on submit
    e.preventDefault();
    // checks if input field is empty
    if (input.trim()) {
      // Makes a new array with the previous state of todos and adds the new todo at the end
      setTodos((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          name: capitalize(input),
          completed: false,
        },
      ]);
      // empties the input field
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
          <Habitcard key={habit.id} habit={habit} toggleHabit={toggleHabit} />
        ))}
      </div>
    </>
  );
};

export default Todos;
