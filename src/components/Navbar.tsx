import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navStyle = ({ isActive }: { isActive: boolean }) =>
    `flex-1 text-center font-bold ${isActive ? 'text-white' : 'text-gray-400'}`;

  return (
    <nav className="max-w-2xs mx-auto flex gap-2 m-7 bg-mist-800 p-3 rounded-md">
      <NavLink to="/todos" className={navStyle}>
        Todos
      </NavLink>
      <NavLink to="/habits" className={navStyle}>
        Habits
      </NavLink>
    </nav>
  );
};

export default Navbar;
