import * as React from 'react';
import Header from './header';
import { render, screen } from '@testing-library/react';

describe("Tests the Header Component", () => {
    it("renders the Header Componet", () => {
        render(<Header />)
        expect(screen.getByText(/Your planning buddy/i)).toBeInTheDocument()
    })
})
