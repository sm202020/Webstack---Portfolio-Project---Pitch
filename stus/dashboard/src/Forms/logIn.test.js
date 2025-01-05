import * as React from 'react';
import LogIn from "./logIn";
import { render, screen } from '@testing-library/react';

describe("Tests the LogIn Componnent", () => {
    it("should render the LogIn Component", () => {
        render(<LogIn />);
        expect(screen.getByText(/Forgot Password?/i)).toBeInTheDocument();
    })
})
