import { useState } from 'react';
import Daycards from './Daycards';

interface HabitcardProps {
  name: string;
}

const Habitcard = ({ name }: HabitcardProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center m-2 bg-mist-900 rounded-md pb-1.5">
      <div className="mr-2 border-2 border-amber-600 rounded-4xl size-7 font-bold m-1">
        <button className="w-full h-full" onClick={toggleCheck}>
          {isChecked ? '✓' : ''}
        </button>
      </div>
      <div className="flex items-start flex-col">
        <div className="font-bold pb-0.5">{name}</div>
        <div className="flex gap-4 text-xs pl-2">
          <Daycards day="Mon" />
        </div>
      </div>
    </div>
  );
};

export default Habitcard;
