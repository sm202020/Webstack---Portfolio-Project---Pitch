import React, { useState, useEffect, useTransition } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import NotificationPage from './NotificationPage';
import TaskModal from './TaskModal';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc } from 'firebase/firestore';
import './App.css';

const firebaseConfig = {
  apiKey: "AIzaSyClbn7ZrqRlvpJDgDKhFt8oWTghGWa1aR0",
  authDomain: "stus-6714f.firebaseapp.com",
  projectId: "stus-6714f",
  storageBucket: "stus-6714f.firebasestorage.app",
  messagingSenderId: "496601729164",
  appId: "1:496601729164:web:341a4dc127cab715ce93a9",
  measurementId: "G-G28ZR0MWW8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

function PrivateRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return user ? children : <Navigate to="/signin" />;
}

function AppContent() {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [isPending, startTransition] = useTransition();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      const fetchTasks = async () => {
        const tasksCollection = collection(db, 'Tasks');
        const taskSnapshot = await getDocs(tasksCollection);
        const taskList = taskSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setTasks(taskList);
      };

      fetchTasks();
    }
  }, [user]);

  const addTask = async (newTask) => {
    try {
      const docRef = await addDoc(collection(db, 'Tasks'), {
        ...newTask,
        userId: user.uid,
        status: 'in_progress',
        createdAt: new Date()
      });
      setTasks([...tasks, { ...newTask, id: docRef.id, status: 'in_progress' }]);
    } catch (error) {
      console.error("Error adding task: ", error);
    }
  };

  const updateTaskStatus = async (taskId, newStatus) => {
    try {
      await updateDoc(doc(db, 'Tasks', taskId), { status: newStatus });
      setTasks(tasks.map(task => 
        task.id === taskId ? { ...task, status: newStatus } : task
      ));
    } catch (error) {
      console.error("Error updating task: ", error);
    }
  };

  const changePage = (page) => {
    startTransition(() => {
      setCurrentPage(page);
    });
  };

  return (
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
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/*"
            element={
              <PrivateRoute>
                <AppContent />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}