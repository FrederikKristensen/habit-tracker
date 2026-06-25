import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/todos">Todos</NavLink>
      <NavLink to="/habits">Habits</NavLink>
    </nav>
  );
};

export default Navbar;
