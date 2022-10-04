import axios from 'axios';
import React, { useState }from 'react'
import { useNavigate, Link } from "react-router-dom";
import {
	Container,
	Button,
	Grid,
	Paper,
	TextField,
  Alert,
	IconButton,
	InputAdornment,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import '../../styles/signup.css';

const Signup = () => {
  
  const navigate = useNavigate();
    const [ values, setValues ] = useState({
      name: "",
      email: "",
      phone: "",
      password: "",
      showPass: false,
    });

  const handleRegister = (e) => {
    e.preventDefault();
    axios 
        .post("http://localhost:272/api/auth/signup",  {
          name: values.name,
          email: values.email,
          phone: values.phone,
          password: values.password,
        })
        .then((response) => {
          console.log(response.data)
            alert('Successfully Loggedin')
          localStorage.setItem("token", response.data.token);
          navigate("/login");
        })
        // .catch((err) => console.error(err));
        .catch((err) => {
          console.log(err)
          console.log(err.response)
          alert(err.response.data.err.message)
        })
  };

  const handlePassVisibilty = () => {
    setValues({
      ...values,
      showPass: !values.showPass,
    });
  };
  
    return (
      <div className="wrapper">
          {/* <img src={logo} className="logo" alt="Business view - Reports" /> */}
          <form className="form-container" onSubmit={handleRegister}>
            <div className="form-content">

              <h3 className="form-title">REGISTER</h3>
                <h6 className="form-subtitle">Already A Member?<Link to="/login">Login</Link></h6>

                {/* NAME */}
                <div className="input-field">
                  {/* <label htmlFor="name">Fullname</label> */}
                    <input
                        type="name"
                        className="form-control mt-1"
                        placeholder="Fullname"
                        variant="outlined"
                        required
                        onChange={(e) => setValues({ ...values, name: e.target.value })}
                    />
                </div>

                {/* EMAIL */}
                <div className="input-field">
                  {/* <label htmlFor="email">Email address</label> */}
                    <input
                        type="email"
                        className="form-control mt-1"
                        placeholder="email"
                        variant="outlined"
                        required
                        onChange={(e) => setValues({ ...values, email: e.target.value })}
                    />
                </div>

                BIRTHDATE
                <div className="input-field">
                  {/* <label htmlFor="email">Email address</label> */}
                    <input
                        type="date"
                        className="form-control mt-1"
                        placeholder="birthdate"
                        variant="outlined"
                        required
                        onChange={(e) => setValues({ ...values, birthdate: e.target.value })}
                    />
                </div>

                GENDER
                <div className="input-field">
                  {/* <label htmlFor="email">Gender</label> */}
                    <input
                        type="gender"
                        className="form-control mt-1"
                        placeholder="gender"
                        variant="outlined"
                        required
                        onChange={(e) => setValues({ ...values, gender: e.target.value })}
                    />
                </div>


                {/* ADDRESS */}
                <div className="input-field">
                  {/* <label htmlFor="email">Address</label> */}
                    <input
                        type="address"
                        className="form-control mt-1"
                        placeholder="address"
                        variant="outlined"
                        required
                        onChange={(e) => setValues({ ...values, address: e.target.value })}
                    />
                </div>

                {/* PHONE */}
                <div className="input-field">
                    <input
                        // type="numpad"
                        type="text"
                        name="phone"
                        placeholder="(xxx) xxx-xxxx"
                        variant="outlined"
                        required
                        onChange={(e) => setValues({ ...values, phone: e.target.value })}
                    />
                </div>

              <div className="input-field">
                <PhoneInput
                  type="numpad"
                  placeholder="Enter phone number"
                  //country="PH"
                  country={'PH'}
                  //defaultCountry="PH"
                  defaultCountry={'PH'}
                  onChange={(e) => setValues({ ...values, phone: e.target.value })}
                  variant="outlined"
                  required
                  width="20"
                  // value={value}
                  // onChange={setValue}
                  />
              </div> 
                
                {/* PASSWORD */}
                <div className="input-field">
                  {/* <label htmlFor="password">Password</label> */}
                  <input
                      // type="password"
                      className="form-control mt-1"
                      placeholder="Enter password"
                      type={values.showPass ? "text" : "password"}
                      fullWidth
                      label="Password"
                      // placeholder="Password"
                      variant="outlined"
                      required
                      onChange={(e) => setValues({ ...values, pass: e.target.value })}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={handlePassVisibilty}
                              aria-label="toggle password"
                              edge="end"
                            >
                              {values.showPass ? <VisibilityOffIcon /> : <VisibilityIcon />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                </div>
                    <button type="submit" className="primary">
                        Submit
                    </button>
              </div>
            </form>
      </div>
    );
  }

export default Signup;