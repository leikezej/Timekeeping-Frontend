import { setDate } from "date-fns";
import { useState } from "react";

import '../styles/clock.css';

const Home = () => {
   let time = new Date().toLocaleTimeString();
   // let time = new Date().toLocaleTimeString("hh:mm:ss a");
   const [ currentTime, setCurrentTime] = useState(time);
   
   const updateTime = () => {
      let time = new Date().toLocaleDateString();
      setCurrentTime(time);
   }
   
   setInterval(updateTime, 1000);

   return(
      <div>
         <h1>{currentTime}</h1>
      </div>
   );
}

export default Home;