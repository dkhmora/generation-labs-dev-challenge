import * as React from "react";
import { Theme } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { CustomSelectItem } from "../types";
import { FilledInput } from "@mui/material";
import styled from "@mui/material/styles/styled";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const CustomFilledInput = styled(FilledInput)(() => ({
  "& .MuiFilledInput-input": {
    paddingTop: 6,
    paddingBottom: 6,
    fontSize: "14px",
    fontWeight: 400,
  },
  "& .MuiFilledInput-underline:before": {
    display: "none",
  },
  "& .MuiFilledInput-underline:after": {
    display: "none",
  },
}));

type customSelectPropsType = {
  value: string;
  items: CustomSelectItem[];
  placeHolder: string;
  onChange: (event: SelectChangeEvent) => void;
};

export default function CustomSelect(customSelectProps: customSelectPropsType) {
  const { value, items, placeHolder, onChange } = customSelectProps;
  const { color, textColor } = items.find((item) => item.value === value) || {
    color: null,
    textColor: null,
  };

  return (
    <div>
      <FormControl>
        <Select
          displayEmpty
          value={value}
          onChange={onChange}
          input={
            <CustomFilledInput
              disableUnderline
              style={{
                backgroundColor: color ? color : "",
                color: textColor ? textColor : "",
              }}
            />
          }
          placeholder={placeHolder}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
          sx={{
            borderRadius: 2,
            "&:focus": {
              borderRadius: 2,
            },
          }}
        >
          {items.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
