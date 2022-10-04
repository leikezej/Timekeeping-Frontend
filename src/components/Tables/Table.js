import axios from "axios";
import React, { useState, useEffect } from "react";


function Table() {
    const [data, setData] = useState([])
    
    useEffect(() => {
      axios.get('http://localhost:272/api/auth/users')
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
            <th> ID </th>
            <th> EMAIL </th>
            <th> NAME </th>
            <th> PHONE </th>
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

export default Table;