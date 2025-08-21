// Import the useState hook from React
import { useState } from "react";
// Import the Form component
import Form from "./Form";
// Import the TodoList component
import TodoList from "./TodoList";
import TaskManager from "./TaskManager";
import styles from "./todoContainer.module.css"; // Import CSS module for styling

// Define the Todo component
export default function Todo() {
  // State for the list of todos
  const [todos, setTodos] = useState([]);

  // Render the Form and TodoList components, passing todos and setTodos as props
  return (
    <div className={styles.todoContainer}>
      <Form todos={todos} setTodos={setTodos} />
      <TaskManager todos={todos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
