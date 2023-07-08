// React Testing-Library
import { render, screen, act } from "@testing-library/react";

// Components
import CountdownTimer from "../countdown-timer/CountdownTimer";


describe('When CountdownTimer runs', () => {
    beforeAll(() => {
        jest.useFakeTimers();
        jest.spyOn(window, 'requestAnimationFrame').mockImplementation(cb => cb());
    });

    afterAll(() => {
        window.requestAnimationFrame.mockRestore();
        jest.useRealTimers();
    });

    // Tests
    it('should accurately decrements time by 1 second every second', () => {
        render(<CountdownTimer startingMinutes={2} />);

        // Validate initial state
        expect(screen.getByTestId('countdown-timer').textContent).toBe('00:02:00');

        act(() => {
            jest.advanceTimersByTime(1000);
        });

        // Validate updated state
        expect(screen.getByTestId('countdown-timer').textContent).toBe('00:01:59');

        act(() => {
            jest.advanceTimersByTime(1000);
        });

        // Validate updated state again
        expect(screen.getByTestId('countdown-timer').textContent).toBe('00:01:58');
    });
});