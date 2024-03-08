import { TableBody, TableCell, TableRow } from "@mui/material";
import React from "react";
import CustomSelect from "../CustomSelect";
import { Columns, Rows } from "../../types";

type dataTableBodyPropsType = {
  data: Rows[];
  columns: Columns;
};

export default function DataTableBody(
  dataTableBodyProps: dataTableBodyPropsType
) {
  const { data, columns } = dataTableBodyProps;

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
                  {columns[key as keyof Columns].fieldType === "select" ? (
                    <CustomSelect
                      placeHolder={columns[key as keyof Columns].label}
                    />
                  ) : (
                    row[key as keyof Rows]
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
