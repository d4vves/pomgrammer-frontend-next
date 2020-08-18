import { useState, useEffect } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import projectData from '../lib/projects.json'
import pomData from '../lib/poms.json'
import '../styles/globals.css'
import styles from '../styles/Home.module.css'

function MyApp({ Component, pageProps }) {
  const [projects, setProjects] = useState(projectData)
  const [poms, setPoms] = useState(pomData)

  return (
    <>
      <Head>
        <title>pomgrammer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className={styles.main}>
        <Sidebar projects={projects} />
        <Component {...pageProps} projects={projects} setProjects={setProjects} poms={poms} setPoms={setPoms} />
      </main>
    </>
  )
}

export default MyApp
