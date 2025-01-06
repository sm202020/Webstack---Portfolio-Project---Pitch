import * as React from 'react';
import { render, screen } from '@testing-library/react';
import NewTaskButton from '../NewTaskButton';

describe("Tests the NewTaskButton component", () => {
    it("should render the NewTaskButton Component", () => {
        render(
                <NewTaskButton />
        )
        expect(screen.getByText(/New Task/i)).toBeInTheDocument()
    })
})
