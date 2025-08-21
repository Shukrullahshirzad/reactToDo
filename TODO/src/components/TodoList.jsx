// Import the TodoItem component
import TodoItem from "./TodoItem";
// Import the CSS module for styling
import styles from "./TodoList.module.css";

// Define the TodoList component, receiving todos and setTodos as props
export default function TodoList({ todos, setTodos }) {
  const sortedTodos = todos.sort((a, b) => {
    // Sort todos by completed status, then by name
    if (a.completed === b.completed) {
      return a.name.localeCompare(b.name); // Sort alphabetically if both have same completed status
    }
    return a.completed ? 1 : -1; // Completed todos come last
  });
  // Render the list of TodoItem components
  return (
    <div className={styles.list}>

      {/* Container for the todo list */}
      {sortedTodos.map((item) => (
        <TodoItem
          key={item.name} // Unique key for each item
          item={item} // Pass the todo item
          todos={todos} // Pass the todos array
          setTodos={setTodos} // Pass the setTodos function
        />
      ))}
    </div>
  );
}
