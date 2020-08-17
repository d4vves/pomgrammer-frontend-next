import styles from '../styles/Home.module.css'

export default function NewProject() {
    return (
        <form className={styles.addProjectForm}>
            <label for='label'>Project Name </label>
            <input type='text' name='label' id='name' />
            <label for='description'>Description </label>
            <input type='text' name='description' id='description' />
            <label for='githubUrl'>Github URL </label>
            <input type='text' name='githubUrl' id='githubUrl' />
            <input type='submit' value='Add Project' />
        </form>
    )
}