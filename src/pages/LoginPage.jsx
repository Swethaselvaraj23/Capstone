// pages/Login.jsx
import { useState } from 'react';
import {
  Button,
  TextField,
  Typography,
  Stack,
  Link,
  Alert,
  CircularProgress,
} from '@mui/material';
import AuthLayout from '../components/AuthLayout';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    setErrorMsg('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // ✅ Redirect to user type selection page instead of dashboard
      navigate('/select-user');
    } catch (error) {
      setErrorMsg(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout title="Welcome Back">
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
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMsg && <Alert severity="error">{errorMsg}</Alert>}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : 'Login'}
        </Button>
        <Typography variant="body2" align="center">
          Don’t have an account?{' '}
          <Link component={RouterLink} to="/signup" color="secondary">
            Sign up
          </Link>
        </Typography>
      </Stack>
    </AuthLayout>
  );
}
