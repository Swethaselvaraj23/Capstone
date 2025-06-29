import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Chip,
  Avatar,
  Paper,
  IconButton,
} from '@mui/material';
import {
  ChevronLeft,
  ChevronRight,
  Event,
  Person,
  Schedule,
  Add,
} from '@mui/icons-material';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const events = [
    { id: 1, title: 'Team Meeting', time: '10:00 AM', date: '2024-01-15', type: 'meeting', attendees: 5 },
    { id: 2, title: 'Project Review', time: '2:00 PM', date: '2024-01-16', type: 'review', attendees: 3 },
    { id: 3, title: 'Client Presentation', time: '11:00 AM', date: '2024-01-18', type: 'presentation', attendees: 8 },
    { id: 4, title: 'Code Review', time: '3:30 PM', date: '2024-01-19', type: 'review', attendees: 4 },
    { id: 5, title: 'Sprint Planning', time: '9:00 AM', date: '2024-01-22', type: 'planning', attendees: 6 },
  ];

  const upcomingEvents = events.slice(0, 3);

  const getEventTypeColor = (type) => {
    switch (type) {
      case 'meeting': return '#0D47A1';
      case 'review': return '#00695C';
      case 'presentation': return '#F57C00';
      case 'planning': return '#7B1FA2';
      default: return '#1976D2';
    }
  };

  const getEventTypeGradient = (type) => {
    switch (type) {
      case 'meeting': return 'linear-gradient(135deg, #0D47A1 0%, #1976D2 100%)';
      case 'review': return 'linear-gradient(135deg, #00695C 0%, #4DB6AC 100%)';
      case 'presentation': return 'linear-gradient(135deg, #F57C00 0%, #FFB74D 100%)';
      case 'planning': return 'linear-gradient(135deg, #7B1FA2 0%, #BA68C8 100%)';
      default: return 'linear-gradient(135deg, #1976D2 0%, #42A5F5 100%)';
    }
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const formatMonthYear = (date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const hasEvent = (day) => {
    const dateStr = `2024-01-${day.toString().padStart(2, '0')}`;
    return events.some(event => event.date === dateStr);
  };

  const days = getDaysInMonth(currentDate);
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Box>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
            Calendar
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Manage your schedule and events
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<Add />}
          sx={{
            borderRadius: 3,
            background: 'linear-gradient(45deg, #0D47A1 30%, #1976D2 90%)',
            '&:hover': {
              background: 'linear-gradient(45deg, #0D47A1 60%, #1976D2 100%)',
            },
          }}
        >
          Add Event
        </Button>
      </Box>

      <Grid container spacing={3}>
        {/* Calendar */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              {/* Calendar Header */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {formatMonthYear(currentDate)}
                </Typography>
                <Box>
                  <IconButton onClick={() => navigateMonth(-1)}>
                    <ChevronLeft />
                  </IconButton>
                  <IconButton onClick={() => navigateMonth(1)}>
                    <ChevronRight />
                  </IconButton>
                </Box>
              </Box>

              {/* Week Days Header */}
              <Grid container spacing={1} sx={{ mb: 1 }}>
                {weekDays.map((day) => (
                  <Grid item xs key={day} sx={{ textAlign: 'center' }}>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: '#666' }}>
                      {day}
                    </Typography>
                  </Grid>
                ))}
              </Grid>

              {/* Calendar Days */}
              <Grid container spacing={1}>
                {days.map((day, index) => (
                  <Grid item xs key={index} sx={{ textAlign: 'center' }}>
                    <Paper
                      elevation={0}
                      sx={{
                        height: 60,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: day ? 'pointer' : 'default',
                        backgroundColor: day ? '#f8f9ff' : 'transparent',
                        border: hasEvent(day) ? '2px solid #1976D2' : '1px solid #e0e0e0',
                        borderRadius: 2,
                        position: 'relative',
                        '&:hover': {
                          backgroundColor: day ? '#e3f2fd' : 'transparent',
                        },
                      }}
                    >
                      {day && (
                        <>
                          <Typography
                            variant="body2"
                            sx={{
                              fontWeight: hasEvent(day) ? 600 : 400,
                              color: hasEvent(day) ? '#1976D2' : 'inherit',
                            }}
                          >
                            {day}
                          </Typography>
                          {hasEvent(day) && (
                            <Box
                              sx={{
                                position: 'absolute',
                                bottom: 4,
                                width: 6,
                                height: 6,
                                backgroundColor: '#1976D2',
                                borderRadius: '50%',
                              }}
                            />
                          )}
                        </>
                      )}
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Upcoming Events */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Upcoming Events
              </Typography>
              
              {upcomingEvents.map((event) => (
                <Paper
                  key={event.id}
                  elevation={0}
                  sx={{
                    p: 2,
                    mb: 2,
                    borderRadius: 3,
                    background: getEventTypeGradient(event.type),
                    color: 'white',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Event sx={{ mr: 1, fontSize: 20 }} />
                    <Typography variant="body1" sx={{ fontWeight: 600, flex: 1 }}>
                      {event.title}
                    </Typography>
                    <Chip
                      label={event.type}
                      size="small"
                      sx={{
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        color: 'white',
                        fontWeight: 500,
                      }}
                    />
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Schedule sx={{ mr: 1, fontSize: 16 }} />
                      <Typography variant="body2">
                        {event.time}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Person sx={{ mr: 1, fontSize: 16 }} />
                      <Typography variant="body2">
                        {event.attendees} attendees
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Typography variant="body2" sx={{ mt: 1, opacity: 0.9 }}>
                    {event.date}
                  </Typography>
                </Paper>
              ))}
            </CardContent>
          </Card>

          {/* Calendar Stats */}
          <Card sx={{ mt: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                This Month
              </Typography>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="body2">Total Events</Typography>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {events.length}
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="body2">Meetings</Typography>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {events.filter(e => e.type === 'meeting').length}
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2">Reviews</Typography>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {events.filter(e => e.type === 'review').length}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Calendar;