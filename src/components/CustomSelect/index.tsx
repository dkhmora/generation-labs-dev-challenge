import React, { useState } from "react";
import { CustomSelectItem } from "../../types";
import SelectButton from "./SelectButton";
import SelectMenu from "./SelectMenu";

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
    <>
      <SelectButton
        open={open}
        placeholder={placeholder}
        value={value}
        onClick={handleClick}
        color={color}
        textColor={textColor}
        tooltipText={tooltipText}
      />

      <SelectMenu
        open={open}
        anchorEl={anchorEl}
        id={id}
        handleClose={handleClose}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        customValue={customValue}
        handleConfirmCustomValue={handleConfirmCustomValue}
        handleCustomChange={handleCustomChange}
        filteredItems={filteredItems}
        handleSelect={handleSelect}
        search={search}
      />
    </>
  );
}
