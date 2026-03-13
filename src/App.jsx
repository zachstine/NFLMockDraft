import { Navigate, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProtectedRoute from './components/ProtectedRoute';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import DraftPage from './pages/DraftPage';
import ProfilePage from './pages/ProfilePage';
import GroupPage from './pages/GroupPage';
import SharedGroupDraftPage from './pages/SharedGroupDraftPage';
import DraftSummaryPage from './pages/DraftSummaryPage';
import SharedGroupDraftSummaryPage from './pages/SharedGroupDraftSummaryPage';

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <>
      <button
        type="button"
        className="theme-toggle"
        onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
      >
        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </button>

      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage theme={theme} setTheme={setTheme} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/draft/:mockId"
          element={
            <ProtectedRoute>
              <DraftPage theme={theme} setTheme={setTheme} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/draft/:mockId/summary"
          element={
            <ProtectedRoute>
              <DraftSummaryPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage theme={theme} setTheme={setTheme} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/groups/:groupId"
          element={
            <ProtectedRoute>
              <GroupPage theme={theme} setTheme={setTheme} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/groups/:groupId/drafts/:mockId"
          element={
            <ProtectedRoute>
              <SharedGroupDraftPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/groups/:groupId/drafts/:mockId/summary"
          element={
            <ProtectedRoute>
              <SharedGroupDraftSummaryPage />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}