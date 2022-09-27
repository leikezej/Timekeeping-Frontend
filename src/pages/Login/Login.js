import React, { useState } from 'react';

import '../../styles/login.css';

import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
   const navigate = useNavigate('');

   const [ email, setEmail ] = useState('');
   const [ password, setPassword ] = useState('');
    
//   const [remember, setRemember] = useState(false);
//   const [validate, setValidate] = useState({});
//   const [showPassword, setShowPassword] = useState(false);

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
         .then(result => {
            console.log(result.status)
            console.log(result.accessToken)
            console.log(result.data)
              alert('Login Success')
            navigate("/", { replace: true });
         
         // if (result.data.code === 404 ) {
         //    alert('User Not Found')
         // }
         // if (result.data.code === 404 ) {
         //    alert('Incorrect Password')
         // }
         // if (result.data.code === 200 ) {
         //       navigate('/')
         //       localStorage.setItem('TOKEN', result.data.token)
         //       localStorage.setItem('EMAIL', result.data.email)
         // }
         
         }).catch(error => {
            alert('Login Error')
            console.log(error)
         })
   }

   return (<>
         <h1 className="center"> LOGIN </h1>
                     
         <div className="outcard">
         
               <Link to={'/register'} style={{ marginTop: '5px', textAlign: 'center', display: 'block' }}> Register Here</Link>
         
            Email 
            <br />
             <input
               required
               // onChange={handleEmail}
               onChange={(e) => {
                  setEmail(e.target.value)
               }}
               placeholder="john123@gmail.com"
               value={email}
               className="inputs"
               type="email" /> <br /> <br />
            Password
               <input 
                  required
                  placeholder="**********"
               // onChange={handlePassword}
                  onChange={(e) => {
                     setPassword(e.target.value)
                  }}
                  value={password}
                  className="inputs" type="password" /> <br /> 
                     
                  <br />
                     <Link to={'/forgot-password'} style={{ marginTop: '5px', textAlign: 'center', display: 'block', marginLeft: '420px', fontSize: '15px' }}> Forgot Password?</Link>
                  <br />
                  <br />
                  
               <button onClick={handleLogin} className="btns"> LOGIN </button>
                  <br />
         </div>
      </>
   )
}

export default Login;