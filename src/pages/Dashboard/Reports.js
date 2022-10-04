// import "../../styles/reports.css";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { withStyles, makeStyles } from "@material-ui/core/styles";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";

// const StyledTableCell = withStyles((theme) => ({
//   head: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   body: {
//     fontSize: 14,
//   },
// }))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//   root: {
//     "&:nth-of-type(odd)": {
//       backgroundColor: theme.palette.action.hover,
//     },
//   },
// }))(TableRow);

// const useStyles = makeStyles({
//   table: {
//     minWidth: 700,
//   },
// });

// const Reports = () => {
//   const classes = useStyles();
//   const [product, setProduct] = useState([]);
//   const [search, setSearch] = useState("");

//   const getProductData = async () => {
//     try {
//       const data = await axios.get(
//         "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
//       );
//       console.log(data.data);
//       setProduct(data.data);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   useEffect(() => {
//     getProductData();
//   }, []);
//   return (
//     <div className="App">
//       <h1>Lets code tamil</h1>
//       <input
//         type="text"
//         placeholder="Search here"
//         onChange={(e) => {
//           setSearch(e.target.value);
//         }}
//       />
//       <TableContainer component={Paper}>
//         <Table className={classes.table} aria-label="customized table">
//           <TableHead>
//             <TableRow>
//               <StyledTableCell>Product Name</StyledTableCell>
//               <StyledTableCell align="right">Product Price</StyledTableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {product
//               .filter((item) => {
//                 if (search == "") {
//                   return item;
//                 } else if (
//                   item.name.toLowerCase().includes(search.toLowerCase())
//                 ) {
//                   return item;
//                 }
//               })
//               .map((item) => {
//                 return (
//                   <StyledTableRow key={item.id}>
//                     <StyledTableCell component="th" scope="row">
//                       {item.name}
//                     </StyledTableCell>
//                     <StyledTableCell align="right">
//                       {item.price}
//                     </StyledTableCell>
//                   </StyledTableRow>
//                 );
//               })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default Reports;