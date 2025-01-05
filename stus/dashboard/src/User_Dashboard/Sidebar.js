import React from 'react';
import './styles/Sidebar.css';

const Sidebar = ({ tasks, onChangePage }) => {
  return (
    <aside className="sidebar">
      <h2>Overview</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
      <button onClick={() => onChangePage('notifications')}>View Notifications</button>
    </aside>
  );
};

export default Sidebar;