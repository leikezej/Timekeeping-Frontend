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
  const [timeout, setTimeout] = useState([])

  const fetchData = async () => {
    const response = await fetch("http://localhost:272/api/user/timeout")
    const data = await response.json()
    setTimeout(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  
  return (
      <div>
      {<h3>TIMEOUT</h3>}
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">TIME</StyledTableCell>
            <StyledTableCell align="center">DATE</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {timeout.map((timeout) => (
            <StyledTableRow 
              key={timeout.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                {timeout.id}
              </StyledTableCell>
              <StyledTableCell align="center">{timeout.name}</StyledTableCell>
              <StyledTableCell align="center">{timeout.time}</StyledTableCell>
              <StyledTableCell align="center">{timeout.date}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
  );
}

export default AsyncAwait