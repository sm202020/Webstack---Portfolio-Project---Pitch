import React, { useState, useEffect, useTransition } from 'react';
import { useLocation } from 'react-router-dom';
import { db, auth } from '../../config/firebaseConfig';
import { collection, addDoc, getDocs, updateDoc, doc } from 'firebase/firestore';
import Header from './Header';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import NotificationPage from './NotificationPage';
import TaskModal from './TaskModal';
import './UserDashboard.css';



export default function UserDashboard() {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [isPending, startTransition] = useTransition();
  const location = useLocation();
  const userEmail = location.state?.userEmail || 'Guest';
  const UsersCollectionRef = collection(db, `${userEmail}`);

  const logout = async () => {
    await signOut(auth);
  };

  useEffect(() => {
   
      const fetchTasks = async () => {
        const taskSnapshot = await getDocs(UsersCollectionRef);
        setTasks(taskSnapshot.docs.map((elem) => ({ ...elem.data(), id: elem.id })))
      }

      fetchTasks()
    }, []);

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

  const updateTaskStatus = async (taskId, newStatus) => {
    try {
      await updateDoc(doc(db, `${userEmail}`, taskId), { status: newStatus });
      setTasks(tasks.map(task => 
        task.id === taskId ? { ...task, status: newStatus } : task
      ));
    } catch (error) {
      console.error('Error updating task: ', error);
    }
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
                            onOpenModal={() => setIsModalOpen(true)}
                            onUpdateTaskStatus={updateTaskStatus}
                          />
                        )}
                        {currentPage === 'notifications' && <NotificationPage />}
                      </>
                    )}
                  </div>
                  {isModalOpen && (
                    <TaskModal 
                      onClose={() => setIsModalOpen(false)} 
                      onAddTask={addTask}
                    />
                  )}
                </div>
    </>
  )
 
}