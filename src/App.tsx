import { useState } from 'react';
import { HiOutlinePlusCircle } from 'react-icons/hi';
import { Task, TaskProps } from './components/Task';

import logoToDoList from './assets/logoToDoList.svg';
import taskFileIcon from './assets/taskFileIcon.svg';
import styles from './App.module.css';

let tasksData = [
  {
    description: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer. Duis vel sed fames integer.',
    isConcluded: false
  },
  {
    description: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer. Duis vel sed fames integer.',
    isConcluded: false
  },
  {
    description: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer. Duis vel sed fames integer.',
    isConcluded: true
  }
]

export function App() {

  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [newTask, setNewTask] = useState<TaskProps>({
    description: ''
  });

  const isAmountTasksZero = tasks.length === 0;

  function showDisplayWithZeroTasks() {
    return (
      <div className={styles.containerTasksList}>
        <img src={taskFileIcon} alt="Icone de uma lista de tarefas, uma anotação ou até uma folha com linhas" />
        <span>Você ainda não tem tarefas cadastradas</span>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    )
  }

  function handleCreateNewTask() {
    setTasks([...tasks, newTask]);
    setNewTask({description: ''});
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutTheDeleted = tasks.filter(task => task.description !== taskToDelete);
    setTasks(tasksWithoutTheDeleted);
  }

  return (
    <>
      <header className={styles.header}>
        <img src={logoToDoList} alt="Um foguete mais a descrição toDo, formando a logo do toDo List" />
      </header>

      <nav className={styles.navToAddTheTasks}>
        <input 
          value={newTask.description}
          onChange={(event) => setNewTask({description: event.target.value})}
          placeholder='Adicione uma nova tarefa'
          type="text" 
        />
        <button
          onClick={handleCreateNewTask}
        >
          Criar {<HiOutlinePlusCircle size={15} />}
        </button>
      </nav>

      <main className={styles.mainContainer}>
        <div className={styles.containerCreatedTasksAndFinishedTasks}>
          <p>Tarefas criadas<span>{tasks.length}</span></p>

          <p>Concluídas<span>0</span></p>
        </div>
        
        {
          isAmountTasksZero ? showDisplayWithZeroTasks() : tasks.map(task => (
            <Task 
              description={task.description} 
              isConcluded={task.isConcluded}
              onDeleteTask={deleteTask}
            />
          ))
        }
      </main>
    </>
  )
}