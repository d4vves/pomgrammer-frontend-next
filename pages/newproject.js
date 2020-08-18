import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

export default function NewProject({projects, setProjects}) {
    const router = useRouter()
    let [label, setLabel] = useState('')
    let [githubUrl, setGithubUrl] = useState('')

    const handleLable = (event) => {
        setLabel(event.target.value)
    }

    const handleGithubUrl = (event) => {
        setGithubUrl(event.target.value)
    }

    const addProject = (event) => {
        event.preventDefault()
        let newProject = {
            id: projects.length + 1,
            label: label,
            githubUrl: githubUrl,
            poms: 0
        }
        setProjects([newProject, ...projects])
        router.push('/project/[id]', `/project/${newProject.id}`)
    }

    return (
        <form className={styles.addProjectForm} onSubmit={addProject}>
            <label for='label'>Project Name </label>
            <input type='text' name='label' id='name' onChange={handleLable} />
            <label for='githubUrl'>Github URL </label>
            <input type='text' name='githubUrl' id='githubUrl' onChange={handleGithubUrl} />
            <input className={styles.button} type='submit' value='Add Project' />
        </form>
    )
}