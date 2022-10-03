import React, { useState } from "react";
import axios from 'axios'
 
const EmailSend = () => {
  
  const [msg,setMsg] = useState('');
  const [user, setUser] = useState({
    to: "",
    subject: "",
    description: ""
  });
 
  const { to, subject, description} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
 
  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:272/email-send/",user)
   .then(response => setMsg(response.data.respMesg));
  };
  return (
    <div className="container">
         <h3 className="text-center text-success mb-2 mt-4">Email Send using React and Node </h3>
         <h6 className="text-secondary text-center mb-4 mt-1">By Improve Programming Logic</h6>
      <div class="row">  
      
       <div className="col-sm-4 mx-auto shadow p-5">
        <h4 className="text-center mb-2">Send E Mail </h4>
           <p class="mb-3 mt-2" style={{color:"green",marginLeft:"57px"}}><b>{msg}</b></p>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="To"
              name="to"
              onChange={onInputChange}
              value={user.to}
            />
          </div>
          <div className="form-group  mb-4 ">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Subject"
              name="subject"
              onChange={onInputChange}
              value={subject}
            />
          </div>
          <div className="form-group  mb-4">
            <textarea
              type="text"
              className="form-control form-control-lg"
              placeholder="Description"
              name="description"
              onChange={onInputChange}
              value={description}
            />
          </div>
          
          <button onClick={onSubmit} className="btn btn-primary btn-block " style={{marginLeft:"100px"}}>Send Mail</button>
       
      </div>
    </div>
  </div>  
  );
};
 
export default EmailSend;