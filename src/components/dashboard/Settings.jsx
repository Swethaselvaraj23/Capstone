import React, { useState } from 'react';
import {
  Box,
  Typography,
  Switch,
  FormControlLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Button,
  MenuItem,
  Checkbox,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [aiEnabled, setAiEnabled] = useState(true);
  const [notifEnabled, setNotifEnabled] = useState(true);
  const [nickname, setNickname] = useState('');

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>
        ⚙️ Settings
      </Typography>

      {/* Theme Section */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>🎨 Appearance</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel
            control={<Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />}
            label="Enable Dark Mode"
          />
        </AccordionDetails>
      </Accordion>

      {/* Notifications */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>🔔 Notifications</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel
            control={<Checkbox checked={notifEnabled} onChange={() => setNotifEnabled(!notifEnabled)} />}
            label="Show Affirmation Pop-ups"
          />
        </AccordionDetails>
      </Accordion>

      {/* AI Settings */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>🧠 AI Planner</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel
            control={<Switch checked={aiEnabled} onChange={() => setAiEnabled(!aiEnabled)} />}
            label="Enable Jellyfish Assistant"
          />
        </AccordionDetails>
      </Accordion>

      {/* Account Settings */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>👤 Account</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextField
            label="Change Nickname"
            variant="outlined"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            fullWidth
            sx={{ mb: 2 }}
          />
          <Button variant="contained" color="primary">Update</Button>
        </AccordionDetails>
      </Accordion>

      {/* Export Option */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>📤 Export Data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Button variant="outlined" color="secondary">Download CSV</Button>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
