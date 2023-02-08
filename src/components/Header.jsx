import styles from './header.module.css';
import Rocket from '../assets/rocket.svg'

export function Header() {
    return (
     <div>
        <header className={styles.header}>
            <img src={Rocket} alt="Rocket"/>
        </header>
     </div>
    )
  }