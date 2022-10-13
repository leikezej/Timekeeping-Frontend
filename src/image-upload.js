import React, { useState } from "react";

function App() {
    const [fileData, setFileData] = useState();
    
    const fileChangeHandler = (e) => {
      setFileData(e.target.files[0]);
    };
    
    const onSubmitHandler = (e) => {
      e.preventDefault();
      
      const data = new FormData();
      
      data.append('image', fileData)
      
      fetch("http://localhost:5000/api/user/single-upload", {
        method: "POST",
        body: data,
      })
      .then((result) => {
        console.log("File Sent Success!");
      })
      .catch((err) => {
      console.log(err.message);
      });
    };
    
  return (
    <div className="App">
      <h1>React File Uploader</h1>
        <form onSubmit={onSubmitHandler}>
          <input type="file" onChange={fileChangeHandler} />
           <br />
           <br />
           
           <button type="submit">Submit file to Server</button>
        </form>
    </div>
  );
}

export default App;
