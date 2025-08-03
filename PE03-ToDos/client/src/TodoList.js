import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, type, toggleComplete, deleteTodo }) => {
  const getFilteredTodos = () => {
    if (type === 'All') return todos;
    if (type === 'Complete') return todos.filter((todo) => todo.complete);
    if (type === 'Active') return todos.filter((todo) => !todo.complete);
  };

  return (
    <div>
      {getFilteredTodos().map((todo) => (
        <Todo
          key={todo.todoIndex}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
