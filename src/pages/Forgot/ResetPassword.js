import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function ResetPassword() {
   const navigate = useNavigate();
   const [ otp, setOtp ] = useState('');
   const [ password, setPassword ] = useState('');

   const handleSubmit= () => {
      console.log({ otp, password })
      axios.post('http://localhost:8080/api/auth/submit-otp', 
      {
         otp: otp,
         password: password,
      })
      .then(result => {
         alert('Success')
         console.log(result.data)
      
         if (result.data.code === 200) {
            navigate('/')
         }
         })
         .catch(error => {
            alert('Register Error')
            console.log(error)
         })
   }


   return(
   <>
      <h1 className="center" style={{
            fontFamily: 'Kaushan Script', 
            marginTop: '50px', 
            marginBottom: '25px',
            fontWeight: '900'
      }}> Reset Password </h1>
      
      <div className="outcard">
         OTP: <br />
         <input className="inputs" 
            type="number" 
            value={otp}
            onChange={(e) => {
               setOtp(e.target.value)
            }}
         />
         
         <br />
         <br />
         
         New Password: <br />
         <input className="inputs" 
            type="password" 
             value={password}
             onChange={(e) => {
               setPassword(e.target.value)
            }}
         />
         <br />
         <br />
         <button
            onClick={handleSubmit}
         style={{ marginTop: '5px' }} className="btns"> Reset Password </button>
      </div>
   </>
   )
}

export default ResetPassword;