import Daycards from './Daycards';
import type { Habit } from '../pages/Habits';
import { useState } from 'react';
import { cardToggleCheck } from '../util/cardToggleCheck';

interface HabitcardProps {
  habit: Habit;
  onToggleDay?: (habitId: string, day: string) => void;
  onRemove?: (id: string) => void;
  toggleHabit?: (id: string) => void;
}

const Habitcard = ({ habit, onToggleDay, onRemove, toggleHabit }: HabitcardProps) => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="relative m-1.5 p-0.5 bg-mist-900 rounded-md pb-1.5">
      <div className="flex items-center">
        <div className="mr-2 border-2 border-amber-600 rounded-4xl size-7 font-bold m-2">
          {toggleHabit && (
            <button
              className="w-full h-full"
              onClick={() => cardToggleCheck(isChecked, setIsChecked)}
            >
              {isChecked ? '✓' : ' '}
            </button>
          )}
        </div>
        <div className={`font-bold pb-0.5 ${isChecked ? 'line-through' : ''}`}>{habit.name}</div>
      </div>
      <div className="flex gap-1.5 text-xs pl-2">
        {days.map((day) => (
          <Daycards
            key={day}
            day={day}
            isSelected={habit.selectedDays.has(day)}
            onToggle={() => onToggleDay?.(habit.id, day)}
          />
        ))}
      </div>
      <div>
        {onRemove && (
          <button className="absolute top-1 right-2" onClick={() => onRemove(habit.id)}>
            X
          </button>
        )}
      </div>
    </div>
  );
};

export default Habitcard;
