import { Table, TableContainer, Paper } from "@mui/material";
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
    <TableContainer
      component={Paper}
      elevation={0}
      style={{ maxHeight: 500 }}
      sx={{
        "&::-webkit-scrollbar": {
          width: "8px",
          height: "8px",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#BFBFBF",
          borderRadius: "3.5px",
          border: "2px solid #fff",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#777",
        },
      }}
    >
      <Table
        sx={{
          minWidth: 700,
          width: "100%",
          tableLayout: "auto",
        }}
        aria-label="customized table"
        stickyHeader
      >
        <DataTableHead columns={columns} />

        <DataTableBody data={data} dataKey={dataKey} columns={columns} />
      </Table>
    </TableContainer>
  );
}
