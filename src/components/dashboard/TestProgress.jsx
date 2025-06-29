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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import {
  Quiz,
  CheckCircle,
  TrendingUp,
  School,
  EmojiEvents,
} from '@mui/icons-material';

const TestProgress = () => {
  const overallTestProgress = {
    totalTests: 12,
    completedTests: 8,
    averageScore: 84.5,
    passRate: 87.5,
    improvementRate: 12.3,
  };

  const subjectProgress = [
    { subject: 'React', completed: 3, total: 4, averageScore: 92, color: '#0D47A1' },
    { subject: 'JavaScript', completed: 2, total: 3, averageScore: 78, color: '#00695C' },
    { subject: 'CSS', completed: 2, total: 2, averageScore: 89, color: '#1976D2' },
    { subject: 'Node.js', completed: 1, total: 2, averageScore: 76, color: '#F57C00' },
    { subject: 'Database', completed: 0, total: 1, averageScore: 0, color: '#7B1FA2' },
  ];

  const recentTestResults = [
    { id: 1, test: 'React Fundamentals', score: 92, date: '2024-01-15', duration: '45 min', status: 'excellent' },
    { id: 2, test: 'JavaScript Advanced', score: 78, date: '2024-01-12', duration: '60 min', status: 'good' },
    { id: 3, test: 'CSS Flexbox', score: 89, date: '2024-01-10', duration: '30 min', status: 'excellent' },
    { id: 4, test: 'Node.js Basics', score: 76, date: '2024-01-08', duration: '50 min', status: 'good' },
    { id: 5, test: 'React Hooks', score: 94, date: '2024-01-05', duration: '40 min', status: 'excellent' },
  ];

  const difficultyProgress = [
    { level: 'Beginner', completed: 4, total: 5, averageScore: 91 },
    { level: 'Intermediate', completed: 3, total: 5, averageScore: 82 },
    { level: 'Advanced', completed: 1, total: 2, averageScore: 74 },
  ];

  const getScoreColor = (score) => {
    if (score >= 90) return '#4CAF50';
    if (score >= 80) return '#FF9800';
    if (score >= 70) return '#FF5722';
    return '#F44336';
  };

  const getScoreStatus = (score) => {
    if (score >= 90) return 'excellent';
    if (score >= 80) return 'good';
    if (score >= 70) return 'average';
    return 'needs-improvement';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'excellent': return 'success';
      case 'good': return 'primary';
      case 'average': return 'warning';
      case 'needs-improvement': return 'error';
      default: return 'default';
    }
  };

  const getCompletionPercentage = (completed, total) => {
    return total > 0 ? Math.round((completed / total) * 100) : 0;
  };

  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
          Test Progress Analytics
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Track your test performance and learning progress
        </Typography>
      </Box>

      {/* Overall Test Statistics */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={2.4}>
          <Card sx={{ background: 'linear-gradient(135deg, #0D47A1 0%, #1976D2 100%)', color: 'white' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Quiz sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                {overallTestProgress.totalTests}
              </Typography>
              <Typography variant="body2">Total Tests</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={2.4}>
          <Card sx={{ background: 'linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%)', color: 'white' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <CheckCircle sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                {overallTestProgress.completedTests}
              </Typography>
              <Typography variant="body2">Completed</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={2.4}>
          <Card sx={{ background: 'linear-gradient(135deg, #FF9800 0%, #FFB74D 100%)', color: 'white' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <EmojiEvents sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                {overallTestProgress.averageScore}%
              </Typography>
              <Typography variant="body2">Average Score</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={2.4}>
          <Card sx={{ background: 'linear-gradient(135deg, #00695C 0%, #4DB6AC 100%)', color: 'white' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <School sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                {overallTestProgress.passRate}%
              </Typography>
              <Typography variant="body2">Pass Rate</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={2.4}>
          <Card sx={{ background: 'linear-gradient(135deg, #7B1FA2 0%, #BA68C8 100%)', color: 'white' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <TrendingUp sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                +{overallTestProgress.improvementRate}%
              </Typography>
              <Typography variant="body2">Improvement</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {/* Subject-wise Progress */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Progress by Subject
              </Typography>
              {subjectProgress.map((subject, index) => (
                <Box key={index} sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar
                        sx={{
                          width: 32,
                          height: 32,
                          backgroundColor: subject.color,
                          mr: 2,
                        }}
                      >
                        <Typography variant="body2" sx={{ fontSize: '0.8rem', fontWeight: 600 }}>
                          {subject.subject[0]}
                        </Typography>
                      </Avatar>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {subject.subject}
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: 'right' }}>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {subject.completed}/{subject.total} tests
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Avg: {subject.averageScore > 0 ? `${subject.averageScore}%` : 'N/A'}
                      </Typography>
                    </Box>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={getCompletionPercentage(subject.completed, subject.total)}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: '#E3F2FD',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: subject.color,
                        borderRadius: 4,
                      },
                    }}
                  />
                  <Typography variant="body2" color="textSecondary" sx={{ mt: 0.5 }}>
                    {getCompletionPercentage(subject.completed, subject.total)}% completed
                  </Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>

        {/* Difficulty Level Progress */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Progress by Difficulty
              </Typography>
              {difficultyProgress.map((level, index) => (
                <Box key={index} sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {level.level}
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {level.completed}/{level.total}
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={getCompletionPercentage(level.completed, level.total)}
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
                  <Typography variant="body2" color="textSecondary" sx={{ mt: 0.5 }}>
                    Avg Score: {level.averageScore > 0 ? `${level.averageScore}%` : 'N/A'}
                  </Typography>
                </Box>
              ))}
              
              <Box sx={{ mt: 3, p: 2, backgroundColor: '#f8f9ff', borderRadius: 2 }}>
                <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                  Performance Summary
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Strong in beginner concepts. Focus on advanced topics for better results.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Recent Test Results */}
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            Recent Test Results
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>Test Name</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Score</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Duration</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {recentTestResults.map((result) => (
                  <TableRow key={result.id} hover>
                    <TableCell>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {result.test}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: 700,
                          color: getScoreColor(result.score),
                        }}
                      >
                        {result.score}%
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={result.status}
                        size="small"
                        color={getStatusColor(result.status)}
                        sx={{ textTransform: 'capitalize', fontWeight: 500 }}
                      />
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" color="textSecondary">
                        {result.duration}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" color="textSecondary">
                        {result.date}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TestProgress;