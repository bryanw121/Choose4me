import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name: string, dateAdded: string) {
  return { name, dateAdded };
}

const rows = [
  createData("Go shopping at the mall", "01/02/2023"),
  createData("Go hiking", "10/21/2023"),
  createData("Eat at a restaurant", "02/04/2017"),
  createData("Go to the movies", "03/25/2019"),
  createData("Watch a movie at home", "06/17/2020"),
];

export default function AdventureTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <h2>Adventure name</h2>
            </TableCell>
            <TableCell align="right">
              <h2>Date added</h2>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.dateAdded}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
