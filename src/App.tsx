import { Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Todos from './pages/Todos';
import type { Todo } from './pages/Todos';
import Habits from './pages/Habits';
import type { Habit } from './pages/Habits';
import Navbar from './components/Navbar';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [habits, setHabits] = useState<Habit[]>([]);

  const removeHabit = (id: string) => {
    setHabits((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleHabit = (id: string) => {
    setHabits((prev) =>
      prev.map((habit) => (habit.id === id ? { ...habit, completed: !habit.completed } : habit))
    );
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/todos" />} />
        <Route
          path="/todos"
          element={
            <Todos
              todos={todos}
              setTodos={setTodos}
              habits={habits}
              removeHabit={removeHabit}
              toggleHabit={toggleHabit}
            />
          }
        />
        <Route
          path="/habits"
          element={<Habits habits={habits} setHabits={setHabits} removeHabit={removeHabit} />}
        />
      </Routes>
    </>
  );
}

export default App;
