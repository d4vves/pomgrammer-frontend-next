import { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import projectData from '../lib/projects.json'
import Timer from '../components/Timer'

export default function Home() {
  const [projects, setProjects] = useState(projectData)

  const addProject = () => {
    console.log('ADDING')
  }

  return (
    <>
      <Head>
        <title>pomgrammer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className={styles.main}>
        <Sidebar projects={projects} addProject={addProject} />
        <Timer />
      </main>
    </>
  )
}
