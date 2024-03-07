import { TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";

export default function DataTableHead(dataTableHeadProps: { columns: any[] }) {
  const { columns } = dataTableHeadProps;

  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <TableCell key={column.id} {...column.props}>
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
