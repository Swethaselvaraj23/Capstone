import React, { useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from "@mui/material";
import TodayIcon from "@mui/icons-material/Today";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AssignmentIcon from "@mui/icons-material/Assignment";
import TimerIcon from "@mui/icons-material/Timer";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
import { useNavigate } from "react-router-dom";

export default function BottomNavBar() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);

    // Navigation logic
    switch (newValue) {
      case 0:
        navigate("/today");
        break;
      case 1:
        navigate("/habits");
        break;
      case 2:
        navigate("/tasks");
        break;
      case 3:
        navigate("/timer");
        break;
      case 4:
        navigate("/jellyfish");
        break;
      default:
        break;
    }
  };

  return (
    <Paper
      elevation={10}
      sx={{
        position: "fixed",
        bottom: 20,
        left: "50%",
        transform: "translateX(-50%)",
        borderRadius: "30px",
        width: "90%",
        maxWidth: 600,
        bgcolor: "rgba(255,255,255,0.75)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={handleChange}
        sx={{
          borderRadius: "30px",
        }}
      >
        <BottomNavigationAction label="Today" icon={<TodayIcon />} />
        <BottomNavigationAction label="Habits" icon={<CheckCircleIcon />} />
        <BottomNavigationAction label="Tasks" icon={<AssignmentIcon />} />
        <BottomNavigationAction label="Timer" icon={<TimerIcon />} />
        <BottomNavigationAction label="Jellyfish" icon={<EmojiNatureIcon />} />
      </BottomNavigation>
    </Paper>
  );
}
