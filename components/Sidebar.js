import Link from 'next/link'
import styles from '../styles/Home.module.css'
import SidebarProject from './SidebarProject'
import { useEffect } from 'react'

export default function Sidebar({projects, currentUser}) {
    console.log(currentUser)
    let projectList = projects.length < 1 ?
    <h3 className={styles.ProjectName}>No current projects.</h3> :
    projects.map((project, i) => (
        <SidebarProject key={i} {...project}/>
    ))

    let projectCount = projects.length

    let pomCount = 0
    projects.forEach(project => {
        pomCount = pomCount + project.poms
    })

    let timeCount = pomCount * 25

    return (
        <section className={styles.sidebar}>
            {!currentUser ? 
            <p>
                <Link href='/register'><a>Register </a></Link>
                or
                <Link href='/login'><a> Login</a></Link>
            </p>
            :
                <Link href='/profile'>
                    <a><h1 className={styles.userName}>{currentUser._doc.name}</h1></a>
                </Link>
            }
            <h5 className={styles.userStats}>Projects: {projectCount}</h5>
            <h5 className={styles.userStats}>Time Pomgramming: {timeCount} minutes</h5>
            <Link href='/newproject'>
                <a><h4 className={styles.addProject}>+ Add Project</h4></a>
            </Link>
            {projectList}
        </section>
    )
}