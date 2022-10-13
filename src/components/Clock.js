import React from 'react';
// import logo from './logo.svg';
import '../styles/datetime.css';
var FontAwesome = require('react-fontawesome');

class Datetime extends React.Component {
  constructor() {
    super();
    
    var today = new Date(),
        date = 
            today.getFullYear() + '-' + 
            (today.getMonth() + 1) + '-' + today.getDate();

    this.state = { currentTime: null, currentDay: null, currentDate: date }
    this.daysArray = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  }

  componentWillMount() {
    this.getCurrentTime();
  }
  
  componentWillMount() {
    this.getCurrentDate();
  }
  
  getCurrentDate = () => {
    var today = new Date(),
            date = 
                today.getFullYear() + '-' + 
                (today.getMonth() + 1) + '-' + today.getDate();

    // var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  }

  getCurrentTime = () => {
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let am_pm = 'pm';

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    if (hour > 12) {
      hour = hour - 12;
    }

    if (hour == 0) {
      hour = 12;
    }

    if (new Date().getHours() < 12) {
      am_pm = 'am';
    }

    this.setState({ currentTime: hour + ':' + minutes + ':' + seconds + ' ' + am_pm });

    this.daysArray.map((item, key) => {
      if (key == new Date().getDay()) {
        this.setState({ currentDay: item.toUpperCase() });
      }
    })
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.getCurrentTime();
    }, 1000);
  }
  render() {

    return (
      <>
        <div>
          <FontAwesome name='calendar' /> {" "}
          {[this.state.currentDate, (this.state.currentDay)]} {" "}
            {" "}
            {" "}
            {" "}
            {" "}
            {" "}
        <FontAwesome name='clock' /> {" "}
          {this.state.currentTime}
        </div>
      </>
    );
  }
}
export default Datetime;