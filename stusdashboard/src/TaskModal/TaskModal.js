import React, { useState } from 'react';
import './TaskModal.css';

const TaskModal = ({ onClose, onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask({ title, description });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add New Task</h2>
	  <form onSubmit={handleSubmit}>
	    <input
	      type="text"
	      placeholder="Task Title"
	      value={title}
	      onChange={(e) => setTitle(e.target.value)}
	      required
	  />
          <textarea
	    placeholder="Task Description"
	    value={description}
	    onChange={(e) => setDescription(e.target.value)}
	    required
	  ></textarea>
	  <div className="modal-buttons">
	    <button type="submit">Add Task</button>
	    <button type="button" onClick={onClose}>Cancel</button>
	  </div>
	</form>
      </div>
    </div>
  );
};

export default TaskModal;
