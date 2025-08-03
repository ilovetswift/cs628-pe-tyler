import React from 'react';
import TodoButton from './TodoButton';

const TabBarItem = ({ title, setType, type }) => (
  <TodoButton onClick={() => setType(title)} active={type === title}>
    {title}
  </TodoButton>
);

export default TabBarItem;
