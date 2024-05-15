import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import { createRoot } from 'react-dom/client'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// document.getElementById("root")
// );

createRoot(document.getElementById('root')).render(<App />)
