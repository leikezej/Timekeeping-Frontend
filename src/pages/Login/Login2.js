import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {

    const [user,setUser] = useState({
        Email: "",
        Password: ""
    });

    const handleChange = (e) =>{
        e.preventDefault();
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]:value
        })
    }
    console.log("This is Frontend:-",user);
    const login = () => {
         axios.post("http://localhost:272/api/auth/signin",user)
        .then(res => console.log(res))
    }

    return (
        <div>
            <div className="login">
            {console.log("USER",user)}
            <h1>TIMESHEET</h1>
            <h2>LOG IN</h2>
            <input type="text" name="Email" value={user.Email} placeholder="Enter user_id" onChange={handleChange} />
            <input type="password" name="Password" value={user.Password} placeholder="Enter Password" onChange={handleChange} />
            <div className="button" onClick={login}>Log In</div>
           </div>
        </div>
    )
}

export default Login;