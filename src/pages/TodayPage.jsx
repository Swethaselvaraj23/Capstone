import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Stack,
  Paper,
  Fab,
  Checkbox,
  Dialog,
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';

function TodayPage() {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [dates, setDates] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [calendarOpen, setCalendarOpen] = useState(false);

  useEffect(() => {
    let days = [];
    const startDate = dayjs().subtract(15, 'day');
    for (let i = 0; i < 90; i++) {
      const day = startDate.add(i, 'day');
      days.push(day);
    }
    setDates(days);
  }, []);

  useEffect(() => {
    if (selectedDate.isSame(dayjs(), 'day')) {
      setTasks([
        {
          id: 1,
          icon: '$',
          title: 'Record Expenses',
          type: 'Habit',
          time: '09:00 PM',
          completed: false,
        },
      ]);
    } else {
      setTasks([]);
    }
  }, [selectedDate]);

  const handleCalendarChange = (newValue) => {
    if (newValue) {
      setSelectedDate(newValue);
      setCalendarOpen(false);
    }
  };

  return (
    <Box
      sx={{
        px: 3,
        pt: 2,
        pb: 10,
        backgroundColor: 'background.default',
        minHeight: '100vh',
      }}
    >
      {/* Top Bar */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <IconButton edge="start">
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" fontWeight="bold">
            Today
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <Fab
            size="small"
            color="primary"
            sx={{
              boxShadow: 3,
              mr: 1,
            }}
          >
            <AddIcon />
          </Fab>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <FilterListIcon />
          </IconButton>
          <IconButton onClick={() => setCalendarOpen(true)}>
            <CalendarTodayIcon />
          </IconButton>
          <IconButton>
            <HelpOutlineIcon />
          </IconButton>
        </Stack>
      </Stack>

      {/* Calendar Dialog */}
      <Dialog open={calendarOpen} onClose={() => setCalendarOpen(false)}>
        <Box sx={{ p: 2 }}>
          <DateCalendar
            value={selectedDate}
            onChange={handleCalendarChange}
          />
        </Box>
      </Dialog>

      {/* Scrollable Calendar */}
      <Box
        sx={{
          display: 'flex',
          overflowX: 'auto',
          overflowY: 'hidden',
          pb: 2,
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {dates.map((day) => {
          const isSelected = selectedDate.isSame(day, 'day');
          return (
            <Paper
              key={day.format('YYYY-MM-DD')}
              onClick={() => setSelectedDate(day)}
              sx={{
                flex: '0 0 auto',
                width: 60,
                height: 70,
                mx: 1,
                borderRadius: 2,
                backgroundColor: isSelected
                  ? 'primary.main'
                  : 'grey.100',
                color: isSelected ? 'common.white' : 'text.primary',
                textAlign: 'center',
                cursor: 'pointer',
                boxShadow: isSelected ? 4 : 1,
                transition: 'all 0.2s ease',
              }}
            >
              <Typography variant="body2" sx={{ mt: 1 }}>
                {day.format('ddd')}
              </Typography>
              <Typography variant="h6" fontWeight="bold">
                {day.format('D')}
              </Typography>
            </Paper>
          );
        })}
      </Box>

      {/* Task List */}
      {tasks.length > 0 ? (
        <Stack spacing={2} mt={3}>
          {tasks.map((task) => (
            <Paper
              key={task.id}
              sx={{
                p: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'background.paper',
                borderRadius: 2,
                boxShadow: 2,
                width: '100%',
              }}
            >
              <Stack direction="row" spacing={2} alignItems="center">
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    backgroundColor: 'success.main',
                    borderRadius: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'common.white',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                  }}
                >
                  {task.icon}
                </Box>
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {task.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {task.type} · {task.time}
                  </Typography>
                </Box>
              </Stack>
              <Checkbox
                checked={task.completed}
                onChange={() => {
                  setTasks((prev) =>
                    prev.map((t) =>
                      t.id === task.id
                        ? { ...t, completed: !t.completed }
                        : t
                    )
                  );
                }}
              />
            </Paper>
          ))}
        </Stack>
      ) : (
        <Typography color="text.secondary" sx={{ mt: 5 }}>
          No tasks or habits for this day.
        </Typography>
      )}
    </Box>
  );
}

export default TodayPage;
