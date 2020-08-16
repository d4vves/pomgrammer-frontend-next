import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <Sidebar />
        <h1>ADD PROJECT</h1>
      </main>
    </>
  )
}
