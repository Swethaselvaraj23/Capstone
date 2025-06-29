import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Chip,
  IconButton,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  LinearProgress,
} from '@mui/material';
import {
  Add,
  Edit,
  Delete,
  CheckCircle,
  Schedule,
  Warning,
  FilterList,
} from '@mui/icons-material';

const initialTasks = [
  { id: 1, title: 'Complete React Dashboard', description: 'Build a responsive dashboard with MUI', status: 'completed', priority: 'high', dueDate: '2024-01-15', progress: 100 },
  { id: 2, title: 'Firebase Integration', description: 'Set up Firebase authentication and database', status: 'in-progress', priority: 'medium', dueDate: '2024-01-18', progress: 65 },
  { id: 3, title: 'UI Testing', description: 'Conduct comprehensive UI testing', status: 'pending', priority: 'low', dueDate: '2024-01-20', progress: 0 },
  { id: 4, title: 'Code Review', description: 'Review code for best practices', status: 'pending', priority: 'high', dueDate: '2024-01-17', progress: 0 },
  { id: 5, title: 'Documentation', description: 'Create comprehensive documentation', status: 'in-progress', priority: 'medium', dueDate: '2024-01-22', progress: 30 },
  { id: 6, title: 'Performance Optimization', description: 'Optimize app performance', status: 'pending', priority: 'high', dueDate: '2024-01-25', progress: 0 },
];

const Tasks = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [open, setOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    status: 'pending',
    priority: 'medium',
    dueDate: '',
    progress: 0,
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return '#4CAF50';
      case 'in-progress': return '#FF9800';
      case 'pending': return '#F44336';
      default: return '#757575';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <CheckCircle />;
      case 'in-progress': return <Schedule />;
      case 'pending': return <Warning />;
      default: return <Schedule />;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'error';
      case 'medium': return 'warning';
      case 'low': return 'success';
      default: return 'default';
    }
  };

  const handleAddTask = () => {
    if (newTask.title.trim()) {
      const task = {
        ...newTask,
        id: Date.now(),
      };
      setTasks([...tasks, task]);
      setNewTask({
        title: '',
        description: '',
        status: 'pending',
        priority: 'medium',
        dueDate: '',
        progress: 0,
      });
      setOpen(false);
    }
  };

  const handleStatusChange = (taskId, newStatus) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { ...task, status: newStatus, progress: newStatus === 'completed' ? 100 : task.progress }
        : task
    ));
  };

  const filteredTasks = filterStatus === 'all' 
    ? tasks 
    : tasks.filter(task => task.status === filterStatus);

  const taskStats = {
    total: tasks.length,
    completed: tasks.filter(t => t.status === 'completed').length,
    inProgress: tasks.filter(t => t.status === 'in-progress').length,
    pending: tasks.filter(t => t.status === 'pending').length,
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Box>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
            Tasks Management
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Manage and track your project tasks
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
          Add Task
        </Button>
      </Box>

      {/* Task Statistics */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ background: 'linear-gradient(135deg, #0D47A1 0%, #1976D2 100%)', color: 'white' }}>
            <CardContent>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>{taskStats.total}</Typography>
              <Typography variant="body2">Total Tasks</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ background: 'linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%)', color: 'white' }}>
            <CardContent>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>{taskStats.completed}</Typography>
              <Typography variant="body2">Completed</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ background: 'linear-gradient(135deg, #FF9800 0%, #FFB74D 100%)', color: 'white' }}>
            <CardContent>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>{taskStats.inProgress}</Typography>
              <Typography variant="body2">In Progress</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ background: 'linear-gradient(135deg, #F44336 0%, #EF5350 100%)', color: 'white' }}>
            <CardContent>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>{taskStats.pending}</Typography>
              <Typography variant="body2">Pending</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Filter */}
      <Box sx={{ mb: 3 }}>
        <FormControl size="small" sx={{ minWidth: 120 }}>
          <InputLabel>Filter</InputLabel>
          <Select
            value={filterStatus}
            label="Filter"
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <MenuItem value="all">All Tasks</MenuItem>
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="in-progress">In Progress</MenuItem>
            <MenuItem value="completed">Completed</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Tasks Grid */}
      <Grid container spacing={3}>
        {filteredTasks.map((task) => (
          <Grid item xs={12} md={6} lg={4} key={task.id}>
            <Card sx={{ height: '100%', cursor: 'pointer' }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, flex: 1 }}>
                    {task.title}
                  </Typography>
                  <IconButton
                    size="small"
                    sx={{ color: getStatusColor(task.status) }}
                    onClick={() => {
                      const statuses = ['pending', 'in-progress', 'completed'];
                      const currentIndex = statuses.indexOf(task.status);
                      const nextStatus = statuses[(currentIndex + 1) % statuses.length];
                      handleStatusChange(task.id, nextStatus);
                    }}
                  >
                    {getStatusIcon(task.status)}
                  </IconButton>
                </Box>
                
                <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                  {task.description}
                </Typography>

                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    Progress: {task.progress}%
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={task.progress}
                    sx={{
                      height: 6,
                      borderRadius: 3,
                      backgroundColor: '#E3F2FD',
                      '& .MuiLinearProgress-bar': {
                        background: 'linear-gradient(90deg, #0D47A1 0%, #1976D2 100%)',
                        borderRadius: 3,
                      },
                    }}
                  />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Chip
                    label={task.status}
                    size="small"
                    sx={{
                      backgroundColor: getStatusColor(task.status),
                      color: 'white',
                      fontWeight: 600,
                    }}
                  />
                  <Chip
                    label={task.priority}
                    size="small"
                    color={getPriorityColor(task.priority)}
                    variant="outlined"
                  />
                </Box>

                <Typography variant="body2" color="textSecondary">
                  Due: {task.dueDate}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Add Task Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Add New Task</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Task Title"
            value={newTask.title}
            onChange={(e) => setNewTask({...newTask, title: e.target.value})}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Description"
            value={newTask.description}
            onChange={(e) => setNewTask({...newTask, description: e.target.value})}
            margin="normal"
            multiline
            rows={3}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Priority</InputLabel>
            <Select
              value={newTask.priority}
              label="Priority"
              onChange={(e) => setNewTask({...newTask, priority: e.target.value})}
            >
              <MenuItem value="low">Low</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="high">High</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            label="Due Date"
            type="date"
            value={newTask.dueDate}
            onChange={(e) => setNewTask({...newTask, dueDate: e.target.value})}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleAddTask} variant="contained">Add Task</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Tasks;