import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function SidebarProject({_id, title}) {
    return (
        <>
            <h4 className={styles.projectName}>
                <Link href={'/project/[id]'} as={`/project/${_id}`} >
                    <a>{title}</a>
                </Link>
            </h4>
        </>
    )
}