import React from 'react';

import '../styles/clock.css';
class Clock extends React.Component {
  state={
    curDT : new Date().toLocaleString(),
  }
  render(){
    return (
      <div className="Clock">
        <h1>{this.state.curDT}</h1>
      </div>
    );
  }
}
export default Clock;