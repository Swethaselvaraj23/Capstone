import { useState, useContext } from 'react';
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
import { ThemeContext } from '../ThemeContext';

export default function Login() {
  const { mode } = useContext(ThemeContext);

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
      navigate('/dashboard'); // ✅ updated here
    } catch (error) {
      setErrorMsg(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        bgcolor: mode === 'dark' ? '#001e1e' : 'transparent',
      }}
    >
      {/* Background image */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            mode === 'dark'
              ? `url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438')`
              : `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
          filter: mode === 'dark' ? 'brightness(0.5)' : 'brightness(1)',
        }}
      />

      {/* Semi-transparent overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor:
            mode === 'dark'
              ? 'rgba(0,0,0,0.6)'
              : 'rgba(255, 255, 255, 0.7)',
          zIndex: 1,
        }}
      />

      {/* Centered login card */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: 2,
        }}
      >
        <Paper
          elevation={6}
          sx={{
            p: 4,
            maxWidth: 400,
            width: '100%',
            borderRadius: 5,
            backgroundColor:
              mode === 'dark'
                ? 'rgba(0, 30, 30, 0.8)'
                : 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(10px)',
            color: mode === 'dark' ? '#ffffff' : '#000000',
          }}
        >
          <Typography
            variant="h5"
            align="center"
            fontWeight={600}
            mb={3}
            sx={{
              color: mode === 'dark' ? '#ffffff' : 'rgb(1,83,90)',
            }}
          >
            Welcome Back
          </Typography>

          <Stack spacing={2}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputLabelProps={{
                style: {
                  color: mode === 'dark' ? '#cccccc' : undefined,
                },
              }}
              InputProps={{
                style: {
                  color: mode === 'dark' ? '#ffffff' : undefined,
                },
              }}
            />
            <TextField
              label="Password"
              type={showPassword ? 'text' : 'password'}
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputLabelProps={{
                style: {
                  color: mode === 'dark' ? '#cccccc' : undefined,
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                      sx={{
                        color: mode === 'dark' ? '#ffffff' : undefined,
                      }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
                style: {
                  color: mode === 'dark' ? '#ffffff' : undefined,
                },
              }}
            />
            {errorMsg && <Alert severity="error">{errorMsg}</Alert>}
            <Button
              variant="contained"
              fullWidth
              onClick={handleLogin}
              disabled={loading}
              sx={{
                backgroundColor:
                  mode === 'dark'
                    ? '#00796b'
                    : 'rgb(0,147,160)',
                color: '#fff',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor:
                    mode === 'dark'
                      ? '#004d40'
                      : 'rgb(6,92,105)',
                },
              }}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                'Login'
              )}
            </Button>

            <Typography
              variant="body2"
              align="center"
              sx={{
                color: mode === 'dark' ? '#ffffff' : undefined,
              }}
            >
              Don’t have an account?{' '}
              <Link
                component={RouterLink}
                to="/signup"
                sx={{
                  color:
                    mode === 'dark'
                      ? '#4dd0e1'
                      : 'rgb(0,147,160)',
                  fontWeight: 'bold',
                  '&:hover': {
                    color:
                      mode === 'dark'
                        ? '#26c6da'
                        : 'rgb(6,92,105)',
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
