import React, { useState } from "react";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import { styled } from "@mui/material/styles";
import CustomTextField from "../CustomTextField"; // Assuming this is your custom styled TextField
import { CustomSelectItem } from "../../types";
import { Box, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SelectButton from "./SelectButton";
import SearchField from "./SearchField";
import SelectItemsList from "./SelectItemsList";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const CustomPopover = styled(Popover)(() => ({
  ".MuiPaper-root": {
    marginTop: "4px",
    minWidth: "150px",
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
  tooltipText: string;
};

export default function CustomSelect(customSelectProps: CustomSelectPropsType) {
  const { items, placeholder, onChange, value, search, tooltipText } =
    customSelectProps;
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

  const handleSelect = (value: string) => {
    onChange(value);
    handleClose();
  };

  const { color, textColor } = items.find((item) => item.value === value) || {
    color: undefined,
    textColor: undefined,
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const filteredItems = items.filter((item) =>
    item.value.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SelectButton
        open={open}
        placeholder={placeholder}
        value={value}
        onClick={handleClick}
        color={color}
        textColor={textColor}
        tooltipText={tooltipText}
      />

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
            maxHeight: ITEM_HEIGHT * 8 + ITEM_PADDING_TOP,
            height: "auto",
            borderWidth: "0px",
            borderRadius: "8px",
          }}
        >
          {search && (
            <SearchField
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
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
            <SelectItemsList items={filteredItems} onSelect={handleSelect} />
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
