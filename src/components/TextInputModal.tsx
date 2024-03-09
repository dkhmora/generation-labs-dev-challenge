import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { TextareaAutosize, styled } from "@mui/material";
import { blue, grey } from "@mui/material/colors";

const Textarea = styled(TextareaAutosize)(
  ({ theme }) => `
  box-sizing: border-box;
  width: 320px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 8px;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${
    theme.palette.mode === "dark" ? grey[900] : grey[50]
  };

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${
      theme.palette.mode === "dark" ? blue[600] : blue[200]
    };
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`
);

type TextInputModalProps = {
  open: boolean;
  text: string;
  onChangeText: (text: string) => void;
  clickSave?: () => void;
  clickCancel?: () => void;
};

export default function TextInputModal(
  textInputModalProps: TextInputModalProps
) {
  const { open, text, clickSave, clickCancel, onChangeText } =
    textInputModalProps;

  return (
    <Dialog
      open={open}
      onClose={clickCancel}
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "20px",
        },
      }}
    >
      <DialogTitle>Add notes</DialogTitle>

      <DialogContent>
        <Textarea
          autoFocus
          minRows={3}
          value={text}
          onChange={(event) => onChangeText(event.target.value)}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={clickCancel}>Cancel</Button>
        <Button onClick={clickSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}
