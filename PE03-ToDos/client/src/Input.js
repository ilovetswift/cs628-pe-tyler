import React from 'react';

const Input = ({ inputValue, inputChange, addTodo }) => (
  <div style={styles.inputContainer}>
    <input
      type="text"
      value={inputValue}
      onChange={(e) => inputChange(e.target.value)}
      style={styles.input}
      placeholder="Enter task description"
    />
    <button onClick={addTodo} style={styles.button}>
      Add Todo
    </button>
  </div>
);

const styles = {
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '20px',
  },
  input: {
    flex: 1,
    padding: '10px',
    fontSize: '16px',
    marginRight: '10px',
  },
  button: {
    width: '125px',
    height: '50px',
    padding: '10px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#06b3f7ff',
    color: 'white',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '10px',
  },
};

export default Input;
