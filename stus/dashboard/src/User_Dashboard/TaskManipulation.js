import React, { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db, auth } from '../../config/firebaseConfig';
import { useNavigate, useParams } from 'react-router-dom';
import './TaskManipulation.css';

const TaskManipulation = () => {
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);

  const navigate = useNavigate();
  const { taskId } = useParams();

  useEffect(() => {
    fetchTask();
  }, [taskId]);

  const fetchTask = async () => {
    const user = auth.currentUser;

    if (!user) {
      navigate('/login');
      return;
    }

    try {
      const taskDoc = await getDoc(doc(db, 'tasks', taskId));
      if (taskDoc.exists() && taskDoc.data().userId === user.uid) {
        setTask({ id: taskDoc.id, ...taskDoc.data() });
        setLoading(false);
      } else {
        console.log('Task not found or unauthorized access!');
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Error fetching task:', error);
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateDoc(doc(db, 'tasks', task.id), task);
      console.log('Task updated successfully');
      navigate('/dashboard');
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, 'tasks', task.id));
      console.log('Task deleted successfully');
      navigate('/dashboard');
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (!task) return <div className="not-found">Task not found</div>;

  return (
    <div className="task-manipulation">
      <h2>Task Details</h2>

      {editMode ? (
        <form onSubmit={handleUpdate}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={task.title}
              onChange={handleInputChange}
              placeholder="Task Title"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={task.description}
              onChange={handleInputChange}
              placeholder="Task Description"
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              name="status"
              value={task.status}
              onChange={handleInputChange}
            >
              <option value="in_progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Save Changes</button>
        </form>
      ) : (
        <div className="task-info">
          <p><strong>Title:</strong> {task.title}</p>
          <p><strong>Description:</strong> {task.description}</p>
          <p><strong>Status:</strong> {task.status}</p>
        </div>
      )}

      <div className="button-group">
        <button onClick={() => setEditMode(!editMode)} className="btn btn-secondary">
          {editMode ? 'Cancel' : 'Edit'}
        </button>
        <button onClick={handleDelete} className="btn btn-danger">Delete Task</button>
        <button onClick={() => navigate('/dashboard')} className="btn btn-info">Back to Dashboard</button>
      </div>
    </div>
  );
};

export default TaskManipulation;