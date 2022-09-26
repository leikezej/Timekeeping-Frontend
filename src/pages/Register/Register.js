import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import '../../styles/login.css';

function Register() {
   const [ name, setName ] = useState('');
   const [ email, setEmail ] = useState('');
   const [ password, setPassword ] = useState('');
      
   // const handleName = (e) => {
   //    setName(e.target.value)
   // }
   
   // const handleEmail = (e) => {
   //    setEmail(e.target.value)
   // }
   
   // const handlePassword = (e) => {
   //    setPassword(e.targer.value)
   // }
   
   const handleRegister = () => {
      console.log({ name, email, password })
      axios.post('http://localhost:8080/api/auth/signup', 
      {
         name: name,
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
            alert('Register Error')
            console.log(error)
         })
   }
   
   return (<>
         <h1 className="center"> Register </h1>
                     
         <div className="outcard">
           Name
               <input
               onChange={(e) => {
                  setName(e.target.value)
               }}
               value={name}
               className="inputs"
               type="name" /> <br /> <br />
            
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
            
               <button onClick={handleRegister} className="btns"> LOGIN </button>
               
               <Link to={'/login'} style={{ marginTop: '5px', textAlign: 'center', display: 'block' }}> Login Here</Link>
         </div>
      </>
   )
}


export default Register;