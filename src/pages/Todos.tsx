import { useState } from 'react';
import Todocard from '../components/Todocard';

export interface Todo {
  id: string;
  name: string;
}

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now().toString(),
          name: input,
        },
      ]);
      setInput('');
    }
  };
  return (
    <>
      <div className="max-w-xs mx-auto p-3 bg-mist-700 rounded-lg">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add todo..."
          />
          <button type="submit">Add</button>
        </form>
      </div>

      <div className="max-w-sm mx-auto p-0.5 m-3 bg-mist-600 text-white rounded-sm">
        {todos.map((todo) => (
          <Todocard key={todo.id} todo={todo} />
        ))}
      </div>
    </>
  );
};

export default Todos;
