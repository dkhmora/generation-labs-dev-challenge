import { TableBody, TableCell, TableRow } from "@mui/material";
import React from "react";
import CustomSelect from "../CustomSelect";

export default function DataTableBody(dataTableBodyProps: {
  data: any[];
  columnFieldTypes: object;
}) {
  const { data, columnFieldTypes } = dataTableBodyProps;

  return (
    <TableBody>
      {data.map((row) => (
        <TableRow key={row.id}>
          {Object.keys(row).map((key: string) => {
            if (key !== "id") {
              return (
                <TableCell
                  key={key}
                  component="th"
                  scope="row"
                  sx={{ borderBottom: "none" }}
                >
                  {columnFieldTypes[key as keyof typeof columnFieldTypes] ===
                  "select" ? (
                    <CustomSelect />
                  ) : (
                    row[key]
                  )}
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
