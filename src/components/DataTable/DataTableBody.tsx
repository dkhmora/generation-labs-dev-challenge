import { TableBody, TableCell, TableRow } from "@mui/material";
import React from "react";

export default function DataTableBody(dataTableBodyProps: { data: any[] }) {
  const { data } = dataTableBodyProps;

  return (
    <TableBody>
      {data.map((row) => (
        <TableRow key={row.id}>
          {Object.keys(row).map((key) => {
            if (key !== "id") {
              return (
                <TableCell
                  key={key}
                  component="th"
                  scope="row"
                  sx={{ borderBottom: "none" }}
                >
                  {row[key]}
                </TableCell>
              );
            }
            return null;
          })}
        </TableRow>
      ))}
    </TableBody>
  );
}
