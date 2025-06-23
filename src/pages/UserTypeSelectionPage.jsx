// src/pages/UserTypeSelectionPage.jsx
import { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

const userTypes = [
  {
    type: 'student',
    label: 'Student',
    icon: <SchoolIcon fontSize="large" sx={{ color: '#ff7043' }} />,
  },
  {
    type: 'general',
    label: 'General',
    icon: <EmojiObjectsIcon fontSize="large" sx={{ color: '#26a69a' }} />,
  },
];

export default function UserTypeSelectionPage() {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const handleNext = () => {
    // store or use selected user type
    navigate('/dashboard');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#f5f5f5',
        px: 4,
        py: 6,
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Select User Type
      </Typography>
      <Typography variant="subtitle1" mb={4}>
        What’s your role?
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {userTypes.map(({ type, label, icon }) => (
          <Grid item key={type}>
            <Card
              sx={{
                width: 200,
                borderRadius: 4,
                border: selected === type ? '2px solid #26a69a' : '1px solid #ccc',
                boxShadow: selected === type ? 6 : 1,
                transition: '0.3s ease',
                '&:hover': {
                  transform: 'scale(1.03)',
                  boxShadow: 6,
                },
              }}
            >
              <CardActionArea onClick={() => setSelected(type)}>
                <CardContent>
                  <Box mb={1}>{icon}</Box>
                  <Typography variant="h6">{label}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box mt={5}>
        <Button
          variant="contained"
          size="large"
          disabled={!selected}
          onClick={handleNext}
          sx={{
            bgcolor: '#ff7043',
            '&:hover': { bgcolor: '#f4511e' },
            borderRadius: '30px',
            px: 5,
          }}
        >
          Next →
        </Button>
      </Box>
    </Box>
  );
}
