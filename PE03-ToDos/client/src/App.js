import React, { useState } from 'react';
import Heading from './Heading';
import Input from './Input';
import TodoList from './TodoList';
import TabBar from './TabBar';

let todoIndex = 0;

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [type, setType] = useState('All');

  const inputChange = (text) => setInputValue(text);

  const addTodo = () => {
    if (inputValue.trim() === '') return;
    const newTodo = {
      title: inputValue,
      todoIndex: todoIndex++,
      complete: false,
    };
    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const deleteTodo = (index) =>
    setTodos(todos.filter((todo) => todo.todoIndex !== index));

  const toggleComplete = (index) =>
    setTodos(
      todos.map((todo) =>
        todo.todoIndex === index
          ? { ...todo, complete: !todo.complete }
          : todo
      )
    );

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <Heading />
        <Input inputValue={inputValue} inputChange={inputChange} addTodo={addTodo} />
        <TodoList todos={todos} type={type} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
      </div>
      <TabBar type={type} setType={setType} />
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: 1,
    paddingTop: '60px',
    padding: '0 20px',
    overflowY: 'auto',
  },
};

export default App;
