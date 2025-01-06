import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';
import { MemoryRouter } from 'react-router-dom';

describe("Tests the Header component", () => {
    it("should render the Header Component", () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        )
        expect(screen.getByText(/Dashboard/i)).toBeInTheDocument()
    })
})
