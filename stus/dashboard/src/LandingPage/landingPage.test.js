import * as React from 'react';
import LandingPage from './landingPage';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe("Tests the LandingPage Component", () => {
    it("renders the LandingPage Component", () => {
        render(
        <MemoryRouter>
            <LandingPage />
        </MemoryRouter>)
        expect(screen.getByText(/Manage your daily tasks/i)).toBeInTheDocument()
    })
})