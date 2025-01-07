import React, { useState, useEffect } from 'react';
import './styles/TaskModal.css';

const TaskModal = ({ onClose, onAddTask, onEditTask, taskToEdit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setDeadline(taskToEdit.deadline || '');
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskData = { title, description, deadline: deadline || null };
    if (taskToEdit) {
      onEditTask({ ...taskToEdit, ...taskData });
    } else {
      onAddTask(taskData);
    }
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{taskToEdit ? 'Edit Task' : 'Add New Task'}</h2>
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
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            required={!taskToEdit}
          />
          <div className="modal-buttons">
            <button type="submit">{taskToEdit ? 'Update Task' : 'Add Task'}</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;
