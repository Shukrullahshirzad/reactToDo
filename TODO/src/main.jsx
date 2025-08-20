// Import React
import React from 'react'
// Import ReactDOM for rendering the app
import ReactDOM from 'react-dom/client'
// Import the main App component
import App from './App'

// Render the App component inside the root element
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
