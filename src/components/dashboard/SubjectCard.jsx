import React, { useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Paper,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const colorOptions = ['#004e64', '#027373', '#038c8c', '#b2dfdb', '#d6e4f0', '#e8e8e8'];

export default function SubjectCard({ subject, onDelete, onColorChange }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
    setShowColorPicker(false);
  };

  const handleClose = () => setAnchorEl(null);

  return (
    <Paper
      sx={{
        backgroundColor: subject.color || '#f2f2f2',
        p: 2,
        borderRadius: 4,
        mb: 2,
        position: 'relative',
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography fontWeight="bold">{subject.name}</Typography>
        <IconButton onClick={handleMenuClick}>
          <MoreVertIcon />
        </IconButton>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem
            onClick={() => {
              setShowColorPicker(true);
              handleClose();
            }}
          >
            Edit Color
          </MenuItem>
          <MenuItem
            onClick={() => {
              onDelete(subject.id);
              handleClose();
            }}
          >
            Delete
          </MenuItem>
        </Menu>
      </Box>

      <Button size="small" sx={{ mt: 1 }} variant="outlined">
        + Add Chapter
      </Button>

      {/* Color Picker */}
      {showColorPicker && (
        <Box
          sx={{
            mt: 2,
            p: 2,
            borderRadius: 2,
            boxShadow: 3,
            backgroundColor: '#fff',
            display: 'flex',
            gap: 1,
            justifyContent: 'center',
            zIndex: 10,
          }}
        >
          {colorOptions.map((color) => (
            <Box
              key={color}
              onClick={() => {
                onColorChange(subject.id, color);
                setShowColorPicker(false);
              }}
              sx={{
                width: 30,
                height: 30,
                borderRadius: '50%',
                backgroundColor: color,
                cursor: 'pointer',
                border: '2px solid #ccc',
              }}
            />
          ))}
        </Box>
      )}
    </Paper>
  );
}
