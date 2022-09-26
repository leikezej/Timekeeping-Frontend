import React from 'react';
import './styles/App.css';

import {
  Browser as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ForgotPassword from './pages/Forgot/ForgotPassword';
import ChangePassword from './pages/Forgot/ChangePassword';

// import { Login, Register, Home } from './pages/index'

function App() {
  return (
    <div>
      {/* <Router> */}
        <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/change-password" element={<ChangePassword />} />
        </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
