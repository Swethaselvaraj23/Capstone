import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { CalendarMonth, AddCircleOutline } from '@mui/icons-material';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';

export default function CalendarEvents() {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [open, setOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState('');

  const handleAddEvent = () => {
    if (newEvent.trim() !== '') {
      setEvents((prev) => [...prev, { date: selectedDate.format('YYYY-MM-DD'), text: newEvent }]);
      setNewEvent('');
      setOpen(false);
    }
  };

  const eventsForSelectedDate = events.filter(
    (event) => event.date === selectedDate.format('YYYY-MM-DD')
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box p={3} display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={4}>
        {/* Calendar and Add Button */}
        <Box>
          <Typography variant="h6" fontWeight={600} mb={2}>Calendar</Typography>
          <DateCalendar
            value={selectedDate}
            onChange={(newDate) => setSelectedDate(newDate)}
          />
          <IconButton
            sx={{ mt: 2, color: '#028288' }}
            onClick={() => setOpen(true)}
          >
            <AddCircleOutline fontSize="large" />
          </IconButton>
        </Box>

        {/* Events for the selected date */}
        <Box flex={1}>
          <Typography variant="h6" fontWeight={600} mb={2}>
            Events on {selectedDate.format('DD MMM YYYY')}
          </Typography>
          {eventsForSelectedDate.length === 0 ? (
            <Typography color="text.secondary">No events for this day.</Typography>
          ) : (
            <List>
              {eventsForSelectedDate.map((event, index) => (
                <ListItem key={index}>
                  <ListItemText primary={event.text} />
                </ListItem>
              ))}
            </List>
          )}
        </Box>

        {/* Dialog for Adding Event */}
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>Add Event</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Event Title"
              fullWidth
              variant="outlined"
              value={newEvent}
              onChange={(e) => setNewEvent(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={handleAddEvent} variant="contained">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </LocalizationProvider>
  );
}
