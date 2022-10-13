import { useEffect } from "react";

import Navbar from "../../components/Navbar/Navbar";


import Clock from "../../components/Clock";

const Home = () => {
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