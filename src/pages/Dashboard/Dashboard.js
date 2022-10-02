import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
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
         <h1 className="center"> Dashboard </h1>
         
         <div>
            
            <button
               onClick={handleLogout}
            > LOGOUT </button>
         </div>
      </>
         
   );
}

export default Dashboard;