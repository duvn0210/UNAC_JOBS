import './index.css'
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Vacantes from './pages/Vacantes';
import Home from './pages/Home';


function App() {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <> 
      <Header isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/vacantes" element={<Vacantes />} />
      </Routes>
    </>
  );
}

export default App
