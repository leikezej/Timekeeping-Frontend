import React from 'react';
// import React, { useState } from 'react';
import './styles/App.css';

import {
  Routes,
  Route
} from "react-router-dom";

import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Dashboard from './pages/Dashboard/Dashboard';
import TimeSheet from './pages/Dashboard/TimeSheet';
import Reports from './pages/Dashboard/Reports';

import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

import ForgotPassword from './pages/Forgot/ForgotPassword';
import ResetPassword from './pages/Forgot/ResetPassword';
import ChangePassword from './pages/Forgot/ChangePassword';

import Timein from './components/Timein/Timein';
import Timeout from './components/Timeout/Timeout';

// import Navbar from './components/Navbar/Navbar';

// const ROLES = {
//   'User': 2001,
//   'Admin': 5150
// }

function App() {
  //   const [token, setToken] = useState();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  return (
    <>
      {/* {!["/admin", "/user", "/employee"].includes(location.pathname) && <Navbar/>} */}
              {/* {<Navbar />} */}
        <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/home" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/timeSheet" element={<TimeSheet />} />
              <Route path="/reports" element={<Reports />} />
               
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/change-password" element={<ChangePassword />} />
              
              <Route path="/timein" element={<Timein />} />
              <Route path="/timeout" element={<Timeout />} />
              
              <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
          </Routes>
    </>
 );
}

 export default App;
