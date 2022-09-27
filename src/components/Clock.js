import { setDate } from "date-fns";
import { useState } from "react";

import '../../styles/clock.css';

// import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
   const navigate = useNavigate('');

   // const [ name, setName ] = useState('');
   // const [ date, setDate ] = useState('');
   // const [ time, setTime ] = useState('');

   let time = new Date().toLocaleTimeString();
   const [ currentTime, setCurrentTime] = useState(time);
   
   const updateTime = () => {
      let time = new Date().toLocaleDateString();
      setCurrentTime(time);
   }
   
   setInterval(updateTime, 1000);

   // const AddTimein = () => {
   //    axios.post('http://localhost:272/api/user/timein', {
   //       name: name,
   //       time: time,
   //       date: date
   //    })
   //    .then(result => {
   //       console.log(result.data)
   //       alert('TIMEIN')
   //    }).catch(error => {
   //       console.log(error)
   //       alert('TIMEIN ERROR')
   //    })
   // }

   return(
         // <>
         //    <h1 className="center"> Timein </h1>
         
         //    <div className="outcard">
         //       Name
         //          <input
         //             onChange={(e) => {
         //                setName(e.target.value)
         //             }}
         //             value={name}
         //             className="inputs"
         //             type="text  " /> <br /> <br />
         //       Date
         //          <input
         //             onChange={(e) => {
         //                setDate(e.target.value)
         //             }}
         //             value={date}
         //             className="inputs"
         //             type="date" /> <br /> <br />
                     
         //       Time
         //          <input
         //             onChange={(e) => {
         //                setTime(e.target.value)
         //             }}
         //             value={time}
         //             className="inputs"
         //             type="time" /> <br /> <br />
               
         //       <button onClick={AddTimein}> IN </button>
         //    </div>
         //    <Link to={'/timeout'} style={{ marginTop: '5px', textAlign: 'center', display: 'block' }}> TIMEOUT</Link>
         // </>
         
      <div className="clock">
         <h1>{currentTime}</h1>
         {/* <>
            Date
               <input type='date' />
         </>
         <>
            Time
               <input type='time' />
         </>
         
            <button> Timein </button> */}
      </div>
   );
}

export default Home;