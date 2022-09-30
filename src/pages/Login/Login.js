import React, { userRef, errRef, useRef, useState } from 'react';

import '../../styles/login.css';

import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FiEye, FiEyeOff, FiKey, FiUser, FiFacebook, FiGithub, FiLinkedin  } from "react-icons/fi";
import { BsLock } from "react-icons/bs";

function Login() {
   const navigate = useNavigate('');

   const [ email, setEmail ] = useState('');
   const [ password, setPassword ] = useState('');
   const [ showPassword, setShowPassword ] = useState(false);
   const changeIcon = showPassword === true ? false : true;
   
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

//   const handleEmail = (e) => {
//     setEmail(e.target.value)
//   }

//   const handlePassword = (e) => {
//     setPassword(e.target.value)
//   }

   const handleLogin = () => {
      console.log({ email, password})
       axios.post('http://localhost:272/api/auth/signin', 
      {
         email: email,
         password: password
      })
         .then(res => {
            console.log(res.status)
            console.log(res.accessToken)
            console.log(res.data)
            console.log(res.status)
              alert('Login Success')
            navigate("/home", { replace: true });
         
         // if (res.status(401) ) {
         //    alert('Incorrect Password')
         //    console.log('Incorrect Password')
         // }
         // if (res.status(404) ) {
         //    alert('User Not Found')
         //    console.log('user not found')
         // }
         // if (res.status(200) ) {
         //       console.log('success')
         //       navigate('home')
               // localStorage.setItem('TOKEN', res.data.token)
               // localStorage.setItem('EMAIL', res.data.email)
         // }
         console.log(res.data.id)
         console.log(res.data.name)
         console.log(res.data.email)
         console.log(res.data.role)
         console.log(res.data.accessToken)
         console.log(res.data.refreshToken)
         }).catch(error => {
            alert('Login Error')
            console.log('Sorry Error on login')
         })
   }

   return (<>
         <h1 className="center" style={{ fontFamily: 'Kaushan Script', marginTop: '50px', marginBottom: '25px'}}> LOGIN </h1>
               <Link to={'/register'} style={{ marginBottom: '30px', color: '#000', textAlign: 'center', display: 'block' }}> Register Here</Link>
                     
         <div className="outcard">         
            Email:
            <br />
          {/* <i class="fa fa-user"></i> {" "} */}
          <FiUser /> {" "}
             <input
               required
               // onChange={handleEmail}
               onChange={(e) => {
                  setEmail(e.target.value)
               }}
               placeholder="john123@gmail.com"
               value={email}
               className="pas-inputs"
               type="email" /> <br /> <br />
            
            Password:  <br />
            {" "} <FiKey />{" "}
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
                     <Link to={'/forgot-password'} style={{ marginTop: '5px', textAlign: 'center', display: 'block', marginLeft: '350px', color: '#000', fontSize: '15px' }}> <BsLock style={{ marginBottom: '3px'}}/>Forgot Password?</Link>
                  <br />
                  
               <button onClick={handleLogin} className="btns"> LOGIN </button>
                  <br />
               
               <center style={{ textAlign: 'center', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>Login Using:</center> <br />
               <center>
               <a href="https://www.linkedin.com/in/jezekiel-isip-1ab872215/" >
                  {" "}<FiLinkedin size="30px" color="#000" />{" "}
              </a>
              
              <a href="https://github.com/leikezej">
                  {" "}<FiGithub size="30px" color="#000" 
                  />{" "}
              </a>
              
              
              <a href="https://www.facebook.com/thebullier">
                 {" "} <FiFacebook  size="30px" color="#000"
                  />{" "}
              </a>
               </center>
                  <br />
         </div>
      </>
   )
}

export default Login;