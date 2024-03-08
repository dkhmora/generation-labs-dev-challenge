import { TableBody, TableCell, TableRow } from "@mui/material";
import React from "react";
import CustomSelect from "../CustomSelect";
import { Columns } from "../../types";

type dataTableBodyPropsType = {
  data: any[];
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
