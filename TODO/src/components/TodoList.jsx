// Import the TodoItem component
import TodoItem from "./TodoItem";
// Import the CSS module for styling
import styles from "./TodoList.module.css";

// Define the TodoList component, receiving todos and setTodos as props
export default function TodoList({ todos, setTodos }) {
  // Render the list of TodoItem components
  return (
    <div className={styles.list}>

      {/* Container for the todo list */}
      {todos.map((item) => (
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
