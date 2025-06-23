// pages/Home.jsx
import { Box, Button, Typography, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function Home() {
  return (
    <Box sx={{ 
      height: '100vh', 
      background: 'linear-gradient(135deg, #FF8A00 30%, #008080 90%)', 
      color: '#fff', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      textAlign: 'center',
      p: 4
    }}>
      <Typography variant="h2" gutterBottom>Tracklyn</Typography>
      <Typography variant="h6" sx={{ mb: 4 }}>
        Your personalized productivity hub, crafted for focus and growth.
      </Typography>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="secondary" component={RouterLink} to="/login">
          Log In
        </Button>
        <Button variant="outlined" color="inherit" component={RouterLink} to="/signup">
          Sign Up
        </Button>
      </Stack>
    </Box>
  );
}
