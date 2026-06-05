import { useState } from 'react';

interface HabitcardProps {
  name: string;
}

const Habitcard = ({ name }: HabitcardProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center m-2 bg-mist-400 rounded-md">
      <div className="mr-2 border-6 border-mist-950 rounded-4xl size-9 font-bold m-1">
        <button className="w-full h-full" onClick={toggleCheck}>
          {isChecked ? '✓' : ''}
        </button>
      </div>
      <div>{name}</div>
    </div>
  );
};

export default Habitcard;
