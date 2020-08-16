import styles from '../styles/Home.module.css'

export default function Pom(props) {
    let [month, date, year] = ( new Date(props.createdAt) ).toLocaleDateString().split('/')

    return (
        <>
            <p className={styles.projectPom}>{month}/{date}/{year} - {props.focus}</p>
        </>
    )
}