import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { signUpWithUsername, logInWithUsername } from '../services/authService';

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const [mode, setMode] = useState('login');
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (user) {
      const redirectTo = location.state?.from?.pathname || '/';
      navigate(redirectTo, { replace: true });
    }
  }, [user, navigate, location.state]);

  function updateField(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');
    setSubmitting(true);

    try {
      if (mode === 'signup') {
        await signUpWithUsername(form.username, form.password);
      } else {
        await logInWithUsername(form.username, form.password);
      }
      navigate('/', { replace: true });
    } catch (submitError) {
      setError(submitError.message || 'Something went wrong.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>NFL Mock Draft HQ</h1>
        <p className="subtle">
          Sign in to build mock drafts, track picks, and save draft boards.
        </p>

        <form className="form-grid" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              autoComplete="username"
              value={form.username}
              onChange={updateField}
              placeholder="Choose a GM username"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
              value={form.password}
              onChange={updateField}
              placeholder="Enter your password"
              minLength={6}
              required
            />
          </div>

          {error && <p className="error-text">{error}</p>}

          <button className="primary-btn" type="submit" disabled={submitting}>
            {submitting ? 'Working...' : mode === 'signup' ? 'Create account' : 'Log in'}
          </button>
        </form>

        <div className="inline-row" style={{ marginTop: '16px' }}>
          <span className="subtle">
            {mode === 'signup' ? 'Already have an account?' : 'Need an account?'}
          </span>
          <button
            type="button"
            className="ghost-btn"
            onClick={() => {
              setMode((current) => (current === 'login' ? 'signup' : 'login'));
              setError('');
            }}
          >
            {mode === 'signup' ? 'Switch to login' : 'Switch to sign up'}
          </button>
        </div>
      </div>
    </div>
  );
}
