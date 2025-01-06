import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Sidebar from '../Sidebar';

describe("Tests the Sidebar component", () => {
    it("should render the Sidebar Component", () => {
        const mockTasks = [
            { id: 1, title: "Task 1" },
            { id: 2, title: "Task 2" },
        ];

        render(
            <Sidebar tasks={mockTasks} onChangePage={jest.fn()} />
        );

        expect(screen.getByText(/Overview/i)).toBeInTheDocument();
        expect(screen.getByText(/Task 1/i)).toBeInTheDocument();
        expect(screen.getByText(/Task 2/i)).toBeInTheDocument();
    });
});

