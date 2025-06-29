import { createTheme } from '@mui/material/styles';

const OceanTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0D47A1', // Deep ocean blue
      light: '#42A5F5',
      dark: '#0D47A1',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#00695C', // Teal
      light: '#4DB6AC',
      dark: '#004D40',
      contrastText: '#ffffff',
    },
    background: {
      default: '#F0F8FF', // Alice blue
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A237E',
      secondary: '#424242',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
      color: '#0D47A1',
    },
    h5: {
      fontWeight: 600,
      color: '#0D47A1',
    },
    h6: {
      fontWeight: 600,
      color: '#1A237E',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 20px rgba(13, 71, 161, 0.1)',
          borderRadius: 16,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            boxShadow: '0 8px 30px rgba(13, 71, 161, 0.15)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: 'linear-gradient(180deg, #0D47A1 0%, #1976D2 50%, #42A5F5 100%)',
          color: '#ffffff',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          margin: '4px 8px',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
          '&.Mui-selected': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.25)',
            },
          },
        },
      },
    },
  },
});

export default OceanTheme;