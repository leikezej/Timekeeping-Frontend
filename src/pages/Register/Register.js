import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import '../../styles/register.css';

import { AiOutlineMail } from "react-icons/ai";
import { FiEye, FiEyeOff, FiKey, FiPhone, FiUser, FiFacebook, FiGithub, FiLinkedin  } from "react-icons/fi";

function Register() {
   const navigate = useNavigate('');

   const [ name, setName ] = useState('');
   const [ email, setEmail ] = useState('');
   const [ phone, setPhone ] = useState('');
   const [ password, setPassword ] = useState('');
   
   const [ showPassword, setShowPassword ] = useState(false);
   const changeIcon = showPassword === true ? false : true;
      
   const togglePassword = () => {
    setShowPassword(!showPassword);
   };
   
      useEffect(() => {
         if(!localStorage.getItem('accessToken')) {
        navigate('/register')
    }
  }, [])
   
   const handleRegister = () => {
      console.log({ name, email, phone, password })
      axios.post('http://localhost:272/api/auth/signup', 
      {
         name: name,
         email: email,
         phone: phone,
         password: password
      })
         .then(res => {
            console.log(res.data)
            console.log(res.status)
               alert('Registration Successfull!')
            localStorage.setItem("token", res.data.token);
            navigate("/", { replace: true });
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
               required
               placeholder="Johnny Pusong"
               value={name}
               className="inputs"
               type="name" /> <br /> <br />
            
            Email: <br />
             <AiOutlineMail />  {" "}
             <input
               required
               onChange={(e) => {
                  setEmail(e.target.value)
               }}
               placeholder="johndoe@gmail.com"
               value={email}
               className="inputs"
               type="email" /> <br /> <br />
            
            Phone: <br />
          <FiPhone />{" "}
             <input
               required
               onChange={(e) => {
                  setPhone(e.target.value)
               }}
               value={phone}
               className="inputs"
               type="number"
                placeholder="(xxx) xxx-xxxx"
               /> <br /> <br />
            
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