import { CheckCircle, Circle, PlusCircle, Trash } from 'phosphor-react';
import clipboard from '../assets/clipboard.svg';
import React, { useState } from 'react';
import styles from './newTask.module.css';
import  { Task }  from './Task.jsx';

import { useId } from "react-id-generator";
import { Lists } from './List';
import { Info } from './Info';

export function NewTask () {

        const [task, setTask] = useState(""); 

        const [itemsList, setItemsList] = useState([]); 

      
        const [itemCount, setItemCount] = useState(0)

        const [completedCount] = useState(1);

        const [globalCount, setGlobalCount]= useState(0)

        function countGlobo(item){
        if(item === 0){
          setGlobalCount(value => value + 1 )
        } else if (item === 1) {
          setGlobalCount(value => value - 1)
        }
      }


        function handleChangeInput(event) {
          const inputTask = event.target.value;
          
          setTask(inputTask); 
        }

        function handleAddItemToList(event) {
             event.preventDefault(); 

            if (!task) { 
              return
            };

            setItemCount((state)=>{
              return state +1
             })


             setItemsList([...itemsList, task]);
             setTask(""); 
        }

        function deleteTask(taskToDelete) {
            const taskWithouDeletedOne = itemsList.filter(item =>{
             return item != taskToDelete
             })
             setItemsList(taskWithouDeletedOne);
         }

    return (
    <div>
        <form
        className={styles.boxTask}
        onSubmit={handleAddItemToList}
        >
            <input 
            required
            type="text"
            //key={numberId}
            className={styles.newTask} 
            onChange={handleChangeInput}
            value={task}
            placeholder=' Adicione uma nova tarefa'
             >
            </input>

            <button
                type="submit"
                className={styles.button}>
                <strong>Criar</strong>
                <PlusCircle size={20} />
            </button>
        </form>

      <Info
      itemCount={itemCount}
      completedCount={completedCount}
      globalCount={globalCount}/>

       <Lists
       itemsList={itemsList}
       onDeleteTask={deleteTask}
       globalCount={globalCount}
       countGlobo={countGlobo}/>

    </div>
    )
}