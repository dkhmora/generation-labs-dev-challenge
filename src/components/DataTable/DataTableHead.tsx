import { TableCell, TableHead, TableRow } from "@mui/material";
import { Columns } from "../../types";

type dataTableHeadPropsType = {
  columns: Columns;
};

export default function DataTableHead(
  dataTableHeadProps: dataTableHeadPropsType
) {
  const { columns } = dataTableHeadProps;

  return (
    <TableHead>
      <TableRow>
        {Object.entries(columns).map(([key, { label, width }]) => (
          <TableCell
            key={key}
            sx={{
              borderBottom: "none",
              paddingBottom: 0,
              width,
            }}
          >
            <h5 className="text-sm font-medium text-[#8C8C8C]">{label}</h5>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
