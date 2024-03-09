import React from "react";
import { Table, TableContainer, Paper, Button } from "@mui/material";
import DataTableBody from "./DataTableBody";
import DataTableHead from "./DataTableHead";
import { Columns, Row } from "../../types";

type DataTableProps = {
  data: Row[];
  columns: Columns;
  dataKey: string;
  loading?: boolean;
  onRowClick?: (row: any) => void;
};

export default function DataTable(dataTableProps: DataTableProps) {
  const { data, columns, dataKey } = dataTableProps;

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 700, width: "100%", tableLayout: "auto" }}
        aria-label="customized table"
      >
        <DataTableHead columns={columns} />

        <DataTableBody data={data} dataKey={dataKey} columns={columns} />
      </Table>

      <Button
        variant="text"
        sx={{
          color: "black",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 6,
          textTransform: "none",
          fontSize: "14px",
          fontWeight: 400,
          marginLeft: "10px",
        }}
      >
        + Add new
      </Button>
    </TableContainer>
  );
}
