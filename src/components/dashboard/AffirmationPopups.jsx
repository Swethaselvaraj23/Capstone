import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton, Fade } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const affirmations = [
  "You’ve survived 100% of your worst days. You’ve got this!",
  "One chapter at a time, one step at a time.",
  "You’re not behind — you’re building momentum.",
  "Every focus session is a ripple that becomes a wave.",
  "Rest is part of progress, not the opposite of it.",
];

export default function AffirmationPopups() {
  const [visible, setVisible] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const showAffirmation = () => {
      setMessageIndex(Math.floor(Math.random() * affirmations.length));
      setVisible(true);
      setTimeout(() => setVisible(false), 8000); // Auto hide after 8 sec
    };

    const interval = setInterval(showAffirmation, 1000 * 60 * 5); // Every 5 minutes
    showAffirmation(); // Show once at start
    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <Fade in={visible}>
      <Box
        sx={{
          position: 'fixed',
          bottom: 100,
          right: 30,
          bgcolor: '#D8EAEF',
          px: 3,
          py: 2,
          borderRadius: '12px',
          boxShadow: '0px 6px 18px rgba(0,0,0,0.15)',
          maxWidth: 300,
          zIndex: 1300,
          display: 'flex',
          alignItems: 'start',
        }}
      >
        <Typography sx={{ color: '#04454B', flex: 1, fontWeight: 500 }}>
          {affirmations[messageIndex]}
        </Typography>
        <IconButton onClick={() => setVisible(false)} size="small">
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
    </Fade>
  );
}
