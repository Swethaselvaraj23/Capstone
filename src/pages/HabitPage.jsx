// src/pages/HabitsPage.jsx

import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Stack,
} from '@mui/material';
import dayjs from 'dayjs';
import { useHabitContext } from '../contexts/HabitContext';

export default function HabitsPage() {
  const { savedHabits, toggleHabitProgress } = useHabitContext();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Your Habits
      </Typography>

      <Grid container spacing={2}>
        {savedHabits.length === 0 && (
          <Typography color="text.secondary">No habits created yet.</Typography>
        )}

        {savedHabits.map((habit, idx) => (
          <Grid item xs={12} key={idx}>
            <Card
              sx={{
                backgroundColor: '#212121',
                color: '#fff',
                borderRadius: 2,
              }}
            >
              <CardContent>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="h6">
                    {habit.category?.icon} {habit.habit}
                  </Typography>
                  <Chip
                    label={habit.frequency}
                    sx={{
                      bgcolor: habit.category?.color || 'primary.main',
                      color: '#fff',
                    }}
                  />
                </Stack>

                <Box sx={{ display: 'flex', mt: 2 }}>
                  {generateCalendarDots(habit, toggleHabitProgress)}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

function generateCalendarDots(habit, toggleHabitProgress) {
  const days = [];
  const today = dayjs();

  for (let i = -3; i <= 3; i++) {
    const date = today.add(i, 'day');
    const formatted = date.format('D');
    const done = habit.progressHistory?.some((d) =>
      dayjs(d).isSame(date, 'day')
    );

    days.push(
      <Box
        key={i}
        sx={{
          width: 32,
          height: 32,
          borderRadius: '50%',
          bgcolor: done
            ? habit.category?.color || 'primary.main'
            : '#424242',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mx: 0.5,
          cursor: 'pointer',
        }}
        onClick={() => {
          toggleHabitProgress(habit, date);
        }}
      >
        {formatted}
      </Box>
    );
  }

  return days;
}
