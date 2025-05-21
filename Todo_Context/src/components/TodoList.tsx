
import { useTodos } from '../context/TodoContext';

const TodoList = () => {
  const { todos, toggleTodo, removeTodo } = useTodos();

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id} className="flex items-center justify-between p-2 border-b">
          <span
            onClick={() => toggleTodo(todo.id)}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            className="cursor-pointer flex-1"
          >
            {todo.text}
          </span>
          <button onClick={() => removeTodo(todo.id)} className="ml-4 text-red-600">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
