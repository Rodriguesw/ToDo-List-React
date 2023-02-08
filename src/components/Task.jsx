import { CheckCircle, Circle, Trash } from 'phosphor-react';
import React, { useState } from 'react';

import styles from './task.module.css';

export function Task({ items, onDeleteTask, globalCount, countGlobo}) {

    //const [itemsList, setItemsList] = useState([]); 

    function handleDeleteTask(){
        onDeleteTask(items)
    }

    const [toggleChange, setToggleChange] = useState({
        status: true,
        body: <Circle  size={18} color="#4ea8de" className={styles.sublimeTextNone} />,
        style: styles.sublimeTextNone
      });
      
      const ifFalse = {
        status:false,
        body: <CheckCircle size={18} color="#5e60ce" weight="fill"  className={styles.sublimeText} />,
        style: styles.sublimeText
      } 
      
      const ifTrue = {
        status:true,
        body: <Circle size={18}  className={styles.sublimeTextNone}/>,
        style: styles.sublimeTextNone
      }

      const [checkCount, setCheckCount] = useState(0)

      function handleChecked(e){
        e.preventDefault()
    
    
        switch (toggleChange.status) {
          case true:
            setToggleChange(change => change = ifFalse)
            setCheckCount(state => state = 1)
            countGlobo(checkCount);
            break;
    
          case false:
            setToggleChange(change => change = ifTrue)
            setCheckCount(state => state = 0)
            countGlobo(checkCount);
            break;
    
          default:
            break;
        }
    
    }

    return (
       
        <div key={items} className={styles.task}> 
           
           <div className={styles.boxCircle}>
               <button className={toggleChange.style}
               onClick={handleChecked}
               >{toggleChange.body}
               </button>
           </div>

           <div  className={styles.boxParagraph}>
         
           <p className={toggleChange.style}>{items}</p>

           </div>

           <div className={styles.boxTrash}>
               <button className={styles.trash} onClick={handleDeleteTask} title="Deletar comentário"><Trash size={20}/></button>
           </div>
        </div>
    )
}
















































