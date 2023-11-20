import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { Checkbox, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "./AdventureTable.css";

export default function AdventureTable({
  //@ts-ignore
  currentAdventures,
  //@ts-ignore
  setCurrentAdventures,
}) {
  const rows = currentAdventures;
  const [selected, setSelected] = useState<number[]>([]);
  const isSelected = (id: number) => selected.indexOf(id) !== -1;
  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };
  function convertDate(str: string) {
    var date = new Date(str),
      month = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), month, day].join("/");
  }
  const handleRemove = (event: React.MouseEvent<unknown>) => {
    selected.forEach(async (element) => {
      console.log(element);
      await fetch("/remove-adventure/" + element);
      const fetchData = async () => {
        await fetch("/get-adventures")
          .then((data) => data.json())
          .then((data) => {
            setCurrentAdventures(data["response"]);
            console.log(data["response"]);
          });
      };
      fetchData().catch(console.error);
      setSelected([]);
    });
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="left-cell">
              <IconButton
                disabled={selected ? false : true}
                aria-label="delete"
                onClick={handleRemove}
              >
                <DeleteIcon />
              </IconButton>
            </TableCell>
            <TableCell>
              <h2>Adventure name</h2>
            </TableCell>
            <TableCell align="right" className="right-cell">
              <h2>Date added</h2>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            //@ts-ignore
            rows.map((row, index) => {
              const isItemSelected = isSelected(row.id);
              const labelId = `adventures-${index}`;
              return (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  selected={isItemSelected}
                >
                  <TableCell className="left-cell">
                    <Checkbox
                      color="primary"
                      checked={isItemSelected}
                      inputProps={{
                        "aria-labelledby": labelId,
                      }}
                      onClick={(event) => {
                        handleClick(event, row.id);
                      }}
                    />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right" className="right-cell">
                    {convertDate(row.date)}
                  </TableCell>
                </TableRow>
              );
            })
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
