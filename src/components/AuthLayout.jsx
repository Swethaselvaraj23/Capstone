// components/AuthLayout.jsx
import { Box, Container, Paper, Typography } from '@mui/material';

export default function AuthLayout({ title, children }) {
  return (
    <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 4, width: '100%' }}>
        <Typography variant="h4" color="primary" gutterBottom>
          {title}
        </Typography>
        {children}
      </Paper>
    </Container>
  );
}
