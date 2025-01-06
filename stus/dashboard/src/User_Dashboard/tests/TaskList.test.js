import * as React from 'react';
import { render, screen } from '@testing-library/react';
import TaskList from '../TaskList';

describe("Tests the TaskList component", () => {
    it("should render the TaskList Component", () => {
        const mockTasks = [
            { id: 1, title: "Task 1", deadline: "2025-01-06T12:00:00Z" },
            { id: 2, title: "Task 2", deadline: "2025-01-07T15:00:00Z" },
        ];

        render(
            <TaskList
                title="My Tasks"
                tasks={mockTasks}
                onUpdateStatus={jest.fn()}
                onEditTask={jest.fn()}
                onDeleteTask={jest.fn()}
                onViewTask={jest.fn()}
            />
        );

        expect(screen.getByText(/My Tasks/i)).toBeInTheDocument();
        expect(screen.getByText(/Task 1/i)).toBeInTheDocument();
        expect(screen.getByText(/Task 2/i)).toBeInTheDocument();
        
        const toggles = screen.getAllByText(/Toggle/i);
        toggles.forEach((toggle) => expect(toggle).toBeInTheDocument());
        
        const edits = screen.getAllByText(/Edit/i);
        edits.forEach((edit) => expect(edit).toBeInTheDocument());
      
        const views = screen.getAllByText(/View/i);
        views.forEach((view) => expect(view).toBeInTheDocument());
       
    });
});
