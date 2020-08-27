import Link from 'next/link'
import styles from '../styles/Home.module.css'
import SidebarProject from './SidebarProject'

export default function Sidebar({currentUser, handleLogout, projects}) {
    let projectList = projects.length < 1 ?
    <h3 className={styles.ProjectName}>No current projects.</h3> :
    projects.map((project, i) => (
        <SidebarProject key={i} {...project}/>
    ))

    return (
        <section className={styles.sidebar}>
            {!currentUser ? 
                <p>
                    <Link href='/register'><a>Register </a></Link>
                    or
                    <Link href='/login'><a> Login</a></Link>
                </p> 
            :
                <div>
                    <Link href='/profile'>
                        <a><h1 className={styles.userName}>{currentUser._doc.name}</h1></a>
                    </Link>
                    <button className={styles.logoutButton} onClick={handleLogout}>Sign Out</button>
                    <Link href='/newproject'>
                        <a><h4 className={styles.addProject}>+ Add Project</h4></a>
                    </Link>
                    {projectList}
                </div>
            }
        </section>
    )
}

Sidebar.getInitialProps = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API}/projects`)
    const projects = await response.json()
    return {projects}
}