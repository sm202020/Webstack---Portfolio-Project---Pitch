import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '../Dashboard';
import { MemoryRouter } from 'react-router-dom';

describe("Tests the Dashboard component", () => {
    it("should render the Dashboard Component", () => {
        const mockTasks = [
            { id: 1, title: "Task 1", status: "in_progress" },
            { id: 2, title: "Task 2", status: "completed" },
        ];

        render(
            <MemoryRouter>
                <Dashboard
                    tasks={mockTasks}
                    onOpenModal={jest.fn()}
                    onUpdateTaskStatus={jest.fn()}
                    onEditTask={jest.fn()}
                    onDeleteTask={jest.fn()}
                    onViewTask={jest.fn()}
                />
            </MemoryRouter>
        );

        expect(screen.getByText(/Task 1/i)).toBeInTheDocument();
        expect(screen.getByText(/Task 2/i)).toBeInTheDocument();
    });
});
