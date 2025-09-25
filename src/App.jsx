import './index.css'
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";


function App() {
   const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App
