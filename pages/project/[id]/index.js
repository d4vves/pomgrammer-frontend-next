import { useState } from 'react'
import { useRouter } from 'next/router'
import Github from '../../../components/svg/Github'
import Pom from '../../../components/Pom'
import Timer from '../../../components/Timer'
import styles from '../../../styles/Home.module.css'

export default function Project({poms, projects, setPoms, deletePom}) {
    const router = useRouter()
    const { id } = router.query

    const [showPoms, setShowPoms] = useState(true)

    let currentProject = projects.filter(project => project.id == id)

    console.log(currentProject)

    let pomList = poms.length < 1 ?
    <p className={styles.projectPom}></p> :
    poms.map((pom, i) => {
        if (pom.projectId == id) {
            return <Pom key={i} index={i} pom={pom} deletePom={deletePom} poms={poms} setPoms={setPoms} setShowPoms={setShowPoms} projects={projects} />
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
        <>
            {showPoms ?
                <div className={styles.mainProject}>
                    <h1>{currentProject[0].label} <a href={currentProject[0].githubUrl} target='_blank'><Github /></a></h1>
                    <p onClick={deleteProject}>delete project</p>
                    <h3>POMs</h3>
                    <p onClick={toggleAdd}>+ add pom</p>
                    {pomList}
                </div>
            :
                <Timer setPoms={setPoms} poms={poms} setShowPoms={setShowPoms} projects={projects} />
            }
        </>
    )
}