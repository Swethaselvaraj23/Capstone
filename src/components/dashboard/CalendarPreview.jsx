import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Divider,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function CalendarPreview() {
  const currentMonth = 'May 2025';
  const upcomingEvents = [
    { name: 'UX Design Workshop', date: 'May 16', time: '2:00 PM' },
    { name: 'Web Dev Project Due', date: 'May 18', time: '11:59 PM' },
  ];

  return (
    <Box
      sx={{
        bgcolor: 'white',
        borderRadius: 4,
        p: 2,
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        width: 300,
      }}
    >
      <Typography variant="h6" fontWeight="bold" mb={1}>
        Calendar
      </Typography>

      {/* Mini Month Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <IconButton size="small">
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>
        <Typography>{currentMonth}</Typography>
        <IconButton size="small">
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* Mini Calendar Grid */}
      <Box display="grid" gridTemplateColumns="repeat(7, 1fr)" gap={1} mt={2}>
        {[...['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']].map((d) => (
          <Typography key={d} fontWeight={600} fontSize="0.75rem" textAlign="center">
            {d}
          </Typography>
        ))}
        {[...Array(31)].map((_, i) => (
          <Box
            key={i}
            sx={{
              width: 30,
              height: 30,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: i === 15 ? '#028288' : 'transparent',
              color: i === 15 ? '#fff' : '#333',
              fontSize: '0.75rem',
              fontWeight: i === 15 ? 'bold' : 400,
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: '#71CDD4',
                color: '#fff',
              },
            }}
          >
            {i + 1}
          </Box>
        ))}
      </Box>

      {/* Upcoming Events */}
      <Divider sx={{ my: 2 }} />
      <Typography fontWeight={600} fontSize="0.875rem" mb={1}>
        Upcoming Events
      </Typography>
      {upcomingEvents.map((event, idx) => (
        <Box key={idx} display="flex" flexDirection="column" mb={1}>
          <Typography fontSize="0.85rem" fontWeight={500}>
            • {event.name}
          </Typography>
          <Typography fontSize="0.75rem" color="gray">
            {event.date}, {event.time}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
