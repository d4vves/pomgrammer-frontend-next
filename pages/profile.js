import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <>
      <Head>
        <title>pomgrammer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className={styles.main}>
        <Sidebar />
        <h1>Profile</h1>
      </main>
    </>
  )
}
