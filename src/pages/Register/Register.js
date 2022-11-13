// import React, { useState, useEffect } from 'react';
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import '../../styles/register.css';

import { AiOutlineMail } from "react-icons/ai";
import { FiEye, FiEyeOff, FiKey, FiPhone, FiUser, FiFacebook, FiGithub, FiLinkedin  } from "react-icons/fi";

function Register() {
   const navigate = useNavigate('');
   //  const [fileData, setFileData] = useState();

   //  const fileChangeHandler = (e) => {
   //    setFileData(e.target.files[0]);
   //  };
    
   //  const onSubmitHandler = (e) => {
   //    e.preventDefault();
      
   //    const data = new FormData();
      
   //    data.append('image', fileData)
   //    fetch("http://localhost:5000/api/user/single-upload", {
   //      method: "POST",
   //      body: data,
   //    })
   //    .then((result) => {
   //      console.log("File Sent Success!");
   //    })
   //    .catch((err) => {
   //    console.log(err.message);
   //    });
   //  };
    
   const [ name, setName ] = useState('');
   const [ email, setEmail ] = useState('');
   const [ image, setImage ] = useState('');
   const [ phone, setPhone ] = useState('');
   const [ password, setPassword ] = useState('');
   
   const [ showPassword, setShowPassword ] = useState(false);
   const changeIcon = showPassword === true ? false : true;
      
   const togglePassword = () => {
    setShowPassword(!showPassword);
   };
   
//       useEffect(() => {
//          if(!localStorage.getItem('accessToken')) {
//         navigate('/')
//     }
//   }, [])
   
   const handleRegister = () => {
      console.log({ name, email, phone, password })
      axios.post('http://localhost:272/api/auth/signup', 
      {
         name: name,
         email: email,
         image: image,
         phone: phone,
         password: password
      })
         .then(res => {
         // if (!name || !email || !phone || !image ||  !password) {
         //        return res.sendStatus(400);
         //     }
            console.log(res.data)
            console.log(res.status)
               alert('Registration Successfull!')
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
           Full Name: <br /> 
          <FiUser /> {" "}
               <input
               onChange={(e) => {
                  setName(e.target.value)
               }}
               autocomplete="off"
               required={true}
               placeholder="Johnny Pusong"
               value={name}
               className="password-inputs"
               type="name" /> <br /> <br />
            
            Email: <br />
             <AiOutlineMail />  {" "}
             <input
               required={true}
               onChange={(e) => {
                  setEmail(e.target.value)
               }}
               autocomplete="off"
               placeholder="johndoe@gmail.com"
               value={email}
               className="password-inputs"
               type="email" /> <br /> <br />
            
            Phone: <br />
          <FiPhone />{" "}
             <input
               required={true}
               onChange={(e) => {
                  setPhone(e.target.value)
               }}
               autocomplete="off"
               value={phone}
               className="password-inputs"
               type="number"
                placeholder="(xxx) xxx-xxxx"
               /> <br /> <br />
               
                           Avatar: <br />
          <FiPhone />{" "}
             <input
               required={true}
               onChange={(e) => {
                  setImage(e.target.value)
               }}
               autocomplete="off"
               value={image}
               className="password-inputs"
               type="file"
               /> <br /> <br />
               
            
            Password: <br />
             <FiKey />{" "}
               <input 
                  onChange={(e) => {
                     setPassword(e.target.value)
                  }}
                  placeholder={'************'}
                  value={password}
               required={true}
               autocomplete="off"
                  type={showPassword ? "text" : "password"}
                  className="password-inputs" /> {' '}
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