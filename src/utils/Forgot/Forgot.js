import axios from 'axios';
import React, { useState }from 'react'
import { useNavigate, Link } from "react-router-dom";

import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import './forgot.css';
//import logo from './logo.svg';

function Forgot() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleForgot = (e) => {
    console.log({ email })
     axios.post('http://localhost:8080/api/auth/forgot-password', {
        email: email,
     })
      .then(result =>  {
        console.log(result.status)
        console.log(result.accessToken)
        console.log(result.data)
        alert('SUCCESS')
//        navigate('/dashboard');
       // navigate("../success", { replace: true });
      })
      .catch(error => {
        alert('ERROR')
        console.log(error)
      })
  }
  

    return (
      <div className="wrapper">
          {/* <img src={logo} className="logo" alt="Business view - Reports" /> */}
          <form className="form-container" onSubmit={handleForgot}>
            <div className="form-content">

              <h5 className="form-title">Forgot Password?</h5>

                <div className="input-field">
                  <label htmlFor="email">Email address</label>
                    
                    <input
                      
                       type="email"
                       // label="Enter a valid email"
                       // placeholder="Enter email"
                        variant="outlined"
                        required
                        //onChange={(e) => setValues({ ...values, email: e.target.value })}
                        value={email} 
                        onChange={handleEmail}
                   />
                </div>


                    <button type="submit" className="primary"
                      onClick={handleForgot}
                    >
                        Reset
                    </button>
              </div>
            </form>
      </div>
    );
}

export default Forgot;