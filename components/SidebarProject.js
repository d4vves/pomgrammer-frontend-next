import { useState } from 'react'
import styles from '../styles/Home.module.css'
import SidebarPom from './SidebarPom'
import Unexpanded from './svg/Unexpanded'
import Expanded from './svg/Expanded'
import pomData from '../lib/poms.json'

export default function SidebarProject(props) {
    const [expanded, setExpanded] = useState(false)

    let pomList = pomData.length < 1 ?
    <p className={styles.projectPom}></p> :
    pomData.map(pom => {
        if (pom.projectId === props.id) {
            if (expanded)
            return <SidebarPom {...pom}/>
        }
    })

    const toggleExpand = () => {
        setExpanded(!expanded)
    }

    return (
        <>
            <h4 className={styles.projectName}>
                <span onClick={toggleExpand} className={styles.projectToggle}>{expanded ? <Expanded /> : <Unexpanded />}</span>
                {props.label}
            </h4>
            {expanded ? <p className={styles.projectPom}>+ Add POM</p> : <></>}
            {pomList}
        </>
    )
}