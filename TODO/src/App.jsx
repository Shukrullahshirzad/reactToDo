// Import the useState hook from React (not used here, but commonly imported)
import { useState } from "react";
// Import the Todo component
import Todo from "./components/Todo";
// Import the Header component
import Header from "./components/Header";
// Import the CSS for the App
import "./App.css";
import Footer from "./components/Footer";

// Define the App component
function App() {
  // Render the main app container with Header and Todo components
  return (
    <div className="App">
      <Header />
      <Todo />
      <Footer />
    </div>
  );
}

export default App;
