import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


function Login() {
   const [email, setEmail] = useState('');
   const [ password, setPassword ] = useState('');
      
   const handleEmail = (e) => {
      setEmail(e.target.value)
   }
   
   const handlePassword = (e) => {
      setPassword(e.targer.value)
   }
   
   const handleLogin = () => {
      console.log({ email, password})
      axios.post('http://localhost:8080/api/auth/signin', 
      {
         email: email,
         password: password
      })
         .then(result => {
            alert('Success')
            console.log(result.data)
         
            if  (result.data.code === 500) {
               alert('User Not Found!')
            }
         })
         .catch(error => {
            alert('Login Error')
            console.log(error)
         })
   }
   
   return (
      <div className='Login'>
               <h2> LOGIN </h2>
         Email: <input value={email} onChange={handleEmail} />
         Password: <input value={password} onChange={handlePassword} type="password" />
         <button onClick={handleLogin}> Login </button>
      </div>
   );
}

export default Login;