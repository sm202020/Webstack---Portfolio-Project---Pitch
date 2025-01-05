import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './footer';

describe("Tests the Footer component", () => {
    it("render the Footer component", () => {
        render(<Footer />);
        expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
    });
});
