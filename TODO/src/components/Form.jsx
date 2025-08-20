// Import the useState hook from React
import { useState } from "react";
// Import the CSS module for styling
import styles from "./Form.module.css";

// Define the Form component, receiving todos and setTodos as props
export default function from({ todos, setTodos }) {
  // State for a todo object with name and completed status
  const [todo, setTodo] = useState({ name: "", completed: false });

  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault(); // Prevent default form submission
    // Check if the todo name is empty or already exists in the todos array
    if (todo.name.trim() === "" || todos.some((t) => t.name === todo.name)) {
      alert("Please do not enter an empty and repeated item."); // Alert user if invalid
      return; // Exit the function
    }
    setTodos([...todos, todo]); // Add the new todo to the todos array
    setTodo({ name: "", completed: false }); // Reset the input field
  }

  // Render the form
  return (
    <form className={styles.todoform} onSubmit={handleSubmit}> {/* Form element with submit handler and styling */}
      <div className={styles.formContainer}> {/* Container for input and button */}
        <input
          className={styles.modrenInput} // Input styling
          onChange={(e) => setTodo({ name: e.target.value, completed: false })} // Update todo state on input change
          value={todo.name} // Bind input value to todo.name
          type="text" // Input type is text
          name="todo" // Input name attribute
          placeholder="Add a new todo" // Placeholder text
        />
        <button className={styles.modrenButton}>Add</button> {/* Button to submit the form */}
      </div>
    </form>
  );
}
