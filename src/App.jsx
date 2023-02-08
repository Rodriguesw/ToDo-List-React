import './assets/rocket.svg';
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { Info } from './components/Info';
import styles from './app.module.css';
import './global.css';


export function App() {
  return (

  <div>
    <Header/>

    <div  className={styles.wrapper}>
      <NewTask/>
     
    </div>
  </div>
    
  )
}


