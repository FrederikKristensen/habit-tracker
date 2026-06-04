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
      <div>Habits</div>

      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Add</button>
      </form>

      <div>
        {habits.map((habit, index) => (
          <Habitcard key={index} name={habit} />
        ))}
      </div>
    </>
  );
}

export default App;
