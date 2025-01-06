import * as React from 'react';
import AboutUs from './aboutUs';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

describe("Tests the AboutUs Componennt", () => {
    it("renders the AboutUs Component", () => {
        render(
            <MemoryRouter>
                <AboutUs />
            </MemoryRouter>
        )
        expect(screen.getByText(/TEAM MEMBERS/i)).toBeInTheDocument()
    })
})
