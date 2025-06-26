// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignupPage';
import UserTypeSelectionPage from './pages/UserTypeSelectionPage';
import StudentSetupPage from './pages/StudentSetupPage';
import TracklynHomePage from './pages/TracklynHomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/select-user" element={<UserTypeSelectionPage />} />
        <Route path="/student-setup" element={<StudentSetupPage />} />
        <Route path="/tracklyn-home" element={<TracklynHomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
