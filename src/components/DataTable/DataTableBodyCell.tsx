import { TableCell } from "@mui/material";
import React from "react";
import CustomSelect from "../CustomSelect";
import {
  ButtonColumn,
  ColumnKeys,
  Row,
  SelectColumn,
  SelectColumnKeys,
} from "../../types";

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
    return <button>Notes</button>;
  }

  if (fieldType === "button/delete") {
    return <button>Delete</button>;
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
