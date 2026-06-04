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
    <div>
      <button onClick={toggleCheck}>
        {isChecked ? 'y' : 'O'}
      </button>
      <div>{name}</div>
    </div>
  );
};

export default Habitcard;
