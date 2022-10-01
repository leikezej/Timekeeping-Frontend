import React, { useState, useEffect } from "react";

import MaterialTable from "material-table";

function App() {
  const [data, setData] = useState([]);
  const columns = [
    {
      title: "ID",
      field: "id",
      cellStyle: {
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap",
        display: "block"
      }
    },
    { title: "Name", field: "address.street" },
    { title: "Email", field: "email" },
    { title: "Phone", field: "phone" },
  ];
  useEffect(() => {
    fetch("http://localhost:272/api/auth/users")
      .then((resp) => resp.json())
      .then((resp) => {
        setData(resp);
      });
  }, []);

  return (
    <div className="App">
      <h1 align="center">React-App</h1>
      <h4 align="center">Material Table</h4>
      <MaterialTable title="Employee Data" data={data} columns={columns} />
    </div>
  );
}

export default App;