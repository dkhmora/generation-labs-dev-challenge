import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { CustomSelectItem } from "../types";
import { FilledInput, InputLabel } from "@mui/material";
import styled from "@mui/material/styles/styled";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    sx: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 300,
      borderRadius: "8px",
      mt: 0.5,
      border: "1px solid #D9D9D9",
      boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
      overflowY: "auto",
      overflowX: "hidden",
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
        marginRight: "2px",
      },
      "&::-webkit-scrollbar-thumb:hover": {
        backgroundColor: "#777",
      },
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

const CustomKeyboardArrowDownIcon = (props) => (
  <KeyboardArrowDownIcon
    {...props}
    sx={{
      width: "16px",
      height: "16px",
      marginTop: "4px",
      marginBottom: "4px",
    }}
    style={{ color: "#1F1F1F" }}
  />
);

type CustomSelectPropsType = {
  value: string;
  items: CustomSelectItem[];
  placeHolder: string;
  onChange: (event: SelectChangeEvent) => void;
};

export default function CustomSelect(customSelectProps: CustomSelectPropsType) {
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
          value={value || ""}
          onChange={onChange}
          input={
            <CustomFilledInput
              disableUnderline
              style={{
                backgroundColor: color ? color : "",
                color: textColor ? textColor : "#1F1F1F",
                paddingRight: "8px",
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
          IconComponent={CustomKeyboardArrowDownIcon}
        >
          <MenuItem disabled value="">
            <span
              style={{
                color: "#8C8C8C",
                borderRadius: "8px",
                display: "inline-block",
                padding: "4px 8px 4px 8px",
              }}
            >
              <em>{placeHolder}</em>
            </span>
          </MenuItem>

          {items.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              <span
                style={{
                  backgroundColor: item.color || "transparent",
                  color: item.textColor || "#1F1F1F",
                  borderRadius: "8px",
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
