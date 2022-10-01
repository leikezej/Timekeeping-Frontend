import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function ChangePassword() {
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
         // if (result.data.code === 500) {
         //    alert('User Not Found!')
         // }
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
      }}> Change Password </h1>
      
      <div className="outcard">
         OTP: <br />
         <input className="inputs" type="text" 
            value={otp}
            onChange={(e) => {
               setOtp(e.target.value)
            }}
         />
         <br />
         New Password: <br />
         <input className="inputs" type="text" 
             value={password}
             onChange={(e) => {
               setPassword(e.target.value)
            }}
         />
         <br />
         <br />
         <button
            onClick={handleSubmit}
         style={{ marginTop: '5px' }} className="btns"> Change Password </button>
      </div>
   </>
   )
}

export default ChangePassword;