import React from 'react';
import { auth } from '../../config/firebaseConfig';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import TaskList from './TaskList';
import NewTaskButton from './NewTaskButton';
import './Dashboard.css';

const Dashboard = ({ tasks, onOpenModal, onUpdateTaskStatus, onEditTask, onDeleteTask, onViewTask }) => {
  const navigate = useNavigate();

  const inProgressTasks = tasks.filter(task => task.status === 'in_progress');
  const completedTasks = tasks.filter(task => task.status === 'completed');

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  return (
    <main className="dashboard">
      <nav className="bg-blue-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">STUS Dashboard</h1>
          <div>
            <button onClick={() => navigate('/notifications')} className="text-white mr-4">Notifications</button>
            <button onClick={handleLogout} className="text-white">Logout</button>
          </div>
        </div>
      </nav>
      <h2>Welcome to STUS Dashboard</h2>
      <div className="dashboard-summary">
        <div className="summary-item">
          <h3>Tasks In Progress</h3>
          <p>{inProgressTasks.length}</p>
        </div>
        <div className="summary-item">
          <h3>Tasks Completed</h3>
          <p>{completedTasks.length}</p>
        </div>
        <div className="summary-item">
          <h3>Total Tasks</h3>
          <p>{tasks.length - 1}</p>
        </div>
      </div>
      <NewTaskButton onClick={onOpenModal} />
      <div className="task-lists">
        <TaskList
          title="In Progress Tasks"
          tasks={inProgressTasks}
          onUpdateStatus={(taskId) => onUpdateTaskStatus(taskId, 'completed')}
          onEditTask={onEditTask}
          onDeleteTask={onDeleteTask}
          onViewTask={onViewTask}
        />
        <TaskList
          title="Completed Tasks"
          tasks={completedTasks}
          onUpdateStatus={(taskId) => onUpdateTaskStatus(taskId, 'in_progress')}
          onEditTask={onEditTask}
          onDeleteTask={onDeleteTask}
          onViewTask={onViewTask}
        />
      </div>
    </main>
  );
};

export default Dashboard;
