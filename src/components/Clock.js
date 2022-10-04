import React from 'react';
var FontAwesome = require('react-fontawesome');



export class Clock extends React.Component {
    constructor() {
        super();

        var today = new Date(),
             date = 
                  today.getFullYear() + '-' + 
                  (today.getMonth() + 1) + '-' + today.getDate();

        // var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        
            const formatAMPM = (date) => {
                let hours = date.getHours();
                let minutes = date.getMinutes();
                let ampm = hours >= 12 ? 'pm' : 'am';
                hours = hours % 12;
                hours = hours ? hours : 12;
                minutes = minutes.toString().padStart(2, '0');
                let strTime = hours + ':' + minutes + ' ' + ampm;
                return strTime;
            }
                console.log(formatAMPM(new Date(2022, 1, 1)));

        var dateTime = date+' '+time;
        
        
        this.state = {
            date: date,
            time: time,
            dateTime: dateTime
        };
    }

    render() {
        return (
            <div className='date'>
                <FontAwesome name='calendar' /> {" "}
                {this.state.date}
                {" "}
                {" "}
                <FontAwesome name='clock' /> {" "}
                {this.state.time}
            </div>
        );
    }
}

export default Clock;


var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
 
console.log(dateTime)