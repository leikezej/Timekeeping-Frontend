import React from 'react';
import './styles/App.css';
import PrivateRoute from './utils/PrivateRoute';

import {
  // Browser as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Dashboard from './pages/Dashboard/Dashboard';
import TimeSheet from './pages/Dashboard/TimeSheet';
import Reports from './pages/Dashboard/Reports';

import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

import ForgotPassword from './pages/Forgot/ForgotPassword';
import ChangePassword from './pages/Forgot/ResetPassword';

import Timein from './components/Timein/Timein';
import Timeout from './components/Timeout/Timeout';

const ROLES = {
  'User': 2001,
  'Admin': 5150
}



function App() {

  return (
    <div>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
        
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/timeSheet" element={<TimeSheet />} />
            <Route path="/reports" element={<Reports />} />
             
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/change-password" element={<ChangePassword />} />
            
            <Route path="/timein" element={<Timein />} />
            <Route path="/timeout" element={<Timeout />} />
            
            <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
        </Routes>
    </div>
  );
}

export default App;
