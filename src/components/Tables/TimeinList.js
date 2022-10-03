import React, { useEffect, useState } from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import { BsClockHistory, BsCalendarCheck } from "react-icons/bs";
import { RiFolderUserLine, RiUser2Line } from "react-icons/ri";

import  '../../styles/timein.css';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  //th
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontWeight: 600,
    fontSize: 17,
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
  const [timein, setTimein] = useState([])

  const fetchData = async () => {
    const response = await fetch("http://localhost:272/api/user/timein")
    const data = await response.json()
    setTimein(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  
  return (
      <div>
      {<h3 className="center">TIMEIN</h3>}
  <TableContainer component={Paper}>
      {/* <Table sx={{ width: '100%' }} size="small" aria-label="a dense table"> */}
      <Table sx={{ minWidth: 620 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center"><RiFolderUserLine style={{ marginBottom: '4px'}} />{" "}ID</StyledTableCell>
            <StyledTableCell align="center"><RiUser2Line style={{ marginBottom: '4px'}} />{" "}Name</StyledTableCell>
            <StyledTableCell align="center"><BsClockHistory style={{ marginBottom: '4px'}} />{" "}Time</StyledTableCell>
            <StyledTableCell align="center"><BsCalendarCheck style={{ marginBottom: '4px'}} />{" "}Date</StyledTableCell>
            <StyledTableCell align="center"><RiFolderUserLine style={{ marginBottom: '4px'}} />{" "}Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {timein.map((timein) => (
            <StyledTableRow 
              key={timein.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0  } }}
              // sx={{ '&:first-child td, &:first-child th': { backgroundColor: '#123' } }} // second top
              // sx={{ '&:last-child th, &:last-child tr': { backgroundColor: '#123' } }}
            >
              <StyledTableCell component="th" scope="row">
                {timein.id}
              </StyledTableCell>
              <StyledTableCell align="center">{timein.name}</StyledTableCell>
              <StyledTableCell align="center">{timein.time}</StyledTableCell>
              <StyledTableCell align="center">{timein.date}</StyledTableCell>
              <StyledTableCell><p style={{ backgroundColor: 'green'}}>{timein.status}</p></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
  );
}

export default AsyncAwait