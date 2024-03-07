import React, { useState } from "react";
import { Button, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavbarItemsList from "./NavbarItemsList";

export default function MobileNavigationDrawer({ items }: { items: string[] }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      // Checking if it's a keyboard event and handling Tab or Shift keys
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setIsOpen(open);
    };

  return (
    <div>
      <React.Fragment>
        <IconButton
          onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
            toggleDrawer(true)(event)
          }
          edge="start"
          className="text-white"
          aria-label="menu"
          size="large"
        >
          <MenuIcon fontSize="large" />
        </IconButton>
        <Drawer anchor={"left"} open={isOpen} onClose={toggleDrawer(false)}>
          <div
            className="w-80 mt-10"
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <NavbarItemsList items={items} defaultItem="Dashboard" />
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
