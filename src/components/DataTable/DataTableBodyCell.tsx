import { Box, IconButton, TableCell, TextField } from "@mui/material";
import React, { useContext } from "react";
import CustomSelect from "../CustomSelect";
import {
  ButtonColumn,
  ColumnKeys,
  Row,
  SelectColumn,
  SelectColumnKeys,
  TextColumn,
} from "../../types";
import AddNoteImage from "../../assets/note_add.svg";
import DeleteImage from "../../assets/delete.svg";
import DeleteImageHover from "../../assets/delete_hover.svg";
import CustomIconButton from "../CustomIconButton";
import CustomTextField from "../CustomTextField";
import { ActionPlanDataContext } from "../ActionPlanDataContext";

type DataTableBodyCellProps = {
  row: Row;
  column: SelectColumn | ButtonColumn | TextColumn;
  columnKey: ColumnKeys | "id";
  rowIndex: number;
  dataKey: string;
};

const renderField = (
  column: SelectColumn | ButtonColumn | TextColumn,
  columnKey: ColumnKeys,
  row: Row,
  rowIndex: number,
  setData: (data: any) => void,
  dataKey: string
) => {
  const { fieldType, label } = column;
  const handleDataChange = (value: string) => {
    const updatedRow = { ...row, [columnKey]: value };

    setData((prevData: any) => {
      const prevSectionData = prevData[dataKey];
      prevSectionData[rowIndex] = updatedRow;

      return {
        ...prevData,
        [dataKey]: prevSectionData,
      };
    });
  };

  let content = null;

  if (fieldType === "select" && "items" in column) {
    content = (
      <CustomSelect
        value={row[columnKey as SelectColumnKeys]}
        items={column.items}
        placeHolder={label}
        onChange={(event) => handleDataChange(event.target.value)}
      />
    );
  } else if (fieldType === "button/notes") {
    content = (
      <CustomIconButton
        icon={<img src={AddNoteImage} alt="Add Note" />}
        onClick={() => {}}
      />
    );
  } else if (fieldType === "button/delete") {
    content = (
      <CustomIconButton
        icon={<img src={DeleteImage} alt="Delete" />}
        hoverIcon={<img src={DeleteImageHover} alt="Delete" />}
        onClick={() => {}}
      />
    );
  } else if (fieldType === "text") {
    content = (
      <CustomTextField
        value={row[columnKey as SelectColumnKeys]}
        onChange={(event) => handleDataChange(event.target.value)}
      />
    );
  } else {
    content = row[label as SelectColumnKeys];
  }

  return <Box>{content}</Box>;
};

export default function DataTableBodyCell(
  dataTableBodyCellProps: DataTableBodyCellProps
) {
  const { setData } = useContext(ActionPlanDataContext);
  const { columnKey, row, column, rowIndex, dataKey } = dataTableBodyCellProps;

  if (columnKey !== "id") {
    return (
      <TableCell
        component="th"
        scope="row"
        sx={{ borderBottom: "none", minWidth: 100 }}
      >
        {renderField(column, columnKey, row, rowIndex, setData, dataKey)}
      </TableCell>
    );
  }

  return null;
}
