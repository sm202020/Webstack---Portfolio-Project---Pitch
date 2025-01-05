import React from 'react';
import './TaskList.css';

const TaskList = ({ title, tasks, onUpdateStatus, onEditTask, onDeleteTask, onViewTask }) => {
  return (
    <div className="task-list">
      <h3>{title}</h3>
      {tasks.map(task => (
        <div key={task.id} className="task-item">
          <h4>{task.title}</h4>
          <div className="task-actions">
            <button onClick={() => onUpdateStatus(task.id)}>Toggle Status</button>
            <button onClick={() => onEditTask(task)}>Edit</button>
            <button onClick={() => onDeleteTask(task.id)}>Delete</button>
            <button onClick={() => onViewTask(task)}>View</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
