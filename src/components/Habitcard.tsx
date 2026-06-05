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
    <div className="flex items-center m-2 bg-mist-400">
      <div className="mr-2 border-3 border-black size-9">
        <button onClick={toggleCheck}>{isChecked ? 'y' : 'O'}</button>
      </div>
      <div>{name}</div>
    </div>
  );
};

export default Habitcard;
