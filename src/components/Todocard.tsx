import type { Todo } from '../pages/Todos';
import { useState } from 'react';
import { cardToggleCheck } from '../util/cardToggleCheck';

interface Todocardprops {
  todo: Todo;
  onRemove: (id: string) => void;
}

const Todocard = ({ todo }: Todocardprops) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex items-center m-1.5 p-0.5 bg-mist-900 rounded-md pb-1.5">
      <div className="mr-2 border-2 border-amber-600 rounded-4xl size-7 font-bold m-1.5">
        <button
          className="w-full h-full cursor-pointer"
          onClick={() => cardToggleCheck(isChecked, setIsChecked)}
        >
          {isChecked ? '✓' : ''}
        </button>
      </div>
      <div className="flex items-start flex-col font-bold">
        <div className={isChecked ? 'line-through' : ''}>{todo.name}</div>
      </div>
    </div>
  );
};

export default Todocard;
