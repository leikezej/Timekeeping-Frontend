import { setDate } from "date-fns";
import { useState } from "react";

// import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import { Col, Row } from "reactstrap";
// import Sidebar from '../../components/Sidebar';

// import Timein from '../../components/Tables/Timein';
// import Timeout from '../../components/Tables/Timeout';
// import { Col, Row } from "reactstrap";

// import Navbar from "../../Navbar";
// import SideNavigation from "../../helpers/SideNavigation";
// import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar/Navbar";

// import Timein from "../../utils/Timein";
// import Timeout from "../../utils/Timeout";
import Timein from "../../components/Tables/Timein";
import Timeout from "../../components/Tables/Timeout";
import Table2 from "../../components/Table2";

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
    Timein: {
      marginBottom: 20
    },
    Clock: {
      marginBottom: 40
    }
  };

   return(
      <>
         <div styles={styles.contentDiv}>
            <div styles={styles.contentMargin}>
               
               <div style={styles.Timein}>
                  <Timein />
                </div>
               
               <div style={styles.Timein}>
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