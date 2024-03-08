import { TableBody, TableCell, TableRow } from "@mui/material";
import React from "react";
import CustomSelect from "../CustomSelect";
import { Columns, Rows, SelectColumn } from "../../types";

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
              const { fieldType, label } = columns[key as keyof Columns];
              return (
                <TableCell
                  key={key}
                  component="th"
                  scope="row"
                  sx={{ borderBottom: "none" }}
                >
                  {fieldType === "select" ? (
                    <CustomSelect
                      placeHolder={label}
                      items={
                        (columns[key as keyof Columns] as SelectColumn).items
                      }
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
