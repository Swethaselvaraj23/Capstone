import React, { useState } from "react";
import {
  Box,
  TextField,
  Stack,
  Typography,
  MenuItem,
  FormControlLabel,
  Switch,
  Button,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";

export default function HabitChecklistForm({ onBack, onSave }) {
  const [habit, setHabit] = useState("");
  const [description, setDescription] = useState("");
  const [items, setItems] = useState([""]);
  const [frequency, setFrequency] = useState("Every Day");
  const [startDate, setStartDate] = useState(new Date());
  const [hasEndDate, setHasEndDate] = useState(false);
  const [endDate, setEndDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const handleItemChange = (index, value) => {
    const newItems = [...items];
    newItems[index] = value;
    setItems(newItems);
  };

  const addItem = () => {
    setItems([...items, ""]);
  };

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Stack spacing={2}>
        <Typography variant="h6" fontWeight="bold">
          Define Your Habit (Checklist)
        </Typography>

        <TextField
          label="Habit"
          fullWidth
          value={habit}
          onChange={(e) => setHabit(e.target.value)}
        />

        <TextField
          label="Description"
          multiline
          rows={3}
          fullWidth
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Typography variant="subtitle1" fontWeight="bold">
          Checklist Items
        </Typography>

        {items.map((item, i) => (
          <Stack key={i} direction="row" spacing={1}>
            <TextField
              label={`Item ${i + 1}`}
              fullWidth
              value={item}
              onChange={(e) => handleItemChange(i, e.target.value)}
            />
            <IconButton onClick={() => removeItem(i)}>
              <DeleteIcon />
            </IconButton>
          </Stack>
        ))}

        <Button variant="outlined" onClick={addItem}>
          Add Item
        </Button>

        <TextField
          select
          label="How often do you want to do it?"
          fullWidth
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
        >
          <MenuItem value="Every Day">Every Day</MenuItem>
          <MenuItem value="Specific Days">Specific Days</MenuItem>
          <MenuItem value="Days of Month">Specific Days of Month</MenuItem>
          <MenuItem value="Some Period">Some Days per Period</MenuItem>
        </TextField>

        <Typography variant="subtitle1">When do you want to do it?</Typography>

        <DatePicker
          label="Start Date"
          value={startDate}
          onChange={(val) => setStartDate(val)}
        />

        <FormControlLabel
          control={
            <Switch
              checked={hasEndDate}
              onChange={() => setHasEndDate(!hasEndDate)}
            />
          }
          label="Set an end date?"
        />

        {hasEndDate && (
          <DatePicker
            label="End Date"
            value={endDate}
            onChange={(val) => setEndDate(val)}
          />
        )}

        <TimePicker
          label="Preferred Time"
          value={time}
          onChange={(val) => setTime(val)}
        />

        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Button variant="outlined" onClick={onBack}>
            Back
          </Button>
          <Button
            variant="contained"
            onClick={() =>
              onSave({
                habit,
                description,
                items,
                frequency,
                startDate,
                endDate: hasEndDate ? endDate : null,
                time,
              })
            }
          >
            Save
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
