import React, { useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Checkbox,
  Button,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const colorOptions = ['#04454B', '#028288', '#71CDD4', '#D8EAEF', '#E5E3DF'];

export default function TaskList() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleMenuOpen = (event, cardId) => {
    setAnchorEl(event.currentTarget);
    setSelectedCard(cardId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleEditColor = () => {
    setDialogOpen(true);
    handleMenuClose();
  };

  const handleColorPick = (color) => {
    // Update the color for selectedCard (use context or state)
    console.log('Color selected for card:', selectedCard, color);
    setDialogOpen(false);
  };

  return (
    <Box p={3}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h5">My Subjects</Typography>
        <Box>
          <Button variant="contained" sx={{ mr: 2 }}>
            Add Subject
          </Button>
          <Button variant="contained" color="secondary">
            Add Test Marks
          </Button>
        </Box>
      </Box>

      {/* Example Subject Card */}
      <Box
        sx={{
          bgcolor: '#D8EAEF',
          borderRadius: 3,
          p: 2,
          mb: 3,
          position: 'relative',
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography fontWeight={600}>swethas24bcg058@skasc.ac.in</Typography>
          <IconButton onClick={(e) => handleMenuOpen(e, 'card1')}>
            <MoreVertIcon />
          </IconButton>
        </Box>

        <Button sx={{ mt: 1 }} size="small">
          + ADD CHAPTER
        </Button>
        <Typography sx={{ mt: 2 }}>Sample Chapter Title</Typography>

        <Box sx={{ ml: 1, mt: 1 }}>
          <Checkbox /> Task 1
          <br />
          <Checkbox /> Task 2
          <br />
          <Checkbox /> Subtask 1.1
        </Box>
      </Box>

      {/* Menu */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={handleEditColor}>Edit Color</MenuItem>
        <MenuItem>Delete</MenuItem>
      </Menu>

      {/* Color Picker Dialog */}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Select Card Color</DialogTitle>
        <DialogContent>
          <Box display="flex" justifyContent="space-between" p={1}>
            {colorOptions.map((color) => (
              <Box
                key={color}
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  bgcolor: color,
                  cursor: 'pointer',
                  border: '2px solid #fff',
                  boxShadow: '0 0 6px rgba(0,0,0,0.1)',
                }}
                onClick={() => handleColorPick(color)}
              />
            ))}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
