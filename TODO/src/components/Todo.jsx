// Import the useState hook from React
import { useState } from "react";
// Import the Form component
import Form from "./Form";
// Import the TodoList component
import TodoList from "./TodoList";

// Define the Todo component
export default function Todo() {
  // State for the list of todos
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.completed).length; // Count completed todos
  // Render the Form and TodoList components, passing todos and setTodos as props
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <div>
        <h2>Completed Todos: {completedTodos}</h2>{" "}
        {/* Display count of completed todos */}
      </div>
    </div>
  );
}
