import { IconButton, TableCell } from "@mui/material";
import React from "react";
import CustomSelect from "../CustomSelect";
import {
  ButtonColumn,
  ColumnKeys,
  Row,
  SelectColumn,
  SelectColumnKeys,
} from "../../types";
import AddNoteImage from "../../assets/note_add.svg";
import DeleteImage from "../../assets/delete.svg";

type DataTableBodyCellProps = {
  row: Row;
  column: SelectColumn | ButtonColumn;
  columnKey: ColumnKeys | "id";
};

const renderField = (
  column: SelectColumn | ButtonColumn,
  columnKey: ColumnKeys,
  row: Row
) => {
  const { fieldType, label, items } = column;

  if (fieldType === "select") {
    return (
      <CustomSelect
        value={row[columnKey as SelectColumnKeys]}
        items={items}
        placeHolder={label}
        onChange={() => {}}
      />
    );
  }

  if (fieldType === "button/notes") {
    return (
      <IconButton
        aria-label="favorite"
        onClick={() => console.log("Icon Button Clicked")}
      >
        <img src={AddNoteImage} alt="Add Note" />
      </IconButton>
    );
  }

  if (fieldType === "button/delete") {
    return (
      <IconButton
        aria-label="delete"
        onClick={() => console.log("Icon Button Clicked")}
      >
        <img src={DeleteImage} alt="Delete" />
      </IconButton>
    );
  }

  return row[label as SelectColumnKeys];
};

export default function DataTableBodyCell(
  dataTableBodyCellProps: DataTableBodyCellProps
) {
  const { columnKey, row, column } = dataTableBodyCellProps;

  if (columnKey !== "id") {
    return (
      <TableCell component="th" scope="row" sx={{ borderBottom: "none" }}>
        {renderField(column, columnKey, row)}
      </TableCell>
    );
  }

  return null;
}
