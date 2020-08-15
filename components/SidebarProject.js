import styles from '../styles/Home.module.css'
import Unexpanded from './svg/Unexpanded'

export default function SidebarProject(props) {
    return (
        <h3 className={styles.projectName}><Unexpanded /> {props.label}</h3>
    )
}