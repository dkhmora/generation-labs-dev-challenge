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
    <List sx={{ display: "flex", ...sx }}>
      {items.map((text) => (
        <ListItemButton
          key={text}
          selected={selectedItem === text}
          onClick={() => handleListItemClick(text)}
          sx={{
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
            height: "auto",
            paddingTop: "24px",
            paddingBottom: "24px",
            "@media (min-width:1024px)": {
              height: "80px",
              paddingTop: "16px",
              paddingBottom: "16px",
            },
            position: "relative",
          }}
        >
          <ListItemText
            primary={
              <div
                style={{
                  borderBottom:
                    selectedItem === text ? "2px solid #1F1F1F" : "none",
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingBottom: "26px",
                  marginTop: "26px",
                }}
              >
                {text}
              </div>
            }
            primaryTypographyProps={{
              sx: {
                fontWeight: selectedItem === text ? "600" : "400",
                fontSize: "16px",
                color: selectedItem === text ? "#1F1F1F" : "#8C8C8C",
                display: "inline",
                textAlign: "center",
              },
            }}
          />
        </ListItemButton>
      ))}
    </List>
  );
}
