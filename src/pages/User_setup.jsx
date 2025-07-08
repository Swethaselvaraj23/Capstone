import React, { useState } from 'react';
import {
  Box,
  TextField,
  Typography,
  Avatar,
  IconButton,
  Button,
  Paper,
  Alert,
} from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { useNavigate } from 'react-router-dom';

export default function StudentSetup() {
  const [nickname, setNickname] = useState('');
  const [motivation, setMotivation] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    if (!nickname.trim() || !motivation.trim()) {
      setError('Please fill in both fields ✍️');
      return;
    }
    console.log({ nickname, motivation, profilePic });
    navigate('/tracklyn-home');
  };

  return (
    <Box sx={{ position: 'relative', height: '100vh', width: '100%', backgroundColor: '#f0fdfa' }}>

      {/* 🌊 Decorative Wave SVG */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '35%',
          zIndex: 0,
        }}
      >
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ width: '100%', height: '100%' }}
        >
          <path
            d="M0,160 C200,260 600,80 900,180 C1200,280 1440,160 1440,160 L1440,320 L0,320 Z"
            fill="rgb(0,147,160)"
          />
          <path
            d="M0,200 C300,300 700,120 1100,220 C1300,260 1440,180 1440,180 L1440,320 L0,320 Z"
            fill="rgb(6,92,105)"
            opacity="0.9"
          />
        </svg>
      </Box>

      {/* 🧾 Setup Form Card */}
      <Box
        sx={{
          position: 'relative',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: 2,
          zIndex: 1,
        }}
      >
        <Paper
          elevation={6}
          sx={{
            p: 4,
            maxWidth: 400,
            width: '100%',
            borderRadius: 5,
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Typography variant="h5" align="center" fontWeight={600} mb={3}>
            Tell Us About You
          </Typography>

          {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
            <Box sx={{ position: 'relative' }}>
              <Avatar
                src={profilePic}
                sx={{
                  width: 80,
                  height: 80,
                  border: '3px solid #028288',
                  bgcolor: '#DBE2EA',
                }}
              />
              <IconButton
                component="label"
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  bgcolor: '#fff',
                  border: '2px solid #028288',
                  '&:hover': { bgcolor: '#028288', color: '#fff' },
                }}
              >
                <PhotoCameraIcon />
                <input type="file" hidden accept="image/*" onChange={handleFileChange} />
              </IconButton>
            </Box>
          </Box>

          <TextField
            label="Your Nickname"
            fullWidth
            variant="outlined"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            sx={{ mb: 2 }}
          />

          <TextField
            label="Motivational Quote"
            fullWidth
            variant="outlined"
            multiline
            rows={3}
            value={motivation}
            onChange={(e) => setMotivation(e.target.value)}
            sx={{ mb: 3 }}
          />

          <Button
            variant="contained"
            fullWidth
            onClick={handleSubmit}
            sx={{
              backgroundColor: 'rgb(0,147,160)',
              color: '#fff',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: 'rgb(6,92,105)',
              },
            }}
          >
            Go
          </Button>
        </Paper>
      </Box>
    </Box>
  );
}