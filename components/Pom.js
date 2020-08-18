import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

export default function Pom(props) {
    const router = useRouter()
    const { id } = router.query

    let [month, date, year] = ( new Date(props.pom.createdAt) ).toLocaleDateString().split('/')
    let [confirmRemovePom, setConfirmRemovePom] = useState(false)

    const confirmDelete = () => {
        setConfirmRemovePom(true)
    }

    const decrementPoms = () => {
        props.projects.forEach(project => {
            if (project.id == id) {
                project.poms -= 1
            }
        })
    }

    const deletePom = (pom) => {
        console.log(pom)
        props.poms.splice(pom, 1)
        console.log(props.poms)
        props.setShowPoms(true)
        setConfirmRemovePom(false)
        decrementPoms()
        router.push('/project/[id]', `/project/${id}`)
      }

    return (
        <>
            <p className={styles.projectPom}>
                {month}/{date}/{year} - {`${props.pom.focus} `} 
                {!confirmRemovePom ? 
                    <span onClick={confirmDelete} className={styles.underline}>remove</span>
                :
                    <span onClick={() => deletePom(props.index)} className={styles.underline}>click to confirm delete</span>
                }
                </p>
        </>
    )
}