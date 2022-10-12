import axios from "axios";
import React, { useState, useEffect } from "react";


function Reports() {
    const [data, setData] = useState([])
    
    useEffect(() => {
      axios.get('http://localhost:272/api/user/timesheets')
          .then(res => {
            console.log(res.data)
            setData(res?.data?.data)
          })
          .catch(err => {
              alert('Something went wong')
          })
    }, [])
  
  return (
    <div>
        TABLE USERS: 
        <table>
          <tr>
            <th> Name </th>
            <th> Start Time </th>
            <th> End Time </th>
            <th> Total Time </th>
          </tr>
          
          {
            data.length > 0 &&
            data.map((item) => {
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.mail}</td>
                    <td>{item.phone}</td>
                  </tr>
                )
              
            })
          }
        </table>
    </div>
  )
}

export default Reports;