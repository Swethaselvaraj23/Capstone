import { Box, Button, Typography, Stack, Switch, Snackbar, Alert } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleToggle = () => {
    setDarkMode((prev) => !prev);
    setSnackbarOpen(true);
  };

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        background: darkMode
          ? '#001e1e'
          : `linear-gradient(
              to bottom right,
              rgba(224, 242, 241, 0.7),
              rgba(1, 83, 90, 0.5)
            )`,
      }}
    >
      {/* 🔁 Background Video */}
      <Box
        component="video"
        autoPlay
        muted
        loop
        playsInline
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -2,
          opacity: 1,
          filter: darkMode ? 'brightness(0.4)' : 'brightness(1)',
        }}
      >
        <source src="/beach.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </Box>

      {/* 🌤️ Overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: darkMode
            ? 'linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.2))'
            : 'linear-gradient(to top, rgba(255,255,255,0.4), rgba(255,255,255,0.1))',
          zIndex: -1,
        }}
      />

      {/* 🖼️ Logo + Toggle */}
      <Box
        sx={{
          position: 'absolute',
          top: 20,
          right: 30,
          display: 'flex',
          alignItems: 'center',
          zIndex: 2,
        }}
      >
        <Box
          component="img"
          src="/tracklyn-logo.png"
          alt="Tracklyn Logo"
          sx={{
            width: { xs: 80, sm: 100, md: 120 }, // smaller logo
            marginRight: 2,
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        />
        <Switch
          checked={darkMode}
          onChange={handleToggle}
          color="secondary"
        />
      </Box>

      {/* ✏️ Text + Buttons */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          height: '100%',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-start',
          px: { xs: 3, md: 10 },
          pb: { xs: 6, md: 10 },
        }}
      >
        <Box sx={{ maxWidth: 600, mb: { xs: 4, md: 6 } }}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: '800',
              color: darkMode ? '#ffffff' : 'rgb(1, 83, 90)',
              mb: 3,
              fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
              lineHeight: 1.5,
            }}
          >
            Tracklyn.
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: darkMode ? '#cccccc' : 'rgb(1, 83, 90)',
              mb: 2,
              fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
            }}
          >
            Your personalized productivity hub built for growth, inspired by the calm and clarity of the ocean.
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 700,
              color: '#ffffff',
              fontSize: { xs: '1.5rem', sm: '1.7rem', md: '1.9rem' },
              letterSpacing: '1px',
              mb: 4,
              textShadow: '0 3px 6px rgba(0, 0, 0, 0.6)',
            }}
          >
            Tide. Think. Track.
          </Typography>

          <Stack direction="row" spacing={2} sx={{ mb: { xs: 2, md: 3 } }}>
            <Button
              variant="contained"
              component={RouterLink}
              to="/login"
              sx={{
                backgroundColor: darkMode ? '#00796b' : 'rgb(0, 68, 78)',
                color: '#fff',
                fontWeight: 600,
                px: 4,
                py: 1.5,
                '&:hover': {
                  backgroundColor: darkMode
                    ? '#004d40'
                    : 'rgb(1, 44, 50)',
                },
              }}
            >
              Log In
            </Button>

            <Button
              variant="contained"
              component={RouterLink}
              to="/signup"
              sx={{
                backgroundColor: darkMode ? '#00796b' : 'rgb(0, 68, 78)',
                color: '#fff',
                fontWeight: 900,
                px: 4,
                py: 1.5,
                '&:hover': {
                  backgroundColor: darkMode
                    ? '#004d40'
                    : '#e0f2f1',
                  borderColor: '#00332d',
                  color: darkMode ? '#fff' : '#00332d',
                },
              }}
            >
              Sign Up
            </Button>
          </Stack>
        </Box>
      </Box>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          Theme changed to {darkMode ? 'Dark' : 'Light'} mode!
        </Alert>
      </Snackbar>
    </Box>
  );
}
