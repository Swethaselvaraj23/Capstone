import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ThemeContextProvider from './ThemeContext';
import './index.css';
import { HabitProvider } from './contexts/HabitContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <HabitProvider>
        <App />
      </HabitProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);

