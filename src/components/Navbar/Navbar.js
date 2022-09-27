import React , {useEffect} from 'react'
import '../../styles/navbar.css';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
import {
  NavbarBrand,
} from "reactstrap";
const Navbar = () => {

  function animation(){
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px", 
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click","li",function(e){
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px", 
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }

  useEffect(() => {
    
    animation();
    $(window).on('resize', function(){
      setTimeout(function(){ animation(); }, 500);
    });
    
  }, []);

  return (
  <nav className="navbar navbar-expand-lg navbar-mainbg">
    
      <NavbarBrand href="/" style={{ color: '#fff', margin: '5px', padding: '5px'}} exact>
        Bugtech Time
      </NavbarBrand>
      
      <button 
        className="navbar-toggler"
        onClick={ function(){
          setTimeout(function(){ animation(); });
        }}
        type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
      </button>
 
      <div 
        className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
            
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            
            <li className="nav-item active">
              <NavLink className="nav-link" to="/" exact>
                <i 
                className="fas fa-tachometer-alt fa-spin">
                </i>Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/timein" exact>
                <i 
                className="fa fa-clock-o" aria-hidden="true">
                </i>Timein
              </NavLink> 
            </li>
            
            
            <li className="nav-item">
              <NavLink className="nav-link" to="/timeout" exact>
                <i 
                className="fa fa-clock-o" aria-hidden="true">
                </i>Timeout
              </NavLink> 
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/scheduler" exact>
                <i 
                className="far fa-clone">
                </i>Reports
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/profile" exact>
                <i 
                className="fa fa-user" aria-hidden="true">
                </i>Profile
              </NavLink>
            </li>

       {/*      <li className="nav-item">
              <NavLink className="nav-link" to="/contact" exact>
                <i 
                className="far fa-copy">
                </i>Contact Us
              </NavLink>
            </li> */}

        </ul>
      </div>
  </nav>
  )
}
export default Navbar;