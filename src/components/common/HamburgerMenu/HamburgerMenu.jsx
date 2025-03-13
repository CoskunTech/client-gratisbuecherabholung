import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import WhatsappButton from "../WhatsappButton";
import "./HamburgerMenu.css";

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  return (
    <>
      {/* Hamburger Butonu */}
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
        className="hamburger-menu"
        sx={{ fontSize: "2rem", padding: "10px" }}>
        <MenuIcon sx={{ fontSize: "2rem" }} />
      </IconButton>

      {/* Menü Çekmecesi */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <div className="drawer-header">
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </div>
        <List>
          <ListItem button onClick={toggleDrawer(false)}>
            <ListItemText primary="Startseite" />
          </ListItem>
          <ListItem button onClick={toggleDrawer(false)}>
            <ListItemText primary="So funktioniert’s" />
          </ListItem>
          <ListItem button onClick={toggleDrawer(false)}>
            <ListItemText primary="Unsere Mission" />
          </ListItem>
          <ListItem button onClick={toggleDrawer(false)}>
            <ListItemText primary="Fragen?" />
          </ListItem>
          <ListItem button onClick={toggleDrawer(false)}>
            <ListItemText primary="Kontakt" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default HamburgerMenu;
