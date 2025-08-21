// Import React
import React from "react";
// Import the CSS module for styling
import styles from "./TodoItem.module.css";

// Define the TodoItem component, receiving item, todos, and setTodos as props
export default function TodoItem({ item, todos, setTodos }) {
  // Function to handle deleting a todo item
  function handleDelete(item) {
    console.log("Delete item:", item); // Log the item to be deleted
    setTodos(todos.filter((todo) => todo !== item)); // Remove the item from the todos array
  }

  // Function to handle toggling completed status
  function handleClick(name) {
    console.log("Item clicked:", todos); // Log current todos
    setTodos(
      todos.map(
        (
          todo // Map over todos array
        ) =>
          todo.name === name // If todo name matches
            ? { ...todo, completed: !todo.completed } // Toggle completed status
            : todo // Otherwise, return todo unchanged
      )
    );
  }

  // Set className based on completed status
  const className = item.completed ? styles.completed : "";

  // Render the todo item
  return (
    <div className={styles.item}>
      {" "}
      {/* Container for the todo item */}
      <div className={styles.itemName} key={item}>
        {" "}
        {/* Name container with key */}
        <span
          className={className} // Apply completed style if needed
          onClick={() => handleClick(item.name)} // Toggle completed on click
        >
          {item.name} {/* Display todo name */}
        </span>
        <button
          onClick={() => handleDelete(item)} // Delete item on click
          className={styles.deleteButton} // Button styling
        >
          x {/* Button label */}
        </button>
      </div>
    </div>
  );
}
