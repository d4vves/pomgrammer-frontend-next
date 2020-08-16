import { useState } from 'react'
import { useRouter } from 'next/router'
import Pom from '../../../components/Pom'
import Timer from '../../../components/Timer'
import styles from '../../../styles/Home.module.css'

export default function Project({poms, projects, setPoms}) {
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

    return (
        <div className={styles.mainProject}>
            <h1>{currentProject}</h1>
            {showPoms ?
                <>
                    <h3>POMs</h3>
                    <p onClick={toggleAdd}>+ add pom</p>
                    {pomList}
                </>
            :
                <Timer setPoms={setPoms} poms={poms} setShowPoms={setShowPoms} />
            }
        </div>
    )
}