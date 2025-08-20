import { useState } from "react";
import styles from "./Form.module.css";
export default function from({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.trim() === "" || todos.includes(todo)) {
      alert("Please do not enter an empty and repeated item.");
      return;
    }  
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.formContainer}>
        <input
          className={styles.modrenInput}
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="text"
          name="todo"
          placeholder="Add a new todo"
        />
        <button className={styles.modrenButton}>Add</button>
      </div>
    </form>
  );
}
