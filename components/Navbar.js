import Link from 'next/link'
import PomLogo from './svg/PomLogo'
import styles from '../styles/Home.module.css'

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <PomLogo />
            <Link href='/'>
                <a><h1 className={styles.logo}>pomgrammer</h1></a>
            </Link>
        </nav>
    )
}