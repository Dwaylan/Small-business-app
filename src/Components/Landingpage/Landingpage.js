import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Nav from "../Nav";
import Maps from "../Maps";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

// function createData(name, description, hours, address, apicall) {
//   return {
//     name,
//     description,
//     hours,
//     address,
//     apicall,
//   };
// }

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.description}</TableCell>
        <TableCell align="right">{row.hours}</TableCell>
        <TableCell align="right">{row.address}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>{row.apicall}</Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

// const rows = [
//   createData(
//     "Lucy in Disguise",
//     "Enormous outpost offering costumes, vintage clothing, boas, masks, & wigs ",
//     "11am-7pm",
//     "1506 S Congress Ave, Austin, TX, 78704"
//   ),
//   createData(
//     "Black Star Co-op Pub and Brewery",
//     "A beer co-operative and brewpub with a no-tip policy",
//     "9-10",
//     "7020 Easy Wind Dr., Ste.100, Austin, TX"
//   ),
//   createData(
//     "Freestyle Language Center",
//     "A brand new language school aimed at adult learners",
//     "9-10",
//     "801 Rio Grande st, Austin, TX"
//   ),
//   createData(
//     "Esther's Follies",
//     "Comedy sketches, vegas style magic, and politcal satire ",
//     "3pm-9:30pm",
//     "525 E 6th St, Austin, TX 78701"
//   ),
// ];

// function CollapsibleTable() {
//   return (
//     <TableContainer component={Paper}>
//       <Nav />
//       <Table aria-label="collapsible table">
//         <TableHead>
//           <TableRow>
//             <TableCell />
//             <TableCell>Name</TableCell>
//             <TableCell align="right">Description</TableCell>
//             <TableCell align="right">Hours</TableCell>
//             <TableCell align="right">Address</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <Row key={row.name} row={row} />
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
const Landingpage = (props) => {
  return (
    <TableContainer component={Paper}>
      <Nav />
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Hours</TableCell>
            <TableCell align="right">Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.business.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Landingpage;
