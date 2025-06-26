import React, { useState } from 'react';
import {
  Box,
  Drawer,
  Typography,
  IconButton,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import TaskIcon from '@mui/icons-material/Checklist';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AddSubject from '../components/dashboard/AddSubject';
import TaskProgress from '../components/dashboard/TaskProgress';
import ProgressCharts from '../components/dashboard/ProgressCharts';
import Settings from '../components/dashboard/Settings';


const drawerWidth = 220;

export default function StudentDashboard() {
  const [selectedSection, setSelectedSection] = useState('Tasks');

  const renderSection = () => {
    switch (selectedSection) {
      case 'Tasks':
        return (
          <>
            <AddSubject />
            <TaskProgress />
          </>
        );
      case 'Progress':
        return <ProgressCharts />;
      
      case 'Settings':
        return <Settings />;
      default:
        return <Typography>Section coming soon...</Typography>;
    }
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#f7f9fa' }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor: '#028288',
            color: 'white',
            pt: 3,
          },
        }}
      >
        <Typography variant="h6" sx={{ textAlign: 'center', mb: 3, fontWeight: 'bold' }}>
          Tracklyn
        </Typography>
        <List>
          {[ 
            { label: 'Tasks', icon: <TaskIcon /> }, 
            { label: 'Progress', icon: <BarChartIcon /> },
            { label: 'Calendar', icon: <CalendarTodayIcon /> },
            { label: 'Settings', icon: <SettingsIcon /> }
          ].map(({ label, icon }) => (
            <ListItem key={label} disablePadding>
              <ListItemButton
                selected={selectedSection === label}
                onClick={() => setSelectedSection(label)}
                sx={{
                  color: 'white',
                  borderRadius: 2,
                  mb: 1,
                  bgcolor: selectedSection === label ? '#04454B' : 'transparent',
                  '&:hover': { bgcolor: '#04696E' },
                }}
              >
                <ListItemIcon sx={{ color: 'white' }}>{icon}</ListItemIcon>
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h4" fontWeight={600} color="#04454B">
            {selectedSection}
          </Typography>
          <IconButton>
            <MenuIcon />
          </IconButton>
        </Box>

        <Box mt={4}>{renderSection()}</Box>
      </Box>
    </Box>
  );
}
