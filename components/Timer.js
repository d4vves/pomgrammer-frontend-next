import React, { useState, useEffect } from 'react'

export default function Timer() {
    let [minutes, setMinutes] = useState(0)
    let [seconds, setSeconds] = useState(10)
    let [breakTime, setBreakTime] = useState(false)
    let [finished, setFinished] = useState(false)
     

    useEffect(() => {
        const pomInterval = setInterval(() => {
        if (seconds > 0) {
            setSeconds(seconds -= 1)
        }
        if (seconds <= 0) {
            if (minutes === 0) {
                if (!breakTime) {
                    setSeconds(5)
                    setBreakTime(true)
                } else {
                    clearInterval(pomInterval)
                    setFinished(true)
                }
            } else {
                setMinutes(minutes -= 1)
                setSeconds(59)
                }
            }
        }, 1000)
        return () => {clearInterval(pomInterval)}
    })

    return (
        <>
            {
                !finished ? 
                    !breakTime ?
                        <div>
                            <h1>Get to work!</h1>
                            <h1>Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                        </div>
                    :
                        <div>
                            <h1>Step away from the computer!</h1>
                            <h1>Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                        </div>
                :
                    <h1>FORM</h1>
            }
        </>
    )
}