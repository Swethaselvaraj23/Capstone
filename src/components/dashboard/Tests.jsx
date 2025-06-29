import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Chip,
  Button,
  LinearProgress,
  Avatar,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material';
import {
  Quiz,
  CheckCircle,
  Cancel,
  Schedule,
  Add,
  PlayArrow,
  Pause,
  Stop,
} from '@mui/icons-material';

const initialTests = [
  {
    id: 1,
    title: 'React Fundamentals',
    description: 'Test your knowledge of React basics',
    questions: 25,
    duration: 45,
    difficulty: 'Beginner',
    status: 'completed',
    score: 92,
    completedAt: '2024-01-10',
  },
  {
    id: 2,
    title: 'JavaScript Advanced',
    description: 'Advanced JavaScript concepts and ES6+',
    questions: 30,
    duration: 60,
    difficulty: 'Advanced',
    status: 'in-progress',
    score: null,
    completedAt: null,
  },
  {
    id: 3,
    title: 'CSS Flexbox & Grid',
    description: 'Modern CSS layout techniques',
    questions: 20,
    duration: 30,
    difficulty: 'Intermediate',
    status: 'not-started',
    score: null,
    completedAt: null,
  },
  {
    id: 4,
    title: 'Node.js Fundamentals',
    description: 'Server-side JavaScript with Node.js',
    questions: 35,
    duration: 50,
    difficulty: 'Intermediate',
    status: 'completed',
    score: 78,
    completedAt: '2024-01-08',
  },
  {
    id: 5,
    title: 'Database Design',
    description: 'Relational database design principles',
    questions: 40,
    duration: 75,
    difficulty: 'Advanced',
    status: 'not-started',
    score: null,
    completedAt: null,
  },
];

