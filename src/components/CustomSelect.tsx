import React, { useState } from "react";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Popover from "@mui/material/Popover";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import CustomTextField from "./CustomTextField"; // Assuming this is your custom styled TextField
import { CustomSelectItem } from "../types";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const CustomPopover = styled(Popover)(() => ({
  ".MuiPaper-root": {
    width: 300,
    marginTop: "4px",
    borderRadius: "8px",
    boxShadow: "none",
    overflowY: "auto",
    backgroundColor: "transparent",
  },
}));

type CustomSelectPropsType = {
  items: CustomSelectItem[];
  placeholder: string;
  onChange: (value: string) => void;
  value: string;
  search?: boolean;
};

export default function CustomSelect(customSelectProps: CustomSelectPropsType) {
  const { items, placeholder, onChange, value, search } = customSelectProps;
  const [anchorEl, setAnchorEl] = useState<
    (EventTarget & HTMLButtonElement) | null
  >(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [customValue, setCustomValue] = useState("");

  const handleClose = () => {
    setAnchorEl(null);
    setSearchTerm("");
    setCustomValue("");
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleConfirmCustomValue = () => {
    onChange(customValue);
    handleClose();
  };

  const handleCustomChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomValue(event.target.value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSelect = (value: string) => {
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
          display: "block",
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
          paddingLeft: "8px",
          paddingRight: "8px",
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
        <KeyboardArrowDownIcon
          sx={{
            width: "16px",
            height: "16px",
            marginTop: "4px",
            marginBottom: "4px",
            marginLeft: "8px",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
          style={{ color: "#1F1F1F" }}
        />
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
        sx={{ backgroundColor: "transparent" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            borderWidth: "0px",
            borderRadius: "8px",
          }}
        >
          {search && (
            <Box
              sx={{
                pt: 1,
                px: 1,
                backgroundColor: "background.paper",
                borderTopRightRadius: "8px",
                borderTopLeftRadius: "8px",
                borderLeftWidth: "1px",
                borderRightWidth: "1px",
                borderTopWidth: "1px",
              }}
            >
              <CustomTextField
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
                fullWidth
                margin="dense"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon sx={{ color: "#BFBFBF" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{ mt: 0.5 }}
              />
            </Box>
          )}

          <Box
            sx={{
              overflowX: "hidden",
              overflowY: "auto",
              flexGrow: 1,
              backgroundColor: "background.paper",
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
              borderWidth: "1px",
              borderTopWidth: search ? "0px" : "1px",
              borderTopRightRadius: search ? "0px" : "8px",
              borderTopLeftRadius: search ? "0px" : "8px",
              borderBottomLeftRadius: "8px",
              borderBottomRightRadius: "8px",
            }}
          >
            <List>
              {filteredItems.map((item) => (
                <MenuItem
                  key={item.value}
                  onClick={() => handleSelect(item.value)}
                  sx={{ paddingLeft: 1, paddingRight: 1 }}
                >
                  <span
                    style={{
                      backgroundColor: item.color || "transparent",
                      color: item.textColor || "#1F1F1F",
                      borderRadius: "8px",
                      display: "inline-block",
                      padding: item.color
                        ? "4px 8px 4px 8px"
                        : "0px 0px 0px 0px",
                      fontSize: "14px",
                    }}
                  >
                    {item.value}
                  </span>
                </MenuItem>
              ))}
            </List>
          </Box>

          {search && (
            <Box
              sx={{
                px: 1,
                py: 1,
                backgroundColor: "background.paper",
                mt: "4px",
                borderRadius: "8px",
                borderWidth: "1px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <CustomTextField
                placeholder="Customized"
                value={customValue}
                onChange={handleCustomChange}
                fullWidth
                margin="dense"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon sx={{ color: "#BFBFBF" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{ mt: 0.5 }}
              />

              <Button
                sx={{
                  textTransform: "none",
                  borderRadius: 6,
                  fontSize: "12px",
                  color: "#905E12",
                }}
                onClick={handleConfirmCustomValue}
              >
                Confirm
              </Button>
            </Box>
          )}
        </Box>
      </CustomPopover>
    </div>
  );
}
