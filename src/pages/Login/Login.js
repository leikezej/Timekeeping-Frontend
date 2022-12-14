import React, { useState } from 'react';

import '../../styles/login.css';

import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FiEye, FiEyeOff, FiKey, FiUser } from "react-icons/fi";
import { BsLock } from "react-icons/bs";
import { FaGoogle, FaFacebookF, FaGithub, FaLinkedinIn, FaGitlab } from "react-icons/fa";


function Login({ setToken }) {
   const navigate = useNavigate('');

   const [ email, setEmail ] = useState('');
   const [ password, setPassword ] = useState('');
   const [ showPassword, setShowPassword ] = useState(false);
   const changeIcon = showPassword === true ? false : true;
   
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  
   const handleLogin = (e) => {
      // console.log({ email, password})
       axios.post('http://localhost:272/api/auth/signin', 
      {
         email: email,
         password: password
      })
      .then((result) =>  {
         console.log(result.data)
         // props.userAuthentication()
         alert('SUCCESS')
         const token =  (email, password);
         if (token) {
            localStorage.setItem('name', result.data.name)
            localStorage.setItem('email', result.data.email)
            localStorage.setItem('roles', result.data.roles)
         }
         if(!localStorage.setItem('token', result.data.refreshToken)) {
               sessionStorage.setItem('session-user', result.data.name);
               sessionStorage.setItem('session-user-email', result.data.email);
               sessionStorage.setItem('session-user-roles', result.data.roles);
               sessionStorage.setItem('refreshToken', result.data.refreshToken);
               sessionStorage.setItem('accessToken', result.data.accessToken);
            console.log('Go HOME');
            navigate('/home')
         }
      })
      .catch(error => {
        alert('ERROR')
        alert(error.message)
        console.log(error)
        console.log(error.message)
        console.log(error.result.data.error.message)
      })
   }
   
   return (
   <>
         <h1 className="center" style={{ 
               fontFamily: 'Kaushan Script', 
               marginTop: '50px', 
               marginBottom: '25px',
               fontWeight: '900'
            }}> LOGIN </h1>
            
      <Link to={'/register'} style={{ marginBottom: '30px', color: '#000', textAlign: 'center', display: 'block' }}> Register Here</Link>
                     
         <div className="outcard">         
            Email:
            <br />
          <FiUser /> {" "}
             <input
               onChange={(e) => {
                  setEmail(e.target.value)
               }}
               placeholder="john123@gmail.com"
               value={email}
               className="pas-inputs"
               type="email"
               required="true"
               /> <br /> <br />
            
            Password:  <br />
            <FiKey /> {" "}
               <input
                  type={showPassword ? "text" : "password"}
                  required="true"
                  placeholder="**********"
                  onChange={(e) => {
                     setPassword(e.target.value)
                  }}
                  value={password}
                  className="pas-inputs" 
               /> {" "} {" "}
               <span
                    onClick={() => {
                       togglePassword(changeIcon);
                    }}
                 >
                    {changeIcon ? <FiEye /> : <FiEyeOff />}
                 </span>
                     
                  <br />
                  <br />
                     <Link to={'/forgot-password'} style={{ 
                           marginTop: '5px', 
                           textAlign: 'center', 
                           display: 'block', 
                           marginLeft: '300px', 
                           color: '#000', 
                           fontSize: '15px' 
                        }}> <BsLock style={{ marginBottom: '3px'}}/>Forgot Password?</Link>
                  <br />
                  
               <button onClick={handleLogin} className="btns"> LOGIN </button>
                  <br />
               
               <center style={{ textAlign: 'center', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>Login Using:</center> <br />
               <center>
                  {" "}<FaGoogle size="30px" color="#000" />{" "}
              
                  {" "}<FaLinkedinIn size="36px" color="#000" />{" "}
              
                  {" "}<FaGithub size="30px" color="#000" /> {" "}

                  {" "}<FaGitlab size="30px" color="#000" /> {" "}
              
                 {" "} <FaFacebookF  size="30px" color="#000" /> {" "}
                 
               </center>
                  <br />
         </div>
   </>
   )
}

export default Login;