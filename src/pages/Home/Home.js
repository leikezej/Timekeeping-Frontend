import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import Timein from "../../components/Tables/TimeinList";
import Timeout from "../../components/Tables/TimeoutList";
import Table2 from "../../components/Tables/Table2";
// import TimeSheetList from "../../components/Tables/TimeSheetList";
import TimeSheet from "../Dashboard/TimeSheet";

import Navbar from "../../components/Navbar/Navbar";


import Clock from "../../components/Clock";

const Home = () => {
   const navigate = useNavigate()

    const styles = {
    contentDiv: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    contentMargin: {
      // width: "100vw",
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
      justifyContent: "space-evenly",
      display: "flex",
      flex: 1,
      width: '100%'
      // textAlign: "center"
    },
    Clock: {
      marginTop: 20,
      marginBottom: 40
    }
  };
  
     useEffect(() => {
      const token = localStorage.getItem('token')
       if(!token){
         navigate('/home')
       }
   }, [])

  
   return(
      <>
         <div styles={styles.contentDiv}>
              <Navbar />
            <br />
            <br />
            
            <center><Clock /></center>
            
            <div styles={styles.contentMargin}>
               <div style={styles.table}>
                  <Timein />
                  <Timeout />
                </div>
            <br />
            <br />
            
              <div style={styles.table1}>
                {/* <h5>EMPLOYEES LIST</h5> */}
                  <TimeSheet />
                  {/* <TimeSheetList /> */}
                  <br />
                  <Table2 />
              </div>
              
            </div>
         </div>
      </>
   );
}

export default Home;