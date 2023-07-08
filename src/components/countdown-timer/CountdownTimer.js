import React, { useState, useEffect } from 'react'

export default function CountdownTimer({ startingMinutes }) {
    // Creating initial state with 60 seconds to work from
    const initialTime = startingMinutes * 60
    const [time, setTime] = useState(initialTime);
    // Initialized to timeStamp when document loaded
    const [timeStamp, setTimeStamp] = useState(Date.now());

    useEffect(() => {
      let requestID;

      const countDownUntilZero = () => {
        // Current timeStamp in the iteration of the function
        const now = Date.now();
        // Elapsed = current timeStamp - timeStamp of when document loaded
        const elapsed = now - timeStamp;

        // Makes sure elapsed does not surpass 1000 ms so that each iteration of countDownUntilZero
        // is 1 second in duration. Also checks that counter doesn't go into negatives
        if (elapsed > 1000 && time > 0) {
          // Resets the reference point for next calculation
          setTimeStamp(now);
          // Updates time state by subtracting 1000 ms (1 s) from time
          setTime(prevTime => prevTime - Math.floor(elapsed / 1000));
        }

        // Updates requestID each time rAF is called
        requestID = requestAnimationFrame(countDownUntilZero);
      };

      // Creates final requestID after countDownUntilZero finishes
      requestID = requestAnimationFrame(countDownUntilZero);

      // Cleanup
      return () => {
        // Ensures animation callback loop stops when component unmounts by passing
        // the rAF requestID into cancelAnimationFrame()
        cancelAnimationFrame(requestID);
      };
    }, [time, timeStamp]);


    return (
        <>
            <div data-testid='countdown-timer'>
                <span>{Math.floor(time / 36000)}</span>
                <span>{Math.floor((time % 36000) / 3600)}</span>
                :
                <span>{Math.floor((time % 3600) / 600)}</span>
                <span>{Math.floor((time % 600) / 60)}</span>
                :
                <span>{Math.floor((time % 60) / 10)}</span>
                <span>{Math.floor(time % 10)}</span>
            </div>
        </>
    )
}