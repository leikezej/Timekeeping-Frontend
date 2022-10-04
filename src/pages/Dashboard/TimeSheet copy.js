import React, { Component } from 'react'

import '../../styles/timesheet.css';

import user1 from '../../assets/user1.png';
import user2 from '../../assets/user2.png';
import user3 from '../../assets/user3.png';
import user4 from '../../assets/user4.png';
import user5 from '../../assets/user5.png';

class Table extends Component {
   constructor(props) {
      super(props) 
      this.state = { 
         students: [
            { id: 1, avatar: user1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
            { id: 2, avatar: user2, name: 'Ali', age: 19, email: 'ali@email.com' },
            { id: 3, avatar: user3, name: 'Saad', age: 16, email: 'saad@email.com' },
            { id: 4, avatar: user4, name: 'Asad', age: 25, email: 'asad@email.com' },
            { id: 5, avatar: user5, name: 'Asad', age: 25, email: 'asad@email.com' }
         ]
      }
   }
   
      renderTableHeader() {
      let header = Object.keys(this.state.students[0])
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }

   renderTableData() {
      return this.state.students.map((student, index) => {
         const { id, avatar, name, age, email } = student 
         return (
            <tr key={id}>
               <td>{id}</td>
               <td>{avatar}</td>
               <td>{name}</td>
               <td>{age}</td>
               <td>{email}</td>
            </tr>
         )
      })
   }

   render() {
      return (
         <div>
            <h1 id='title'>Employee Timesheets</h1>
            <table id='students'>
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