import { TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";

export default function DataTableHead(dataTableHeadProps: { columns: any[] }) {
  const { columns } = dataTableHeadProps;

  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <TableCell
            key={column.id}
            sx={{ borderBottom: "none" }}
            {...column.props}
          >
            <h5 className="text-sm font-medium font-[#8C8C8C]">
              {column.label}
            </h5>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
