import React, { useState } from 'react';

import '../../styles/login.css';

import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FiEye, FiEyeOff, FiKey, FiUser } from "react-icons/fi";
import { BsLock } from "react-icons/bs";
import { FaGoogle, FaFacebookF, FaGithub, FaLinkedinIn, FaGitlab } from "react-icons/fa";

function Login() {
   const navigate = useNavigate('');

   const [ email, setEmail ] = useState('');
   const [ password, setPassword ] = useState('');
   const [ showPassword, setShowPassword ] = useState(false);
   const changeIcon = showPassword === true ? false : true;
   
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  
//   // setter
// localStorage.setItem('myData', data);
// // getter
// localStorage.getItem('myData');
// // remove
// localStorage.removeItem('myData');
// // remove all
// localStorage.clear();

   const handleLogin = () => {
      console.log({ email, password})
       axios.post('http://localhost:272/api/auth/signin', 
      {
         email: email,
         password: password
      })
      .then(result =>  {
            alert('SUCCESS')
            console.log(result.data)
            console.log(result.status)
            console.log(result.data.id)
            console.log(result.data.name)
            console.log(result.data.email)
            console.log(result.data.roles)
            console.log(result.data.accessToken)
            console.log(result.data.refreshToken)
               localStorage.setItem('refreshToken', result.data.refreshToken);
               localStorage.setItem('accessToken', result.data.accessToken);
               localStorage.setItem('NAME', result.data.name);
               localStorage.setItem('EMAIL', result.data.email);
      //   console.log({ 'result.token', 'result.accessToken', 'result.refreshToken'})
        console.log(result.status)
        console.log(result.data.status)
      //   alert('SUCCESS')
        navigate("/home");
      })
      .catch(error => {
        alert('ERROR')
        console.log(error)
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
               // onBlur={handleBlur}
               //  className={errors.email && touched.email && "error"}
               required/> <br /> <br />
            
            Password:  <br />
            <FiKey /> {" "}
               <input
                  type={showPassword ? "text" : "password"}
                  required
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