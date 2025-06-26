import { useState } from 'react';
import {
  Button,
  TextField,
  Typography,
  Stack,
  Link,
  Alert,
  CircularProgress,
  InputAdornment,
  IconButton,
  Box,
  Paper,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    setErrorMsg('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/select-user');
    } catch (error) {
      setErrorMsg(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ position: 'relative', height: '100vh', width: '100%', backgroundColor: '#f0fdfa' }}>
      
      {/* 🌊 Custom Bottom Waves, more visible on left */}
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
          {/* First Wave - Higher on left */}
          <path
            d="M0,160 C200,260 600,80 900,180 C1200,280 1440,160 1440,160 L1440,320 L0,320 Z"
            fill="rgb(0,147,160)"
          />
          {/* Second Wave - Different shape, layered */}
          <path
            d="M0,200 C300,300 700,120 1100,220 C1300,260 1440,180 1440,180 L1440,320 L0,320 Z"
            fill="rgb(6,92,105)"
            opacity="0.9"
          />
        </svg>
      </Box>

      {/* 💻 Login Card */}
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
            Welcome Back
          </Typography>

          <Stack spacing={2}>
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
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {errorMsg && <Alert severity="error">{errorMsg}</Alert>}
            <Button
              variant="contained"
              fullWidth
              onClick={handleLogin}
              disabled={loading}
              sx={{
                backgroundColor: 'rgb(0,147,160)',
                color: '#fff',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: 'rgb(6,92,105)',
                },
              }}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
            </Button>

            <Typography variant="body2" align="center">
              Don’t have an account?{' '}
              <Link
                component={RouterLink}
                to="/signup"
                sx={{
                  color: 'rgb(0,147,160)',
                  fontWeight: 'bold',
                  '&:hover': {
                    color: 'rgb(6,92,105)',
                    textDecoration: 'underline',
                  },
                }}
              >
                Sign up
              </Link>
            </Typography>
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
}