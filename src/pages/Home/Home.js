import { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';

function Home() {
   const navigate = useNavigate()

   useEffect(() => {
      const token = localStorage.getItem('TOKEN')
       if(!token){
         navigate('/signin')
       }
   }, [])
   
   return(
      <div>
         Home
      </div>
   );
}

export default Home;