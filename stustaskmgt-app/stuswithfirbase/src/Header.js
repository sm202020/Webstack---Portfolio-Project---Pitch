import React from 'react';
import { useAuth } from './contexts/AuthContext';
import './Header.css';

const Header = ({ onChangePage }) => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
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