import React, { Component } from 'react'

import '../../styles/timesheet.css';

class Table extends Component {
   constructor(props) {
      super(props) 
      this.state = { 
         timesheet: [
              {
        image: "../../assets/user1.png",
        name: "Jezekiel Isip",
        start_time: "07:15:12 AM",     
        end_time: "07:15:12 PM",
        total_time: "8 hrs"
    },
    {
        image: "../../assets/user2.png",
        name: "Jezekiel Isip",
        start_time: "07:15:12 AM",     
        end_time: "07:15:12 PM",
        total_time: "8 hrs"
    },
    {
        image: "../../assets/user3.png",
        name: "Jezekiel Isip",
        start_time: "07:15:12 AM",     
        end_time: "07:15:12 PM",
        total_time: "8 hrs"
    },
    {
        image: '../../assets/user4.png',
        name: "Jezekiel Isip",
        start_time: "07:15:12 AM",     
        end_time: "07:15:12 PM",
        total_time: "8 hrs"
    },
    {
        image: "../../assets/user5.png",
        name: "Jezekiel Isip",
        start_time: "07:15:12 AM",     
        end_time: "07:15:12 PM",
        total_time: "8 hrs"
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
         const { image, name, start_time, end_time, total_time } = timesheet 
         return (
            <tr key={image}>
               <td>{image}</td>
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