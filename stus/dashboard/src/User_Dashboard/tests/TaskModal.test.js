import * as React from 'react';
import TaskModal from '../TaskModal';
import { render, screen } from '@testing-library/react';

describe("Tests the TaskModal component", () => {
    it("should render the TaskModal Component", () => {
        render(
            <TaskModal />
        )
        expect(screen.getByPlaceholderText(/Task Description/i)).toBeInTheDocument();
    })
})