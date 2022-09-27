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
      {<h3>TIMEIN</h3>}
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 350 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">TIME</StyledTableCell>
            <StyledTableCell align="center">DATE</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {timein.map((timein) => (
            <StyledTableRow 
              key={timein.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                {timein.id}
              </StyledTableCell>
              <StyledTableCell align="center">{timein.name}</StyledTableCell>
              <StyledTableCell align="center">{timein.time}</StyledTableCell>
              <StyledTableCell align="center">{timein.date}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
  );
}

export default AsyncAwait