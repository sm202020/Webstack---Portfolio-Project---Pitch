import * as React from 'react';
import { render, screen } from '@testing-library/react';
import NotificationPage from '../NotificationPage';

describe("Tests the NotificationPage component", () => {
    it("should render the NotificationPage Component", () => {
        render(
                <NotificationPage />
        )
        expect(screen.getByText(/Notifications/i)).toBeInTheDocument()
    })
})
