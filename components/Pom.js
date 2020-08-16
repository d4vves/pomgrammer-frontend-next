import styles from '../styles/Home.module.css'

export default function Pom(props) {
    return (
        <>
            <p className={styles.projectPom}>{props.focus}</p>
        </>
    )
}