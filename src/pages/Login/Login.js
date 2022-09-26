import React, { useState } from 'react';

import '../../styles/login.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login() {

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
            alert('Success')
            console.log(result.data)
         })
         .catch(error => {
            alert('Login Error')
            console.log(error)
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
         </div>
      </>
   )
}

export default Login