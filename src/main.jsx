import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from './context/ThemeContext';
import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);