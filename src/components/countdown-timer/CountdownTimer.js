import React, { useState, useEffect } from 'react'

export default function CountdownTimer({ startingMinutes }) {
    // Creating initial state with 60 seconds to work from
    const initialTime = startingMinutes * 60
    const [time, setTime] = useState(initialTime);
    const [referenceTime, setReferenceTime] = useState(Date.now());

    useEffect(() => {
      let animationFrameId;

      const countDownUntilZero = () => {
        const now = Date.now();
        const interval = now - referenceTime;

        // if (time <= 0) return 0;
        if (interval >= 1000 && time > 0) {
          setReferenceTime(now);
          setTime(prevTime => prevTime - Math.floor(interval / 1000));
        }

        animationFrameId = requestAnimationFrame(countDownUntilZero);
      };

      animationFrameId = requestAnimationFrame(countDownUntilZero);

      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    });


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