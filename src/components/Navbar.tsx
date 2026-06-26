import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="max-w-2xs mx-auto flex gap-2 m-7 font-bold text-white bg-mist-800 p-3 rounded-md">
      <NavLink to="/todos" className="flex-1 text-center">Todos</NavLink>
      <NavLink to="/habits" className="flex-1 text-center">Habits</NavLink>
    </nav>
  );
};

export default Navbar;
