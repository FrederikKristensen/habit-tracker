import type { Todo } from '../pages/Todos';

interface Todocardprops {
  todo: Todo;
}

const Todocard = ({ todo }: Todocardprops) => {
  return <div>{todo.name}</div>;
};

export default Todocard;
