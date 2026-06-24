interface DaycardsProps {
  day: string;
  isSelected: boolean;
  onToggle: () => void;
}

function getButtonSelected(isSelected: boolean): string {
  const buttonVariants = {
    selected: 'p-1 border-2 rounded-full cursor-pointer transition-colors bg-amber-600 text-white',
    default:
      'p-1 border-2 rounded-full cursor-pointer transition-colors bg-mist-700 text-gray-400 hover:bg-mist-600',
  };
  return buttonVariants[isSelected ? 'selected' : 'default'];
}

const Daycards = ({ day, isSelected, onToggle }: DaycardsProps) => {
  return (
    <button onClick={onToggle} className={getButtonSelected(isSelected)}>
      {day}
    </button>
  );
};

export default Daycards;
