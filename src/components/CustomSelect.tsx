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
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "left",
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "left",
  },
};

const CustomFilledInput = styled(FilledInput)(() => ({
  "& .MuiFilledInput-input": {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
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
                color: textColor ? textColor : "#1F1F1F",
              }}
            />
          }
          placeholder={placeHolder}
          MenuProps={{
            ...MenuProps,
            sx: {
              ".MuiMenuItem-root": {
                fontSize: "14px",
                fontWeight: 400,
                color: "#1F1F1F",
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
              },
            },
          }}
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
              <span
                style={{
                  backgroundColor: item.color || "transparent",
                  color: item.textColor || "#1F1F1F",
                  borderRadius: "4px",
                  display: "inline-block",
                  padding: "4px 8px 4px 8px",
                }}
              >
                {item.value}
              </span>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
