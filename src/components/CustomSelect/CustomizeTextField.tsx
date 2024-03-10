import Button from "@mui/material/Button";
import CustomTextField from "../CustomTextField";
import { Box, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

type CustomizeTextFieldProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickConfirm: () => void;
};

export default function CustomizeTextField(
  customizeTextFieldProps: CustomizeTextFieldProps
) {
  const { value, onChange, onClickConfirm } = customizeTextFieldProps;

  return (
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
        value={value}
        onChange={onChange}
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
        onClick={onClickConfirm}
      >
        Confirm
      </Button>
    </Box>
  );
}
