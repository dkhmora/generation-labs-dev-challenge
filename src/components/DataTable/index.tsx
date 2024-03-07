import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

type DataTableProps = {
  data: any[];
  columns: any[];
  loading?: boolean;
  onRowClick?: (row: any) => void;
};

export default function DataTable(dataTableProps: DataTableProps) {
  const { data, columns } = dataTableProps;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.id} {...column.props}>
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              {Object.keys(row).map((key) => {
                if (key !== "id") {
                  return (
                    <TableCell key={key} component="th" scope="row">
                      {row[key]}
                    </TableCell>
                  );
                }
                return null;
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
