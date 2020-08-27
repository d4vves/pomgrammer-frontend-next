import { useState, useEffect } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import setAuthToken from '../utils/setAuthToken'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import '../styles/globals.css'
import styles from '../styles/Home.module.css'

function MyApp({ Component, pageProps }) {
  let [currentUser, setCurrentUser] = useState('')
  let [isAuthenticated, setIsAuthenticated] = useState(false)
  const [projects, setProjects] = useState([])

  useEffect(() => {
    let token
    if (localStorage.getItem('jwtToken') === null) {
      setIsAuthenticated(false)
    } else {
      token = jwt_decode(localStorage.getItem('jwtToken'))
      setAuthToken(localStorage.jwtToken)
      setCurrentUser(token)
      setIsAuthenticated(true)
    }
  }, [])

  let nowCurrentUser = (userData) => {
    setCurrentUser(userData)
    setIsAuthenticated(true)
  }

  let handleLogout = () => {
    if (localStorage.getItem('jwtToken') !== null) {
      localStorage.removeItem('jwtToken')
      setCurrentUser(null)
      setIsAuthenticated(false)
    }
  }

  useEffect(() => {
    if (currentUser) {
      axios.get(`${process.env.NEXT_PUBLIC_API}/projects`)
      .then(response => {
        if (response.status === 200) {
          setProjects(response.data)
        }
      })
      .catch(err => console.log(`🚦 ${err} 🚦`))
    }
  }, [currentUser])

  return (
    <>
      <Head>
        <title>pomgrammer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className={styles.main}>
        <Sidebar currentUser={currentUser} handleLogout={handleLogout} projects={projects} />
        <Component {...pageProps} user={currentUser} nowCurrentUser={nowCurrentUser} />
      </main>
    </>
  )
}

export default MyApp
