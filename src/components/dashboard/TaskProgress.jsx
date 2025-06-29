import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  LinearProgress,
  CircularProgress,
  Chip,
  Avatar,
  Paper,
} from '@mui/material';
import {
  TrendingUp,
  Assignment,
  CheckCircle,
  Schedule,
  Warning,
} from '@mui/icons-material';

const TaskProgress = () => {
  const overallProgress = {
    completed: 78,
    inProgress: 15,
    pending: 7,
    totalTasks: 156,
    completedTasks: 122,
    completionRate: 78.2,
  };

  const progressByCategory = [
    { category: 'Development', completed: 85, total: 45, color: '#0D47A1' },
    { category: 'Testing', completed: 70, total: 28, color: '#00695C' },
    { category: 'Design', completed: 92, total: 35, color: '#1976D2' },
    { category: 'Documentation', completed: 60, total: 25, color: '#F57C00' },
    { category: 'Review', completed: 88, total: 23, color: '#7B1FA2' },
  ];

  const weeklyProgress = [
    { week: 'Week 1', completed: 12, target: 15 },
    { week: 'Week 2', completed: 18, target: 20 },
    { week: 'Week 3', completed: 22, target: 25 },
    { week: 'Week 4', completed: 16, target: 18 },
  ];

  const priorityBreakdown = [
    { priority: 'High', completed: 45, total: 52, color: '#F44336' },
    { priority: 'Medium', completed: 58, total: 67, color: '#FF9800' },
    { priority: 'Low', completed: 19, total: 37, color: '#4CAF50' },
  ];

  const getCompletionPercentage = (completed, total) => {
    return Math.round((completed / total) * 100);
  };

  const getProgressColor = (percentage) => {
    if (percentage >= 90) return '#4CAF50';
    if (percentage >= 70) return '#FF9800';
    return '#F44336';
  };

  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
          Task Progress Analytics
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Track your task completion and productivity metrics
        </Typography>
      </Box>

      {/* Overall Progress */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Overall Progress
              </Typography>
              <Box sx={{ position: 'relative', display: 'inline-flex', mb: 2 }}>
                <CircularProgress
                  variant="determinate"
                  value={overallProgress.completionRate}
                  size={120}
                  thickness={6}
                  sx={{
                    color: getProgressColor(overallProgress.completionRate),
                    '& .MuiCircularProgress-circle': {
                      strokeLinecap: 'round',
                    },
                  }}
                />
                <Box
                  sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography variant="h4" component="div" sx={{ fontWeight: 700 }}>
                    {Math.round(overallProgress.completionRate)}%
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>{overallProgress.completedTasks}</strong> of <strong>{overallProgress.totalTasks}</strong> tasks completed
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                <Chip
                  label={`${overallProgress.completed}% Complete`}
                  color="success"
                  size="small"
                />
                <Chip
                  label={`${overallProgress.inProgress}% In Progress`}
                  color="warning"
                  size="small"
                />
                <Chip
                  label={`${overallProgress.pending}% Pending`}
                  color="error"
                  size="small"
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Progress by Priority
              </Typography>
              {priorityBreakdown.map((item, index) => (
                <Box key={index} sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar
                        sx={{
                          width: 24,
                          height: 24,
                          backgroundColor: item.color,
                          mr: 1,
                        }}
                      >
                        <Typography variant="caption" sx={{ fontSize: '0.7rem', fontWeight: 600 }}>
                          {item.priority[0]}
                        </Typography>
                      </Avatar>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {item.priority} Priority
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {item.completed}/{item.total} ({getCompletionPercentage(item.completed, item.total)}%)
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={getCompletionPercentage(item.completed, item.total)}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: '#E3F2FD',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: item.color,
                        borderRadius: 4,
                      },
                    }}
                  />
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Progress by Category */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Progress by Category
              </Typography>
              <Grid container spacing={3}>
                {progressByCategory.map((category, index) => (
                  <Grid item xs={12} sm={6} md={2.4} key={index}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 2,
                        textAlign: 'center',
                        background: `linear-gradient(135deg, ${category.color} 0%, ${category.color}99 100%)`,
                        color: 'white',
                        borderRadius: 3,
                      }}
                    >
                      <Typography variant="body2" sx={{ mb: 1, opacity: 0.9 }}>
                        {category.category}
                      </Typography>
                      <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                        {getCompletionPercentage(category.completed, category.total)}%
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        {category.completed}/{category.total} tasks
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Weekly Progress */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Weekly Progress Tracking
              </Typography>
              {weeklyProgress.map((week, index) => (
                <Box key={index} sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {week.week}
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {week.completed}/{week.target} tasks
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={getCompletionPercentage(week.completed, week.target)}
                    sx={{
                      height: 10,
                      borderRadius: 5,
                      backgroundColor: '#E3F2FD',
                      '& .MuiLinearProgress-bar': {
                        background: `linear-gradient(90deg, #0D47A1 0%, #1976D2 100%)`,
                        borderRadius: 5,
                      },
                    }}
                  />
                  <Typography variant="body2" color="textSecondary" sx={{ mt: 0.5 }}>
                    {getCompletionPercentage(week.completed, week.target)}% of weekly target
                  </Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Progress Insights
              </Typography>
              
              <Box sx={{ mb: 3 }}>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  Best Performing Category
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 600, color: '#4CAF50' }}>
                  Design (92% completion)
                </Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  Needs Attention
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 600, color: '#F44336' }}>
                  Documentation (60% completion)
                </Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  This Week's Target
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                  18 tasks (89% achieved)
                </Typography>
              </Box>

              <Box>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  Productivity Trend
                </Typography>
                <Chip
                  label="↗ Improving"
                  color="success"
                  size="small"
                  sx={{ fontWeight: 600 }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TaskProgress;