import { useState } from "react";
import styles from "./Form.module.css";
export default function from({ todos, setTodos }) {
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", completed: false });

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.name.trim() === "" || todos.some((t) => t.name === todo.name)) {
      alert("Please do not enter an empty and repeated item.");
      return;
    }
    setTodos([...todos, todo]);
    setTodo({ name: "", completed: false });
  }
  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.formContainer}>
        <input
          className={styles.modrenInput}
          onChange={(e) => setTodo({ name: e.target.value, completed: false })}
          value={todo.name}
          type="text"
          name="todo"
          placeholder="Add a new todo"
        />
        <button className={styles.modrenButton}>Add</button>
      </div>
    </form>
  );
}
