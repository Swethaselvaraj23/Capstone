// components/Dashboard/Sidebar.jsx

import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import TaskIcon from '@mui/icons-material/Checklist';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import BarChartIcon from '@mui/icons-material/BarChart';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SettingsIcon from '@mui/icons-material/Settings';
import { useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { label: 'Home', icon: <HomeIcon />, path: '/dashboard' },
  { label: 'Tasks', icon: <TaskIcon />, path: '/dashboard/tasks' },
  { label: 'Calendar', icon: <CalendarTodayIcon />, path: '/dashboard/calendar' },
  { label: 'Progress', icon: <BarChartIcon />, path: '/dashboard/progress' },
  { label: 'Affirmations', icon: <EmojiEmotionsIcon />, path: '/dashboard/affirmations' },
  { label: 'Settings', icon: <SettingsIcon />, path: '/dashboard/settings' },
];

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: '220px',
        height: '100vh',
        bgcolor: '#028288',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        py: 4,
        px: 2,
        position: 'sticky',
        top: 0,
      }}
    >
      <List>
        {navItems.map(({ label, icon, path }) => (
          <ListItem disablePadding key={label}>
            <ListItemButton
              onClick={() => navigate(path)}
              selected={location.pathname === path}
              sx={{
                borderRadius: 2,
                mb: 1,
                bgcolor: location.pathname === path ? '#04454B' : 'transparent',
                '&:hover': {
                  bgcolor: '#04696E',
                },
              }}
            >
              <ListItemIcon sx={{ color: 'white' }}>{icon}</ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
