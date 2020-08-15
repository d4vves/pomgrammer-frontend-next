import styles from '../styles/Home.module.css'

export default function SidebarPom(props) {
    return (
        <>
            <p className={styles.projectPom}>{props.focus}</p>
        </>
    )
}