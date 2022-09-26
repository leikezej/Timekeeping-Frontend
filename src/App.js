import React from 'react';
import './styles/App.css';

import {
  Browser as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Login from './pages/Login/Login';
import { BrowserRouter } from 'react-router-dom';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';

// import { Login, Register, Home } from './pages/index'


function App() {
  return (
    <div>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;
