import { TableBody, TableRow } from "@mui/material";
import React from "react";
import { ColumnKeys, Columns, Row } from "../../types";
import DataTableBodyCell from "./DataTableBodyCell";

type dataTableBodyPropsType = {
  data: Row[];
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
              column={columns[key as ColumnKeys]}
            />
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
}
