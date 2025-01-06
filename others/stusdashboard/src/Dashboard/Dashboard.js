import React from "react";
import "./Dashboard.css";
import TaskList from "../TaskList/TaskList";
import NewTaskButton from "../NewTaskButton/NewTaskButton";


const Dashboard = ({ tasks, onOpenModal, onUpdateTaskStatus }) => {
  const inProgressTasks = tasks.filter(task => task.status === 'in_progress');
  const completedTasks = tasks.filter(task => task.status === 'completed');
  
  return (
    <main className="dashboard">
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
