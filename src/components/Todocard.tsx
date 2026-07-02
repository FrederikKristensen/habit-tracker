import type { Todo } from '../pages/Todos';
import { useState } from 'react';

interface Todocardprops {
  todo: Todo;
  onRemove: (id: string) => void;
}

const Todocard = ({ todo, onRemove }: Todocardprops) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => {
    const doneValue = !isChecked;
    setIsChecked(doneValue);

    if (doneValue) {
      onRemove(todo.id);
    }
  };

  return (
    <div className="flex items-center m-2 bg-mist-900 rounded-md pb-1.5">
      <div className="mr-2 border-2 border-amber-600 rounded-4xl size-7 font-bold m-1">
        <button className="w-full h-full" onClick={toggleCheck}>
          {isChecked ? '✓' : ''}
        </button>
      </div>
      <div className="flex items-start flex-col">
        <div className="font-bold">{todo.name}</div>
      </div>
    </div>
  );
};

export default Todocard;
