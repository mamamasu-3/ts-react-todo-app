import React from 'react';
import { Todo } from '../types/todo';

interface TodoProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoComponent: React.FC<TodoProps> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.title}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>削除</button>
    </div>
  );
};

export default TodoComponent;
