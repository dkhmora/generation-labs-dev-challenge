import CustomTextField from "../CustomTextField";
import { Box, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

type setSearchFieldProps = {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
};

export default function SearchField(searchFieldProps: setSearchFieldProps) {
  const { searchTerm, setSearchTerm } = searchFieldProps;

  return (
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
        onChange={(event) => setSearchTerm(event.target.value)}
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
  );
}
