import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ProgressProvider } from './context/ProgressContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import AppRoutes from './routes/AppRoutes';
import './App.css';

/**
 * App Main Component
 * Wraps our entire platform in Context Providers for global states:
 * 1. BrowserRouter: client-side routing
 * 2. ThemeProvider: manages light/dark mode styles
 * 3. ProgressProvider: manages completed lessons tracking
 */
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ProgressProvider>
          <div className="app-container">
            {/* Global navigation menu */}
            <Header />

            {/* Main content viewport containing individual page route matches */}
            <div className="main-content">
              <AppRoutes />
            </div>

            {/* Footer with email signup and social anchors */}
            <Footer />
          </div>
        </ProgressProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

