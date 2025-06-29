import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  Avatar,
  Chip,
  IconButton,
  Divider,
} from '@mui/material';
import {
  Send,
  SmartToy,
  Person,
  Lightbulb,
  Code,
  School,
  BugReport,
  Psychology,
} from '@mui/icons-material';
import JellyfishIcon from '../Icons/JellyfishIcon';

const AIHelp = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your AI assistant. How can I help you today?",
      sender: 'ai',
      timestamp: '10:30 AM',
    },
    {
      id: 2,
      text: "I'm having trouble with React hooks. Can you explain useState?",
      sender: 'user',
      timestamp: '10:32 AM',
    },
    {
      id: 3,
      text: "Absolutely! useState is a React Hook that lets you add state to functional components. Here's how it works:\n\n```javascript\nconst [count, setCount] = useState(0);\n```\n\nThe first element (count) is the current state value, and the second (setCount) is the function to update it.",
      sender: 'ai',
      timestamp: '10:32 AM',
    },
  ]);
  
  const [inputMessage, setInputMessage] = useState('');

  const quickActions = [
    { icon: <Code />, label: 'Code Help', color: '#0D47A1' },
    { icon: <BugReport />, label: 'Debug Issue', color: '#F44336' },
    { icon: <School />, label: 'Learn Concept', color: '#00695C' },
    { icon: <Lightbulb />, label: 'Get Ideas', color: '#FF9800' },
    { icon: <Psychology />, label: 'Best Practices', color: '#7B1FA2' },
  ];

  const suggestions = [
    "How do I optimize React performance?",
    "Explain JavaScript closures",
    "What are the differences between SQL and NoSQL?",
    "How to implement authentication in Node.js?",
    "Best practices for responsive design"
  ];

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: inputMessage,
        sender: 'user',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      
      setMessages([...messages, newMessage]);
      setInputMessage('');
      
      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          id: messages.length + 2,
          text: "I understand your question. Let me help you with that...",
          sender: 'ai',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1000);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputMessage(suggestion);
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <JellyfishIcon sx={{ fontSize: 40, mr: 2, color: '#0D47A1' }} />
        <Box>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
            AI Assistant
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Get instant help with coding, learning, and problem-solving
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={3}>
        {/* Chat Interface */}
        <Grid item xs={12} md={8}>
          <Card sx={{ height: '70vh', display: 'flex', flexDirection: 'column' }}>
            {/* Chat Header */}
            <Box sx={{ p: 2, borderBottom: '1px solid #e0e0e0', background: 'linear-gradient(90deg, #0D47A1 0%, #1976D2 100%)', color: 'white' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar sx={{ mr: 2, background: 'rgba(255,255,255,0.2)' }}>
                  <SmartToy />
                </Avatar>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    AI Assistant
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Online • Ready to help
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Messages */}
            <Box sx={{ flex: 1, overflow: 'auto', p: 2 }}>
              {messages.map((message) => (
                <Box
                  key={message.id}
                  sx={{
                    display: 'flex',
                    justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                    mb: 2,
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', maxWidth: '70%' }}>
                    {message.sender === 'ai' && (
                      <Avatar sx={{ mr: 1, backgroundColor: '#0D47A1' }}>
                        <SmartToy />
                      </Avatar>
                    )}
                    <Paper
                      elevation={1}
                      sx={{
                        p: 2,
                        backgroundColor: message.sender === 'user' ? '#0D47A1' : '#f5f5f5',
                        color: message.sender === 'user' ? 'white' : 'black',
                        borderRadius: message.sender === 'user' ? '20px 20px 5px 20px' : '20px 20px 20px 5px',
                      }}
                    >
                      <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
                        {message.text}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          display: 'block',
                          mt: 1,
                          opacity: 0.7,
                          fontSize: '0.75rem',
                        }}
                      >
                        {message.timestamp}
                      </Typography>
                    </Paper>
                    {message.sender === 'user' && (
                      <Avatar sx={{ ml: 1, backgroundColor: '#00695C' }}>
                        <Person />
                      </Avatar>
                    )}
                  </Box>
                </Box>
              ))}
            </Box>

            {/* Message Input */}
            <Box sx={{ p: 2, borderTop: '1px solid #e0e0e0' }}>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Type your message..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSendMessage();
                    }
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 3,
                    },
                  }}
                />
                <Button
                  variant="contained"
                  onClick={handleSendMessage}
                  sx={{
                    minWidth: 'auto',
                    borderRadius: 3,
                    px: 3,
                    background: 'linear-gradient(45deg, #0D47A1 30%, #1976D2 90%)',
                  }}
                >
                  <Send />
                </Button>
              </Box>
            </Box>
          </Card>
        </Grid>

        {/* Sidebar */}
        <Grid item xs={12} md={4}>
          {/* Quick Actions */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Quick Actions
              </Typography>
              <Grid container spacing={2}>
                {quickActions.map((action, index) => (
                  <Grid item xs={6} key={index}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 2,
                        textAlign: 'center',
                        cursor: 'pointer',
                        borderRadius: 3,
                        border: '1px solid #e0e0e0',
                        transition: 'all 0.2s ease-in-out',
                        '&:hover': {
                          backgroundColor: action.color,
                          color: 'white',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                        },
                      }}
                    >
                      <Box sx={{ color: action.color, mb: 1 }}>
                        {action.icon}
                      </Box>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {action.label}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>

          {/* Suggested Questions */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Suggested Questions
              </Typography>
              {suggestions.map((suggestion, index) => (
                <Paper
                  key={index}
                  elevation={0}
                  sx={{
                    p: 2,
                    mb: 1,
                    cursor: 'pointer',
                    borderRadius: 2,
                    border: '1px solid #e0e0e0',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      backgroundColor: '#f0f7ff',
                      borderColor: '#1976d2',
                    },
                  }}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    {suggestion}
                  </Typography>
                </Paper>
              ))}
            </CardContent>
          </Card>

          {/* AI Features */}
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                AI Capabilities
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                <Chip label="Code Review" size="small" color="primary" />
                <Chip label="Bug Fixing" size="small" color="error" />
                <Chip label="Learning" size="small" color="success" />
                <Chip label="Architecture" size="small" color="warning" />
                <Chip label="Best Practices" size="small" color="info" />
                <Chip label="Optimization" size="small" color="secondary" />
              </Box>
              
              <Divider sx={{ my: 2 }} />
              
              <Typography variant="body2" color="textSecondary">
                Your AI assistant can help with coding problems, explain concepts, 
                review code, suggest improvements, and provide learning resources.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AIHelp;