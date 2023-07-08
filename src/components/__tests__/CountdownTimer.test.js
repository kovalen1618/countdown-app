// React Testing-Library
import { render, screen, act } from "@testing-library/react";

// Components
import CountdownTimer from "../countdown-timer/CountdownTimer";

// Jest
jest.useFakeTimers();


describe('CountdownTimer', () => {
    // Tests
    it('accurately decrements time by 1 second every second', () => {
        render(<CountdownTimer startingMinutes={1} />);

        // Validate initial state
        expect(screen.getByTestId('countdown-timer').textContent).toBe('00:01:00');

        // Fast-forward 10 seconds
        act(() => {
            jest.runOnlyPendingTimers();
        })

        // Validate updated state
        expect(screen.getByTestId('countdown-timer').textContent).toBe('00:00:30');
    });
});