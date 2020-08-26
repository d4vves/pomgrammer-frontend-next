import { useState } from "react";
import axios from "axios";
import jwt_decode from 'jwt-decode'
import { useRouter } from 'next/router'
import setAuthToken from '../utils/setAuthToken'
import styles from '../styles/Home.module.css'

export default function Login({nowCurrentUser}) {
    const router = useRouter()

    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const userData = {
            email: email,
            password: password
        }
        axios.post(`${process.env.NEXT_PUBLIC_API}/login`, userData)
        .then(response => {
            const { token } = response.data
            localStorage.setItem('jwtToken', token)
            setAuthToken(token)
            const decoded = jwt_decode(token)
            nowCurrentUser(decoded)
            router.push('/profile')
        })
        .catch(err => console.log(`🚦 ${err} 🚦`))
    }

    return (
        <form className={styles.addProjectForm} onSubmit={handleSubmit}>
            <label htmlFor='email'>Email: </label>
            <input type='text' name='email' onChange={handleEmail} />
            <label htmlFor='password'>Password: </label>
            <input type='text' name='password' onChange={handlePassword} />
            <input type='submit' />
        </form>
    )
}