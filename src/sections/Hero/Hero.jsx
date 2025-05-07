import styles from './HeroStyles.module.css'
import heroImg from '../../assets/photo.jpg'
import CV from '../../assets/cv.pdf'
function Hero() {
  return (
    <section id="hero" className={styles.container}>
        <img className ={styles.hero} src={heroImg} alt="profile image"/>
      <div className={styles.info}>
        <h1>Esmail Gaber<br/>Alwahbani</h1>
        <h2>FullStack Developer</h2>
        <p>Helping businesses streamline operations through tailored software solutions that blend powerful backend logic with seamless user experiences.</p>
        <a href={CV} download>
        <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  )
}

export default Hero