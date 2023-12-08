import UpButton from "@/component/upButton/UpButton";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import styled from "styled-components";
export const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "black",
    color: "white",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "white",
  },

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const UpDateButtonStyled=styled(UpButton)`
  background-color: red;
`
export const UpdateCloseButtonStyled = styled(UpButton)`
  position: relative;
  bottom: 15px;
  left: 160px;
  background-color: red;
  &:hover {
    background-color: yellow;
  }
`;