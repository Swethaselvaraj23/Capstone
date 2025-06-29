import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  LinearProgress,
  Chip,
  Avatar,
  IconButton,
  Paper,
} from '@mui/material';
import {
  Assignment,
  Quiz,
  TrendingUp,
  CheckCircle,
  Schedule,
  Warning,
  CalendarToday,
  People,
} from '@mui/icons-material';

const stats = [
  {
    title: 'Total Tasks',
    value: '156',
    change: '+12%',
    icon: <Assignment />,
    color: '#0D47A1',
    gradient: 'linear-gradient(135deg, #0D47A1 0%, #1976D2 100%)',
  },
  {
    title: 'Completed Tests',
    value: '89',
    change: '+8%',
    icon: <Quiz />,
    color: '#00695C',
    gradient: 'linear-gradient(135deg, #00695C 0%, #4DB6AC 100%)',
  },
  {
    title: 'Success Rate',
    value: '94%',
    change: '+3%',
    icon: <TrendingUp />,
    color: '#1976D2',
    gradient: 'linear-gradient(135deg, #1976D2 0%, #42A5F5 100%)',
  },
  {
    title: 'Pending Items',
    value: '23',
    change: '-5%',
    icon: <Schedule />,
    color: '#F57C00',
    gradient: 'linear-gradient(135deg, #F57C00 0%, #FFB74D 100%)',
  },
];

const recentTasks = [
  { id: 1, title: 'Complete React Dashboard', status: 'completed', priority: 'high', dueDate: '2024-01-15' },
  { id: 2, title: 'Firebase Integration', status: 'in-progress', priority: 'medium', dueDate: '2024-01-18' },
  { id: 3, title: 'UI Testing', status: 'pending', priority: 'low', dueDate: '2024-01-20' },
  { id: 4, title: 'Code Review', status: 'pending', priority: 'high', dueDate: '2024-01-17' },
];

const upcomingEvents = [
  { id: 1, title: 'Team Meeting', time: '10:00 AM', date: 'Today' },
  { id: 2, title: 'Project Review', time: '2:00 PM', date: 'Tomorrow' },
  { id: 3, title: 'Client Presentation', time: '11:00 AM', date: 'Jan 20' },
];

const getStatusColor = (status) => {
  switch (status) {
    case 'completed': return '#4CAF50';
    case 'in-progress': return '#FF9800';
    case 'pending': return '#F44336';
    default: return '#757575';
  }
};

const getStatusIcon = (status) => {
  switch (status) {
    case 'completed': return <CheckCircle />;
    case 'in-progress': return <Schedule />;
    case 'pending': return <Warning />;
    default: return <Schedule />;
  }
};

const DashboardHome = () => {
  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 1, fontWeight: 700 }}>
          Welcome Back, Nirmal! 🌊
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Here's what's happening with your projects today.
        </Typography>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card 
              sx={{ 
                height: '100%', 
                cursor: 'pointer',
                background: stat.gradient,
                color: 'white',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 40px rgba(13, 71, 161, 0.2)',
                },
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography color="rgba(255,255,255,0.8)" gutterBottom variant="body2">
                      {stat.title}
                    </Typography>
                    <Typography variant="h4" component="div" sx={{ fontWeight: 700, color: 'white' }}>
                      {stat.value}
                    </Typography>
                    <Chip
                      label={stat.change}
                      size="small"
                      sx={{
                        mt: 1,
                        backgroundColor: stat.change.startsWith('+') ? 'rgba(76, 175, 80, 0.2)' : 'rgba(244, 67, 54, 0.2)',
                        color: stat.change.startsWith('+') ? '#4CAF50' : '#F44336',
                        fontWeight: 600,
                        border: `1px solid ${stat.change.startsWith('+') ? '#4CAF50' : '#F44336'}`,
                      }}
                    />
                  </Box>
                  <Avatar sx={{ backgroundColor: 'rgba(255,255,255,0.2)', width: 60, height: 60 }}>
                    {stat.icon}
                  </Avatar>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        {/* Recent Tasks */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Recent Tasks
                </Typography>
                <Chip 
                  label="4 Active" 
                  color="primary" 
                  size="small"
                  sx={{ fontWeight: 600 }}
                />
              </Box>
              {recentTasks.map((task) => (
                <Paper
                  key={task.id}
                  elevation={0}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    p: 2,
                    mb: 2,
                    borderRadius: 3,
                    backgroundColor: '#f8f9ff',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease-in-out',
                    border: '1px solid #e3f2fd',
                    '&:hover': {
                      backgroundColor: '#e3f2fd',
                      transform: 'translateX(8px)',
                      borderColor: '#1976d2',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <IconButton size="small" sx={{ color: getStatusColor(task.status) }}>
                      {getStatusIcon(task.status)}
                    </IconButton>
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        {task.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Due: {task.dueDate}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Chip
                      label={task.status}
                      size="small"
                      sx={{
                        backgroundColor: getStatusColor(task.status),
                        color: 'white',
                        fontWeight: 600,
                      }}
                    />
                    <Chip
                      label={task.priority}
                      size="small"
                      variant="outlined"
                      color={task.priority === 'high' ? 'error' : task.priority === 'medium' ? 'warning' : 'default'}
                    />
                  </Box>
                </Paper>
              ))}
            </CardContent>
          </Card>
        </Grid>

        {/* Right Side Cards */}
        <Grid item xs={12} md={4}>
          <Grid container spacing={3}>
            {/* Progress Overview */}
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Progress Overview
                  </Typography>
                  
                  <Box sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2">Tasks Completed</Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>78%</Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={78}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: '#E3F2FD',
                        '& .MuiLinearProgress-bar': {
                          background: 'linear-gradient(90deg, #0D47A1 0%, #1976D2 100%)',
                          borderRadius: 4,
                        },
                      }}
                    />
                  </Box>

                  <Box sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2">Tests Passed</Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>92%</Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={92}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: '#E0F2F1',
                        '& .MuiLinearProgress-bar': {
                          background: 'linear-gradient(90deg, #00695C 0%, #4DB6AC 100%)',
                          borderRadius: 4,
                        },
                      }}
                    />
                  </Box>

                  <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2">Overall Progress</Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>85%</Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={85}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: '#FFF3E0',
                        '& .MuiLinearProgress-bar': {
                          background: 'linear-gradient(90deg, #F57C00 0%, #FFB74D 100%)',
                          borderRadius: 4,
                        },
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Upcoming Events */}
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <CalendarToday sx={{ mr: 1, color: '#1976D2' }} />
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      Upcoming Events
                    </Typography>
                  </Box>
                  {upcomingEvents.map((event) => (
                    <Box
                      key={event.id}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        p: 1.5,
                        mb: 1,
                        borderRadius: 2,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease-in-out',
                        '&:hover': {
                          backgroundColor: '#f5f5f5',
                        },
                      }}
                    >
                      <Box sx={{ mr: 2 }}>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          {event.time}
                        </Typography>
                        <Typography variant="caption" color="textSecondary">
                          {event.date}
                        </Typography>
                      </Box>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {event.title}
                      </Typography>
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardHome;