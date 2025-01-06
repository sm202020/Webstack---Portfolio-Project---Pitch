import React, { useState, useEffect } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  
  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now(), status: 'in_progress' }]);
  };

  const updateTaskStatus = (taskId, newStatus) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, status: newStatus } : task
    ));
  };
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Sidebar tasks={tasks} />
	<Dashboard 
	  tasks={tasks} 
	  onOpenModal={() => setIsModalOpen(true)}
	  onUpdateTaskStatus={updateTaskStatus}
	/>
      </div>
    </div>
  );
};

export default App;
