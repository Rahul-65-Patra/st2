import React, { useState, useEffect } from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [input, setInput] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (input.trim() === "") return;
    const newTodo: Todo = { id: Date.now(), text: input, completed: false };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearTodos = () => {
    setTodos([]);
  };

  const startEditing = (id: number, text: string) => {
    setEditingId(id);
    setEditingText(text);
  };

  const saveEdit = (id: number) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: editingText } : todo))
    );
    setEditingId(null);
    setEditingText("");
  };

  return (
    <div className="max-w-lg p-6 mx-auto mt-[120px] space-y-4 bg-white border border-gray-200 shadow-lg rounded-xl">
      <h2 className="text-4xl font-semibold text-center text-gray-700">To-Do List</h2>
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
          className="flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button onClick={addTodo} className="px-4 py-2 font-bold text-white transition bg-blue-500 rounded-lg hover:bg-blue-600">
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center justify-between p-3 bg-gray-100 rounded-lg shadow-sm">
            {editingId === todo.id ? (
              <input
                type="text"
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
                className="flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <span
                className={`cursor-pointer text-lg ${todo.completed ? "line-through text-gray-500" : "text-gray-800"}`}
                onClick={() => toggleComplete(todo.id)}
              >
                {todo.text}
              </span>
            )}
            <div className="flex gap-2">
              {editingId === todo.id ? (
                <button onClick={() => saveEdit(todo.id)} className="text-green-600 transition hover:text-green-700">
                  ✅
                </button>
              ) : (
                <button onClick={() => startEditing(todo.id, todo.text)} className="text-blue-600 transition hover:text-blue-700">
                  ✏️
                </button>
              )}
              <button onClick={() => deleteTodo(todo.id)} className="text-red-600 transition hover:text-red-700">
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>
      {todos.length > 0 && (
        <button onClick={clearTodos} className="w-full py-2 mt-4 font-bold text-white transition bg-red-500 rounded-lg hover:bg-red-600">
          Clear All
        </button>
      )}
    </div>
  );
};

export default TodoList;