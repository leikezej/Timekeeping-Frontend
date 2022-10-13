import React, { Component } from 'react'

import '../../styles/timesheet.css';

class Table extends Component {
   constructor(props) {
      super(props) 
      this.state = { 
         timesheet: [
   {
      //   image: "../../assets/user1.png",
        name: "Jezekiel Isip",
        start_time: "07:15:12 AM",     
        end_time: "06:15:12 PM",
        total_time: "6.5 hrs"
    },
    {
      //   image: "../../assets/user2.png",
        name: "Jaybee Geli",
        start_time: "10:26:12 AM",     
        end_time: "09:33:12 PM",
        total_time: "11 hrs"
    },
    {
      //   image: "../../assets/user3.png",
        name: "Mark Steven Alba",
        start_time: "10:27:33 AM",     
        end_time: "11:36:22 PM",
        total_time: "12 hrs"
    },
    {
      //   image: '../../assets/user4.png',
        name: "Marty Pabello",
        start_time: "07:15:12 AM",     
        end_time: "08:33:56 PM",
        total_time: "9 hrs & 28 mns"
    },
    {
      //   image: "../../assets/user5.png",
        name: "Brix Vallespin",
        start_time: "03:00:22 PM",     
        end_time: "09:25:12 AM",
        total_time: "10 hrs & 12 mns"
    }
         ]
      }
   }
   
      renderTableHeader() {
      let header = Object.keys(this.state.timesheet[0])
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }

   renderTableData() {
      return this.state.timesheet.map((timesheet, index) => {
         const { name, start_time, end_time, total_time } = timesheet 
         return (
            <tr key={name}>
               <td>{name}</td>
               <td>{start_time}</td>
               <td>{end_time}</td>
               <td>{total_time}</td>
            </tr>
         )
      })
   }

   render() {
      return (
         <div>
            {/* <h1 id='title'>Employee Timesheets</h1> */}
            <table id='timesheet'>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
      )
   }
}

export default Table