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
    icon: <SchoolIcon sx={{ fontSize: 60, color: '#004d40' }} />,
  },
  {
    type: 'general',
    label: 'General',
    icon: <EmojiObjectsIcon sx={{ fontSize: 60, color: '#00695c' }} />,
  },
];

export default function UserTypeSelectionPage() {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const handleNext = () => {
    switch (selected) {
      case 'student':
        navigate('/student-setup');
        break;
      case 'general':
        navigate('/general-dashboard');
        break;
      default:
        break;
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        px: { xs: 2, md: 6 },
        py: { xs: 4, md: 8 },
        textAlign: 'center',
        color: '#004d40',
        overflow: 'hidden',
      }}
    >
      {/* Optional overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          zIndex: 0,
        }}
      />

      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Choose Your Role
        </Typography>
        <Typography variant="h6" color="#004d40" mb={5}>
          Tailor Tracklyn to your journey
        </Typography>

        <Grid container spacing={5} justifyContent="center">
          {userTypes.map(({ type, label, icon }) => (
            <Grid item key={type}>
              <Card
                sx={{
                  width: 240,
                  height: 260,
                  borderRadius: 6,
                  border:
                    selected === type
                      ? '3px solid #00897b'
                      : '1px solid rgba(0, 77, 64, 0.2)',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(5px)',
                  boxShadow:
                    selected === type
                      ? '0 10px 25px rgba(0, 77, 64, 0.4)'
                      : '0 6px 18px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 12px 30px rgba(0, 77, 64, 0.3)',
                  },
                }}
              >
                <CardActionArea
                  sx={{ height: '100%' }}
                  onClick={() => setSelected(type)}
                >
                  <CardContent
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '100%',
                      gap: 2,
                    }}
                  >
                    {icon}
                    <Typography variant="h5" fontWeight="bold">
                      {label}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box mt={6}>
          <Button
            variant="contained"
            size="large"
            disabled={!selected}
            onClick={handleNext}
            sx={{
              backgroundColor: '#004d40',
              '&:hover': { backgroundColor: '#00332d' },
              borderRadius: '30px',
              px: 6,
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 'bold',
              color: '#fff',
              boxShadow: '0 6px 18px rgba(0, 77, 64, 0.4)',
              transition: 'all 0.3s ease',
            }}
          >
            Next →
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

