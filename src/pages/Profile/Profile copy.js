import React from "react";
// import NavBar from "../../components/Navbar/Navbar";
import profile1 from "./profile1.jpg";
import profile2 from "./profile2.jpg";

const Profile = () => {
   return(
      <>
      {/* <NavBar /> */}
         <div className="container emp-profile">
            <form method="">
               <div className="row">
                  <div className="col-md-4">
                     <img src={profile1} alt="profile" srcset="" />
                  </div>
                  
                  <div className="col-md-6">
                     <div className="profile-head">
                        <h5>Jezekiel Isip</h5>
                        <h6>Web Developer</h6>
                        <p className="profile-rating mt-3 mb-5"> Rankings: <span> 6/10</span></p>
                     
                        <ul className="nav nav-tabs" role="tablist">
                           <li className="nav-item">
                           <a className="nav-link active" id="home-tab" data-toggle="tab" href="/home" role="tab"> About </a>
                           </li>
                           <li className="nav-item">
                              <a className="nav-link active" id="profile-tab" data-toggle="tab" href="/profile" role="tab"> Timelin </a> 
                           </li>
                        </ul>
                     
                     </div>
                  </div>
                  
                  <div className="col-md-2">
                     <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile" />
                  </div>
                  
                  <div className="row">
                     <div className="col-md-4">
                        <div className="profile-work">
                           <p> Work Link </p>
                           <a href="www.youtube.com">Youtube</a>
                        </div>
                     </div>
                  </div>
               </div>
            </form>
         </div>
      </>
         
   );
}

export default Profile;