const Tests = () => {
  const [tests, setTests] = useState(initialTests);
  const [open, setOpen] = useState(false);
  const [filterDifficulty, setFilterDifficulty] = useState('all');
  const [newTest, setNewTest] = useState({
    title: '',
    description: '',
    questions: '',
    duration: '',
    difficulty: 'Beginner',
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return '#4CAF50';
      case 'in-progress': return '#FF9800';  
      case 'not-started': return '#757575';
      default: return '#757575';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <CheckCircle />;
      case 'in-progress': return <Schedule />;
      case 'not-started': return <Cancel />;
      default: return <Schedule />;
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'success';
      case 'Intermediate': return 'warning';
      case 'Advanced': return 'error';
      default: return 'default';
    }
  };

  const getScoreColor = (score) => {
    if (score >= 90) return '#4CAF50';
    if (score >= 70) return '#FF9800';
    return '#F44336';
  };

  const handleAddTest = () => {
    if (newTest.title.trim()) {
      const test = {
        ...newTest,
        id: Date.now(),
        status: 'not-started',
        score: null,
        completedAt: null,
        questions: parseInt(newTest.questions),
        duration: parseInt(newTest.duration),
      };
      setTests([...tests, test]);
      setNewTest({
        title: '',
        description: '',
        questions: '',
        duration: '',
        difficulty: 'Beginner',
      });
      setOpen(false);
    }
  };

  const handleStartTest = (testId) => {
    setTests(tests.map(test => 
      test.id === testId 
        ? { ...test, status: 'in-progress' }
        : test
    ));
  };

  const filteredTests = filterDifficulty === 'all' 
    ? tests 
    : tests.filter(test => test.difficulty === filterDifficulty);

  const testStats = {
    total: tests.length,
    completed: tests.filter(t => t.status === 'completed').length,
    inProgress: tests.filter(t => t.status === 'in-progress').length,
    notStarted: tests.filter(t => t.status === 'not-started').length,
  };

  const averageScore = tests
    .filter(t => t.score !== null)
    .reduce((sum, t) => sum + t.score, 0) / tests.filter(t => t.score !== null).length || 0;

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Box>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
            Tests & Assessments
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Track your learning progress with assessments
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => setOpen(true)}
          sx={{
            borderRadius: 3,
            background: 'linear-gradient(45deg, #0D47A1 30%, #1976D2 90%)',
            '&:hover': {
              background: 'linear-gradient(45deg, #0D47A1 60%, #1976D2 100%)',
            },
          }}
        >
          Create Test
        </Button>
      </Box>

      {/* Test Statistics */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ background: 'linear-gradient(135deg, #0D47A1 0%, #1976D2 100%)', color: 'white' }}>
            <CardContent>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>{testStats.total}</Typography>
              <Typography variant="body2">Total Tests</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ background: 'linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%)', color: 'white' }}>
            <CardContent>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>{testStats.completed}</Typography>
              <Typography variant="body2">Completed</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ background: 'linear-gradient(135deg, #FF9800 0%, #FFB74D 100%)', color: 'white' }}>
            <CardContent>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>{testStats.inProgress}</Typography>
              <Typography variant="body2">In Progress</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ background: 'linear-gradient(135deg, #00695C 0%, #4DB6AC 100%)', color: 'white' }}>
            <CardContent>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>{Math.round(averageScore)}%</Typography>
              <Typography variant="body2">Average Score</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Filter */}
      <Box sx={{ mb: 3 }}>
        <FormControl size="small" sx={{ minWidth: 150 }}>
          <InputLabel>Difficulty</InputLabel>
          <Select
            value={filterDifficulty}
            label="Difficulty"
            onChange={(e) => setFilterDifficulty(e.target.value)}
          >
            <MenuItem value="all">All Levels</MenuItem>
            <MenuItem value="Beginner">Beginner</MenuItem>
            <MenuItem value="Intermediate">Intermediate</MenuItem>
            <MenuItem value="Advanced">Advanced</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Tests Grid */}
      <Grid container spacing={3}>
        {filteredTests.map((test) => (
          <Grid item xs={12} md={6} lg={4} key={test.id}>
            <Card sx={{ height: '100%', cursor: 'pointer' }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, flex: 1 }}>
                    {test.title}
                  </Typography>
                  <IconButton
                    size="small"
                    sx={{ color: getStatusColor(test.status) }}
                  >
                    {getStatusIcon(test.status)}
                  </IconButton>
                </Box>
                
                <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                  {test.description}
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="body2">
                    <strong>{test.questions}</strong> questions
                  </Typography>
                  <Typography variant="body2">
                    <strong>{test.duration}</strong> minutes
                  </Typography>
                </Box>

                {test.status === 'in-progress' && (
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" sx={{ mb: 1 }}>
                      Progress: 60%
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={60}
                      sx={{
                        height: 6,
                        borderRadius: 3,
                        backgroundColor: '#E3F2FD',
                        '& .MuiLinearProgress-bar': {
                          background: 'linear-gradient(90deg, #FF9800 0%, #FFB74D 100%)',
                          borderRadius: 3,
                        },
                      }}
                    />
                  </Box>
                )}

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Chip
                    label={test.status.replace('-', ' ')}
                    size="small"
                    sx={{
                      backgroundColor: getStatusColor(test.status),
                      color: 'white',
                      fontWeight: 600,
                      textTransform: 'capitalize',
                    }}
                  />
                  <Chip
                    label={test.difficulty}
                    size="small"
                    color={getDifficultyColor(test.difficulty)}
                    variant="outlined"
                  />
                </Box>

                {test.score !== null && (
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="body2">Score:</Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        fontWeight: 700, 
                        color: getScoreColor(test.score) 
                      }}
                    >
                      {test.score}%
                    </Typography>
                  </Box>
                )}

                {test.completedAt && (
                  <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                    Completed: {test.completedAt}
                  </Typography>
                )}

                <Box sx={{ display: 'flex', gap: 1 }}>
                  {test.status === 'not-started' && (
                    <Button
                      variant="contained"
                      size="small"
                      startIcon={<PlayArrow />}
                      onClick={() => handleStartTest(test.id)}
                      sx={{ flex: 1 }}
                    >
                      Start Test
                    </Button>
                  )}
                  {test.status === 'in-progress' && (
                    <>
                      <Button
                        variant="contained"
                        size="small"
                        startIcon={<PlayArrow />}
                        sx={{ flex: 1 }}
                      >
                        Continue
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<Pause />}
                      >
                        Pause
                      </Button>
                    </>
                  )}
                  {test.status === 'completed' && (
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ flex: 1 }}
                    >
                      Review
                    </Button>
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Add Test Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Create New Test</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Test Title"
            value={newTest.title}
            onChange={(e) => setNewTest({...newTest, title: e.target.value})}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Description"
            value={newTest.description}
            onChange={(e) => setNewTest({...newTest, description: e.target.value})}
            margin="normal"
            multiline
            rows={3}
          />
          <TextField
            fullWidth
            label="Number of Questions"
            type="number"
            value={newTest.questions}
            onChange={(e) => setNewTest({...newTest, questions: e.target.value})}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Duration (minutes)"
            type="number"
            value={newTest.duration}
            onChange={(e) => setNewTest({...newTest, duration: e.target.value})}
            margin="normal"
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Difficulty</InputLabel>
            <Select
              value={newTest.difficulty}
              label="Difficulty"
              onChange={(e) => setNewTest({...newTest, difficulty: e.target.value})}
            >
              <MenuItem value="Beginner">Beginner</MenuItem>
              <MenuItem value="Intermediate">Intermediate</MenuItem>
              <MenuItem value="Advanced">Advanced</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleAddTest} variant="contained">Create Test</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Tests;