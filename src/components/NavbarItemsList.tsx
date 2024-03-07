import { List, ListItemButton, ListItemText } from "@mui/material";
import { useState } from "react";

type NavbarItemsListProps = {
  items: string[];
  defaultItem: string;
  sx?: object;
};

export default function NavbarItemsList({
  items,
  defaultItem,
  sx,
}: NavbarItemsListProps) {
  const [selectedItem, setSelectedItem] = useState(defaultItem);
  const handleListItemClick = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <List sx={sx}>
      {items.map((text) => (
        <ListItemButton
          key={text}
          selected={selectedItem === text}
          onClick={() => handleListItemClick(text)}
          sx={{
            borderBottom: selectedItem === text ? "2px solid #3D3D3D" : "none",
            bgcolor: selectedItem === text ? "#000" : "transparent",
            "&.Mui-selected": {
              bgcolor: "rgba(147, 133, 98, 0.2)",
              color: "primary.main",
              "@media (min-width:1024px)": {
                bgcolor: "transparent",
              },
            },
            "&:hover": {
              bgcolor: "rgba(147, 133, 98, 0.1)",
            },
            paddingTop: "24px",
            paddingBottom: "24px",
            "@media (min-width:1024px)": {
              paddingTop: "16px",
              paddingBottom: "16px",
            },
          }}
        >
          <ListItemText
            primary={text}
            primaryTypographyProps={{
              sx: {
                fontWeight: selectedItem === text ? "bold" : "normal",
                color: selectedItem === text ? "#3D3D3D" : "#666666",
              },
            }}
          />
        </ListItemButton>
      ))}
    </List>
  );
}
