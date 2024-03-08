import { TableCell } from "@mui/material";
import React from "react";
import CustomSelect from "../CustomSelect";
import {
  ColumnKeys,
  Columns,
  Rows,
  SelectColumn,
  SelectColumnKeys,
} from "../../types";

type DataTableBodyCellProps = {
  columnKey: ColumnKeys | "id";
  row: Rows;
  columns: Columns;
};

export default function DataTableBodyCell(
  dataTableBodyCellProps: DataTableBodyCellProps
) {
  const { columnKey, row, columns } = dataTableBodyCellProps;

  if (columnKey !== "id") {
    const { fieldType, label } = columns[columnKey as keyof Columns];
    return (
      <TableCell
        key={columnKey}
        component="th"
        scope="row"
        sx={{ borderBottom: "none" }}
      >
        {fieldType === "select" ? (
          <CustomSelect
            placeHolder={label}
            items={(columns[columnKey as keyof Columns] as SelectColumn).items}
            value={row[columnKey as keyof Rows] as SelectColumnKeys}
          />
        ) : (
          row[columnKey as keyof Rows]
        )}
      </TableCell>
    );
  }

  return null;
}
