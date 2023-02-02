import React, { useState } from "react";
import './App.css';
import { Login } from "./components/Login"
import { Register } from "./components/Register"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


function App() {
  const [currentForm, setCurrentForm] = useState('register');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="bg-success-subtle d-flex p-2 align-items-center justify-content-center text-center">
           <Register/>
          </div>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;