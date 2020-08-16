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
            <h4 onClick={props.addProject}>+ Add Project</h4>
            {projectList}
        </section>
    )
}