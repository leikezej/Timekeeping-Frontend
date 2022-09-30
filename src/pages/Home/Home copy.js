// import { useEffect } from "react";
// import { Link, useNavigate } from 'react-router-dom';

// function Home() {
//    const navigate = useNavigate()

//    useEffect(() => {
//       const token = localStorage.getItem('TOKEN')
//        if(!token){
//          navigate('/signin')
//        }
//    }, [])
   
//    return(
//       <div className="card">
//          <div> HOME </div>
         
//          <div>
//             <span> {localStorage.getItem('EMAIL')} </span>
            
//             <button
//                onClick={() => {
//                   localStorage.clear()
//                   navigate('/signin')
//                }}
//             > LOGOUT </button>
//          </div>
//       </div>
         
//    );
// }

// export default Home;