import Link from 'next/link'
import styles from '../styles/Home.module.css'
import SidebarProject from './SidebarProject'

export default function Sidebar(props) {
    let projectList = props.projects.length < 1 ?
    <h3 className={styles.ProjectName}>No current projects.</h3> :
    props.projects.map((project, i) => (
        <SidebarProject key={i} {...project}/>
    ))

    return (
        <section className={styles.sidebar}>
            <Link href='/profile'>
                <a><h1 className={styles.userName}>Dave Stach</h1></a>
            </Link>
            <Link href='/newproject'>
                <a><h4 className={styles.addProject} onClick={props.addProject}>+ Add Project</h4></a>
            </Link>
            {projectList}
        </section>
    )
}