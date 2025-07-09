import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

// Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignupPage';
import WelcomePage from './pages/WelcomePage';
import TodayPage from './pages/TodayPage';
import HabitPage from './pages/HabitPage';         // ← ADD THIS
import CreateHabitPage from "./pages/HabitDialogFlow";

// Components
import AppNavbar from './components/AppNavbar';
import Sidebar from './components/Sidebar';
import FloatingActionButton from './components/FloatingActionButton';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Router>
        <AppRoutes />
      </Router>
    </LocalizationProvider>
  );
}

function AppRoutes() {
  const location = useLocation();

  // hide nav bar & sidebar on auth pages
  const hideNavPaths = ['/', '/login', '/signup', '/welcome'];
  const showNav = !hideNavPaths.includes(location.pathname);

  // FAB open state
  const [fabOpen, setFabOpen] = useState(false);

  return (
    <>
      {showNav && <Sidebar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/today" element={<TodayPage />} />
        <Route path="/habits" element={<HabitPage />} /> {/* ← ADD ROUTE */}
      </Routes>

      {showNav && <AppNavbar />}

      {showNav && (
        <FloatingActionButton onClick={() => setFabOpen(true)} />
      )}

      {/* Habit creation dialog flow */}
      <CreateHabitPage
        open={fabOpen}
        onClose={() => setFabOpen(false)}
      />
    </>
  );
}

export default App;
