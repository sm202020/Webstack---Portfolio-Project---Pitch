import React, { Component } from 'react';
import './NotificationPage.css';

class NotificationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: [
        { id: 1, message: "New task added: Project Planning", read: false },
        { id: 2, message: "Task completed: Design UI Mockups", read: true },
        { id: 3, message: "Reminder: Team meeting at 2 PM", read: false },
      ]
    };
  }

  markAsRead = (id) => {
    this.setState(prevState => ({
      notifications: prevState.notifications.map(
        notification => notification.id === id ? { ...notification, read: true } : notification
      )
    }));
  }

  render() {
    return (
      <div className="notification-page">
        <h2>Notifications</h2>
        <ul className="notification-list">
          {this.state.notifications.map(notification => (
            <li key={notification.id} className={`notification-item ${notification.read ? 'read' : 'unread'}`}>
              <p>{notification.message}</p>
              {!notification.read && (
                <button onClick={() => this.markAsRead(notification.id)}>Mark as Read</button>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default NotificationPage;