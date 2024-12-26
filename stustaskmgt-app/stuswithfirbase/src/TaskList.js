import React from 'react';
import './TaskList.css';

const TaskList = ({ title, tasks, onUpdateStatus }) => {
  return (
    <div className="task-list">
      <h3>{title}</h3>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title}
            <button onClick={() => onUpdateStatus(task.id)}>
              {task.status === 'in_progress' ? 'Complete' : 'Reopen'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;