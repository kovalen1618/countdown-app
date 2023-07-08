// React Testing-Library
import { render, screen, act } from "@testing-library/react";

// Components
import CountdownTimer from "../countdown-timer/CountdownTimer";

// Jest
jest.useRealTimers();


describe('CountdownTimer', () => {
  // Tests
  it('accurately decrements time by 1 second every second', () => {
    render(<CountdownTimer startingMinutes={2} />);

    // Validate initial state
    expect(screen.getByTestId('countdown-timer').textContent).toBe('00:02:00');

    // Fast-forward 60 seconds
    for (let i = 0; i < 60; i++) {
      act(() => {
        jest.advanceTimersByTime(1000);
      });
    }

    // Validate updated state
    expect(screen.getByTestId('countdown-timer').textContent).toBe('00:01:00');
  });
});