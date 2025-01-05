import * as React from 'react';
import ForgotPassword from './forgotPassword';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import LogIn from './logIn';
import SignUp from './signup';
import { act } from 'react-dom/test-utils';

describe("Tests the ForgotPassword Component", () => {
    it("renders the ForgotPassword Component", () => {
        render(<ForgotPassword />)
        expect(screen.getByText(/Forgot Password/i)).toBeInTheDocument();
    })

    it("stimulates the LogIn Component when Log In is clicked", () => {
        render(
            <MemoryRouter initialEntries={['/forgotpassword']}>
                <Routes>
                    <Route path='/forgotpassword' element={<ForgotPassword />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/login' element={<LogIn />} />
                </Routes>
                <ForgotPassword />
            </MemoryRouter>
        );
        const logInLink = screen.getAllByText(/Login page/i);
        React.act(userEvent.click(logInLink[1]));
        expect(screen.getByText(/Remember/i)).toBeInTheDocument();

        const signUpLink = screen.getByText(/Sign Up/i);
        userEvent.click(signUpLink);
        expect(screen.queryByText(/Login now/i)).toBeInTheDocument();
    });
});
