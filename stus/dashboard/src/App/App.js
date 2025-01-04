import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../LandingPage/landingPage';
import LogIn from '../Forms/logIn';
import SignUp from '../Forms/signup';
import UserDashboard from '../User_Dashboard/UserDashboard';
import ForgotPassword from '../Forms/forgotPassword';
import NotificationPage from '../User_Dashboard/NotificationPage';

export default function App({ router: RouterComponent = Router}) {
    return (
        <RouterComponent>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/dashboard" element={<UserDashboard />} />
                <Route path="/forgotpassword" element={<ForgotPassword />} />
                <Route path="/notifications" element={<NotificationPage />} />
            </Routes>
        </RouterComponent>
    );
}
