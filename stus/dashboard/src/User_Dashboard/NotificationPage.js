import React, { useEffect, useState } from 'react';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';
import './NotificationPage.css';

const NotificationPage = ({ userEmail }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const taskSnapshot = await getDocs(collection(db, `${userEmail}`));
        const tasks = taskSnapshot.docs
          .map((doc) => ({ id: doc.id, ...doc.data() }))
          .filter((task) => task.status === 'in_progress' && !task.read); // Only fetch unread notifications
        setNotifications(tasks);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, [userEmail]);

  const markAsRead = async (notificationId) => {
    try {
      const notificationRef = doc(db, `${userEmail}`, notificationId);
      await updateDoc(notificationRef, { read: true }); // Update the 'read' status in Firestore
      setNotifications((prevNotifications) =>
        prevNotifications.filter((notification) => notification.id !== notificationId)
      );
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };

  const calculateTimeLeft = (deadline) => {
    const now = new Date();
    const target = new Date(deadline);
    const diff = target - now;

    if (diff <= 0) return 'Deadline passed';

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    if (days === 0 && hours === 0 && minutes === 0) {
      return 'Deadline passed';
    }

    return `${days > 0 ? `${days}d ` : ''}${hours > 0 ? `${hours}h ` : ''}${minutes}m remaining`;
  };

  return (
    <div className="notification-page">
      <h2>Notifications</h2>
      <ul className="notification-list">
        {notifications.map((notification) => (
          <li key={notification.id} className="notification-item">
            <p>{notification.title}</p>
            <p>{notification.deadline && calculateTimeLeft(notification.deadline)}</p>
            <button onClick={() => markAsRead(notification.id)}>Mark as Read</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationPage;
