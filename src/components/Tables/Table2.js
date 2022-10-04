import React, { useEffect, useState } from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  //th
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.grey,
    color: theme.palette.common.white,
    fontWeight: 800,
    fontSize: 18,
  },

  [`&.${tableCellClasses.body}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontWeight: 600,
    fontSize: 14,
    width: 25,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  // '&:last-child td, &:last-child th': {
    // border: 0,
  // },
}));

const AsyncAwait = () => {
  const [users, setUsers] = useState([])

  const fetchData = async () => {
    const response = await fetch("http://localhost:272/api/auth/users")
    const data = await response.json()
    setUsers(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="left">Emails</StyledTableCell>
            <StyledTableCell align="left">Phones</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <StyledTableRow 
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                {user.id}
              </StyledTableCell>
              <StyledTableCell align="left">{user.name}</StyledTableCell>
              <StyledTableCell align="left">{user.email}</StyledTableCell>
              <StyledTableCell align="left">{user.phone}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AsyncAwait


// import React, { useState } from "react"

// const ButtonClick = () => {
//   const [timein, setTimein] = useState([])

//   const fetchData = () => {
//     fetch("http://localhost:8080/api/user/timein")
//       .then(response => {
//         return response.json()
//       })
//       .then(data => {
//         setTimein(data)
//       })
//   }

//   return (
//     <div>
//       <button onClick={fetchData}>Fetch Users</button>
//       {timein.length > 0 && (
//         <ul>
//           {timein.map(user => (
//             <li key={timein.id}>
//               {timein.name}
//               {timein.time} 
//               {timein.date}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   )
// }

// export default ButtonClick