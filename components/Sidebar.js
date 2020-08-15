import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
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
            <h1 className={styles.userName}>Dave Stach</h1>
            {projectList}
            <p className={styles.projectPom}>07/21/20 - styling</p>
        </section>
    )
}