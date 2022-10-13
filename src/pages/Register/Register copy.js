// import React, { useState, useEffect } from 'react';
import React, { useState } from 'react';
import axios from '../../api/axios';
import { Link, useNavigate } from 'react-router-dom';
import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import '../../styles/register.css';

import { AiOutlineMail } from "react-icons/ai";
import { FiEye, FiEyeOff, FiKey, FiPhone, FiUser, FiFacebook, FiGithub, FiLinkedin  } from "react-icons/fi";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/auth/signup';

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();
    
    const navigate = useNavigate('');

   const [ name, setName ] = useState('');
   const [ validName, setValidName ] = useState(false);
   const [ nameFocus, setNameFocus ] = useState(false);
   
   const [ email, setEmail ] = useState('');
   const [ validEmail, setValidEmail ] = useState(false);
   const [ emailFocus, setEmailFocus ] = useState(false);
   
   const [ phone, setPhone ] = useState('');
   const [ validPhone, setValidPhone ] = useState(false);
   const [ phoneFocus, setPhoneFocus ] = useState(false);
   
   const [ password, setPassword ] = useState('');
   const [ validPassword, setValidPassword ] = useState(false);
   const [ passwordFocus, setPasswordFocus ] = useState(false);
   
   const [errMsg, setErrMsg] = useState('');
   const [success, setSuccess] = useState(false);
   
   const [ showPassword, setShowPassword ] = useState(false);
   const changeIcon = showPassword === true ? false : true;
      
   const togglePassword = () => {
    setShowPassword(!showPassword);
   };
   
   useEffect(() => {
        userRef.current.focus();
    }, [])
    
   useEffect(() => {
        setValidName(USER_REGEX.test(name));
    }, [name])
    
   useEffect(() => {
        setValidEmail(USER_REGEX.test(email));
    }, [email])

   useEffect(() => {
        setValidPhone(PWD_REGEX.test(phone));
    }, [phone])
    
   useEffect(() => {
        setValidPassword(PWD_REGEX.test(password));
    }, [password])

   useEffect(() => {
        setErrMsg('');
    }, [name, email, phone, password])
    
   const handleSubmit = async (e) => {
   e.preventDefault();
   const v1 = USER_REGEX.test(name, email);
   const v2 = PWD_REGEX.test(password, phone);
      if (!v1 || !v2) {
         setErrMsg("Invalid Entry");
         return;
   }
      try {
      const response = await axios.post(REGISTER_URL,
            JSON.stringify({ name, email, phone, password }),
            {
               headers: { 'Content-Type': 'application/json' },
               withCredentials: true
            }
      );
         console.log(response?.data);
         console.log(response?.accessToken);
         console.log(response?.refreshToken);
         console.log(JSON.stringify(response))
         setSuccess(true);
         setName('');
         setEmail('');
         setPhone('');
         setPassword('');
      } catch (err) {
         if (!err?.response) {
               setErrMsg('No Server Response');
         } else if (err.response?.status === 409) {
               setErrMsg('Username Taken');
         } else {
               setErrMsg('Registration Failed')
         }
         errRef.current.focus();
      }
   }

   return (
      <>
         {success ? (
            <section>
               <h1> Success! </h1>
               <p>
                  <a href="/"> Login </a>
               </p>
            </section>
          ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Register</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">
                            Fullname:
                            <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="text"
                            id="name"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setNameFocus(true)}
                            onBlur={() => setNameFocus(false)}
                        />
                        <p id="uidnote" className={nameFocus && name && !validName ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed NOT ALLOWED!.
                        </p>
                        
                        
                        <label htmlFor="email">
                            Email:
                            <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validEmail || !user ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="email"
                            id="email"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            aria-invalid={validEmail ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                        />
                        <p id="uidnote" className={emailFocus && name && !validEmail ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must be a valid Email Address!.
                        </p>
                        
                        <label htmlFor="phone">
                            Phone:
                            <FontAwesomeIcon icon={faCheck} className={validPhone ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPhone || !phone ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="phone"
                            id="phone"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setPhone(e.target.value)}
                            value={phone}
                            required
                            aria-invalid={validPhone ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setPhoneFocus(true)}
                            onBlur={() => setPhoneFocus(false)}
                        />
                        <p id="uidnote" className={phoneFocus && name && !validPhone ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must be a valid Email Address!.
                        </p>
                        
                        <label htmlFor="password">
                            Password:
                            <FontAwesomeIcon icon={faCheck} className={validPassword ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPassword || !password ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                            aria-invalid={validPassword ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPasswordFocus(true)}
                            onBlur={() => setPasswordFocus(false)}
                        />
                        <p id="pwdnote" className={passwordFocus && !validPassword ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>

                        <button disabled={!validName || !validEmail || !validPhone || !validPassword ? true : false}>Sign Up</button>
                    
                    </form>
                    <p>
                        Already registered?<br />
                        <span className="line">
                            <a href="/">Sign In</a>
                        </span>
                    </p>
                </section>
            )}
        </>
    )
}

export default Register;