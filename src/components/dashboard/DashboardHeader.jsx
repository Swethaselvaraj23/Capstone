// components/Dashboard/DashboardHeader.jsx

import React from 'react';
import { Box, Typography, Avatar, IconButton, Tooltip } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export default function DashboardHeader({ nickname = 'WaveRider', motivation = 'Ride the tide of learning.', profilePic }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 4,
        py: 3,
        bgcolor: '#F3FAFB',
        borderBottom: '1px solid #E0E0E0',
      }}
    >
      {/* Left Greeting */}
      <Box>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#04454B' }}>
          Welcome, {nickname} 👋
        </Typography>
        <Typography variant="subtitle2" sx={{ color: '#028288', mt: 0.5 }}>
          "{motivation}"
        </Typography>
      </Box>

      {/* Right Icons */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        {/* AI Help with Jellyfish Icon */}
        <Tooltip title="AI Assistant">
          <IconButton sx={{ bgcolor: '#E6F1F3', '&:hover': { bgcolor: '#D8EAEF' } }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
              alt="AI Jellyfish"
              style={{ width: 28, height: 28 }}
            />
          </IconButton>
        </Tooltip>

        {/* Notifications */}
        <Tooltip title="Notifications">
          <IconButton sx={{ color: '#028288' }}>
            <NotificationsIcon />
          </IconButton>
        </Tooltip>

        {/* Profile Avatar */}
        <Avatar src={profilePic} sx={{ width: 40, height: 40, border: '2px solid #028288' }} />
      </Box>
    </Box>
  );
}
