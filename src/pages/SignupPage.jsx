import { useState } from 'react';
import { Button, TextField, Typography, Stack, Link, Alert } from '@mui/material';
import AuthLayout from '../components/AuthLayout';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    setError('');
    if (!name || !email || !password) {
      setError("Please fill all fields.");
      return;
    }

    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCred.user, { displayName: name });
      navigate('/'); // or redirect to /dashboard
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <AuthLayout title="Create Account">
      <Stack spacing={2}>
        {error && <Alert severity="error">{error}</Alert>}
        <TextField label="Name" fullWidth value={name} onChange={e => setName(e.target.value)} />
        <TextField label="Email" fullWidth value={email} onChange={e => setEmail(e.target.value)} />
        <TextField label="Password" type="password" fullWidth value={password} onChange={e => setPassword(e.target.value)} />
        <Button variant="contained" color="primary" fullWidth onClick={handleSignup}>
          Sign Up
        </Button>
        <Typography variant="body2" align="center">
          Already have an account?{' '}
          <Link component={RouterLink} to="/login" color="secondary">
            Log in
          </Link>
        </Typography>
      </Stack>
    </AuthLayout>
  );
}

