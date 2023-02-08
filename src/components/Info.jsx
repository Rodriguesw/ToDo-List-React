import clipboard from '../assets/clipboard.svg';
import styles from './info.module.css';


export function Info({itemCount, globalCount}) {
    return (
            <div className={styles.box}>
                <div className={styles.boxCreate}>
                     <strong className={styles.taskCreate}>Tarefas criadas</strong>
                     <p className={styles.numberCreate}>{itemCount}</p>
                </div>

                <div className={styles.boxComplete}>
                     <p className={styles.taskComplete}><strong>Concluídas</strong></p>
                     <p className={styles.numberComplete}>{globalCount}</p>
                </div>   
            </div>
    )
}




