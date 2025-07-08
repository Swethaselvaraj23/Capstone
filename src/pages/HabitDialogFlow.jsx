// components/HabitDialogFlow.jsx
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  TextField,
  Stack,
  Tooltip,
  FormControlLabel,
  Switch,
  Typography,
  MenuItem,
} from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";

export default function HabitDialogFlow({ open, onClose, onSave }) {
  const [step, setStep] = useState("type");
  const [selectedType, setSelectedType] = useState(null);
  const [selectedProgressType, setSelectedProgressType] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [habit, setHabit] = useState("");
  const [description, setDescription] = useState("");
  const [frequency, setFrequency] = useState("Every Day");
  const [startDate, setStartDate] = useState(null);
  const [hasEndDate, setHasEndDate] = useState(false);
  const [endDate, setEndDate] = useState(null);
  const [time, setTime] = useState(null);

  const resetFlow = () => {
    setStep("type");
    setSelectedType(null);
    setSelectedProgressType(null);
    setSelectedCategory(null);
    setHabit("");
    setDescription("");
    setFrequency("Every Day");
    setStartDate(null);
    setHasEndDate(false);
    setEndDate(null);
    setTime(null);
  };

  const types = [
    { label: "Habit", value: "Habit", icon: "🪴" },
    { label: "Recurring Task", value: "RecurringTask", icon: "🔁" },
    { label: "Task", value: "Task", icon: "✅" },
  ];

  const progressTypes = [
    { label: "Yes / No", value: "Yes/No", icon: "✅", description: "Simple binary progress." },
    { label: "Numeric", value: "Numeric", icon: "🔢", description: "Track a number." },
    { label: "Timer", value: "Timer", icon: "⏱️", description: "Track duration." },
    { label: "Checklist", value: "Checklist", icon: "📝", description: "Multiple steps." },
  ];

  const categories = [
    { label: "Quit a bad habit", value: "bad_habit", color: "#e53935", icon: "🚫" },
    { label: "Art", value: "art", color: "#d81b60", icon: "🎨" },
    { label: "Meditation", value: "meditation", color: "#8e24aa", icon: "🧘" },
    { label: "Study", value: "study", color: "#5e35b1", icon: "🎓" },
    { label: "Sports", value: "sports", color: "#3949ab", icon: "🚴" },
    { label: "Entertainment", value: "entertainment", color: "#00838f", icon: "🎟️" },
    { label: "Social", value: "social", color: "#00897b", icon: "💬" },
    { label: "Finance", value: "finance", color: "#43a047", icon: "💵" },
    { label: "Health", value: "health", color: "#7cb342", icon: "➕" },
    { label: "Work", value: "work", color: "#c0ca33", icon: "💼" },
    { label: "Nutrition", value: "nutrition", color: "#f9a825", icon: "🍽️" },
    { label: "Home", value: "home", color: "#fb8c00", icon: "🏠" },
    { label: "Outdoor", value: "outdoor", color: "#f4511e", icon: "⛰️" },
    { label: "Other", value: "other", color: "#d84315", icon: "🎁" },
  ];

  return (
    <>
      {/* Type Selector Dialog */}
      <Dialog open={open && step === "type"} onClose={onClose} fullWidth maxWidth="md">
        <DialogTitle>What do you want to create?</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            {types.map((t) => (
              <Grid item xs={4} key={t.value}>
                <Card>
                  <CardActionArea
                    onClick={() => {
                      setSelectedType(t);
                      setStep("progress");
                    }}
                  >
                    <CardContent sx={{ textAlign: "center" }}>
                      <Typography variant="h3">{t.icon}</Typography>
                      <Typography>{t.label}</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
      </Dialog>

      {/* Progress Type Selector Dialog */}
      <Dialog open={open && step === "progress"} onClose={() => setStep("type")} fullWidth maxWidth="md">
        <DialogTitle>Select Progress Type</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            {progressTypes.map((p) => (
              <Grid item xs={6} sm={3} key={p.value}>
                <Tooltip title={p.description}>
                  <Card sx={{ height: "100%", textAlign: "center" }}>
                    <CardActionArea
                      onClick={() => {
                        setSelectedProgressType(p);
                        setStep("category");
                      }}
                      sx={{ height: "100%" }}
                    >
                      <CardContent>
                        <Typography variant="h3">{p.icon}</Typography>
                        <Typography>{p.label}</Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Tooltip>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setStep("type")}>Back</Button>
        </DialogActions>
      </Dialog>

      {/* Category Selector Dialog */}
      <Dialog open={open && step === "category"} onClose={() => setStep("progress")} fullWidth maxWidth="md">
        <DialogTitle>Select a Category</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            {categories.map((c) => (
              <Grid item xs={6} sm={3} key={c.value}>
                <Card sx={{ backgroundColor: c.color, color: "#fff" }}>
                  <CardActionArea
                    onClick={() => {
                      setSelectedCategory(c);
                      setStep("form");
                    }}
                  >
                    <CardContent sx={{ textAlign: "center" }}>
                      <Typography variant="h3">{c.icon}</Typography>
                      <Typography>{c.label}</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setStep("progress")}>Back</Button>
        </DialogActions>
      </Dialog>

      {/* Form Dialog */}
      <Dialog open={open && step === "form"} onClose={() => setStep("category")} fullWidth maxWidth="md">
        <DialogTitle sx={{ color: selectedCategory?.color }}>
          {selectedCategory?.icon} {selectedCategory?.label}
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 2 }}>
            <TextField
              label="Habit"
              value={habit}
              onChange={(e) => setHabit(e.target.value)}
              fullWidth
            />
            <TextField
              label="Description"
              multiline
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              fullWidth
            />
            <TextField
              select
              label="Frequency"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              fullWidth
            >
              <MenuItem value="Every Day">Every Day</MenuItem>
              <MenuItem value="Specific Days">Specific Days</MenuItem>
              <MenuItem value="Days of Month">Days of Month</MenuItem>
              <MenuItem value="Some Period">Some Period</MenuItem>
            </TextField>
            <DatePicker
              label="Start Date"
              value={startDate}
              onChange={setStartDate}
            />
            <FormControlLabel
              control={
                <Switch
                  checked={hasEndDate}
                  onChange={() => setHasEndDate(!hasEndDate)}
                />
              }
              label="Set End Date?"
            />
            {hasEndDate && (
              <DatePicker
                label="End Date"
                value={endDate}
                onChange={setEndDate}
              />
            )}
            <TimePicker
              label="Preferred Time"
              value={time}
              onChange={setTime}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setStep("category")}>Back</Button>
          <Button
            variant="contained"
            onClick={() => {
              onSave({
                habit,
                description,
                frequency,
                startDate,
                endDate: hasEndDate ? endDate : null,
                time,
                type: selectedType,
                progressType: selectedProgressType,
                category: selectedCategory,
              });
              resetFlow();
              onClose();
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
