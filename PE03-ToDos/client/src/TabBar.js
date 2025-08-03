import React from 'react';
import TabBarItem from './TabBarItem';

const TabBar = ({ type, setType }) => (
  <div style={styles.tabBar}>
    {['All', 'Active', 'Complete'].map((title) => (
      <TabBarItem key={title} title={title} setType={setType} type={type} />
    ))}
  </div>
);

const styles = {
  tabBar: {
    display: 'flex',
    justifyContent: 'space-around',
    borderTop: '1px solid #ccc',
    marginTop: '20px',
  },
};

export default TabBar;
