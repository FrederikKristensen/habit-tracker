import { Route, Routes } from 'react-router-dom';
import Todos from './pages/todos';
import Habits from './pages/habits';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="/habits" element={<Habits />} />
      </Routes>
    </>
  );
};

export default App;
