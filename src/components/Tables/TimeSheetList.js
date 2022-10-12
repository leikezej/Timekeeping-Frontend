// import React, { useEffect, useState } from "react"
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { styled } from '@mui/material/styles';


// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   //th
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.grey,
//     color: theme.palette.common.white,
//     fontWeight: 800,
//     fontSize: 18,
//   },

//   [`&.${tableCellClasses.body}`]: {
//     backgroundColor: theme.palette.common.white,
//     color: theme.palette.common.black,
//     fontWeight: 600,
//     fontSize: 14,
//     width: 25,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // hide last border
//   // '&:last-child td, &:last-child th': {
//     // border: 0,
//   // },
// }));

// const AsyncAwait = () => {
//   const [users, setUsers] = useState([])

//   const fetchData = async () => {
//     const response = await fetch("http://localhost:272/api/user/timesheets")
//     const data = await response.json()
//     setUsers(data)
//   }

//   useEffect(() => {
//     fetchData()
//   }, [])

  
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>IMAGE</StyledTableCell>
//             <StyledTableCell>NAME</StyledTableCell>
//             <StyledTableCell align="left">START_TIME</StyledTableCell>
//             <StyledTableCell align="left">END_TIME</StyledTableCell>
//             <StyledTableCell align="left">TOTAL_TIME</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {timesheet.map((timesheet) => (
//             <StyledTableRow 
//               key={timesheet.image}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <StyledTableCell component="th" scope="row">
//                 {timesheet.image}
//               </StyledTableCell>
//               <StyledTableCell align="left">{timesheet.name}</StyledTableCell>
//               <StyledTableCell align="left">{timesheet.time_start}</StyledTableCell>
//               <StyledTableCell align="left">{timesheet.time_end}</StyledTableCell>
//               <StyledTableCell align="left">{timesheet.time_total}</StyledTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

// export default AsyncAwait