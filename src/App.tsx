
import logoToDoList from './assets/logoToDoList.svg';
import styles from './App.module.css';


export function App() {
  return (
    <>
      <header className={styles.header}>
        <img src={logoToDoList} alt="Um foguete mais a descrição toDo, formando a logo do toDo List" />
      </header>

      <nav>
        <input placeholder='Adicione uma nova tarefa' type="text" />
        <button>Criar + logo</button>
      </nav>

      <main>
        <article>
          <div>
            <p>Tarefas criadas<span>0</span></p>
            <p>Concluídas<span>0</span></p>
          </div>

          <div>
            tem uma logo aqui
            <span>Você ainda não tem tarefas cadastradas</span>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        </article>
      </main>
    </>
  )
}