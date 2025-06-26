import { useState } from 'react';
import {
  Button,
  TextField,
  Typography,
  Stack,
  Link,
  Alert,
  Box,
  Paper,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    setError('');
    if (!name || !email || !password) {
      setError('Please fill all fields.');
      return;
    }

    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCred.user, { displayName: name });
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Box sx={{ position: 'relative', height: '100vh', width: '100%', backgroundColor: '#f0fdfa' }}>
      
      {/* 🌊 Custom Bottom Waves */}
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

      {/* ✨ Signup Card */}
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
            backgroundColor: 'rgba(255, 255, 255, 0.65)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Typography variant="h5" align="center" fontWeight={600} mb={3}>
            Create Account
          </Typography>

          <Stack spacing={2}>
            {error && <Alert severity="error">{error}</Alert>}

            <TextField
              label="Name"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="Email"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type={showPassword ? 'text' : 'password'}
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                      aria-label="toggle password visibility"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Button
              variant="contained"
              fullWidth
              onClick={handleSignup}
              sx={{
                backgroundColor: 'rgb(0,147,160)',
                color: '#fff',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: 'rgb(6,92,105)',
                },
              }}
            >
              Sign Up
            </Button>

            <Typography variant="body2" align="center">
              Already have an account?{' '}
              <Link
                component={RouterLink}
                to="/login"
                sx={{
                  color: 'rgb(0,147,160)',
                  fontWeight: 'bold',
                  '&:hover': {
                    color: 'rgb(6,92,105)',
                    textDecoration: 'underline',
                  },
                }}
              >
                Log in
              </Link>
            </Typography>
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
}
