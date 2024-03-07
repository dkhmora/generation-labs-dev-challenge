import React, { useState } from "react";
import { Button, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavbarItemsList from "./NavbarItemsList";

const mainNavigationItems = ["Dashboard", "Report", "Tele-health", "To-dos"];

export default function MobileNavigationDrawer() {
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
            <NavbarItemsList
              items={mainNavigationItems}
              defaultItem="Dashboard"
            />
          </div>

          <div className="flex flex-col space-y-2 p-4">
            <Button
              sx={{
                borderRadius: "8px",
                border: "1px solid #938562",
                borderColor: "#938562",
                color: "#6A5930",
                textTransform: "none",
              }}
            >
              <p className="text-[#6A5930]">Register Kit</p>
            </Button>
            <Button
              sx={{
                borderRadius: "8px",
                backgroundColor: "#E3E0D6",
                textTransform: "none",
              }}
              disabled
            >
              <p className="text-[#6A5930]">Buy Kit</p>
            </Button>
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
