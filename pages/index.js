import { useState } from 'react'
import Link from 'next/link'
import PomLogo from '../components/svg/PomLogo'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [display, setDisplay] = useState('intro')

  const nextPage = (direction) => {
    setDisplay(direction)
  }

  return (
    <div className={styles.demo}>
      <div className={display !== 'intro' ? styles.hide : ''}>
        <h2>What's a pomgrammer?</h2>
        <PomLogo />
        <p>You are! (potentially)</p>
        <p className={styles.advanceLink} onClick={() => nextPage('definition')}>Learn More</p>
      </div>

      <div className={display !== 'definition' ? styles.hide : ''}>
        <h2>A quick bit of history.</h2>
        <p>The <span className={styles.bold}>pomodoro method</span> is a time management method developed by Francesco Cirillo in the late 1980's.</p>
        <div>
          <img className={styles.demoImg} src='/nick.jpg' />
          <p className={styles.demoImgTag}>Pictured: Not Francesco Cirillo</p>
        </div>
        <p>The technique uses a timer to break down work into intervals, traditionally 25 minutes in length (from here on known as POMs), separated by short breaks.</p>
        <p className={styles.advanceLink} onClick={() => nextPage('project')}>Go on...</p>
      </div>

      <div className={display !== 'project' ? styles.hide : ''}>
        <h2>Pomgrammer <span className={styles.underline}>tracks</span> your projects over time.</h2>
        <p>The first step is creating a project. Then we'll start adding POMs (time intervals, remember?).</p>
        <img className={styles.demoImg} src='/gb-bubble.png' />
        <p className={styles.demoImgTag}>An <span className={styles.bold}>actual</span> project of mine.</p>
        <p>How exciting! Now we can launch into our first POM. After the duration of your work time and subsequent break, you'll provide a <span className={styles.bold}>focus</span>, or what you worked on during that POM.</p>
        <p className={styles.advanceLink} onClick={() => nextPage('pom')}>Wow! Now what?</p>
      </div>

      <div className={display !== 'pom' ? styles.hide : ''}>
        <h2>Your profile, or your POMfile!</h2>
        <img className={styles.demoImg} src='/profile.png' />
        <p className={styles.demoImgTag}>(Still workshopping that one.)</p>
        <p>Once you start packing your projects full of POMs you can view that individual project (over there on the sidebar) or view the big picture in your profile (click your name, also over there).</p>
        <p>You can now see how many POMs you've created for each project, thus tracking over time the various tasks you've worked on in any given project and the amount of time you've spent working on said project!</p>
        <p className={styles.advanceLink} onClick={() => nextPage('finale')}>Rad!</p>
      </div>

      <div className={display !== 'finale' ? styles.hide : ''}>
        <h1>Let's do it!</h1>
        <p>Now that you've got the jist, let's start by creating a new project!</p>
        <Link href={'/newproject'}>
          <a><p className={styles.advanceLink}>Add a Project</p></a>
        </Link>
      </div>
    </div>
  )
}
