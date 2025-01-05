import React, { useState, useEffect, useTransition } from 'react';
import { useLocation } from 'react-router-dom';
import { db, auth } from '../../config/firebaseConfig';
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import Header from './Header';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import NotificationPage from './NotificationPage';
import TaskModal from './TaskModal';
import './styles/UserDashboard.css';

export default function UserDashboard() {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null); 
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [isPending, startTransition] = useTransition();
  const location = useLocation();
  const userEmail = location.state?.userEmail || 'Guest';
  const UsersCollectionRef = collection(db, `${userEmail}`);

  useEffect(() => {
    const fetchTasks = async () => {
      const taskSnapshot = await getDocs(UsersCollectionRef);
      setTasks(taskSnapshot.docs.map((elem) => ({ ...elem.data(), id: elem.id })));
    };

    fetchTasks();
  }, [UsersCollectionRef]);

  const addTask = async (newTask) => {
    try {
      const docRef = await addDoc(collection(db, `${userEmail}`), {
        ...newTask,
        status: 'in_progress',
        createdAt: new Date(),
      });
      setTasks([...tasks, { ...newTask, id: docRef.id, status: 'in_progress' }]);
    } catch (error) {
      console.error('Error adding task: ', error);
    }
  };

  const editTask = async (updatedTask) => {
    try {
      await updateDoc(doc(db, `${userEmail}`, updatedTask.id), updatedTask);
      setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
    } catch (error) {
      console.error('Error updating task: ', error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await deleteDoc(doc(db, `${userEmail}`, taskId));
      setTasks(tasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error('Error deleting task: ', error);
    }
  };

  const updateTaskStatus = async (taskId, newStatus) => {
  const taskToUpdate = tasks.find((task) => task.id === taskId);
  const updatedTask = {
    ...taskToUpdate,
    status: newStatus,
    deadline: newStatus === 'completed' ? null : taskToUpdate.deadline,
  };

  try {
    await updateDoc(doc(db, `${userEmail}`, taskId), updatedTask);
    setTasks(tasks.map((task) => (task.id === taskId ? updatedTask : task)));
  } catch (error) {
    console.error('Error updating task status:', error);
  }
};


  const viewTask = (task) => {
    alert(`Title: ${task.title}\nDescription: ${task.description}`);
  };

  const changePage = (page) => {
    startTransition(() => {
      setCurrentPage(page);
    });
  };

  return (
    <>
      <h2>Welcome {userEmail}</h2>
      <div className="app">
        <Header onChangePage={changePage} />
        <div className="main-content">
          <Sidebar tasks={tasks} onChangePage={changePage} />
          {isPending ? (
            <div>Loading...</div>
          ) : (
            <>
              {currentPage === 'dashboard' && (
                <Dashboard
                  tasks={tasks}
                  onOpenModal={() => {
                    setIsModalOpen(true);
                    setTaskToEdit(null); 
                  }}
                  onUpdateTaskStatus={updateTaskStatus}
                  onEditTask={(task) => {
                    setTaskToEdit(task);
                    setIsModalOpen(true);
                  }}
                  onDeleteTask={deleteTask}
                  onViewTask={viewTask}
                />
              )}
              {currentPage === 'notifications' && <NotificationPage userEmail={userEmail}/>}
            </>
          )}
        </div>
        {isModalOpen && (
          <TaskModal
            onClose={() => setIsModalOpen(false)}
            onAddTask={addTask}
            onEditTask={editTask}
            taskToEdit={taskToEdit}
          />
        )}
      </div>
    </>
  );
}
