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
           <Register onFormSwitch={toggleForm}/>
          }/>
          <Route path="/login" element={<Login onFormSwitch={toggleForm}/>} />
          <Route path="/register" element={<Register onFormSwitch={toggleForm}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;