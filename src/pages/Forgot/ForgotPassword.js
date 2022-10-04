import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FiUser } from "react-icons/fi";

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
            navigate('/change-password')
         }
         // if (result.data.code === 500) {
         //    alert('User Not Found!')
         // }
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
         className="btns"> GET OTP </button>
   
      </div>
   </>

   )
}

export default ForgotPassword;