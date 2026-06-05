import React, { useState } from 'react';
import Habitcard from './components/Habitcard';
import './css/App.css';

function App() {
  const [habits, setHabits] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim()) {
      setHabits([...habits, input]);
      setInput('');
    }
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
        {habits.map((habit, index) => (
          <Habitcard key={index} name={habit} />
        ))}
      </div>
    </>
  );
}

export default App;
