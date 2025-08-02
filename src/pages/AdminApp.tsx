import React, { useState, useEffect } from 'react';
import AdminDashboard from './AdminDashboard';

const USERNAME = 'admin';
const PASSWORD = 'admin123';
const STORAGE_KEY = 'eegnite_admin_logged_in';

function LoginForm({ onLogin, error, loading }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #000 60%, #1a1a1a 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Inter, serif',
    }}>
      <form
        onSubmit={handleSubmit}
        style={{
          background: 'rgba(24, 24, 24, 0.98)',
          border: '2px solid #FFD700',
          borderRadius: 24,
          padding: '48px 40px 40px 40px',
          minWidth: 380,
          boxShadow: '0 8px 32px #FFD70022, 0 1.5px 0 #FFD70044',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img
          src="/placeholder.svg"
          alt="EEGNITE Logo"
          style={{ width: 96, height: 96, marginBottom: 24, filter: 'drop-shadow(0 0 16px #FFD70088)' }}
        />
        <h1 style={{
          color: '#FFD700',
          fontWeight: 800,
          fontSize: 36,
          letterSpacing: '0.08em',
          margin: 0,
          textShadow: '0 2px 16px #FFD70044',
        }}>
          EEGNITE Admin
        </h1>
        <p style={{
          color: '#fff',
          margin: '12px 0 32px 0',
          fontSize: 18,
          fontWeight: 400,
          letterSpacing: '0.03em',
          textAlign: 'center',
          opacity: 0.85,
        }}>
          Sign in to your luxury admin dashboard
        </p>
        <div style={{ width: '100%', marginBottom: 18 }}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            style={{
              width: '100%',
              padding: '14px 16px',
              borderRadius: 10,
              border: '1.5px solid #FFD700',
              background: '#181818',
              color: '#FFD700',
              fontSize: 18,
              fontWeight: 500,
              marginBottom: 14,
              outline: 'none',
              boxShadow: '0 1px 8px #FFD70011',
              transition: 'border 0.2s',
            }}
            autoFocus
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{
              width: '100%',
              padding: '14px 16px',
              borderRadius: 10,
              border: '1.5px solid #FFD700',
              background: '#181818',
              color: '#FFD700',
              fontSize: 18,
              fontWeight: 500,
              outline: 'none',
              boxShadow: '0 1px 8px #FFD70011',
              transition: 'border 0.2s',
            }}
          />
        </div>
        {error && <div style={{ color: '#ff4d4f', marginBottom: 18, fontWeight: 600, fontSize: 16 }}>{error}</div>}
        <button
          type="submit"
          style={{
            width: '100%',
            background: 'linear-gradient(90deg, #FFD700 60%, #fffbe6 100%)',
            color: '#181818',
            fontWeight: 800,
            border: 'none',
            borderRadius: 10,
            padding: '14px 0',
            fontSize: 20,
            cursor: 'pointer',
            marginTop: 8,
            boxShadow: '0 2px 16px #FFD70033',
            letterSpacing: '0.04em',
            transition: 'background 0.2s',
          }}
          disabled={loading}
        >
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>
    </div>
  );
}

export default function AdminApp() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const isLoggedIn = localStorage.getItem(STORAGE_KEY) === 'true';
    setLoggedIn(isLoggedIn);
  }, []);

  const handleLogin = (username, password) => {
    setLoading(true);
    setError('');
    setTimeout(() => {
      if (username === USERNAME && password === PASSWORD) {
        localStorage.setItem(STORAGE_KEY, 'true');
        setLoggedIn(true);
      } else {
        setError('Invalid username or password');
      }
      setLoading(false);
    }, 600);
  };

  const handleLogout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setLoggedIn(false);
  };

  if (!loggedIn) {
    return <LoginForm onLogin={handleLogin} error={error} loading={loading} />;
  }
  // Render your luxurious dashboard after login
  return <AdminDashboard />;
} 