import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Bubbles from '../components/Bubbles'

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
        <Bubbles />
      </main>
    </>
  )
}
