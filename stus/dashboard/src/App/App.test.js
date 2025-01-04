import * as React from 'react';
import App from './App';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';


describe("Tests for the App Component", () => {
    it("should render the App component", () => {
        render(<App />);
    });

    it("should render the LandingPage componnet", () => {
        render(
           <App router={MemoryRouter} initialEntries={['/']} />
        );
        expect(screen.getByText(/Easily/i)).toBeInTheDocument();
    });

    it("should render the LogIn componnet", () => {
        render(
           <App router={MemoryRouter} initialEntries={['/login']} />
        );
        expect(screen.getByText(/Remember/i)).toBeInTheDocument();
    });
    
    it("should render the SignUp componnet", () => {
        render(
           <App router={MemoryRouter} initialEntries={['/signup']} />
        );
        expect(screen.getByText(/Already/i)).toBeInTheDocument();
    });

    it("should render the UserDashboard componnet", () => {
        render(
           <App router={MemoryRouter} initialEntries={['/dashboard']} />
        );
        expect(screen.getByText(/Overview/i)).toBeInTheDocument();
    });

    it("should render the NotificationPage componnet", () => {
        render(
           <App router={MemoryRouter} initialEntries={['/notifications']} />
        );
        expect(screen.getByText(/Notifications/i)).toBeInTheDocument();
    });

    it("should render the ForgotPassword componnet", () => {
        render(
           <App router={MemoryRouter} initialEntries={['/forgotpassword']} />
        );
        expect(screen.getByText(/Back/i)).toBeInTheDocument();
    });
});
