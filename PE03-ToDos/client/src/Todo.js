import React from 'react';

const Todo = ({ todo, toggleComplete, deleteTodo }) => (
  <div style={styles.todoItem}>
    <span
      onClick={() => toggleComplete(todo.todoIndex)}
      style={{
        ...styles.text,
        textDecoration: todo.complete ? 'line-through' : 'none',
      }}
    >
      {todo.title}
    </span>
    <button onClick={() => deleteTodo(todo.todoIndex)} style={styles.deleteButton}>
      Delete
    </button>
  </div>
);

const styles = {
  todoItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
  text: {
    cursor: 'pointer',
    flex: 1,
  },
  deleteButton: {
    padding: '10px',
    fontSize: '14px',
    cursor: 'pointer',
    backgroundColor: '#f70606ff',
    color: 'white',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '8px',
  },
};

export default Todo;
