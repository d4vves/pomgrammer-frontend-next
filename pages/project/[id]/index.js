import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Github from '../../../components/svg/Github'
import Pom from '../../../components/Pom'
import Timer from '../../../components/Timer'
import styles from '../../../styles/Home.module.css'

export default function Project({project, poms, projects, setPoms, deletePom}) {
    const router = useRouter()
    const { id } = router.query
    const [currentProject, setCurrentProject] = useState('')
    const [showPoms, setShowPoms] = useState(true)
    let pomList
    console.log(`🤡 ${currentProject} 🤡`)

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_API}/projects/${id}`)
        .then(response => {
            if (response.status === 200) {
            setCurrentProject(response.data)
            }
        })
        .catch(err => console.log(`🚦 ${err} 🚦`))
    }, [])

    if (currentProject) {
        pomList = currentProject.poms.length < 1 ?
        <p className={styles.projectPom}>No Poms</p> :
        poms.map((pom, i) => {
            if (pom.projectId == id) {
                return <Pom key={i} index={i} pom={pom} deletePom={deletePom} poms={poms} setPoms={setPoms} setShowPoms={setShowPoms} projects={projects} />
            }
        })
    }

    const toggleAdd = () => {
        setShowPoms(false)
    }

    return (
        <div>
            {showPoms ?
                <div className={styles.mainProject}>
                    <h1>{currentProject.title}</h1>
                    <h4>{currentProject.description}</h4>
                    <p><a href={currentProject.github} target='_blank'><Github /></a></p>
                    <p onClick={toggleAdd}>+ add pom</p>
                    {pomList}
                </div>
            :
                <Timer setPoms={setPoms} poms={poms} setShowPoms={setShowPoms} projects={projects} />
            }
        </div>
    )
}

// Project.getInitialProps = async (ctx) => {
//     const { query } = ctx
//     const response = await axios.get(`${process.env.NEXT_PUBLIC_API}/projects/${query}`)
//     const project = await response.json()
//     return {project}
// }