import React from 'react';
import {
  Box,
  Typography,
  Paper,
} from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
} from 'recharts';

// Dummy data — you can pass this from props or Firebase later
const subjectProgressData = [
  { subject: 'Math', progress: 80 },
  { subject: 'Physics', progress: 60 },
  { subject: 'Chemistry', progress: 90 },
];

const testPerformanceData = [
  { test: 'Term 1', score: 78 },
  { test: 'Midterms', score: 85 },
  { test: 'Finals', score: 92 },
];

const COLORS = ['#028288', '#71CDD4', '#D8EAEF'];

export default function ProgressCharts() {
  return (
    <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={4} p={3}>
      
      {/* Subject Progress Chart */}
      <Paper elevation={3} sx={{ p: 2, flex: 1 }}>
        <Typography variant="h6" gutterBottom>
          📘 Subject Completion
        </Typography>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={subjectProgressData}>
            <XAxis dataKey="subject" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Bar dataKey="progress" fill="#028288" barSize={30} />
          </BarChart>
        </ResponsiveContainer>
      </Paper>

      {/* Test Performance Pie Chart */}
      <Paper elevation={3} sx={{ p: 2, flex: 1 }}>
        <Typography variant="h6" gutterBottom>
          🟣 Test Scores Overview
        </Typography>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={testPerformanceData}
              dataKey="score"
              nameKey="test"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {testPerformanceData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </Paper>
    </Box>
  );
}
