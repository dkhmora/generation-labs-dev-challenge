import React, { useState } from "react";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Popover from "@mui/material/Popover";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import CustomTextField from "./CustomTextField"; // Assuming this is your custom styled TextField
import { CustomSelectItem } from "../types";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const CustomPopover = styled(Popover)(({ theme }) => ({
  ".MuiPaper-root": {
    maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    width: 300,
    marginTop: "4px",
    borderRadius: "8px",
    border: "1px solid #D9D9D9",
    boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
    overflowY: "auto",
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
  },
}));

type CustomSelectPropsType = {
  items: CustomSelectItem[];
  placeholder: string;
  onChange: (value: string) => void;
  value: string;
};

export default function CustomSelect(customSelectProps: CustomSelectPropsType) {
  const { items, placeholder, onChange, value } = customSelectProps;
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSelect = (value) => {
    onChange(value);
    handleClose();
  };

  const { color, textColor } = items.find((item) => item.value === value) || {
    color: null,
    textColor: null,
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const filteredItems = items.filter((item) =>
    item.value.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Button
        aria-describedby={id}
        variant="outlined"
        onClick={handleClick}
        sx={{
          display: "block", // Ensure the button is a block element to fill the container
          backgroundColor: color ? color : "#F0F0F0",
          color: textColor ? textColor : !value ? "#8C8C8C" : "#1F1F1F",
          textTransform: "none",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          textAlign: "left",
          justifyContent: "start",
          borderRadius: "8px",
          borderColor: "transparent",
          fontSize: "14px",
          fontWeight: 400,
          paddingLeft: "6px",
          paddingRight: "6px",
          paddingBottom: "3.25px",
          paddingTop: "3.25px",
          borderWidth: "0px",
          maxWidth: "250px",
          "&:hover": {
            backgroundColor: color ? color : "#F0F0F0",
            borderWidth: "0px",
          },
          "&:active": {
            backgroundColor: color ? color : "#F0F0F0",
            borderWidth: "0px",
          },
          "&:focus": {
            backgroundColor: color ? color : "#F0F0F0",
            borderWidth: "0px",
          },
        }}
      >
        {value ? value : placeholder}
      </Button>
      <CustomPopover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <div className="px-4">
          <CustomTextField
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            fullWidth
            margin="dense"
          />
        </div>

        <List>
          {filteredItems.map((item) => (
            <MenuItem key={item.value} onClick={() => handleSelect(item.value)}>
              <span
                style={{
                  backgroundColor: item.color || "transparent",
                  color: item.textColor || "#1F1F1F",
                  borderRadius: "8px",
                  display: "inline-block",
                  padding: "4px 8px 4px 8px",
                  fontSize: "14px",
                }}
              >
                {item.value}
              </span>
            </MenuItem>
          ))}
        </List>
      </CustomPopover>
    </div>
  );
}
