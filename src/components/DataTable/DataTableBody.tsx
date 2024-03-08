import { TableBody, TableRow } from "@mui/material";
import React from "react";
import { ColumnKeys, Columns, Rows } from "../../types";
import DataTableBodyCell from "./DataTableBodyCell";

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
          {Object.keys(row).map((key: string, index) => (
            <DataTableBodyCell
              key={`${key}-${index}`}
              columnKey={key as ColumnKeys}
              row={row}
              columns={columns}
            />
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
}
