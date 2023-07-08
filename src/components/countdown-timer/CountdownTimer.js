import React, { useState, useEffect } from 'react'

import './CountdownTimer.css'

export default function CountdownTimer({ startingMinutes }) {
    // Creating initial state with 60 seconds to work from
    const initialTime = startingMinutes * 60
    const [time, setTime] = useState(initialTime);

    // Effect for re-rendering DOM node on every time decrement
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(time => time - 1);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [time]);


    return (
        <>
            <div>
                <span>{Math.floor(time / 36000)}</span>
                <span>{Math.floor((time / 36000) / 3600)}</span>
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