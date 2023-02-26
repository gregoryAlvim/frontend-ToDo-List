import { HiOutlineCheckCircle } from "react-icons/hi";
import { FiCircle, FiTrash2 } from "react-icons/fi";

import deleteIcon from '../assets/deleteIcon.svg';

import styles from './Task.module.css';

export interface TaskProps {
   description: string;
   isConcluded?: boolean;
   onDeleteTask?: (task: string) => void;
   onCompleteTask?: (description: string) => void;
}

export function Task({description, isConcluded=false, onDeleteTask, onCompleteTask}: TaskProps) {

   function handleDeleteTask() {
      alert("Você realmente deseja excluir essa tarefa?");
      onDeleteTask!(description);
   }

   function handleCompleteTask() {
      
      onCompleteTask!(description);
   }

   return (
      <div className={styles.taskContainer}>
         <button 
            className={styles.concludedTaskButton}
            onClick={handleCompleteTask}
         >
            { isConcluded ? <HiOutlineCheckCircle className={styles.checkedCheckbox} size={17} /> : <FiCircle className={styles.uncheckedCheckbox} size={17} /> }
         </button>

         <p>{ isConcluded ? <s>{description}</s> : description }</p>

         <button 
            className={styles.deleteTaskButton}
            onClick={handleDeleteTask}
         >
            <FiTrash2 size={17} />
         </button>
      </div>
   );
}