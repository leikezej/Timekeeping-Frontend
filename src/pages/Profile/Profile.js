import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
              useEffect(() => {
    if(!localStorage.getItem('accessToken')) {
        navigate('/profile')
    }
  }, [])
   
   return(
      <>
         <h1 className="center"> PROFILE </h1>
         
         <div>
            
            <button
               onClick={handleLogout}
               // onClick={() => {
                  // localStorage.removeItem('accessToken')
                  // localStorage.removeItem('refreshToken')
                  // {handleLogout}
               // }}
            > LOGOUT </button>
            <br />
                        <button
               onClick={() => {
                  localStorage.setItem('arr', JSON.stringify([1, 2, 3, 4]))
                  localStorage.setItem('obj', { name: 'name1', email: 'email1', phone: 'phone1' })
               }}> Save </button>
            <br />
            
                        <button
                        onClick={() => {
                           const obj = localStorage.getItem('obj')
                           console.log((obj))
                        }}
            > GET </button>
   
   <br />
   <br />

         </div>
      </>
         
   );
}

export default Profile;