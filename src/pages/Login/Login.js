import React, { useState } from 'react';

import '../../styles/login.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
   const navigate = useNavigate('');

   const [email, setEmail] = useState('');
   const [ password, setPassword ] = useState('');

   const handleLogin = () => {
      console.log({ email, password})
       axios.post('http://localhost:8080/api/auth/signin', 
      {
         email: email,
         password: password
      })
         .then(result => {
            // alert('Success')
            console.log(result.data)
         
         if (result.data.code === 404 ) {
            alert('User Not Found')
         }
         if (result.data.code === 404 ) {
            alert('Incorrect Password')
         }
         if (result.data.code === 200 ) {
               navigate('/')
               localStorage.setItem('TOKEN', result.data.token)
               localStorage.setItem('EMAIL', result.data.email)
         }
         
         }).catch(error => {
            console.log(error)
            alert('Login Error')
         })
   }

   return (<>
         <h1 className="center"> LOGIN </h1>
                     
         <div className="outcard">
            Email
             <input
               onChange={(e) => {
                  setEmail(e.target.value)
               }}
               value={email}
               className="inputs"
               type="email" /> <br /> <br />
            Password
               <input 
                  onChange={(e) => {
                     setPassword(e.target.value)
                  }}
                  value={password}
                  className="inputs" type="password" /> <br /> <br />
            
               <button onClick={handleLogin} className="btns"> LOGIN </button>
               
               <Link to={'/register'} style={{ marginTop: '5px', textAlign: 'center', display: 'block' }}> Register Here</Link>
               
               <Link to={'/forgot-password'} style={{ marginTop: '5px', textAlign: 'center', display: 'block' }}> Forgot Password?</Link>
         </div>
      </>
   )
}

export default Login