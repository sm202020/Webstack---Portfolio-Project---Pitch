import React, { useState } from "react";
import "./NotificationPage.css";

const NotificationPage = () => {
  // State for notifications
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: "New task added: Project Planning",
      priority: "High",
      time: "2025-01-01 10:00 AM",
      read: false,
    },
    {
      id: 2,
      message: "Task completed: Design UI Mockups",
      priority: "Medium",
      time: "2025-01-01 09:30 AM",
      read: true,
    },
    {
      id: 3,
      message: "Reminder: Team meeting at 2 PM",
      priority: "Low",
      time: "2025-01-01 08:00 AM",
      read: false,
    },
  ]);

  // Function to mark a notification as read
  const markAsRead = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  return (
    <div className="notification-page">
      <h2>Notifications</h2>
      <ul className="notification-list">
        {notifications.map((notification) => (
          <li
            key={notification.id}
            className={`notification-item ${
              notification.read ? "read" : "unread"
            }`}
          >
            <div className="notification-content">
              <p className="message">{notification.message}</p>
              <p className="priority">
                Priority: <strong>{notification.priority}</strong>
              </p>
              <p className="time">Time: {notification.time}</p>
            </div>
            {!notification.read && (
              <button
                className="mark-read-btn"
                onClick={() => markAsRead(notification.id)}
              >
                Mark as Read
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationPage;

