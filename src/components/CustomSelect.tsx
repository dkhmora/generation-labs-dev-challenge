import * as React from "react";
import { Theme } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { CustomSelectItem } from "../types";
import { FilledInput } from "@mui/material";

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

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

type customSelectPropsType = {
  value: string;
  items: CustomSelectItem[];
  placeHolder: string;
  onChange: (event: SelectChangeEvent) => void;
};

export default function CustomSelect(customSelectProps: customSelectPropsType) {
  const { value, items, placeHolder, onChange } = customSelectProps;

  return (
    <div>
      <FormControl sx={{}}>
        <Select
          displayEmpty
          value={value}
          onChange={onChange}
          input={<FilledInput />}
          placeholder={placeHolder}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
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
