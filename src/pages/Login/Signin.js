import axios from 'axios';
import React, { useState }from 'react'
import { useNavigate, Link } from "react-router-dom";

import '../../styles/signin.css';

// import logo from '../../logo.svg';

function Signin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false);
  const [validate, setValidate] = useState({});
  const [showPassword, setShowPassword] = useState(false);

 // console.log({ email, password })

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleLogin = (e) => {
    console.log({ email, password })
     axios.post('http://localhost:272/api/auth/signin', {
        email: email,
        password: password
     })
      .then(result =>  {
        console.log(result.status)
        console.log(result.accessToken)
        console.log(result.data)
        alert('SUCCESS')
        // navigate('/dashboard');
       navigate("/dashboard", { replace: true });
      })
      .catch(error => {
        alert('ERROR')
        console.log(error)
      })
  }
  
    return (
      <div className="wrapper">
          {/* <img src={logo} className="logo" alt="Business view - Reports" /> */}
          <form className="form-container" onSubmit={handleLogin}>
            <div className="form-content">

              <h3 className="form-title">LOGIN</h3>
                <h6 className="form-subtitle">Not Yet A Member?<Link to="/register">Register</Link></h6>

                <div className="input-field">
                  {/* <label htmlFor="email">Email address</label> */}
                    <input
                       type="email"
                       label="Enter a valid email"
                       placeholder="john123@gmail.com"
                        variant="outlined"
                        required
                        value={email} 
                        onChange={handleEmail}
                   />
                </div>
                
                <div className="input-field">
                  {/* <label htmlFor="password">Password</label> */}
                    <input
                       placeholder="**********"
                       fullWidth
                    type={password}
                       label="Password"
                       variant="outlined"
                        required
                        value={password} 
                        onChange={handlePassword}
                      />
                </div>

                    <p className="forgot-password">
                        <a href="forgot">Forgot password?</a>
                    </p>

                    <button type="submit" className="primary"
                      onClick={handleLogin}
                    >
                        Submit
                    </button>
              </div>
            </form>
      </div>
    );
}

export default Signin;