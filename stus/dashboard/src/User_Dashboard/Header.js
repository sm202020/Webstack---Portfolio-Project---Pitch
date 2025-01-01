import React from 'react';
import { auth } from '../../config/firebaseConfig';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ onChangePage }) => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  return (
    <header className="header">
      <h1>STUS Task Manager</h1>
      <nav>
        <button onClick={() => onChangePage('dashboard')}>Dashboard</button>
        <button onClick={() => onChangePage('notifications')}>Notifications</button>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </nav>
    </header>
  );
};

export default Header;