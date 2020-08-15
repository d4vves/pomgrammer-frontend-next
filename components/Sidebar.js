import Link from 'next/link'
import styles from '../styles/Home.module.css'
import SidebarProject from './SidebarProject'
import projectData from '../lib/projects.json'

export default function Navbar() {
    let projectList = projectData.length < 1 ?
    <h3 className={styles.ProjectName}>No current projects.</h3> :
    projectData.map(project => (
        <SidebarProject {...project}/>
    ))

    return (
        <section className={styles.sidebar}>
            <Link href='/profile'>
                <a><h1 className={styles.userName}>Dave Stach</h1></a>
            </Link>
            <h3 className={styles.projectHeader}>Projects</h3>
            {projectList}
        </section>
    )
}