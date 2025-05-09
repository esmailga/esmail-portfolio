import { useTheme } from '../../common/ThemeContex';
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import styles from'./NavbarStyles.module.css'
import { useEffect, useRef } from 'react';

function Navbar (){

const {theme, toggleTheme} = useTheme();
const themeIcon = theme === 'light' ? sun : moon;

const navcontainerRef = useRef(null);
const contactBtnRef = useRef(null);
const arrowRef = useRef(null);

useEffect(() => {
    const handleScroll = () => {
        const navcontainer = navcontainerRef.current;
        const contactBtn = contactBtnRef.current;
        const arrow = arrowRef.current;

        if (!navcontainer || !contactBtn || !arrow) {
            return;
        }

        if (window.scrollY > 50) {
            navcontainer.classList.add(styles.navscrolled); // Use styles object
            contactBtn.classList.add(styles.contactBtnScrolled); // Use styles object
            arrow.classList.add(styles.arrowvis); // Use styles object
        } else {
            navcontainer.classList.remove(styles.navscrolled); // Use styles object
            contactBtn.classList.remove(styles.contactBtnScrolled); // Use styles object
            arrow.classList.remove(styles.arrowvis); // Use styles object
        }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, [styles]); // Add styles to the dependency array if you expect styles to change

    return(
    <nav id="navwrapper" className={styles.navwrapper}>
            <div className={styles.navcontainer} ref={navcontainerRef}>
                <div className={styles.navcontent}>
                    <div className={styles.colorModeContainer}>
                        <img src={themeIcon} alt="Dark mode icon"
                        onClick={toggleTheme}
                        />
                    </div>
                    <button className={styles.contactBtn} ref={contactBtnRef}>
                    Contact Me
                    <span className={styles.arrow} ref={arrowRef}>&gt;</span>
                    </button>
                </div>
        </div>
     </nav>


    )

}

export default Navbar