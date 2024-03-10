import { List, MenuItem } from "@mui/material";
import { CustomSelectItem } from "../../types";

type SelectItemsListPropsType = {
  items: CustomSelectItem[];
  onSelect: (value: string) => void;
};

export default function SelectItemsList(
  selectItemsListProps: SelectItemsListPropsType
) {
  const { items, onSelect } = selectItemsListProps;

  return (
    <List>
      {items.map((item) => (
        <MenuItem
          key={item.value}
          onClick={() => onSelect(item.value)}
          sx={{ paddingLeft: 1, paddingRight: 1 }}
        >
          <span
            style={{
              backgroundColor: item.color || "transparent",
              color: item.textColor || "#1F1F1F",
              borderRadius: "8px",
              display: "inline-block",
              padding: item.color ? "4px 8px 4px 8px" : "0px 0px 0px 0px",
              fontSize: "14px",
            }}
          >
            {item.value}
          </span>
        </MenuItem>
      ))}
    </List>
  );
}
