import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import '../../styles/login.css';

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


function Register() {
   const navigate = useNavigate('');

   const [ name, setName ] = useState('');
   const [ email, setEmail ] = useState('');
   const [ phone, setPhone ] = useState('');
   const [ roles, setRoles ] = useState('');
   const [ password, setPassword ] = useState('');
  
//   const [validate, setValidate] = useState({});
  const [showPassword, setShowPassword] = useState(false);
      
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
      console.log({ name, email, phone, roles, password })
      axios.post('http://localhost:272/api/auth/signup', 
      {
         name: name,
         email: email,
         phone: phone,
         roles: roles,
         password: password
      })
         .then(result => {
            console.log(result.data)
               alert('Registration Successfull!')
            localStorage.setItem("token", result.data.token);
            navigate("/login", { replace: true });
         
            // if  (result.data.code === 500) {
            //    alert('User Not Found!')
            // }
         })
         .catch(error => {
            console.log(error)
            alert(error.response.data.error.message)
            // alert('Register Error')
         })
   }
   
   return (<>
         <h1 className="center" style={{ fontFamily: 'Kaushan Script', marginTop: '50px'}}> REGISTER </h1>
               {/* <Link to={'/login'} style={{ marginTop: '5px', textAlign: 'center', display: 'block' }}> Login Here</Link> */}
         <br />
                     
         <div className="outcard">
           Name:
               <input
               onChange={(e) => {
                  setName(e.target.value)
               }}
               placeholder="Johnny Pusong"
               value={name}
               className="inputs"
               type="name" /> <br /> <br />
            
            Email: <br />
             <input
               onChange={(e) => {
                  setEmail(e.target.value)
               }}
               placeholder="johndoe@gmail.com"
               value={email}
               className="inputs"
               type="email" /> <br /> <br />
            
            Phone:
             <input
               onChange={(e) => {
                  setPhone(e.target.value)
               }}
               value={phone}
               className="inputs"
               type="numpad"
               required
                placeholder="(xxx) xxx-xxxx"
               /> <br /> <br />
            
            {/* <PhoneInput
                  type="numpad"
                  placeholder="Enter phone number"
                  // country={'PH'}
                  // defaultCountry={'PH'}
                  country="PH"
                  defaultCountry="PH"
                  onChange={(e) => {
                     setPhone(e.target.value)
                  }}
                  // onChange={(e) => setValues({ ...values, phone: e.target.value })}
                  // variant="outlined"
                  required
                  width="200%"
                  // value={value}
                  // onChange={setValue}
                  /><br /> <br /> */}
            
            Role: <br />
             <input
               onChange={(e) => {
                  setRoles(e.target.value)
               }}
               placeholder={'admin, user'}
               value={roles}
               className="inputs"
               type="textr" /> <br /> <br />
               
            Password:
               <input 
                  onChange={(e) => {
                     setPassword(e.target.value)
                  }}
                  placeholder={'*******************'}
                  value={password}
                  required
                  className="inputs" type="password" /> <br /> <br />
            
               <button onClick={handleRegister} className="btns"> Complete </button>
               
         </div>
      </>
   )
}


export default Register;