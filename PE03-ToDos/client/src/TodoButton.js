import React from 'react';

const TodoButton = ({ children, onClick, active }) => (
  <button
    onClick={onClick}
    style={{
      ...styles.button,
      backgroundColor: active ? '#e0e0e0' : 'transparent',
    }}
  >
    {children}
  </button>
);

const styles = {
  button: {
    flex: 1,
    padding: '10px',
    border: 'none',
    borderTop: '1px solid #ccc',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default TodoButton;
