import { setDate } from "date-fns";
import { useState, useEffect } from "react";

import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from "react-icons/ai";

function Timeout() {
   const navigate = useNavigate('');

   const [ name, setName ] = useState('');
   const [ date, setDate ] = useState('');
   const [ time, setTime ] = useState('');

   const AddTimeout = () => {
      axios.post('http://localhost:272/api/user/timeout', {
         name: name,
         time: time,
         date: date
      })
      .then(result => {
         console.log(result.data)
         alert('TIMEOUT')
      }).catch(error => {
         console.log(error)
         alert('TIMEOUT ERROR')
      })
   }

   return(<>
   
      <>
         <a href="/home" alt="" class="link linkedin">
            <AiOutlineArrowLeft size="40px" 
                  onMouseOver={({target})=>target.style.color="#000"}
            />
         </a>
      </>    
            <h1 className="center" style={{ fontFamily: 'Kaushan Script', marginTop: '10px', marginBottom: '10px'}}> Timeout </h1>
         
            <div className="outcard">
               Name:
                <br />
                  <input
                     onChange={(e) => {
                        setName(e.target.value)
                     }}
                     value={name}
                     className="inputs"
                     type="text  " /> <br /> <br />
               Date:
                <br />
                  <input
                     onChange={(e) => {
                        setDate(e.target.value)
                     }}
                     value={date}
                     className="inputs"
                     type="date" /> <br /> <br />
                     
               Time:
                <br />
                  <input
                     onChange={(e) => {
                        setTime(e.target.value)
                     }}
                     value={time}
                     className="inputs"
                     type="time" /> <br /> <br />
               
               <button onClick={AddTimeout}> OUT </button>
            </div>
            {/* <Link to={'/timein'} 
               style={{ 
                  marginTop: '5px', 
                  textAlign: 'center', 
                  display: 'block' }}> TIMEIN </Link> */}
         </>
   );
}

export default Timeout;