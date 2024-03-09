import React from "react";
import { Table, TableContainer, Paper } from "@mui/material";
import DataTableBody from "./DataTableBody";
import DataTableHead from "./DataTableHead";
import { Columns, Row } from "../../types";

type DataTableProps = {
  data: Row[];
  columns: Columns;
  loading?: boolean;
  onRowClick?: (row: any) => void;
};

export default function DataTable(dataTableProps: DataTableProps) {
  const { data, columns } = dataTableProps;

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 700, tableLayout: "auto" }}
        aria-label="customized table"
      >
        <DataTableHead columns={columns} />

        <DataTableBody data={data} columns={columns} />
      </Table>
    </TableContainer>
  );
}
