import Daycards from './Daycards';
import type { Habit } from '../pages/Habits';

interface HabitcardProps {
  habit: Habit;
  onToggleDay?: (habitId: string, day: string) => void;
  onRemove: (id: string) => void;
  toggleHabit?: (id: string) => void;
}

const Habitcard = ({ habit, onToggleDay, onRemove, toggleHabit }: HabitcardProps) => {
  const days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];

  const removeHabit = () => {
    onRemove(habit.id);
  };

  return (
    <div className="flex relative items-center m-2 bg-mist-900 rounded-md pb-1.5">
      <div className="flex items-start flex-col">
        <div className="mr-2 border-2 border-amber-600 rounded-4xl size-7 font-bold m-1">
          {toggleHabit && (
            <button className="w-full h-full" onClick={() => toggleHabit(habit.id)}>
              {habit.completed ? '✓' : ''}
            </button>
          )}
        </div>
        <div className="font-bold pb-0.5">{habit.name}</div>
        <div className="flex gap-1 text-xs pl-1">
          {days.map((day) => (
            <Daycards
              key={day}
              day={day}
              isSelected={habit.selectedDays.has(day)}
              onToggle={() => onToggleDay?.(habit.id, day)}
            />
          ))}
        </div>
      </div>
      <div>
        <button className="absolute top-1 right-2" onClick={removeHabit}>
          X
        </button>
      </div>
    </div>
  );
};

export default Habitcard;
