import { setDate } from "date-fns";
import { useState, useEffect } from "react";

import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Timein() {
   const navigate = useNavigate('');

   const [ name, setName ] = useState('');
   const [ date, setDate ] = useState('');
   const [ time, setTime ] = useState('');

   const AddTimein = () => {
      axios.post('http://localhost:272/api/user/timein', {
         name: name,
         time: time,
         date: date
      })
      .then(result => {
         console.log(result.data)
         alert('TIMEIN')
      }).catch(error => {
         console.log(error)
         alert('TIMEIN ERROR')
      })
   }

   return(<>
            <h1 className="center"> Timein </h1>
         
            <div className="outcard">
               Name
                  <input
                     onChange={(e) => {
                        setName(e.target.value)
                     }}
                     value={name}
                     className="inputs"
                     type="text  " /> <br /> <br />
               Date
                  <input
                     onChange={(e) => {
                        setDate(e.target.value)
                     }}
                     value={date}
                     className="inputs"
                     type="date" /> <br /> <br />
                     
               Time
                  <input
                     onChange={(e) => {
                        setTime(e.target.value)
                     }}
                     value={time}
                     className="inputs"
                     type="time" /> <br /> <br />
               
               <button icon="fa-solid  fa-arrow-right-to-bracket" onClick={AddTimein}> IN </button>
            </div>
            
            <Link to={'/timeout'} 
               style={{ 
                  marginTop: '5px', 
                  textAlign: 'center', 
                  display: 'block' }}> TIMEOUT </Link>
         </>
   );
}

export default Timein;