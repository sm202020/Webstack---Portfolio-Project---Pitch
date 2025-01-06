import React from 'react';
import './Sidebar.css';

const Sidebar = ({ tasks }) => {
  return (
    <aside className="sidebar">
      <h2>Overview</h2>
      <ul>
        {tasks.map(task => (
	  <li key={task.id}>{task.title}</li>
	))}
       </ul>
     </aside>
  );
};

export default Sidebar;


