import { useState } from 'react'
import { useRouter } from 'next/router'
import Pom from '../../../components/Pom'
import Timer from '../../../components/Timer'
import styles from '../../../styles/Home.module.css'

export default function Project({poms, projects, setPoms, setProjects}) {
    const router = useRouter()
    const { id } = router.query

    const [showPoms, setShowPoms] = useState(true)

    let currentProject = projects.map(project => {
        if (project.id == id) {
            return project.label
        }
    })

    let pomList = poms.length < 1 ?
    <p className={styles.projectPom}></p> :
    poms.map(pom => {
        if (pom.projectId == id) {
            return <Pom {...pom}/>
        }
    })

    const toggleAdd = () => {
        setShowPoms(false)
    }

    const deleteProject = () => {
        projects.shift(currentProject)
        router.push('/profile')
    }

    return (
        <div className={styles.mainProject}>
            {showPoms ?
                <>
                    <h1>{currentProject}</h1>
                    <p onClick={deleteProject}>delete project</p>
                    <h3>POMs</h3>
                    <p onClick={toggleAdd}>+ add pom</p>
                    {pomList}
                </>
            :
                <Timer setPoms={setPoms} poms={poms} setShowPoms={setShowPoms} projects={projects} />
            }
        </div>
    )
}