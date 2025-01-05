import React, { useEffect, useState } from 'react';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';
import './NotificationPage.css';

const NotificationPage = ({ userEmail }) => {
  const [notifications, setNotifications] = useState([]);

  const UsersCollectionRef = collection(db, `${userEmail}`);

  // Fetch tasks with 'in_progress' status
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const taskSnapshot = await getDocs(UsersCollectionRef);
        const tasks = taskSnapshot.docs
          .map((task) => ({ id: task.id, ...task.data() }))
          .filter((task) => task.status === 'in_progress');
        setNotifications(tasks);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, [userEmail]);

  // Mark a task as read
  const markAsRead = async (id) => {
    try {
      await updateDoc(doc(db, `${userEmail}`, id), { read: true });
      setNotifications((prevNotifications) =>
        prevNotifications.map((notification) =>
          notification.id === id ? { ...notification, read: true } : notification
        )
      );
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };

  return (
    <div className="notification-page">
      <h2>Notifications</h2>
      <ul className="notification-list">
        {notifications.map((notification) => (
          <li
            key={notification.id}
            className={`notification-item ${notification.read ? 'read' : 'unread'}`}
          >
            <p>{notification.title}</p> {/* Display task title */}
            {!notification.read && (
              <button onClick={() => markAsRead(notification.id)}>Mark as Read</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationPage;
