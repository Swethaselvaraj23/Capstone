import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Divider,
  Avatar,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";
import PersonIcon from "@mui/icons-material/Person";
import ColorLensIcon from "@mui/icons-material/ColorLens";

import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { text: "Profile", icon: <PersonIcon />, path: "/profile" },
    { text: "Settings", icon: <SettingsIcon />, path: "/settings" },
    { text: "Theme", icon: <ColorLensIcon />, path: "/theme" },
    { text: "About", icon: <InfoIcon />, path: "/about" },
  ];

  return (
    <>
      {/* Hamburger button floating at top left */}
      <Box
        sx={{
          position: "fixed",
          top: 20,
          left: 20,
          zIndex: 1400,
        }}
      >
        <IconButton
          onClick={() => setOpen(true)}
          sx={{
            backgroundColor: "white",
            boxShadow: 3,
            "&:hover": { backgroundColor: "#f0f0f0" },
          }}
        >
          <MenuIcon color="primary" />
        </IconButton>
      </Box>

      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: 250,
            background: "linear-gradient(180deg, #e0f7fa, #ffffff)",
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          {/* User section */}
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Avatar sx={{ width: 56, height: 56, mr: 2 }}>U</Avatar>
            <Box>
              <Typography variant="subtitle1" fontWeight="bold">
                Your Name
              </Typography>
              <Typography variant="body2" color="text.secondary">
                your@email.com
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ mb: 2 }} />

          <List>
            {navItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  onClick={() => {
                    navigate(item.path);
                    setOpen(false);
                  }}
                  sx={{ borderRadius: 2 }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
