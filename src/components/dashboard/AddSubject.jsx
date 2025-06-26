// components/dashboard/AddSubject.jsx

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
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const colorOptions = ['#04454B', '#028288', '#71CDD4', '#D8EAEF', '#E5E3DF'];

export default function AddSubject() {
  const [subjects, setSubjects] = useState([]);
  const [newSubject, setNewSubject] = useState('');
  const [topics, setTopics] = useState({});
  const [subtopics, setSubtopics] = useState({});
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [colorDialogOpen, setColorDialogOpen] = useState(false);
  const [topicDialogOpen, setTopicDialogOpen] = useState(false);
  const [subtopicDialogOpen, setSubtopicDialogOpen] = useState(false);
  const [newTopic, setNewTopic] = useState('');
  const [newSubtopic, setNewSubtopic] = useState('');

  const handleAddSubject = () => {
    if (newSubject.trim()) {
      setSubjects([...subjects, { name: newSubject, color: '#D8EAEF' }]);
      setNewSubject('');
    }
  };

  const handleDeleteSubject = (index) => {
    const updated = [...subjects];
    updated.splice(index, 1);
    setSubjects(updated);
    const subjName = subjects[index].name;
    const updatedTopics = { ...topics };
    const updatedSubtopics = { ...subtopics };
    delete updatedTopics[subjName];
    delete updatedSubtopics[subjName];
    setTopics(updatedTopics);
    setSubtopics(updatedSubtopics);
  };

  const handleOpenTopicDialog = (index) => {
    setSelectedSubject(index);
    setTopicDialogOpen(true);
  };

  const handleOpenSubtopicDialog = (index) => {
    setSelectedSubject(index);
    setSubtopicDialogOpen(true);
  };

  const handleAddTopic = () => {
    const subject = subjects[selectedSubject].name;
    if (newTopic.trim()) {
      const updatedTopics = { ...topics };
      updatedTopics[subject] = [...(updatedTopics[subject] || []), newTopic.trim()];
      setTopics(updatedTopics);
      setNewTopic('');
      setTopicDialogOpen(false);
    }
  };

  const handleAddSubtopic = () => {
    const subject = subjects[selectedSubject].name;
    if (newSubtopic.trim()) {
      const updatedSubtopics = { ...subtopics };
      updatedSubtopics[subject] = [...(updatedSubtopics[subject] || []), newSubtopic.trim()];
      setSubtopics(updatedSubtopics);
      setNewSubtopic('');
      setSubtopicDialogOpen(false);
    }
  };

  const handleOpenMenu = (event, index) => {
    setSelectedSubject(index);
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleEditColor = () => {
    setColorDialogOpen(true);
    handleCloseMenu();
  };

  const handleColorPick = (color) => {
    const updated = [...subjects];
    updated[selectedSubject].color = color;
    setSubjects(updated);
    setColorDialogOpen(false);
  };

  return (
    <Box>
      <Typography variant="h6" fontWeight={600} mb={2}>Add Subject with Topics and Subtopics</Typography>

      <Box display="flex" gap={2} mb={2}>
        <TextField
          label="Subject Name"
          variant="outlined"
          value={newSubject}
          onChange={(e) => setNewSubject(e.target.value)}
        />
        <Button variant="contained" onClick={handleAddSubject}>
          Add
        </Button>
      </Box>

      <List>
        {subjects.map((subj, index) => (
          <ListItem
            key={index}
            sx={{ bgcolor: subj.color, borderRadius: 2, mb: 1 }}
            secondaryAction={
              <IconButton onClick={(e) => handleOpenMenu(e, index)}>
                <MoreVertIcon />
              </IconButton>
            }
          >
            <ListItemText
              primary={subj.name}
              secondary={
                <>
                  {(topics[subj.name] || []).map((t, i) => (
                    <div key={i}>• {t}</div>
                  ))}
                  {(subtopics[subj.name] || []).map((s, i) => (
                    <div key={i}>↳ {s}</div>
                  ))}
                </>
              }
            />
            <Button onClick={() => handleOpenTopicDialog(index)} sx={{ ml: 1 }}>+ Topic</Button>
            <Button onClick={() => handleOpenSubtopicDialog(index)} sx={{ ml: 1 }}>+ Subtopic</Button>
          </ListItem>
        ))}
      </List>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
        <MenuItem onClick={handleEditColor}>Edit Color</MenuItem>
        <MenuItem onClick={() => handleDeleteSubject(selectedSubject)}>Delete</MenuItem>
      </Menu>

      <Dialog open={colorDialogOpen} onClose={() => setColorDialogOpen(false)}>
        <DialogTitle>Select Card Color</DialogTitle>
        <DialogContent>
          <Box display="flex" gap={2} mt={2}>
            {colorOptions.map((color) => (
              <Box
                key={color}
                onClick={() => handleColorPick(color)}
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  bgcolor: color,
                  cursor: 'pointer',
                  border: '2px solid #fff',
                  boxShadow: '0 0 6px rgba(0,0,0,0.2)',
                }}
              />
            ))}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setColorDialogOpen(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={topicDialogOpen} onClose={() => setTopicDialogOpen(false)}>
        <DialogTitle>Add Topic</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            fullWidth
            label="Topic Name"
            variant="outlined"
            value={newTopic}
            onChange={(e) => setNewTopic(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setTopicDialogOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleAddTopic}>Add</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={subtopicDialogOpen} onClose={() => setSubtopicDialogOpen(false)}>
        <DialogTitle>Add Subtopic</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            fullWidth
            label="Subtopic (e.g. Test Marks, Notes)"
            variant="outlined"
            value={newSubtopic}
            onChange={(e) => setNewSubtopic(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSubtopicDialogOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleAddSubtopic}>Add</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
