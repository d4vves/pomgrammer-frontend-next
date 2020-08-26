import { useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import setAuthToken from '../utils/setAuthToken'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import projectData from '../utils/projects.json'
import pomData from '../utils/poms.json'
import '../styles/globals.css'
import styles from '../styles/Home.module.css'

function MyApp({ Component, pageProps }) {
  const [projects, setProjects] = useState(projectData)
  const [poms, setPoms] = useState(pomData)

  let [currentUser, setCurrentUser] = useState('')
  let [isAuthenticated, setIsAuthenticated] = useState(false)

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

  return (
    <>
      <Head>
        <title>pomgrammer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className={styles.main}>
        <Sidebar currentUser={currentUser} handleLogout={handleLogout} projects={projects} />
        <Component {...pageProps} user={currentUser} nowCurrentUser={nowCurrentUser} projects={projects} setProjects={setProjects} poms={poms} setPoms={setPoms} />
      </main>
    </>
  )
}

export default MyApp
