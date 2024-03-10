import CustomTooltip from "../CustomTooltip";
import { Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

type SelectButtonPropsType = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  open: boolean;
  placeholder: string;
  value: string;
  color?: string;
  textColor?: string;
  tooltipText: string;
};

export default function SelectButton(selectButtonProps: SelectButtonPropsType) {
  const { onClick, open, placeholder, value, color, textColor, tooltipText } =
    selectButtonProps;

  return (
    <CustomTooltip title={tooltipText}>
      <Button
        variant="outlined"
        onClick={onClick}
        sx={{
          display: "block",
          backgroundColor: color || "#F0F0F0",
          color: textColor || (!value ? "#8C8C8C" : "#1F1F1F"),
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
          "&:hover, &:active, &:focus": {
            backgroundColor: color || "#F0F0F0",
            borderWidth: "0px",
          },
        }}
      >
        {value || placeholder}
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
    </CustomTooltip>
  );
}
