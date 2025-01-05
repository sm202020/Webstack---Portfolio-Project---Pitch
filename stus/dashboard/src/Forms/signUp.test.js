import * as React from 'react';
import { render, screen } from '@testing-library/react';
import SignUp from './signup';

describe("Tests the SignUp Componnent", () => {
    it("should render the SignUp Component", () => {
        render(<SignUp />);
        expect(screen.getByText(/Login now/i)).toBeInTheDocument();
    })
})
