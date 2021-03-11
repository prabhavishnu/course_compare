import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./tableStyles.css";
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
// function validURL(str) {
//   var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
//     '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
//     '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
//     '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
//     '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
//     '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
//   return !!pattern.test(str);
// }

export default function CustomizedTables({ tableData }) {
  const classes = useStyles();
  // const TableData=this.props
  console.log(tableData);
  const rows = tableData.rows;
  const columns = tableData.columns;

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>

              {Array(columns - 1)
                .fill()
                .map((number, i) => (
                  <StyledTableCell align="center">
                    {row.type === "links" && (
                      <a href={row[`col_${i + 2}`]}>View</a>
                    )}
                    {row.type === "icon" && row[`col_${i + 2}`] && (
                      <i
                        class="fa fa-check"
                        style={{ color: "green", fontSize: "28px" }}
                      ></i>
                    )}
                    {row.type === "icon" && !row[`col_${i + 2}`] && (
                      <i
                        class="fa fa-times"
                        style={{ color: "red", fontSize: "28px" }}
                      ></i>
                    )}
                    {/* {row.type === "icon" && row[`col_${i + 2}`] && "True"}
                    {row.type === "icon" && !row[`col_${i + 2}`] && "False"} */}
                    {row.type === "text" && row[`col_${i + 2}`]}
                  </StyledTableCell>
                ))}
            </StyledTableRow>
          ))}
          <StyledTableRow key={100}>
            <StyledTableCell></StyledTableCell>
            {Array(columns - 1)
              .fill()
              .map((number, i) => (
                <StyledTableCell align="center">
                  <button className="Apply_button">Help Me Apply</button>
                </StyledTableCell>
              ))}
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
