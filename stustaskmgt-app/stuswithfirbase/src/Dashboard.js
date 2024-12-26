import React from 'react';
import TaskList from './TaskList';
import NewTaskButton from './NewTaskButton';
import './Dashboard.css';
import { useAuth } from './contexts/AuthContext';
import { useNavigate } from 'react-router-dom';


const Dashboard = ({ tasks, onOpenModal, onUpdateTaskStatus }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const inProgressTasks = tasks.filter(task => task.status === 'in_progress');
  const completedTasks = tasks.filter(task => task.status === 'completed');

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
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
          <p>{tasks.length}</p>
        </div>
      </div>
      <NewTaskButton onClick={onOpenModal} />
      <div className="task-lists">
        <TaskList 
          title="In Progress Tasks" 
          tasks={inProgressTasks}
          onUpdateStatus={(taskId) => onUpdateTaskStatus(taskId, 'completed')}
        />
        <TaskList 
          title="Completed Tasks" 
          tasks={completedTasks}
          onUpdateStatus={(taskId) => onUpdateTaskStatus(taskId, 'in_progress')}
        />
      </div>
    </main>
  );
};

export default Dashboard;