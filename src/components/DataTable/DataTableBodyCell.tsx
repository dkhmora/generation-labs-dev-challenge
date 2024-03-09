import { Box, IconButton, TableCell, TextField } from "@mui/material";
import React from "react";
import CustomSelect from "../CustomSelect";
import {
  ButtonColumn,
  ColumnKeys,
  Row,
  SelectColumn,
  SelectColumnKeys,
  TextColumn,
} from "../../types";
import AddNoteImage from "../../assets/note_add.svg";
import DeleteImage from "../../assets/delete.svg";
import DeleteImageHover from "../../assets/delete_hover.svg";
import CustomIconButton from "../CustomIconButton";
import CustomTextField from "../CustomTextField";

type DataTableBodyCellProps = {
  row: Row;
  column: SelectColumn | ButtonColumn | TextColumn;
  columnKey: ColumnKeys | "id";
};

const renderField = (
  column: SelectColumn | ButtonColumn | TextColumn,
  columnKey: ColumnKeys,
  row: Row
) => {
  const { fieldType, label } = column;

  let content = null;

  if (fieldType === "select" && "items" in column) {
    content = (
      <CustomSelect
        value={row[columnKey as SelectColumnKeys]}
        items={column.items}
        placeHolder={label}
        onChange={() => {}}
      />
    );
  } else if (fieldType === "button/notes") {
    content = (
      <CustomIconButton
        icon={<img src={AddNoteImage} alt="Add Note" />}
        onClick={() => {}}
      />
    );
  } else if (fieldType === "button/delete") {
    content = (
      <CustomIconButton
        icon={<img src={DeleteImage} alt="Delete" />}
        hoverIcon={<img src={DeleteImageHover} alt="Delete" />}
        onClick={() => {}}
      />
    );
  } else if (fieldType === "text") {
    content = (
      <CustomTextField
        value={row[columnKey as SelectColumnKeys]}
        onChange={() => {}}
      />
    );
  } else {
    content = row[label as SelectColumnKeys];
  }

  return <Box>{content}</Box>;
};

export default function DataTableBodyCell(
  dataTableBodyCellProps: DataTableBodyCellProps
) {
  const { columnKey, row, column } = dataTableBodyCellProps;

  if (columnKey !== "id") {
    return (
      <TableCell
        component="th"
        scope="row"
        sx={{ borderBottom: "none", minWidth: 100 }}
      >
        {renderField(column, columnKey, row)}
      </TableCell>
    );
  }

  return null;
}
