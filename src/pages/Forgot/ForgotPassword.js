import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
   const navigate = useNavigate();
   
   const [ email, setEmail ] = useState('');

   const handleForgot= () => {
      console.log({ email })
      axios.post('http://localhost:8080/api/auth/send-otp', 
      {
         email: email
      })
      .then(result => {
         alert('Success')
         console.log(result.data)
      
         if (result.data.code === 200) {
            navigate('/otp')
         }
         // if (result.data.code === 500) {
         //    alert('User Not Found!')
         // }
         })
         .catch(error => {
            alert('Register Error')
            console.log(error)
         })
   }

   return(<>
      <h1 className="center"> Forgot Password </h1>
      
      <div className="outcard">
         Email 
         <input 
            onChange={(e) => {
                  setEmail(e.target.value)
               }}
            value={email} 
            className="inputs"
            type="text"
         />
         
         <button 
            onClick={handleForgot}
            style={{ 
               marginLeft: '200px', 
               borderRadius: '5px', 
               marginTop: '20px', 
               width: '40%' }} 
         className="btns center"> GET OTP </button>
   
      </div>
   </>

   )
}

export default ForgotPassword;