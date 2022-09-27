import React, { useEffect, useState } from "react";
import './Clock.js';

// import Popup from "../utilities/Popup";

function App() {
  const tempo = new Date().toLocaleTimeString();
  const dia = new Date().toLocaleDateString();

  const [time, setTime] = useState(tempo);
  const [date, setDate] = useState(dia);
  const [show, setShow] = useState('false')

  function handleModal(){  
    this.setState({show:!this.state.show})  
  } 

  function getTime() {
    let time = new Date().toLocaleTimeString();
    setTime(time);
  }

  useEffect(() => {
    setInterval(getTime, 1000);
  }, []);

  return (
    <div>
      <h1>{time}</h1>
      <h1>{date}</h1>

      {/* <button onClick={()=>this.handleModal()} className="primary">Click To Open Modal</button>   */}
          {/* <Popup />  */}
          

      <div>
        <button type="submit" className="primary"
            // onClick={<Popup/}
          >
              Timein
        </button>

          <button type="submit" className="primary"
            // onClick={handleLogin}
          >
              Timeout
        </button>
      </div>


    

    </div>
  );
}

export default App;