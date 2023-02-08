import styles from './list.module.css';
import { Task } from "./Task";
import clipboard from '../assets/clipboard.svg';

export function Lists({onDeleteTask, itemsList, toggleChange, handleChecked, globalCount, countGlobo}){
    if(!itemsList.length){
        return (
            <div className={styles.container}>
                <div className={styles.boxContent}>
                 <img src={clipboard} className={styles.img} alt="Caderno"/>
                 <p className={styles.contentOne}>Você ainda não tem tarefas cadastradas</p>
                 <p className={styles.contentTwo}>Crie tarefas e organize seus itens a fazer</p>
                </div>
            </div>
        )
    }

    if(itemsList.length){
        return(
            <div className={styles.container}>
                {itemsList.map(items=>{
                    return(
                        <Task 
                        key={items} 
                        toggleChange={toggleChange}
                        handleChecked={handleChecked}
                        items={items} 
                        onDeleteTask={onDeleteTask}
                        globalCount={globalCount}
                        countGlobo={countGlobo}/>
                    )
                   })
                }
            </div>
        )
    }

}
