import React, { useState } from 'react';
import axios from 'axios';
import { FiUser } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
      const navigate = useNavigate();

   const [ email, setEmail ] = useState('');

   const handleForgot= () => {
      console.log({ email })
      axios.post('http://localhost:272/api/auth/forgot-password', 
      {
         email: email
      })
      .then(result => {
         alert('Success')
         console.log(result.data)
            navigate("/reset-password")
         })
         .catch(error => {
            alert('Something Wen Wrong!')
            console.log(error)
         })
   }

   return(<>
      <h1 className="center" style={{
            fontFamily: 'Kaushan Script', 
            marginTop: '50px', 
            marginBottom: '25px'
      }}> Forgot Password </h1>
      
      <div className="outcard">
         Email: 
         <br />
      <FiUser />{" "} {" "} 
         <input 
            onChange={(e) => {
                  setEmail(e.target.value)
               }}
            value={email} 
            className="inputs"
            type="email"
            placeholder="johndoe@gmail.com"
            required
         />
         
         <button 
            onClick={handleForgot}
            style={{ 
               marginLeft: '150px', 
               borderRadius: '5px', 
               marginTop: '20px', 
               width: '40%' }} 
         className="btns"> SUBMIT </button>
   
      </div>
   </>

   )
}

export default ForgotPassword;