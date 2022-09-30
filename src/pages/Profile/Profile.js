import { useEffect } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Profile() {
    const navigate = useNavigate('');


   const handleLogout = () => {
       axios.post('http://localhost:272/api/auth/signout', 
      )
         .then(res => {
            console.log(res.status)
              alert('Logout Success')
            navigate("/", { replace: true });
         
     
         }).catch(error => {
            alert('You Are Not Loggedin')
            console.log(error)
         })
   }
   
   return(
      <>
         <h1 className="center"> PROFILE </h1>
         
         <div>
            
            <button
               onClick={handleLogout}
            > LOGOUT </button>
         </div>
      </>
         
   );
}

export default Profile;