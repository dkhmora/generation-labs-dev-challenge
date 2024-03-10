import Popover from "@mui/material/Popover";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import SearchField from "./SearchField";
import SelectItemsList from "./SelectItemsList";
import { CustomSelectItem } from "../../types";
import CustomizeTextField from "./CustomizeTextField";

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

type SelectMenuPropsType = {
  open: boolean;
  anchorEl: (EventTarget & HTMLButtonElement) | null;
  id?: string;
  handleClose: () => void;
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  customValue: string;
  handleConfirmCustomValue: () => void;
  handleCustomChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  filteredItems: CustomSelectItem[];
  handleSelect: (value: string) => void;
  search?: boolean;
};

export default function SelectMenu(selectMenuProps: SelectMenuPropsType) {
  const {
    open,
    anchorEl,
    id,
    handleClose,
    searchTerm,
    setSearchTerm,
    customValue,
    handleConfirmCustomValue,
    handleCustomChange,
    filteredItems,
    handleSelect,
    search,
  } = selectMenuProps;
  return (
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
          <SearchField searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
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
          <CustomizeTextField
            value={customValue}
            onChange={handleCustomChange}
            onClickConfirm={handleConfirmCustomValue}
          />
        )}
      </Box>
    </CustomPopover>
  );
}
