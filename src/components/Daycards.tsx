interface DaycardsProps {
  day: string;
}

const Daycards = ({ day }: DaycardsProps) => {
  return <button className="p-1 border-2 border-white">{day}</button>;
};

export default Daycards;
