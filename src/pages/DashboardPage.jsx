// ✅ DashboardPage.jsx
import React, { useState, useContext } from "react";
import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Paper,
  Stack,
  Fab,
} from "@mui/material";
import {
  Menu,
  Home,
  Timer,
  Category,
  DashboardCustomize,
  Settings,
  CloudUpload,
  WorkspacePremium,
  RateReview,
  ContactMail,
  Star,
  CalendarMonth,
  BarChart,
  MoreVert,
} from "@mui/icons-material";

import { ThemeContext } from "../ThemeContext";
import { useNavigate, Link } from "react-router-dom";

const DashboardPage = () => {
  const { mode } = useContext(ThemeContext);
  const navigate = useNavigate();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [habits, setHabits] = useState([]);

  return (
    <Box
      sx={{
        height: "100vh",
        bgcolor: mode === "dark" ? "#000" : "#f9f9f9",
        color: mode === "dark" ? "#fff" : "#111",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Habits
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 250, bgcolor: "#000", color: "#fff", height: "100%" }}>
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" color="#f06292">
              Habit<span style={{ color: "#fff" }}>Now</span>
            </Typography>
            <Typography variant="subtitle2">Sunday</Typography>
            <Typography variant="caption">July 6, 2025</Typography>
          </Box>
          <List>
            <ListItem button component={Link} to="/">
              <ListItemIcon sx={{ color: "#f06292" }}>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/timer">
              <ListItemIcon sx={{ color: "#fff" }}>
                <Timer />
              </ListItemIcon>
              <ListItemText primary="Timer" />
            </ListItem>
            <ListItem button component={Link} to="/categories">
              <ListItemIcon sx={{ color: "#fff" }}>
                <Category />
              </ListItemIcon>
              <ListItemText primary="Categories" />
            </ListItem>
            <Divider sx={{ bgcolor: "#333" }} />
            <ListItem button component={Link} to="/customize">
              <ListItemIcon sx={{ color: "#fff" }}>
                <DashboardCustomize />
              </ListItemIcon>
              <ListItemText primary="Customize" />
            </ListItem>
            <ListItem button component={Link} to="/settings">
              <ListItemIcon sx={{ color: "#fff" }}>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
            <ListItem button component={Link} to="/backups">
              <ListItemIcon sx={{ color: "#fff" }}>
                <CloudUpload />
              </ListItemIcon>
              <ListItemText primary="Backups" />
            </ListItem>
            <Divider sx={{ bgcolor: "#333" }} />
            <ListItem button component={Link} to="/premium">
              <ListItemIcon sx={{ color: "#fff" }}>
                <WorkspacePremium />
              </ListItemIcon>
              <ListItemText primary="Get premium" />
            </ListItem>
            <ListItem button component={Link} to="/rate">
              <ListItemIcon sx={{ color: "#fff" }}>
                <RateReview />
              </ListItemIcon>
              <ListItemText primary="Rate this app" />
            </ListItem>
            <ListItem button component={Link} to="/contact">
              <ListItemIcon sx={{ color: "#fff" }}>
                <ContactMail />
              </ListItemIcon>
              <ListItemText primary="Contact us" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <Box sx={{ flexGrow: 1, overflowY: "auto", p: 2 }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          mb={2}
          sx={{
            color: mode === "dark" ? "#fff" : "rgb(1, 83, 90)",
          }}
        >
          Habits
        </Typography>

        {habits.length === 0 && (
          <Typography
            variant="body1"
            sx={{ color: mode === "dark" ? "#aaa" : "#555" }}
          >
            No habits yet. Click the + button to add one!
          </Typography>
        )}

        {habits.map((habit, i) => (
          <Paper
            key={i}
            sx={{
              bgcolor: mode === "dark" ? "#111" : "#fff",
              borderRadius: 2,
              p: 2,
              mb: 2,
              color: mode === "dark" ? "#fff" : "#111",
              boxShadow: mode === "dark" ? "0 0 10px #333" : undefined,
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ color: mode === "dark" ? "#fff" : "#111" }}
                >
                  {habit.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: habit.color, mt: 0.5 }}
                >
                  {habit.schedule}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: mode === "dark" ? "#aaa" : "#555",
                    mt: 0.5,
                  }}
                >
                  Progress: {habit.progress}%
                </Typography>
              </Box>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  bgcolor: habit.color,
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {habit.icon}
              </Box>
            </Stack>
            <Divider
              sx={{
                my: 1,
                borderColor: mode === "dark" ? "#333" : "#ddd",
              }}
            />
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack direction="row" spacing={2}>
                <IconButton
                  size="small"
                  sx={{ color: mode === "dark" ? "#aaa" : "#666" }}
                >
                  <CalendarMonth fontSize="small" />
                </IconButton>
                <IconButton
                  size="small"
                  sx={{ color: mode === "dark" ? "#aaa" : "#666" }}
                >
                  <BarChart fontSize="small" />
                </IconButton>
              </Stack>
              <IconButton
                size="small"
                sx={{ color: mode === "dark" ? "#aaa" : "#666" }}
              >
                <MoreVert fontSize="small" />
              </IconButton>
            </Stack>
          </Paper>
        ))}
      </Box>

      <Fab
        color="secondary"
        onClick={() => navigate("/create-habit")}
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          bgcolor: "#f06292",
        }}
      >
        +
      </Fab>
    </Box>
  );
};

export default DashboardPage;
