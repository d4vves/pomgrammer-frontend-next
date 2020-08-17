import { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [display, setDisplay] = useState('intro')

  const nextPage = (direction) => {
    setDisplay(direction)
  }

  return (
    <div className={styles.demo}>
      <div className={display !== 'intro' ? styles.hide : ''}>
        <h1>What's a pomgrammer?</h1>
        <p>POM SVG</p>
        <p onClick={() => nextPage('definition')}>NEXT</p>
      </div>

      <div className={display !== 'definition' ? styles.hide : ''}>
        <h1>You are!</h1>
        <h3>History time...</h3>
        <p>The pomodoro method is a time management method that uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks.</p>
        <p onClick={() => nextPage('project')}>NEXT</p>
      </div>

      <div className={display !== 'project' ? styles.hide : ''}>
        <h1>pomgrammer tracks your projects</h1>
        <p>After you create a project you'll launch into your first POM, or time interval.</p>
        <p>You'll work for 25 minutes, take a 5 minute break and then fill out some information on what you focused on during that time interval.</p>
        <p onClick={() => nextPage('pom')}>NEXT</p>
      </div>

      <div className={display !== 'pom' ? styles.hide : ''}>
        <h1>Tracking your projects over time</h1>
        <p>Once you've been movin' and groovin' with your POMs, your project will be full of interactivity!</p>
        <p>You can now see how many POMs you've created for each project, thus tracking over time the various tasks you've worked on in any given project and the amount of time you've spent working on said project!</p>
        <p onClick={() => nextPage('finale')}>NEXT</p>
      </div>

      <div className={display !== 'finale' ? styles.hide : ''}>
        <h1>Let's do it!</h1>
        <p>Now that you've got the jist, let's start by creating a new project!</p>
        <Link href={'/newproject'}>
          <a><p>add project</p></a>
        </Link>
      </div>
    </div>
  )
}
