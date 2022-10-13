// import React, { useState, useEffect } from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import '../../styles/register.css';

import { AiOutlineMail } from "react-icons/ai";
import { FiEye, FiEyeOff, FiKey, FiPhone, FiUser, FiFacebook, FiGithub, FiLinkedin  } from "react-icons/fi";

function Register() {
   const navigate = useNavigate('');

   const [ showPassword, setShowPassword ] = useState(false);
   const changeIcon = showPassword === true ? false : true;
      
   const initialValues = { name: "", email: "", phone: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);   
      
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  
   const togglePassword = () => {
    setShowPassword(!showPassword);
   };
   
     useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };
   
   return (
      <div className='container'>
              {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}
      
            <form onSubmit={handleSubmit}>
                  <h1 className="center" style={{ fontFamily: 'Kaushan Script', marginTop: '50px'}}> REGISTER </h1>
               <Link to={'/'} style={{  textAlign: 'center', color: '#000', display: 'block' }}> Login Here</Link>
         <br />
                     
         <div className="outcard">
           Full Name: <br /> 
          <FiUser /> {" "}
               <input
               // onChange={(e) => {
               //    setName(e.target.value)
               // }}
               // value={name}
               value={formValues.name}
              onChange={handleChange}
               required
               placeholder="Johnny Pusong"
               className="password-inputs"
               type="name" /> 
                <p>{formErrors.name}</p>
               <br /> <br />
            
            Email: <br />
             <AiOutlineMail />  {" "}
             <input
               required
               // onChange={(e) => {
               //    setEmail(e.target.value)
               // }}
               // value={email}
               value={formValues.email}
              onChange={handleChange}
               placeholder="johndoe@gmail.com"
               className="password-inputs"
               type="email" />
               <p>{formErrors.email}</p>
               <br /> <br />
            
            Phone: <br />
          <FiPhone />{" "}
             <input
               required
               // onChange={(e) => {
               //    setPhone(e.target.value)
               // }}
               // value={phone}
               value={formValues.phone}
              onChange={handleChange}
               className="password-inputs"
               type="number"
                placeholder="(xxx) xxx-xxxx"
               /> 
               <p>{formErrors.phone}</p>
               <br /> <br />
            
            Password: <br />
             <FiKey />{" "}
               <input 
                  // onChange={(e) => {
                  //    setPassword(e.target.value)
                  // }}
                  // value={password}
                  value={formValues.password}
                  onChange={handleChange}
                  placeholder={'************'}
                  required
                  type={showPassword ? "text" : "password"}
                  className="password-inputs" /> {' '}
               <span
                    onClick={() => {
                       togglePassword(changeIcon);
                    }}
                 >
                    {changeIcon ? <FiEye /> : <FiEyeOff />}
                 </span>
                  <p>{formErrors.password}</p>
                  <br /> <br />
                    <input type="file" name="sampleFile" />
               <button className="btns"> Register </button>
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
            </form>
      </div>
   )
}


export default Register;

 