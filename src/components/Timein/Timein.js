import { setDate } from "date-fns";
import { useState, useEffect } from "react";

import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from "react-icons/ai";

import '../../styles/timein.css';

function Timein() {

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

   return(
   <>
      <>
            <a href="/home" alt="" style={{ color: '#000'}}>
               <AiOutlineArrowLeft size="40px" 
                     onMouseOver={({target})=>target.style.color="#000"}
               />
            </a>
      </>
            <h1 className="center" style={{ fontFamily: 'Kaushan Script', marginTop: '10px', marginBottom: '10px'}}> Timein </h1>
         
            <div className="outcard" style={{ marginTop: '20px', marginBottom: '10px'}}>
               Name:
                <br />
                  <input
                     onChange={(e) => {
                        setName(e.target.value)
                     }}
                     focusBorderColor={'#c2c2c2'}
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
               
               <button icon="fa-solid  fa-arrow-right-to-bracket" onClick={AddTimein}> IN </button>
            </div>
            
            {/* <Link to={'/timeout'} 
               style={{ 
                  marginTop: '5px', 
                  textAlign: 'center', 
                  display: 'block' }}> TIMEOUT </Link> */}
         </>
   );
}

export default Timein;