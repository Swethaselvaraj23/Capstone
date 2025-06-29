import React, { useState } from 'react';
import {
  Box,
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
} from '@mui/material';

import TaskIcon from '@mui/icons-material/Checklist';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TimelineIcon from '@mui/icons-material/Timeline';
import AssessmentIcon from '@mui/icons-material/Assessment';


import ProgressCharts from '../components/dashboard/ProgressCharts';
import Settings from '../components/dashboard/Settings';


import TaskProgress from '../components/dashboard/TaskProgress';
import TestProgress from '../components/dashboard/TestProgress';

const drawerWidth = 240;

export default function StudentDashboard() {
  const [selectedSection, setSelectedSection] = useState('Tasks');
  const [subjects, setSubjects] = useState([]);

  const renderSection = () => {
    switch (selectedSection) {
      case 'Tasks':
        return (
          <>
            
            <Typography variant="h6" color="text.secondary" sx={{ mt: 2 }}>
              Add your tasks here
            </Typography>
          </>
        );
      case 'Progress':
        return <ProgressCharts />;
      case 'Task Progress':
        return <TaskProgress />;
      case 'Test Progress':
        return <TestProgress />;
      
      
      case 'Settings':
        return <Settings />;
      default:
        return (
          <Box textAlign="center" mt={10}>
            <Typography variant="h6" color="text.secondary">
              Section coming soon...
            </Typography>
          </Box>
        );
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
          '& .MuiDrawer-paper': {
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
            { label: 'Task Progress', icon: <TimelineIcon /> },
            { label: 'Test Progress', icon: <AssessmentIcon /> },
            { label: 'Calendar', icon: <CalendarTodayIcon /> },
            { label: 'Affirmations', icon: <EmojiEventsIcon /> },
            { label: 'Settings', icon: <SettingsIcon /> },
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

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 3,
          }}
        >
          <Typography variant="h4" fontWeight={600} color="#04454B">
            {selectedSection}
          </Typography>

          {/* AI Jellyfish Chat Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#6A1B9A',
              color: 'white',
              borderRadius: '999px',
              px: 3,
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#4A148C',
              },
            }}
            onClick={() => {
              console.log('AI Jelly Help launched');
              // Future: launch floating planner
            }}
          >
            🪼 AI Jelly Help
          </Button>
        </Box>

        {/* Section Renderer */}
        <Box>{renderSection()}</Box>
      </Box>
    </Box>
  );
}
