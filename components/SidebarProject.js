import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function SidebarProject(props) {

    return (
        <>
            <h4 className={styles.projectName}>
                <Link href={'/project/[id]'} as={`/project/${props.id}`} >
                    <a>{props.label}</a>
                </Link>
            </h4>
        </>
    )
}