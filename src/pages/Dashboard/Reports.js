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
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontWeight: 600,
    fontSize: 17,
    textAlign: 'center'
  },

  [`&.${tableCellClasses.body}`]: {
    // backgroundColor: theme.palette.common.white,
    backgroundColor: "#2222",
    color: theme.palette.common.black,
    fontWeight: 550,
    fontFamily: 'Roboto Condensed',
    fontSize: 14,
    width: 20,
    textAlign: 'center'
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    // backgroundColor: theme.palette.action.hover,
    backgroundColor: '#ccc',
  },
  // hide last border
  // '&:last-child td, &:last-child th': {
    // border: 0,
  // },
}));

const AsyncAwait = () => {
  const [ timeSheet, setTimeSheets ] = useState([])

  const fetchData = async () => {
    const response = await fetch("http://localhost:272/api/user/timesheets")
    const data = await response.json()
    setTimeSheets(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  
  return ( 
   <>
         <h2 className="center">TIMESHEET</h2>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="left">Start_Time</StyledTableCell>
            <StyledTableCell align="left">End_Time</StyledTableCell>
            <StyledTableCell align="left">Total_Time</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {timeSheet.map((timeSheet) => (
            <StyledTableRow 
              key={timeSheet.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                {timeSheet.name}
              </StyledTableCell>
              <StyledTableCell align="left">{timeSheet.time_start}</StyledTableCell>
              <StyledTableCell align="left">{timeSheet.time_end}</StyledTableCell>
              <StyledTableCell align="left">{timeSheet.time_total}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   </>
  );
}

export default AsyncAwait
