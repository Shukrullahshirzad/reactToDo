import React from "react";
import styles from "./TodoItem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("Delete item:", item);
      setTodos(todos.filter((todo) => todo !== item));
      
    }
    function handleClick(name) {
        console.log("Item clicked:", todos);
        setTodos(todos.map(todo => 
          todo.name === name ? {...todo, completed: !todo.completed} : todo
        ));
    }
    const className = item.completed ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName} key={item}>
        <span className={className}  onClick={()=> handleClick(item.name)}>{item.name}</span>
        <button
          onClick={() => handleDelete(item)}
          className={styles.deleteButton}
        >
          x
        </button>
      </div>
    </div>
  );
}
