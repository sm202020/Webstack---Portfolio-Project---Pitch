import React from 'react';
import './styles/NewTaskButton.css';

const NewTaskButton = ({ onClick }) => {
  return (
    <button className="new-task-btn" onClick={onClick}>
      + New Task
    </button>
  );
};

export default NewTaskButton;