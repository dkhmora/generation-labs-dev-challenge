import { TextField, TextFieldProps, styled } from "@mui/material";
import React from "react";

const StyledTextField = styled(TextField)(({ theme }) => ({
  borderRadius: 4,
  "& .MuiFilledInput-root": {
    backgroundColor: "#F0F0F0",
    borderRadius: "8px",
  },
  "& .MuiFilledInput-input": {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 8,
    paddingRight: 8,
    height: "31px",
    fontSize: "14px",
    fontWeight: 400,
    color: "#1F1F1F",
  },
  "& .MuiFilledInput-underline:before": {
    display: "none",
  },
  "& .MuiFilledInput-underline:after": {
    display: "none",
  },
}));

export default function CustomTextField(customTextFieldProps: TextFieldProps) {
  const { value, onChange, placeholder, ...props } = customTextFieldProps;

  return (
    <StyledTextField
      variant="filled"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      sx={{
        minWidth: "100px",
      }}
      {...props}
    />
  );
}
