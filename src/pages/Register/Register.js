import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import '../../styles/register.css';

import { AiOutlineMail } from "react-icons/ai";
import { FiEye, FiEyeOff, FiKey, FiPhone, FiPocket, FiUser, FiFacebook, FiGithub, FiLinkedin  } from "react-icons/fi";

function Register() {
   const navigate = useNavigate('');

   const [ name, setName ] = useState('');
   const [ email, setEmail ] = useState('');
   const [ phone, setPhone ] = useState('');
   const [ roles, setRoles ] = useState('');
   const [ password, setPassword ] = useState('');
   
   const [ showPassword, setShowPassword ] = useState(false);
   const changeIcon = showPassword === true ? false : true;
      
   const togglePassword = () => {
    setShowPassword(!showPassword);
   };
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
         .then(res => {
            console.log(res.data)
            console.log(res.status)
               alert('Registration Successfull!')
            localStorage.setItem("token", res.token);
            navigate("/home", { replace: true });
         })
         .catch(error => {
            console.log(error)
            alert('Register Error')
         })
   }
   
   return (<>
         <h1 className="center" style={{ fontFamily: 'Kaushan Script', marginTop: '50px'}}> REGISTER </h1>
               <Link to={'/'} style={{  textAlign: 'center', color: '#000', display: 'block' }}> Login Here</Link>
         <br />
                     
         <div className="outcard">
           Name: <br /> 
          <FiUser /> {" "}
               <input
               onChange={(e) => {
                  setName(e.target.value)
               }}
               placeholder="Johnny Pusong"
               value={name}
               className="inputs"
               type="name" /> <br /> <br />
            
            Email: <br />
          {/* <i class="fa fa-envelope"></i> {" "} */}
             <AiOutlineMail />  {" "}
             <input
               onChange={(e) => {
                  setEmail(e.target.value)
               }}
               placeholder="johndoe@gmail.com"
               value={email}
               className="inputs"
               type="email" /> <br /> <br />
            
            Phone: <br />
          {/* <i class="fa fa-mobile"></i>  */}
          <FiPhone />{" "}
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
            
            {/* Role: 
            <div className="center">
               <RadioGroup
               row
               aria-labelledby="demo-row-radio-buttons-group-label"
               // name="row-radio-buttons-group"
               name="position"
               defaultValue="top"
               >
               
               <FormControlLabel 
                  onChange={(e) => {
                        setUser(e.target.value)
                     }}
                  value="user" name="user" control={<Radio />} label="User" />
               <FormControlLabel 
                  onChange={(e) => {
                        setAdmin(e.target.value)
                     }}
                  value="admin" name="admin" control={<Radio />} label="Admin" />
               
               <FormControlLabel
                  value="disabled"
                  disabled
                  control={<Radio />}
                  label="other"
               />
               </RadioGroup>
            </div> */}
            
            
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
            
            Role: 
            <br />
             {/* <i class="fa fa-user-secret icon"></i>  */}
             <FiPocket />{" "}
             <input
               onChange={(e) => {
                  setRoles(e.target.value)
               }}
               placeholder={'Admin, User'}
               value={roles}
               type="text"
               className="inputs"
               />
               
               <br /> <br /> 
                              
                              
            Password: <br />
             <FiKey />{" "}
               <input 
                  onChange={(e) => {
                     setPassword(e.target.value)
                  }}
                  placeholder={'*******************'}
                  value={password}
                  required
                  type={showPassword ? "text" : "password"}
                  className="inputs" /> {' '}
               <span
                    onClick={() => {
                       togglePassword(changeIcon);
                    }}
                 >
                    {changeIcon ? <FiEye /> : <FiEyeOff />}
                 </span>
                  <br /> <br />
            
               <button onClick={handleRegister} className="btns"> Register </button>
            <>
            <br />
               <center style={{ textAlign: 'center', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>Or Register With</center> <br />
               <center>
                     <a href="https://www.linkedin.com/in/jezekiel-isip-1ab872215/" >
                        {" "}<FiLinkedin size="30px" color="#000" />{" "}
                    </a>
                    
                    <a href="https://github.com/leikezej">
                        {" "}<FiGithub size="30px" color="#000" 
                        />{" "}
                    </a>
                    
                    
                    <a href="https://www.facebook.com/thebullier">
                       {" "} <FiFacebook  size="30px" color="#000"
                        />{" "}
                    </a>
               </center>
            </>
         </div>
      </>
   )
}


export default Register;