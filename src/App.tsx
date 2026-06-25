import { Route, Routes, Navigate } from 'react-router-dom';
import Todos from './pages/todos';
import Habits from './pages/habits';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/todos" />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/habits" element={<Habits />} />
      </Routes>
    </>
  );
};

export default App;
