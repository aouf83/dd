import React, { useState } from "react";
import {
  Drawer,
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "../../assets/styles/Header.css";

const Header = ({ toggleSidebar, isAbove1088px }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <header className="header">
      <div className="header-left">
        {!isAbove1088px && (
          <button className="menu-button" onClick={toggleSidebar}>
            <img
              src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/menu-icon.svg"
              alt="Menu Icon"
              style={{ width: "25px" }} /* Adjusted size */
            />
          </button>
        )}
        <div className="logo">
          <img src="https://stackcentre.in/img/logo.png" alt="logo" />
        </div>
      </div>

      {/* Profile Picture with Drawer Toggle */}
      <div className="header-right">
        <IconButton onClick={toggleDrawer(true)}>
          <Avatar
            alt="Profile"
            src="https://res.cloudinary.com/dayjanr1f/image/upload/v1724825365/skillera/esug3zkcozhvytohicvt.jpg"
            sx={{ width: 50, height: 50 }} /* Increased profile picture size */
          />
        </IconButton>

        {/* Drawer for Profile Details */}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <div
            style={{
              width: 300 /* Increased width for a spacious feel */,
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent:
                "space-between" /* Ensures logout button stays at the bottom */,
              height: "100%" /* Fills drawer height */,
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <div style={{ textAlign: "center" }}>
              {/* Profile Content Inside Drawer */}
              <Avatar
                alt="Profile"
                src="https://res.cloudinary.com/dayjanr1f/image/upload/v1724825365/skillera/esug3zkcozhvytohicvt.jpg"
                sx={{
                  width: 120,
                  height: 120,
                  margin: "0 auto",
                }} /* Larger profile avatar inside drawer */
              />
              <h3 style={{ marginTop: "15px", fontSize: "18px" }}>
                Abdul Rahman Aouf
              </h3>
              <p style={{ color: "#666", fontSize: "14px" }}>
                johndoe@example.com
              </p>
            </div>
            <Divider sx={{ margin: "20px 0" }} />

            <div>
              <List>
                <ListItem button>
                  <ListItemText primary="Account Settings" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="My Profile" />
                </ListItem>
              </List>
            </div>

            {/* Logout Button */}
            <div style={{ textAlign: "center", marginTop: "auto" }}>
              <Button
                variant="contained"
                color="error"
                sx={{
                  width: "100%",
                  padding: "10px 0",
                  fontWeight: "bold",
                  borderRadius: "20px",
                }}
              >
                Logout
              </Button>
            </div>
          </div>
        </Drawer>
      </div>
    </header>
  );
};

export default Header;
