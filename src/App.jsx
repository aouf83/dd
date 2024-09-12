// src/App.js
import React from "react";
import AppRoutes from "./routes/AppRoutes";
import "./assets/styles/index.css"; // Import your global styles here

const App = () => (
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);

export default App;
