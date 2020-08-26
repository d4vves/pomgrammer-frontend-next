import { useState } from "react"
import { useRouter } from 'next/router'
import axios from "axios"
import styles from '../styles/Home.module.css'

export default function Register() {
    const router = useRouter()

    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [portfolio, setPortfolio] = useState('')
    let [github, setGithub] = useState('')
    let [linkedin, setLinkedin] = useState('')

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handlePortfolio = (e) => {
        setPortfolio(e.target.value)
    }

    const handleGithub = (e) => {
        setGithub(e.target.value)
    }

    const handleLinkedin = (e) => {
        setLinkedin(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('REGISTER')
        const newUser = {
            name: name,
            email: email,
            password: password,
            portfolio: portfolio,
            github: github,
            linkedin: linkedin
        }
        axios.post(`http://localhost:2001/register`, newUser)
        .then(response => {
            router.push('/login')
        })
        .catch(err => console.log(`🚦 ${err} 🚦`))
    }

    return (
        <form className={styles.addProjectForm} onSubmit={handleSubmit}>
            <label htmlFor='name'>Name: </label>
            <input type='text' name='name' onChange={handleName} />
            <label htmlFor='email'>Email: </label>
            <input type='text' name='email' onChange={handleEmail} />
            <label htmlFor='password'>Password: </label>
            <input type='text' name='password' onChange={handlePassword} />
            <label htmlFor='portfolio'>Portfolio: </label>
            <input type='text' name='portfolio' onChange={handlePortfolio} />
            <label htmlFor='github'>Github: </label>
            <input type='text' name='github' onChange={handleGithub} />
            <label htmlFor='linkedin'>Linkedin: </label>
            <input type='text' name='linkedin' onChange={handleLinkedin} />
            <input type='submit' />
        </form>
    )
}