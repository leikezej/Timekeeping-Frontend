
import { Link, useNavigate } from 'react-router-dom';

import Navbar from "../../components/Navbar/Navbar";
import SideNavBar from "../../components/SideNavbar/SideNavbar";

import Timein from "../../components/Tables/Timein";
import Timeout from "../../components/Tables/Timeout";
import Table2 from "../../components/Table2";

import Clock from "../../components/Clock";

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
      marginBottom: 40
    }
  };

   return(
      <>
       <Navbar />
         <div styles={styles.contentDiv}>
          <Clock />
            <div styles={styles.contentMargin}>
               
               <div style={styles.table}>
                  <Timein />
                  <Timein />
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