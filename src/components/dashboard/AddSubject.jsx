import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Checkbox,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Divider,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const colorPalette = [
  { name: 'Teal', value: '#028288' },
  { name: 'Navy', value: '#04454B' },
  { name: 'Coral', value: '#ff7043' },
  { name: 'Seafoam', value: '#D8EAEF' },
  { name: 'Light Blue', value: '#E6F1F3' },
];

export default function AddSubject({ subjects, setSubjects }) {
  const [newSubject, setNewSubject] = useState('');
  const [selectedColor, setSelectedColor] = useState(colorPalette[0].value);
  const [colorMenuAnchor, setColorMenuAnchor] = useState(null);
  const [expandedSubjectIndex, setExpandedSubjectIndex] = useState(null);

  const handleAdd = () => {
    if (newSubject.trim() !== '') {
      setSubjects([
        ...subjects,
        {
          name: newSubject.trim(),
          color: selectedColor,
          chapters: [], // NEW
        },
      ]);
      setNewSubject('');
      setSelectedColor(colorPalette[0].value);
    }
  };

  const handleDelete = (index) => {
    const updated = subjects.filter((_, i) => i !== index);
    setSubjects(updated);
    if (expandedSubjectIndex === index) {
      setExpandedSubjectIndex(null);
    }
  };

  const handleCardClick = (index) => {
    setExpandedSubjectIndex(expandedSubjectIndex === index ? null : index);
  };

  const handleAddChapter = (index, chapterName) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[index].chapters.push({
      name: chapterName,
      completed: false,
      topics: [],
    });
    setSubjects(updatedSubjects);
  };

  const handleAddTopic = (subjectIndex, chapterIndex, topicName) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[subjectIndex].chapters[chapterIndex].topics.push({
      name: topicName,
      completed: false,
      subtopics: [],
    });
    setSubjects(updatedSubjects);
  };

  const handleAddSubtopic = (subjectIndex, chapterIndex, topicIndex, subtopicName) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[subjectIndex].chapters[chapterIndex].topics[topicIndex].subtopics.push({
      name: subtopicName,
      completed: false,
    });
    setSubjects(updatedSubjects);
  };

  const toggleCompleted = (item) => {
    item.completed = !item.completed;
    setSubjects([...subjects]);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          mb: 4,
          alignItems: 'center',
        }}
      >
        <TextField
          label="New Subject"
          variant="outlined"
          value={newSubject}
          onChange={(e) => setNewSubject(e.target.value)}
          size="small"
        />

        {/* Color Picker */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: selectedColor,
            color: '#fff',
            minWidth: 100,
            '&:hover': {
              opacity: 0.8,
              backgroundColor: selectedColor,
            },
          }}
          onClick={(e) => setColorMenuAnchor(e.currentTarget)}
        >
          Color
        </Button>
        <Menu
          anchorEl={colorMenuAnchor}
          open={Boolean(colorMenuAnchor)}
          onClose={() => setColorMenuAnchor(null)}
        >
          {colorPalette.map((color) => (
            <MenuItem
              key={color.value}
              onClick={() => {
                setSelectedColor(color.value);
                setColorMenuAnchor(null);
              }}
            >
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  backgroundColor: color.value,
                  mr: 1,
                }}
              />
              {color.name}
            </MenuItem>
          ))}
        </Menu>

        <Button
          variant="contained"
          onClick={handleAdd}
          sx={{
            bgcolor: '#028288',
            '&:hover': { bgcolor: '#04454B' },
          }}
          startIcon={<AddIcon />}
        >
          Add
        </Button>
      </Box>

      <Grid container spacing={3}>
        {subjects.map((subject, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                bgcolor: subject.color,
                color: '#fff',
                minHeight: 140,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: 2,
                px: 2,
                py: 1,
                cursor: 'pointer',
              }}
              onClick={() => handleCardClick(index)}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {subject.name}
                </Typography>
              </CardContent>
              <IconButton
                size="small"
                sx={{
                  color: '#fff',
                  bgcolor: 'rgba(0,0,0,0.2)',
                  '&:hover': { bgcolor: 'rgba(0,0,0,0.4)' },
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(index);
                }}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Card>

            <Collapse in={expandedSubjectIndex === index} unmountOnExit>
              <Box sx={{ mt: 2, p: 2, background: '#f2f2f2', borderRadius: 2 }}>
                <Typography variant="subtitle1" sx={{ mb: 1, color: '#04454B', fontWeight: 'bold' }}>
                  Chapters:
                </Typography>
                <AddChapter subjectIndex={index} onAdd={handleAddChapter} />
                <List dense>
                  {subject.chapters.map((chapter, chapIdx) => (
                    <Box key={chapIdx} sx={{ mb: 2 }}>
                      <ListItem disableGutters>
                        <Checkbox
                          checked={chapter.completed}
                          onChange={() => toggleCompleted(chapter)}
                        />
                        <ListItemText primary={chapter.name} />
                      </ListItem>
                      <AddTopic
                        subjectIndex={index}
                        chapterIndex={chapIdx}
                        onAdd={handleAddTopic}
                      />
                      <List dense sx={{ pl: 4 }}>
                        {chapter.topics.map((topic, topicIdx) => (
                          <Box key={topicIdx}>
                            <ListItem disableGutters>
                              <Checkbox
                                checked={topic.completed}
                                onChange={() => toggleCompleted(topic)}
                              />
                              <ListItemText primary={topic.name} />
                            </ListItem>
                            <AddSubtopic
                              subjectIndex={index}
                              chapterIndex={chapIdx}
                              topicIndex={topicIdx}
                              onAdd={handleAddSubtopic}
                            />
                            <List dense sx={{ pl: 4 }}>
                              {topic.subtopics.map((sub, subIdx) => (
                                <ListItem key={subIdx} disableGutters>
                                  <Checkbox
                                    checked={sub.completed}
                                    onChange={() => toggleCompleted(sub)}
                                  />
                                  <ListItemText primary={sub.name} />
                                </ListItem>
                              ))}
                            </List>
                          </Box>
                        ))}
                      </List>
                    </Box>
                  ))}
                </List>
              </Box>
            </Collapse>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

function AddChapter({ subjectIndex, onAdd }) {
  const [chapterName, setChapterName] = useState('');
  return (
    <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
      <TextField
        value={chapterName}
        size="small"
        placeholder="New Chapter"
        onChange={(e) => setChapterName(e.target.value)}
      />
      <Button
        variant="contained"
        size="small"
        sx={{ bgcolor: '#028288' }}
        onClick={() => {
          if (chapterName.trim()) {
            onAdd(subjectIndex, chapterName.trim());
            setChapterName('');
          }
        }}
      >
        Add
      </Button>
    </Box>
  );
}

function AddTopic({ subjectIndex, chapterIndex, onAdd }) {
  const [topicName, setTopicName] = useState('');
  return (
    <Box sx={{ display: 'flex', gap: 1, my: 1 }}>
      <TextField
        value={topicName}
        size="small"
        placeholder="New Topic"
        onChange={(e) => setTopicName(e.target.value)}
      />
      <Button
        variant="contained"
        size="small"
        sx={{ bgcolor: '#028288' }}
        onClick={() => {
          if (topicName.trim()) {
            onAdd(subjectIndex, chapterIndex, topicName.trim());
            setTopicName('');
          }
        }}
      >
        Add
      </Button>
    </Box>
  );
}

function AddSubtopic({ subjectIndex, chapterIndex, topicIndex, onAdd }) {
  const [subtopicName, setSubtopicName] = useState('');
  return (
    <Box sx={{ display: 'flex', gap: 1, my: 1 }}>
      <TextField
        value={subtopicName}
        size="small"
        placeholder="New Subtopic"
        onChange={(e) => setSubtopicName(e.target.value)}
      />
      <Button
        variant="contained"
        size="small"
        sx={{ bgcolor: '#028288' }}
        onClick={() => {
          if (subtopicName.trim()) {
            onAdd(subjectIndex, chapterIndex, topicIndex, subtopicName.trim());
            setSubtopicName('');
          }
        }}
      >
        Add
      </Button>
    </Box>
  );
}
