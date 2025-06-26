import React, { useEffect, useState } from 'react';
import { Box, Typography, IconButton, Fade } from '@mui/material';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects'; // Placeholder for jellyfish icon
// Swap with animated Lottie or SVG later if you want

const aiMessages = [
  "Let’s organize your brainwaves 🧠🌊",
  "You have 2 chapters left in Physics—want help scheduling?",
  "Focus time? I suggest 25 mins Pomodoro + 5 mins break.",
  "Float through your goals today—calm, steady, deep.",
];

export default function AIPlanner() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % aiMessages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        gap: 2,
      }}
    >
      {/* Message Bubble */}
      <Fade in>
        <Box
          sx={{
            bgcolor: '#028288',
            color: '#fff',
            px: 3,
            py: 2,
            borderRadius: '16px 16px 16px 0px',
            boxShadow: '0 0 16px rgba(0,0,0,0.2)',
            maxWidth: 280,
            fontSize: '0.95rem',
            fontWeight: 500,
            fontFamily: 'Poppins',
          }}
        >
          {aiMessages[currentMessageIndex]}
        </Box>
      </Fade>

      {/* Jellyfish Bot Icon */}
      <IconButton
        sx={{
          width: 60,
          height: 60,
          background: '#71CDD4',
          borderRadius: '50%',
          boxShadow: '0 0 12px #028288',
          '&:hover': {
            background: '#04454B',
            color: '#fff',
          },
        }}
      >
        <EmojiObjectsIcon sx={{ fontSize: 36 }} />
      </IconButton>
    </Box>
  );
}
