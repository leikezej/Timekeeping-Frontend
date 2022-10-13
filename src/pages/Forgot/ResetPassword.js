import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function ChangePassword() {
   const navigate = useNavigate();
   
   const [ password, setPassword ] = useState('');
   const [ passwordConfirm, setPasswordConfirm ] = useState('');

   const handleSubmit= () => {
      console.log({ password, passwordConfirm })
      axios.post('http://localhost:272/api/auth/reset-password', 
      {
         password: password,
         passwordConfirm: passwordConfirm
      })
      .then(result => {
         alert('Success')
         console.log(result.data)
      
         if (result.data.code === 200) {
            navigate('/')
         }
         })
         .catch(error => {
            alert('Changing Password Error')
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
      
         Enter New Password: <br />
         <input className="inputs"  
            type="password"
            value={password}
            onChange={(e) => {
               setPassword(e.target.value)
            }}
         />
         
         <br />
         <br />
         
         Re-Enter New Password: <br />
         <input className="inputs"
            type="password"
             value={passwordConfirm}
             onChange={(e) => {
               setPasswordConfirm(e.target.value)
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