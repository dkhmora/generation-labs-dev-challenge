import { TableBody, TableRow } from "@mui/material";
import React from "react";
import { ColumnKeys, Columns, Row } from "../../types";
import DataTableBodyCell from "./DataTableBodyCell";

type dataTableBodyPropsType = {
  data: Row[];
  columns: Columns;
  dataKey: string;
};

export default function DataTableBody(
  dataTableBodyProps: dataTableBodyPropsType
) {
  const { data, columns, dataKey } = dataTableBodyProps;

  return (
    <TableBody>
      {data.map((row, rowIndex) => (
        <TableRow key={row.id}>
          {Object.keys(columns).map((key: string, index: number) => (
            <DataTableBodyCell
              key={`${key}-${index}`}
              columnKey={key as ColumnKeys}
              dataKey={dataKey}
              row={row}
              column={columns[key as ColumnKeys]}
              rowIndex={rowIndex}
            />
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
}
