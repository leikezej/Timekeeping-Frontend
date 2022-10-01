// import { setDate } from "date-fns";
// import { useState } from "react";

// import { Link, useNavigate } from 'react-router-dom';

// import { Col, Row } from "reactstrap";
import { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import SideNavBar from "../../components/SideNavbar/SideNavbar";

import Timein from "../../components/Tables/TimeinList";
import Timeout from "../../components/Tables/TimeoutList";
import Table2 from "../../components/Tables/Table2";

import Clock from "../../components/Clock";
import Date from "../../components/Date";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const styles = {
    contentDiv: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    contentMargin: {
      width: "100vw",
      // marginLeft: "10px",
      // height: "100vw"
    },
    table1: {
      marginBottom: 20
    },
    table: {
      // marginBottom: 20,
      // flexDirection: "row",
      // alignItems: "center",
      // justifyContent: "center",
      // display: "flex",
      // textAlign: "center"
    },
    Clock: {
      marginTop: 20,
      marginBottom: 40
    }
  };
  
  const navigate = useNavigate()
  
  useEffect(() => {
    if(!localStorage.getItem('accessToken')) {
        navigate('/home')
    }
  }, [])

   return(
      <>
       <Navbar />
         <div styles={styles.contentDiv}>
            <br />
            <center><Clock /></center>
            {/* <center><Date /></center> */}
            <div styles={styles.contentMargin}>
               
               <div style={styles.table}>
                  <Timein />
                  <Timeout />
                </div>
              
              <div style={styles.table1}>
                <h5>EMPLOYEES LIST</h5>
                  <Table2 />
              </div>
            </div>
         </div>
      
      </>
   
   );
}

export default Home;