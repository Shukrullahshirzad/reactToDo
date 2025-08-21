
import styles from './taskmanager.module.css'; // Import styles for TaskManager component
export default function TaskManager({ todos }) {
    const completedTodos = todos.filter((todo) => todo.completed).length; // Count completed todos
    const incompleteTodos = todos.length - completedTodos; // Count incomplete todos
  return (
    <div className={styles.taskManager}>
          <h2 className={styles.complete}>Completed Todos: {completedTodos}</h2>
            <h2 className={styles.incomplete}>Incomplete Todos: {incompleteTodos}</h2>
      {/* Display count of completed todos */}
    </div>
  );
}
