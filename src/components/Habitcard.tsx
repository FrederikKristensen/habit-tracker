import { useState } from 'react';

const Habitcard = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <button onClick={toggleCheck}>
        {isChecked ? 'y' : 'O'}
      </button>
      <div>habitcard</div>
    </div>
  );
};

export default Habitcard;
