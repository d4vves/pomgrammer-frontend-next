import Link from 'next/link'
import styles from '../styles/Home.module.css'
import SidebarProject from './SidebarProject'

export default function Navbar(props) {
    let projectList = props.projects.length < 1 ?
    <h3 className={styles.ProjectName}>No current projects.</h3> :
    props.projects.map(project => (
        <SidebarProject {...project}/>
    ))

    return (
        <section className={styles.sidebar}>
            <h1 className={styles.userName}>Dave Stach</h1>
            <h4 onClick={props.addProject}>+ Add Project</h4>
            {projectList}
        </section>
    )
}