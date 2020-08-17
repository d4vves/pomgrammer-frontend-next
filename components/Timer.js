import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

export default function Timer({setPoms, poms, setShowPoms, projects}) {
    const router = useRouter()
    const { id } = router.query

    let [minutes, setMinutes] = useState(0)
    let [seconds, setSeconds] = useState(10)
    let [breakTime, setBreakTime] = useState(false)
    let [finished, setFinished] = useState(false)
    let [focus, setFocus] = useState('')

    const runTimer = () => {
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
    }

    useEffect(runTimer, [breakTime])

    const handleFocus = (event) => {
        setFocus(event.target.value)
    }

    const enumeratePoms = () => {
        projects.forEach(project => {
            if (project.id == id) {
                project.poms += 1
            }
        })
    }

    const addPom = (event) => {
        event.preventDefault()
        let newPom = {
            focus: focus,
            projectId: id
        }
        setPoms([newPom, ...poms])
        enumeratePoms()
        setShowPoms(true)
    }

    return (
        <div>
            {
                !finished ? 
                    !breakTime ?
                        <div>
                            <h1>Let 'er rip!</h1>
                            <h1>Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                        </div>
                    :
                        <div>
                            <h1>Break time!</h1>
                            <h1>Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                        </div>
                :
                    <div>
                        <h1>Great job!</h1>
                        <form onSubmit={addPom}>
                            <label for='focus'>What did you focus on? </label>
                            <input type='text' name='focus' id='focus' onChange={handleFocus} />
                            <input type='submit' value='add pom' />
                        </form>
                    </div>
            }
        </div>
    )
}