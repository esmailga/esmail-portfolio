import { useTheme } from '../../common/ThemeContex';
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import styles from'./NavbarStyles.module.css'

function Navbar (){
const {theme, toggleTheme} = useTheme();
const themeIcon = theme === 'light' ? sun : moon;

    return(
    <header id="navbar" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.header} src={themeIcon} alt="Dark mode icon"
                onClick={toggleTheme}
                 />
        </div>
        <div className="nav-wrapper">
            <div className="nav-container">
                <div className="nav-content">
                    <div className="logo"></div>
                    <button className="contact-Btn">
                        Contact Me
                    <span className="arrow">&gt;</span>
                    </button>
                </div>
            </div>
        </div>
     </header>


    )

}

export default Navbar